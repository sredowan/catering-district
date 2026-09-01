/**
 * Sitemap generation from the shared route manifest (SEO_EXECUTION_PLAN.md §34, §148).
 *
 * lastmod comes from the git commit that last touched each page's source file, so
 * the value reflects real publication changes rather than the build date.
 *
 * Usage: node scripts/generate-sitemap.mjs
 */

import { writeFileSync, existsSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const ssrEntry = join(root, 'dist-ssr', 'entry-server.js');

if (!existsSync(ssrEntry)) {
    console.error('\n[sitemap] dist-ssr/entry-server.js missing — run the SSR build first.\n');
    process.exit(1);
}

const { PUBLIC_ROUTES } = await import(pathToFileURL(ssrEntry).href);
const SITE_URL = 'https://cateringdistrict.com.au';

/** Map a route to the source file that renders it, for git lastmod lookup. */
const SOURCE_FOR_ROUTE = {
    '/': 'src/pages/Home.tsx',
    '/services': 'src/pages/Services.tsx',
    '/about': 'src/pages/AboutUs.tsx',
    '/about/maz-islam': 'src/pages/MazIslam.tsx',
    '/team': 'src/pages/Team.tsx',
    '/contact': 'src/pages/ContactUs.tsx',
    '/gallery': 'src/pages/Gallery.tsx',
    '/privacy-policy': 'src/pages/PrivacyPolicy.tsx',
    '/terms-of-service': 'src/pages/TermsOfService.tsx',
};

function lastModified(routePath) {
    const file = SOURCE_FOR_ROUTE[routePath];
    if (!file) return null;
    try {
        const iso = execFileSync('git', ['log', '-1', '--format=%cs', '--', file], {
            cwd: root,
            encoding: 'utf8',
        }).trim();
        return iso || null;
    } catch {
        return null; // not a git checkout (e.g. a deploy tarball) — omit lastmod
    }
}

const urls = PUBLIC_ROUTES.map((route) => {
    const loc = route.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${route.path}`;
    const lastmod = lastModified(route.path);
    return [
        '  <url>',
        `    <loc>${loc}</loc>`,
        lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
        `    <changefreq>${route.changefreq}</changefreq>`,
        `    <priority>${route.priority.toFixed(1)}</priority>`,
        '  </url>',
    ]
        .filter(Boolean)
        .join('\n');
}).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

// Written to both public/ (source of truth, committed) and dist/ (this build).
writeFileSync(join(root, 'public', 'sitemap.xml'), xml, 'utf8');
if (existsSync(join(root, 'dist'))) {
    writeFileSync(join(root, 'dist', 'sitemap.xml'), xml, 'utf8');
}

console.log(`[sitemap] ${PUBLIC_ROUTES.length} URLs written to public/sitemap.xml and dist/sitemap.xml`);
