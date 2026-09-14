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
        subheading: "NSW Club Catering & Contract Hospitality Operations",
    },
    about: {
        heading: "Transforming underperforming club kitchens into profitable, compliant, member-favourite operations.",
        description: "Catering District specialises in full-service contract catering, bistro management, and commercial food & beverage operations for registered clubs across New South Wales. Led by Maz Islam, JP (19+ years experience, Certified HACCP Food Safety Auditor), we help Club CEOs, General Managers, and Boards eliminate kitchen subsidies, maintain strict regulatory compliance, and delight club members.",
    },
    services: [
        {
            id: "club-catering",
            title: "Club Catering Operations",
            description: "Complete bistro, cafe, and dining management tailored to licensed clubs, RSLs, bowlos, and sporting venues across NSW.",
            items: ["Full kitchen operations", "Member bistro & dining", "Daily service management", "High-volume ticket pacing", "Menu engineering & margin control", "Community & member engagement"]
        },
        {
            id: "contract-catering",
            title: "Contract Catering & Tenders",
            description: "Commercially sustainable catering partnerships designed for club procurement committees, GMs, and formal EOI/tender evaluations.",
            items: ["Formal tender & EOI responses", "Transparent commercial agreements", "Subsidies reduction framework", "Experienced brigade staffing", "Award-compliant rostering", "KPI-backed service delivery"]
        },
        {
            id: "kitchen-compliance",
            title: "Kitchen Management & Compliance",
            description: "End-to-end commercial kitchen oversight, food safety audits, HACCP protocol implementation, and NSW Food Authority compliance.",
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

                // Ensure about section uses the canonical executive bio phrasing
                if (!parsed.about?.description?.includes('Led by Maz Islam, JP (19+ years experience, Certified HACCP Food Safety Auditor)')) {
                    merged.about = defaultData.about;
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
