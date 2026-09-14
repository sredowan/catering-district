import { useState } from 'react';
import { ArrowRight, Check, Award, Trophy, Zap, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookingModal from '../../components/BookingModal';
import SEO, { breadcrumbSchema, serviceSchema, faqSchema } from '../../components/SEO';

const FAQS = [
    {
        question: "How do you handle massive order surges before and after matches?",
        answer: "Match days require specialised preparation. We pre-engineer high-speed game-day menus, stage prep stations, and deploy rapid multi-pass order firing so that hundreds of fans receive their meals before kick-off with zero bottlenecking."
    },
    {
        question: "What style of food works best for sports and leagues clubs?",
        answer: "A balance of high-impact sports bar favourites (loaded smoked brisket burgers, buffalo wings, stone-baked pizzas, craft beer battered chips) alongside traditional family bistro staples (steaks, schnitzels, pastas) that keep wives, partners, and children dining together."
    },
    {
        question: "Can you cater junior sports club presentation nights?",
        answer: "Yes. We regularly host 200 to 500-guest sports club award nights with child-friendly value packages, family platters, and seamless stage presentation schedules."
    }
];

export default function LeaguesSportsClubs() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#ffffff] text-[#19355e]">
            <SEO
                title="Leagues & Sporting Club Catering NSW — Match Day & Bistro Operations"
                description="High-volume catering for NSW leagues clubs, workers clubs, and sporting venues. Fast match-day ticket speeds, sports bar grill concepts, and presentation banquets."
                path="/clubs/leagues-sports-clubs"
                ogImage="/images/home-cafe-1.jpg"
                jsonLd={[
                    breadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'Clubs We Serve', url: '/clubs' },
                        { name: 'Leagues & Sports Clubs', url: '/clubs/leagues-sports-clubs' },
                    ]),
                    serviceSchema({
                        name: 'Leagues & Sports Club Catering Services',
                        description: 'Turnkey high-volume kitchen operations, sports bar catering, and match-day food services for NSW leagues and sporting clubs.',
                        serviceType: 'Club Catering',
                        url: '/clubs/leagues-sports-clubs',
                    }),
                    faqSchema(FAQS),
                ]}
            />

            <div className="bg-[#f8f9fa] border-b border-[#19355e]/10 pt-24 pb-4 px-6">
                <div className="max-w-7xl mx-auto flex items-center space-x-2 text-xs text-[#19355e]/60">
                    <Link to="/" className="hover:text-[#64620B]">Home</Link>
                    <ChevronRight className="w-3 h-3" />
                    <Link to="/clubs" className="hover:text-[#64620B]">Clubs</Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-[#19355e] font-medium">Leagues &amp; Sports Clubs</span>
                </div>
            </div>

            <section className="relative py-20 px-6 bg-gradient-to-b from-[#0f2340] to-[#19355e] text-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#ffda8d] text-xs font-semibold uppercase tracking-wider mb-6">
                            <Trophy className="w-3.5 h-3.5" />
                            High-Capacity Sports Hospitality
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-light leading-tight mb-6">
                            Leagues &amp; Sports <br />
                            <span className="italic font-normal text-[#ffda8d]">Club Catering NSW</span>
                        </h1>
                        <p className="text-lg text-white/80 font-light leading-relaxed mb-8 max-w-2xl">
                            High-volume match day crowds demand rapid ticket delivery, electric sports bar energy, and family-friendly value. We power the kitchens behind NSW's busiest sporting clubs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => setIsBookingOpen(true)}
                                className="inline-flex items-center justify-center space-x-3 bg-[#ffda8d] text-[#0f2340] px-8 py-4 text-xs uppercase tracking-[0.15em] font-semibold hover:bg-[#ffe8b3] transition-all rounded-sm shadow-lg cursor-pointer"
                            >
                                <span>Request Sports Club Proposal</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                            <Link
                                to="/tenders-eoi"
                                className="inline-flex items-center justify-center space-x-3 border border-white/30 text-white px-8 py-4 text-xs uppercase tracking-[0.15em] hover:bg-white/10 transition-all rounded-sm"
                            >
                                <span>Invite to Tender</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                            <h3 className="text-xl font-serif mb-4 text-[#ffda8d]">Game-Day Capabilities</h3>
                            <ul className="space-y-4 text-sm text-white/90">
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>Match Day Surge Speed:</strong> Rapid kitchen line design preventing pre-game queues.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>Sports Bar Grill Concepts:</strong> Craft burgers, ribs, wings, pizzas, and share platters.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>Annual Presentation Dinners:</strong> 500-seat banquets executed with precision timing.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 px-6 max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#64620B] mb-3">Sports Club Inquiries</p>
                    <h2 className="text-3xl font-serif font-light">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="space-y-6">
                    {FAQS.map((faq, i) => (
                        <div key={i} className="p-6 rounded-xl border border-[#19355e]/10 bg-[#ffffff] shadow-sm">
                            <h3 className="text-base font-semibold mb-2 text-[#19355e]">{faq.question}</h3>
                            <p className="text-sm text-[#19355e]/70 leading-relaxed">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </section>

            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </div>
    );
}
