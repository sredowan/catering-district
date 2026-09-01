/**
 * Build-time prerendering entry.
 *
 * Renders each route from the shared manifest to static HTML so crawlers receive
 * real copy, an H1, canonical, metadata, and JSON-LD without executing JavaScript
 * (SEO_EXECUTION_PLAN.md §27–28, §138–139).
 *
 * Not shipped to the browser — consumed only by scripts/prerender.mjs.
 */

import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
// react-router v7 consolidated StaticRouter into the core package.
import { StaticRouter } from 'react-router';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import type { HelmetServerState } from 'react-helmet-async';
import Layout from './components/Layout';
import { SiteProvider } from './context/SiteContext';
import { PUBLIC_ROUTES } from './routes';

export type RenderResult = {
    html: string;
    head: string;
};

// Re-exported so the prerender script reads the manifest from one place.
export { PUBLIC_ROUTES } from './routes';

export async function render(url: string): Promise<RenderResult> {
    // Resolve every page component up front: renderToString cannot suspend on
    // React.lazy, so the manifest's dynamic imports are awaited first.
    const resolved = await Promise.all(
        PUBLIC_ROUTES.map(async (route) => ({
            path: route.path,
            Component: (await route.load()).default,
        }))
    );

    // HelmetProvider fills this in during renderToString.
    const helmetContext: { helmet?: HelmetServerState } = {};

    const html = renderToString(
        <StrictMode>
            <HelmetProvider context={helmetContext}>
                <SiteProvider>
                    <StaticRouter location={url}>
                        <div className="min-h-screen bg-[#ffffff] text-[#19355e] font-sans selection:bg-[#64620B] selection:text-white overflow-x-hidden">
                            <Routes>
                                <Route path="/" element={<Layout />}>
                                    {resolved.map(({ path, Component }) =>
                                        path === '/' ? (
                                            <Route key={path} index element={<Component />} />
                                        ) : (
                                            <Route key={path} path={path.slice(1)} element={<Component />} />
                                        )
                                    )}
                                </Route>
                            </Routes>
                        </div>
                    </StaticRouter>
                </SiteProvider>
            </HelmetProvider>
        </StrictMode>
    );

    const { helmet } = helmetContext;
    const fromContext = [
        helmet?.title?.toString(),
        helmet?.meta?.toString(),
        helmet?.link?.toString(),
        helmet?.script?.toString(),
    ]
        .filter(Boolean)
        .join('\n    ')
        .trim();

    if (fromContext) return { html, head: fromContext };

    // react-helmet-async v3 emits head tags inline in the rendered markup rather
    // than filling the provider context. Lift them out of the body so they land
    // in <head> where crawlers expect them, and strip them from the body HTML.
    const HEAD_TAG = /<title>[\s\S]*?<\/title>|<meta\b[^>]*\/?>|<link\b[^>]*\/?>|<script type="application\/ld\+json"[\s\S]*?<\/script>/gi;
    const lifted: string[] = [];
    const body = html.replace(HEAD_TAG, (tag) => {
        lifted.push(tag);
        return '';
    });

    return { html: body, head: lifted.join('\n    ') };
}
