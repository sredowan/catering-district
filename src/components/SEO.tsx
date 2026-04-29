import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://cateringdistrict.com.au';
const DEFAULT_OG_IMAGE = `${SITE_URL}/logo-wide.png`;

interface SEOProps {
    title: string;
    description: string;
    path?: string;             // e.g. "/about"
    ogImage?: string;          // absolute URL or path
    ogType?: string;           // "website" | "article" etc.
    jsonLd?: object | object[];// JSON-LD structured data
    noindex?: boolean;
}

/**
 * Reusable SEO component — sets per-page <title>, meta description,
 * canonical URL, Open Graph, Twitter Card, and JSON-LD structured data.
 */
export default function SEO({
    title,
    description,
    path = '',
    ogImage,
    ogType = 'website',
    jsonLd,
    noindex = false,
}: SEOProps) {
    const canonicalUrl = `${SITE_URL}${path}`;
    const resolvedImage = ogImage
        ? (ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`)
        : DEFAULT_OG_IMAGE;

    // Support single object or array of JSON-LD
    const jsonLdBlocks = jsonLd
        ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd])
        : [];

    return (
        <Helmet>
            {/* Core */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalUrl} />
            {noindex && <meta name="robots" content="noindex, nofollow" />}

            {/* Open Graph (Facebook, LinkedIn, WhatsApp) */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:type" content={ogType} />
            <meta property="og:image" content={resolvedImage} />
            <meta property="og:site_name" content="Catering District" />
            <meta property="og:locale" content="en_AU" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={resolvedImage} />

            {/* JSON-LD Structured Data */}
            {jsonLdBlocks.map((block, i) => (
                <script key={i} type="application/ld+json">
                    {JSON.stringify(block)}
                </script>
            ))}
        </Helmet>
    );
}

// ─── Reusable JSON-LD fragments ───

export const ORGANIZATION_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Catering District Pty Ltd',
    legalName: 'Catering District Pty Ltd',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: 'Premium hospitality experiences, club operations, and professional catering services across Australia.',
    email: 'contact@cateringdistrict.com.au',
    telephone: '+61432591795',
    address: {
        '@type': 'PostalAddress',
        streetAddress: '31 George Street',
        addressLocality: 'Clyde',
        addressRegion: 'NSW',
        postalCode: '2142',
        addressCountry: 'AU',
    },
    foundingDate: '2006',
    areaServed: {
        '@type': 'Country',
        name: 'Australia',
    },
    sameAs: [],  // Add social media URLs when available
};

export const WEBSITE_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Catering District',
    url: SITE_URL,
    description: 'Premium hospitality experiences, club operations, and professional catering services across Australia.',
    publisher: {
        '@type': 'Organization',
        name: 'Catering District Pty Ltd',
    },
};

export const LOCAL_BUSINESS_SCHEMA = {
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishment',
    name: 'Catering District',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/images/home-team.jpg`,
    email: 'contact@cateringdistrict.com.au',
    telephone: '+61432591795',
    address: {
        '@type': 'PostalAddress',
        streetAddress: '31 George Street',
        addressLocality: 'Clyde',
        addressRegion: 'NSW',
        postalCode: '2142',
        addressCountry: 'AU',
    },
    priceRange: '$$',
    servesCuisine: 'Australian',
    areaServed: {
        '@type': 'Country',
        name: 'Australia',
    },
};

export function breadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: item.name,
            item: `${SITE_URL}${item.url}`,
        })),
    };
}

export function personSchema(opts: {
    name: string;
    jobTitle: string;
    image: string;
    description: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: opts.name,
        jobTitle: opts.jobTitle,
        image: `${SITE_URL}${opts.image}`,
        description: opts.description,
        worksFor: {
            '@type': 'Organization',
            name: 'Catering District Pty Ltd',
            url: SITE_URL,
        },
    };
}
