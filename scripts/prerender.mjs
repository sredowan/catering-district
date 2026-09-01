/**
 * Build-time prerendering (SEO_EXECUTION_PLAN.md §138-139).
 *
 * Runs after `vite build` (client) and `vite build --ssr`. For every route in the
 * shared manifest it renders static HTML into dist/<route>/index.html so the page
 * source contains the final H1, copy, canonical, metadata, links and JSON-LD with
 * no JavaScript executed.
 *
 * Usage: node scripts/prerender.mjs
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const distDir = join(root, 'dist');
const ssrEntry = join(root, 'dist-ssr', 'entry-server.js');

function fail(message) {
    console.error(`\n[prerender] ${message}\n`);
    process.exit(1);
}

if (!existsSync(join(distDir, 'index.html'))) fail('dist/index.html missing — run `vite build` first.');
if (!existsSync(ssrEntry)) fail('dist-ssr/entry-server.js missing — run the SSR build first.');

const { render, PUBLIC_ROUTES } = await import(pathToFileURL(ssrEntry).href);

const template = readFileSync(join(distDir, 'index.html'), 'utf8');

/**
 * The template carries default title/description/OG/Twitter tags for the SPA
 * shell. Helmet emits per-page equivalents, so strip the defaults to avoid
 * duplicate metadata in the prerendered output.
 */
function stripDefaultMeta(html) {
    return html
        .replace(/\n?\s*<title>[\s\S]*?<\/title>/i, '')
        .replace(/\n?\s*<meta\s+name="description"[^>]*>/gi, '')
        .replace(/\n?\s*<meta\s+property="og:[^"]*"[^>]*>/gi, '')
        .replace(/\n?\s*<meta\s+name="twitter:[^"]*"[^>]*>/gi, '')
        .replace(/\n?\s*<!--[^>]*Open Graph[\s\S]*?-->/gi, '')
        .replace(/\n?\s*<!--[^>]*Twitter Card[\s\S]*?-->/gi, '');
}

/**
 * motion/react renders its `initial` state as inline styles, so animated
 * sections would be emitted as opacity:0. The static HTML exists for crawlers
 * (the client re-renders on load), so neutralise those to keep all copy visible.
 */
function unhideAnimatedContent(html) {
    return html
        .replace(/opacity:\s*0(?=[;"])/g, 'opacity:1')
        .replace(/transform:\s*translateY\([^)]*\)\s*;?/g, '');
}

const ROOT_OPEN_TAG = '<div id="root">';

/** Index of the </div> that closes the div opened just before `from`. */
function findMatchingCloseDiv(html, from) {
    const tag = /<div\b[^>]*>|<\/div>/gi;
    tag.lastIndex = from;
    let depth = 0;
    let match;
    while ((match = tag.exec(html)) !== null) {
        if (match[0][1] === '/') {
            if (depth === 0) return match.index;
            depth--;
        } else {
            depth++;
        }
    }
    return -1;
}

const pages = [];
for (const route of PUBLIC_ROUTES) {
    const { html, head } = await render(route.path);

    let outHtml = stripDefaultMeta(template)
        .replace('<html lang="en">', '<html lang="en-AU">')
        .replace('</head>', `  ${head}\n  </head>`);

    // Replace the loading-skeleton shell with the rendered markup. The skeleton
    // nests <div> and <style>, and Vite hoists the module script into <head>, so
    // neither a non-greedy regex nor a "last </div>" scan is reliable — walk the
    // tags and match #root's own closing tag by depth.
    const rootOpen = outHtml.indexOf(ROOT_OPEN_TAG);
    if (rootOpen === -1) fail(`could not locate ${ROOT_OPEN_TAG} in dist/index.html`);
    const rootClose = findMatchingCloseDiv(outHtml, rootOpen + ROOT_OPEN_TAG.length);
    if (rootClose === -1) fail('could not locate the closing tag of #root');

    outHtml =
        outHtml.slice(0, rootOpen) +
        `<div id="root">${unhideAnimatedContent(html)}</div>` +
        outHtml.slice(rootClose + '</div>'.length);

    const outDir = route.path === '/' ? distDir : join(distDir, route.path);
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, 'index.html'), outHtml, 'utf8');

    const words = outHtml
        .replace(/<script[\s\S]*?<\/script>/gi, '')
        .replace(/<style[\s\S]*?<\/style>/gi, '')
        .replace(/<[^>]+>/g, ' ')
        .split(/\s+/)
        .filter(Boolean).length;
    const hasH1 = /<h1[\s>]/i.test(outHtml);
    const hasCanonical = /rel="canonical"/i.test(outHtml);
    const hasJsonLd = /application\/ld\+json/i.test(outHtml);

    pages.push({ path: route.path, words, hasH1, hasCanonical, hasJsonLd });
}

console.log('\n[prerender] static HTML generated:\n');
console.table(
    pages.map((p) => ({
        route: p.path,
        words: p.words,
        h1: p.hasH1 ? 'yes' : 'NO',
        canonical: p.hasCanonical ? 'yes' : 'NO',
        jsonLd: p.hasJsonLd ? 'yes' : '-',
    }))
);

const broken = pages.filter((p) => !p.hasH1 || !p.hasCanonical || p.words < 100);
if (broken.length) {
    fail(`${broken.length} route(s) missing an H1, canonical, or body copy: ${broken.map((p) => p.path).join(', ')}`);
}

console.log(`[prerender] ${pages.length} routes OK\n`);
