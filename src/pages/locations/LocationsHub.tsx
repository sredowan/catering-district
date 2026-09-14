import { MapPin, ArrowRight, ChevronRight, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO, { breadcrumbSchema } from '../../components/SEO';

export const NSW_LOCATIONS = [
    {
        name: "Western Sydney",
        slug: "western-sydney-club-catering",
        region: "Greater Western Sydney",
        description: "NSW's highest concentration of registered clubs, leagues precincts, and major bowling clubs.",
        keyClubs: "West HQ, Blacktown Workers, St Marys Leagues, Wentworthville Leagues"
    },
    {
        name: "Parramatta & Northmead",
        slug: "parramatta-club-catering",
        region: "Parramatta / Central Western Sydney",
        description: "Vibrant dining market connecting corporate lunch business with weekend community club patronage.",
        keyClubs: "Parramatta Leagues Club, Northmead Bowling Club, Club Parramatta"
    },
    {
        name: "Penrith & Nepean",
        slug: "penrith-club-catering",
        region: "Outer Western Sydney / Nepean Valley",
        description: "Dynamic sporting region with expansive recreation clubs and riverside rowing venues.",
        keyClubs: "Panthers Penrith, Penrith RSL, Nepean Rowing Club"
    },
    {
        name: "Canterbury-Bankstown & Belmore",
        slug: "canterbury-bankstown-club-catering",
        region: "South Western Sydney",
        description: "Premier multi-venue club heartland with major entertainment precincts and community workers clubs.",
        keyClubs: "Bankstown Sports Club, Canterbury League Club, Revesby Workers Club"
    },
    {
        name: "Sutherland Shire & Cronulla",
        slug: "sutherland-shire-cronulla-club-catering",
        region: "The Shire / Southern Sydney",
        description: "Coastal lifestyle hub with active surf clubs, prestigious RSL venues, and scenic bowling greens.",
        keyClubs: "Cronulla RSL, Caringbah Tradies, Cronulla SLSC, Club Cronulla"
    },
    {
        name: "Northern Beaches & Dee Why",
        slug: "northern-beaches-club-catering",
        region: "Northern Beaches",
        description: "Community-driven coastal RSLs, sailing skiffs, and vibrant oceanfront recreation clubs.",
        keyClubs: "Dee Why RSL, Pittwater RSL, Harbord Diggers (Mounties Group), Manly 16ft Skiff"
    },
    {
        name: "Liverpool & Fairfield",
        slug: "liverpool-fairfield-club-catering",
        region: "South West Sydney",
        description: "High-volume community hubs celebrating diverse multi-cultural dining and community welfare.",
        keyClubs: "Mounties (Mount Pritchard), Cabra-Vale Diggers, Liverpool Catholic Club"
    },
    {
        name: "Macarthur, Campbelltown & Camden",
        slug: "macarthur-campbelltown-club-catering",
        region: "Macarthur Region",
        description: "Rapidly growing family corridor with major Catholic, sports, and championship golf clubs.",
        keyClubs: "Campbelltown Catholic Club, Wests Campbelltown, Camden Golf Club"
    },
    {
        name: "Central Coast & Gosford",
        slug: "central-coast-club-catering",
        region: "Central Coast",
        description: "Tourism and coastal retirement hub with massive leisure and recreation club complexes.",
        keyClubs: "Mingara Recreation Club, Central Coast Leagues Club, Diggers @ The Entrance"
    },
    {
        name: "Newcastle & Hunter Valley",
        slug: "newcastle-hunter-club-catering",
        region: "Hunter Region",
        description: "Industrial, sporting, and yachting heartland with extensive club hospitality infrastructure.",
        keyClubs: "The Wests Group Australia, Belmont 16s, Lake Macquarie Yacht Club"
    },
    {
        name: "Wollongong & Illawarra",
        slug: "wollongong-illawarra-club-catering",
        region: "Illawarra & South Coast",
        description: "Coastal sporting culture anchored by iconic miners, leagues, and community clubs.",
        keyClubs: "Collegians Wollongong, The Fraternity Club, Dapto Leagues, Shellharbour Club"
    },
    {
        name: "Inner West & Strathfield",
        slug: "inner-west-sydney-club-catering",
        region: "Inner West Sydney",
        description: "Historic inner-city bowling and golf clubs surrounded by dense, discerning urban communities.",
        keyClubs: "Strathfield Golf Club, Canada Bay Club, Club Five Dock RSL"
    }
];

export default function LocationsHub() {
    return (
        <div className="min-h-screen bg-[#ffffff] text-[#19355e]">
            <SEO
                title="Club Catering Locations Across NSW — Sydney, Central Coast, Hunter & Illawarra"
                description="Discover Catering District's regional club catering footprint across New South Wales. Serving Western Sydney, Parramatta, Penrith, Cronulla, Newcastle, and beyond."
                path="/locations"
                ogImage="/images/home-team.jpg"
                jsonLd={[
                    breadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'Locations', url: '/locations' },
                    ])
                ]}
            />

            {/* Breadcrumb */}
            <div className="bg-[#f8f9fa] border-b border-[#19355e]/10 pt-24 pb-4 px-6">
                <div className="max-w-7xl mx-auto flex items-center space-x-2 text-xs text-[#19355e]/60">
                    <Link to="/" className="hover:text-[#64620B]">Home</Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-[#19355e] font-medium">NSW Locations</span>
                </div>
            </div>

            {/* Hero */}
            <section className="py-20 px-6 bg-gradient-to-b from-[#0f2340] to-[#19355e] text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#ffda8d] mb-4 block">
                        Regional Footprint
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-light leading-tight mb-6">
                        NSW Club Catering <br />
                        <span className="italic font-normal text-[#ffda8d]">Across Greater Sydney &amp; Regional NSW</span>
                    </h1>
                    <p className="text-lg text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
                        We deliver on-the-ground kitchen management and contract catering across New South Wales' premier club hubs, understanding the local demographics and operational dynamics of each region.
                    </p>
                </div>
            </section>

            {/* Locations Grid */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {NSW_LOCATIONS.map((loc, i) => (
                        <div key={i} className="p-8 rounded-2xl border border-[#19355e]/10 bg-[#fafaf8] flex flex-col justify-between hover:shadow-xl transition-all">
                            <div>
                                <div className="flex items-center gap-2 text-xs font-semibold text-[#64620B] mb-3">
                                    <MapPin className="w-4 h-4" />
                                    <span>{loc.region}</span>
                                </div>
                                <h2 className="text-2xl font-serif mb-2 text-[#19355e]">{loc.name}</h2>
                                <p className="text-sm text-[#19355e]/70 leading-relaxed mb-4">{loc.description}</p>
                                <div className="text-xs text-[#19355e]/60 mb-6 pb-4 border-b border-[#19355e]/10">
                                    <strong className="text-[#19355e]">Notable Regional Venues:</strong><br />
                                    {loc.keyClubs}
                                </div>
                            </div>
                            <Link
                                to={`/locations/${loc.slug}`}
                                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#64620B] hover:text-[#19355e] transition-colors"
                            >
                                <span>{loc.name} Club Catering Details</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
