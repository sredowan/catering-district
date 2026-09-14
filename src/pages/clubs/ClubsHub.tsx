import { ArrowRight, Award, Trophy, Flag, Shield, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO, { breadcrumbSchema } from '../../components/SEO';

const CLUB_TYPES = [
    {
        title: "Bowling Clubs (Bowlos)",
        share: "24% of Industry",
        path: "/clubs/bowling-clubs",
        desc: "The heartbeat of suburban NSW communities. Barefoot bowls packages, casual family dining, community trivia nights, and value-driven bistro classics.",
        highlights: ["Barefoot bowls BBQs & sliders", "Mid-week seniors' lunches", "High-volume weekend family dining"]
    },
    {
        title: "RSL & Memorial Clubs",
        share: "15% of Industry",
        path: "/clubs/rsl-clubs",
        desc: "Honouring community tradition, veteran respect, and large-scale auditorium functions. Exceptional traditional carvery and reliable high-volume service.",
        highlights: ["ANZAC & Remembrance Day execution", "Traditional carvery & roast buffets", "Auditorium gala banquet catering"]
    },
    {
        title: "Golf & Country Clubs",
        share: "17% of Industry",
        path: "/clubs/golf-clubs",
        desc: "Early morning halfway kiosks, scenic 19th-hole clubhouse dining, corporate tournament banquets, and high-margin wedding receptions.",
        highlights: ["Dawn-to-dusk kiosk operations", "Golfer express lunch items", "Scenic wedding & event packages"]
    },
    {
        title: "Leagues & Sporting Clubs",
        share: "24% of Industry",
        path: "/clubs/leagues-sports-clubs",
        desc: "Rapid match-day ticket pacing, sports bar burgers, wood-fired pizzas, family dining specials, and seasonal presentation banquets.",
        highlights: ["High-speed game day ticket pacing", "Sports bar & casual grill concepts", "Youth sports presentation nights"]
    }
];

export default function ClubsHub() {
    return (
        <div className="min-h-screen bg-[#ffffff] text-[#19355e]">
            <SEO
                title="Clubs We Serve — RSL, Bowling, Golf & Leagues Clubs NSW | Catering District"
                description="Specialised catering solutions for NSW licensed clubs. Discover our dedicated services for Bowling clubs, RSLs, Golf clubs, and Leagues clubs."
                path="/clubs"
                ogImage="/images/home-team.jpg"
                jsonLd={[
                    breadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'Clubs We Serve', url: '/clubs' },
                    ])
                ]}
            />

            {/* Breadcrumb */}
            <div className="bg-[#f8f9fa] border-b border-[#19355e]/10 pt-24 pb-4 px-6">
                <div className="max-w-7xl mx-auto flex items-center space-x-2 text-xs text-[#19355e]/60">
                    <Link to="/" className="hover:text-[#64620B]">Home</Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-[#19355e] font-medium">Clubs We Serve</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="py-20 px-6 bg-gradient-to-b from-[#0f2340] to-[#19355e] text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#ffda8d] mb-4 block">
                        Sector-Specific Operations
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-light leading-tight mb-6">
                        Catering Solutions for <br />
                        <span className="italic font-normal text-[#ffda8d]">Every NSW Registered Club</span>
                    </h1>
                    <p className="text-lg text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
                        Different club types have entirely different membership profiles, peak operating hours, and community charters. We tailor our culinary and operational models to your specific venue.
                    </p>
                </div>
            </section>

            {/* Grid */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {CLUB_TYPES.map((club, i) => (
                        <div key={i} className="p-8 rounded-2xl border border-[#19355e]/10 bg-[#fafaf8] flex flex-col justify-between hover:shadow-xl transition-all">
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs uppercase font-semibold text-[#64620B] tracking-wider bg-[#64620B]/10 px-3 py-1 rounded-full">
                                        {club.share}
                                    </span>
                                </div>
                                <h2 className="text-2xl font-serif mb-3 text-[#19355e]">{club.title}</h2>
                                <p className="text-sm text-[#19355e]/70 leading-relaxed mb-6">{club.desc}</p>
                                <ul className="space-y-2 text-xs text-[#19355e]/80 mb-8">
                                    {club.highlights.map((h, idx) => (
                                        <li key={idx} className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#64620B]"></span>
                                            <span>{h}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Link
                                to={club.path}
                                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#64620B] hover:text-[#19355e] transition-colors"
                            >
                                <span>Explore {club.title} Operations</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
