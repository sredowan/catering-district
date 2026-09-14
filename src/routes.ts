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
    // Core & Brand
    { path: '/', load: () => import('./pages/Home'), inLayout: true, changefreq: 'weekly', priority: 1.0 },
    { path: '/services', load: () => import('./pages/Services'), inLayout: true, changefreq: 'weekly', priority: 0.9 },
    { path: '/about', load: () => import('./pages/AboutUs'), inLayout: true, changefreq: 'monthly', priority: 0.8 },
    { path: '/about/maz-islam', load: () => import('./pages/MazIslam'), inLayout: true, changefreq: 'monthly', priority: 0.8 },
    { path: '/team', load: () => import('./pages/Team'), inLayout: true, changefreq: 'monthly', priority: 0.7 },
    { path: '/contact', load: () => import('./pages/ContactUs'), inLayout: true, changefreq: 'weekly', priority: 0.8 },
    { path: '/gallery', load: () => import('./pages/Gallery'), inLayout: true, changefreq: 'weekly', priority: 0.6 },
    { path: '/privacy-policy', load: () => import('./pages/PrivacyPolicy'), inLayout: true, changefreq: 'yearly', priority: 0.3 },
    { path: '/terms-of-service', load: () => import('./pages/TermsOfService'), inLayout: true, changefreq: 'yearly', priority: 0.3 },

    // Dedicated Services
    { path: '/services/club-catering', load: () => import('./pages/services/ClubCatering'), inLayout: true, changefreq: 'weekly', priority: 0.95 },
    { path: '/services/contract-catering', load: () => import('./pages/services/ContractCatering'), inLayout: true, changefreq: 'weekly', priority: 0.95 },
    { path: '/services/bistro-restaurant-management', load: () => import('./pages/services/BistroRestaurantManagement'), inLayout: true, changefreq: 'weekly', priority: 0.9 },
    { path: '/services/kitchen-management-compliance', load: () => import('./pages/services/KitchenManagementCompliance'), inLayout: true, changefreq: 'weekly', priority: 0.9 },
    { path: '/services/club-event-function-catering', load: () => import('./pages/services/ClubEventFunctionCatering'), inLayout: true, changefreq: 'weekly', priority: 0.9 },

    // Procurement / Tenders / EOI
    { path: '/tenders-eoi', load: () => import('./pages/TendersEoi'), inLayout: true, changefreq: 'weekly', priority: 0.95 },

    // Club Types & Sectors
    { path: '/clubs', load: () => import('./pages/clubs/ClubsHub'), inLayout: true, changefreq: 'weekly', priority: 0.85 },
    { path: '/clubs/rsl-clubs', load: () => import('./pages/clubs/RslClubs'), inLayout: true, changefreq: 'weekly', priority: 0.85 },
    { path: '/clubs/bowling-clubs', load: () => import('./pages/clubs/BowlingClubs'), inLayout: true, changefreq: 'weekly', priority: 0.85 },
    { path: '/clubs/golf-clubs', load: () => import('./pages/clubs/GolfClubs'), inLayout: true, changefreq: 'weekly', priority: 0.85 },
    { path: '/clubs/leagues-sports-clubs', load: () => import('./pages/clubs/LeaguesSportsClubs'), inLayout: true, changefreq: 'weekly', priority: 0.85 },

    // NSW Suburbs & Regional Landing Pages
    { path: '/locations', load: () => import('./pages/locations/LocationsHub'), inLayout: true, changefreq: 'weekly', priority: 0.8 },
    { path: '/locations/western-sydney-club-catering', load: () => import('./pages/locations/WesternSydney'), inLayout: true, changefreq: 'weekly', priority: 0.8 },
    { path: '/locations/parramatta-club-catering', load: () => import('./pages/locations/Parramatta'), inLayout: true, changefreq: 'weekly', priority: 0.8 },
    { path: '/locations/penrith-club-catering', load: () => import('./pages/locations/Penrith'), inLayout: true, changefreq: 'weekly', priority: 0.8 },
    { path: '/locations/canterbury-bankstown-club-catering', load: () => import('./pages/locations/CanterburyBankstown'), inLayout: true, changefreq: 'weekly', priority: 0.8 },
    { path: '/locations/sutherland-shire-cronulla-club-catering', load: () => import('./pages/locations/SutherlandShireCronulla'), inLayout: true, changefreq: 'weekly', priority: 0.8 },
    { path: '/locations/northern-beaches-club-catering', load: () => import('./pages/locations/NorthernBeaches'), inLayout: true, changefreq: 'weekly', priority: 0.8 },
    { path: '/locations/liverpool-fairfield-club-catering', load: () => import('./pages/locations/LiverpoolFairfield'), inLayout: true, changefreq: 'weekly', priority: 0.8 },
    { path: '/locations/macarthur-campbelltown-club-catering', load: () => import('./pages/locations/MacarthurCampbelltown'), inLayout: true, changefreq: 'weekly', priority: 0.8 },
    { path: '/locations/central-coast-club-catering', load: () => import('./pages/locations/CentralCoast'), inLayout: true, changefreq: 'weekly', priority: 0.8 },
    { path: '/locations/newcastle-hunter-club-catering', load: () => import('./pages/locations/NewcastleHunter'), inLayout: true, changefreq: 'weekly', priority: 0.8 },
    { path: '/locations/wollongong-illawarra-club-catering', load: () => import('./pages/locations/WollongongIllawarra'), inLayout: true, changefreq: 'weekly', priority: 0.8 },
    { path: '/locations/inner-west-sydney-club-catering', load: () => import('./pages/locations/InnerWestSydney'), inLayout: true, changefreq: 'weekly', priority: 0.8 },

    // Executive Insights & Guides
    { path: '/insights', load: () => import('./pages/insights/InsightsHub'), inLayout: true, changefreq: 'weekly', priority: 0.85 },
    { path: '/insights/in-house-vs-contract-catering-clubs', load: () => import('./pages/insights/InHouseVsContractCatering'), inLayout: true, changefreq: 'monthly', priority: 0.8 },
    { path: '/insights/how-to-run-a-profitable-club-bistro', load: () => import('./pages/insights/ProfitableClubBistro'), inLayout: true, changefreq: 'monthly', priority: 0.8 },
    { path: '/insights/club-catering-eoi-tender-guide', load: () => import('./pages/insights/ClubCateringEoiGuide'), inLayout: true, changefreq: 'monthly', priority: 0.8 },
    { path: '/insights/haccp-food-safety-compliance-nsw-clubs', load: () => import('./pages/insights/HaccpFoodSafetyClubs'), inLayout: true, changefreq: 'monthly', priority: 0.8 },
];

/** Routes that must never be indexed (plan §146). */
export const PRIVATE_ROUTE_PREFIXES = ['/admin'];

export const SITE_URL = 'https://cateringdistrict.com.au';
