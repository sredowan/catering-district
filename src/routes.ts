/**
 * Single source of truth for public routes.
 *
 * Consumed by:
 *   - src/App.tsx            client routing (React.lazy)
 *   - src/entry-server.tsx   build-time prerendering (awaited import)
 *   - scripts/prerender.mjs  which URLs to emit as static HTML
 *   - scripts/generate-sitemap.mjs
 *
 * Adding a public page means adding one entry here — nothing else.
 */

export type PublicRoute = {
    /** URL path, no trailing slash (except the root "/") */
    path: string;
    /** Dynamic import of the page component */
    load: () => Promise<{ default: React.ComponentType<unknown> }>;
    /** Rendered inside the shared <Layout> chrome (nav + footer) */
    inLayout: boolean;
    changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
    priority: number;
};

export const PUBLIC_ROUTES: PublicRoute[] = [
    { path: '/', load: () => import('./pages/Home'), inLayout: true, changefreq: 'weekly', priority: 1.0 },
    { path: '/services', load: () => import('./pages/Services'), inLayout: true, changefreq: 'monthly', priority: 0.9 },
    { path: '/about', load: () => import('./pages/AboutUs'), inLayout: true, changefreq: 'monthly', priority: 0.8 },
    { path: '/about/maz-islam', load: () => import('./pages/MazIslam'), inLayout: true, changefreq: 'monthly', priority: 0.7 },
    { path: '/team', load: () => import('./pages/Team'), inLayout: true, changefreq: 'monthly', priority: 0.7 },
    { path: '/contact', load: () => import('./pages/ContactUs'), inLayout: true, changefreq: 'monthly', priority: 0.7 },
    { path: '/gallery', load: () => import('./pages/Gallery'), inLayout: true, changefreq: 'weekly', priority: 0.6 },
    { path: '/privacy-policy', load: () => import('./pages/PrivacyPolicy'), inLayout: true, changefreq: 'yearly', priority: 0.3 },
    { path: '/terms-of-service', load: () => import('./pages/TermsOfService'), inLayout: true, changefreq: 'yearly', priority: 0.3 },
];

/** Routes that must never be indexed (plan §146). */
export const PRIVATE_ROUTE_PREFIXES = ['/admin'];

export const SITE_URL = 'https://cateringdistrict.com.au';
