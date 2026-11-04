import React, { createContext, useContext, useState, useEffect } from 'react';

export type SocialLinks = {
    instagram: string;
    facebook: string;
    twitter: string;
};

export type ContactDetails = {
    email: string;
    phone: string;
    address: string;
};

export type ServiceItem = {
    id: string;
    title: string;
    description: string;
    items: string[];
};

export type GalleryImage = {
    id: number;
    src: string;
    category: string;
    title: string;
};

export type HeroData = {
    images: string[];
    heading: string;
    subheading: string;
};

export type AboutData = {
    heading: string;
    description: string;
};

export type SiteData = {
    socialLinks: SocialLinks;
    contactDetails: ContactDetails;
    services: ServiceItem[];
    galleryImages: GalleryImage[];
    galleryCategories: string[];
    hero: HeroData;
    about: AboutData;
};

// Bump whenever default copy changes so cached copies in visitors' browsers are replaced.
const CONTENT_VERSION = 2;

const defaultData: SiteData = {
    socialLinks: {
        instagram: "https://instagram.com",
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
    },
    contactDetails: {
        email: "contact@cateringdistrict.com.au",
        phone: "0432 591 795",
        address: "31 George Street\nClyde NSW 2142\nAustralia",
    },
    hero: {
        images: ["/images/1.jpeg", "/images/2.jpeg", "/images/3.jpeg", "/images/4.jpeg"],
        heading: "Catering District",
        subheading: "Owner-led club catering, community hospitality and operational accountability.",
    },
    about: {
        heading: "Hospitality Is Personal to Us.",
        description: "Catering District was founded on a belief that great club hospitality deserves more than a standard catering arrangement. It deserves people who listen, understand the venue, take responsibility and genuinely care about the outcome. Our ambition is to build meaningful, long-term partnerships with clubs through experienced leadership, reliable operations and personal involvement.",
    },
    services: [
        {
            id: "club-catering",
            title: "Club Catering Operations",
            description: "Hands-on bistro, cafe and dining management for licensed clubs, RSLs, bowlos and sporting venues, built around your members.",
            items: ["Full kitchen operations", "Member bistro & dining", "Daily service management", "Consistent quality & reliable service", "Menu engineering & margin control", "Community & member engagement"]
        },
        {
            id: "contract-catering",
            title: "Contract Catering & Tenders",
            description: "Long-term catering partnerships built on trust, transparency and a commercially focused approach, including formal EOI and tender responses.",
            items: ["Formal tender & EOI responses", "Transparent commercial agreements", "A commercially focused approach", "Experienced kitchen teams", "Award-compliant rostering", "Clear service KPIs"]
        },
        {
            id: "kitchen-compliance",
            title: "Kitchen Management & Compliance",
            description: "End-to-end commercial kitchen oversight, internal food safety checks, HACCP protocol implementation, and NSW Food Authority compliance.",
            items: ["HACCP food safety systems", "NSW Food Authority compliance", "Workplace health & safety audits", "Waste minimization & cost control", "Registered Clubs Award rostering", "Executive board reporting"]
        }
    ],
    galleryCategories: ["Events", "Dining", "Venues"],
    galleryImages: [
        { id: 1, src: "/images/1.jpeg", category: "Events", title: "Corporate Gathering" },
        { id: 2, src: "/images/2.jpeg", category: "Dining", title: "Culinary Excellence" },
        { id: 3, src: "/images/3.jpeg", category: "Venues", title: "Premium Club" },
        { id: 4, src: "/images/4.jpeg", category: "Events", title: "Social Networking" },
        { id: 5, src: "/images/1.jpeg", category: "Dining", title: "Private Dinner" },
        { id: 6, src: "/images/2.jpeg", category: "Venues", title: "Exclusive Lounge" },
        { id: 7, src: "/images/3.jpeg", category: "Dining", title: "Signature Dish" },
        { id: 8, src: "/images/4.jpeg", category: "Events", title: "Community Meetup" },
    ]
};

type SiteContextType = {
    siteData: SiteData;
    updateSiteData: (newData: Partial<SiteData>) => void;
};

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export function SiteProvider({ children }: { children: React.ReactNode }) {
    const [siteData, setSiteData] = useState<SiteData>(() => {
        // Build-time prerendering runs this in Node, where localStorage does not
        // exist. Static HTML is always generated from defaultData.
        if (typeof window === 'undefined') return defaultData;

        const saved = localStorage.getItem('catering-site-data');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                const merged = { ...defaultData, ...parsed };
                
                // Ensure new default services are added if missing from cache (by ID or Title)
                if (parsed.services && Array.isArray(parsed.services)) {
                    const missingServices = defaultData.services.filter(ds => 
                        !parsed.services.some((ps: any) => ps.id === ds.id || ps.title === ds.title)
                    );
                    if (missingServices.length > 0) {
                        merged.services = [...parsed.services, ...missingServices];
                    }
                }

                // Site copy changed: drop the visitor's cached copy so they see the current wording.
                if (parsed.contentVersion !== CONTENT_VERSION) {
                    return defaultData;
                }
                
                // Self-heal: Deduplicate services by title to clean up accidental cache duplicates
                if (merged.services && Array.isArray(merged.services)) {
                    const seenTitles = new Set();
                    merged.services = merged.services.filter((s: ServiceItem) => {
                        const titleLower = s.title.toLowerCase().trim();
                        if (seenTitles.has(titleLower)) return false;
                        seenTitles.add(titleLower);
                        return true;
                    });
                }
                
                return merged;
            } catch (e) {
                console.error("Failed to parse site data from localStorage", e);
            }
        }
        return defaultData;
    });

    useEffect(() => {
        try {
            localStorage.setItem('catering-site-data', JSON.stringify(siteData));
        } catch (e) {
            console.error('Failed to save site data to localStorage. Storage may be full.', e);
        }
    }, [siteData]);

    const updateSiteData = (newData: Partial<SiteData>) => {
        setSiteData(prev => ({ ...prev, ...newData }));
    };

    return (
        <SiteContext.Provider value={{ siteData, updateSiteData }}>
            {children}
        </SiteContext.Provider>
    );
}

export function useSiteData() {
    const context = useContext(SiteContext);
    if (context === undefined) {
        throw new Error('useSiteData must be used within a SiteProvider');
    }
    return context;
}
