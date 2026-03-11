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
        email: "connect@cateringdistrict.com.au",
        phone: "0432 591 795",
        address: "31 George Street\nClyde NSW 2142\nAustralia",
    },
    hero: {
        images: ["/images/1.jpeg", "/images/2.jpeg", "/images/3.jpeg", "/images/4.jpeg"],
        heading: "Catering District",
        subheading: "Hospitality Experiences & Club Operations",
    },
    about: {
        heading: "Delivering memorable food, social, and community experiences through professionally managed spaces.",
        description: "While traditional contract catering focuses on managing food services for offices and institutions, Catering District currently specialises in operating and facilitating experience-driven clubs and hospitality environments across Australia. Our expertise lies in creating vibrant communities, managing club operations, and delivering curated hospitality experiences.",
    },
    services: [
        {
            id: "club-ops",
            title: "Club Operations",
            description: "Full-service management for social clubs, private clubs, and experience-driven venues.",
            items: ["Club concept development", "Daily operations management", "Membership programs", "Event coordination", "Food & beverage partnerships", "Community engagement"]
        },
        {
            id: "exp-clubs",
            title: "Experience Clubs",
            description: "Designing and operating experience-focused clubs that combine hospitality, events, and lifestyle activities.",
            items: ["Curated dining experiences", "Social events and networking", "Themed gatherings and entertainment", "Lifestyle and community programs"]
        },
        {
            id: "hosp-partnerships",
            title: "Hospital Partnerships",
            description: "Collaborating with venues, property owners, and organisations to manage or activate hospitality spaces.",
            items: ["Activating underutilised venues", "Managing hospitality operations", "Designing experience-driven programs", "Building community engagement"]
        }
    ],
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
        const saved = localStorage.getItem('catering-site-data');
        if (saved) {
            try {
                return { ...defaultData, ...JSON.parse(saved) };
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
