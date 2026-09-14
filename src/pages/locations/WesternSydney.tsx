import { useState } from 'react';
import { ArrowRight, Check, MapPin, Award, UtensilsCrossed, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookingModal from '../../components/BookingModal';
import SEO, { breadcrumbSchema, locationBusinessSchema, faqSchema } from '../../components/SEO';

const FAQS = [
    {
        question: "Why is Western Sydney critical for registered club catering?",
        answer: "Western Sydney is Australia's largest club hospitality market, home to multi-precinct clubs serving tens of thousands of members weekly. Operating in this market requires immense ticket velocity, value pricing, and multicultural menu variety."
    },
    {
        question: "How does Catering District support Western Sydney clubs?",
        answer: "We provide complete kitchen outsourcing, turnkey bistro operations, and award-compliant rostering to mitigate penalty rates while maintaining 7-day high-volume service."
    }
];

export default function WesternSydney() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#ffffff] text-[#19355e]">
            <SEO
                title="Western Sydney Club Catering & Bistro Management — Catering District"
                description="Professional club catering and contract kitchen management across Western Sydney. High-volume bistro operations, HACCP compliance, and tender responses."
                path="/locations/western-sydney-club-catering"
                ogImage="/images/home-team.jpg"
                jsonLd={[
                    breadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'Locations', url: '/locations' },
                        { name: 'Western Sydney', url: '/locations/western-sydney-club-catering' },
                    ]),
                    locationBusinessSchema({
                        suburb: 'Western Sydney',
                        region: 'Greater Western Sydney',
                        description: 'Turnkey club catering, bistro operations, and commercial kitchen management across Western Sydney.',
                        path: '/locations/western-sydney-club-catering',
                    }),
                    faqSchema(FAQS),
                ]}
            />

            <div className="bg-[#f8f9fa] border-b border-[#19355e]/10 pt-24 pb-4 px-6">
                <div className="max-w-7xl mx-auto flex items-center space-x-2 text-xs text-[#19355e]/60">
                    <Link to="/" className="hover:text-[#64620B]">Home</Link>
                    <ChevronRight className="w-3 h-3" />
                    <Link to="/locations" className="hover:text-[#64620B]">Locations</Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-[#19355e] font-medium">Western Sydney</span>
                </div>
            </div>

            <section className="relative py-20 px-6 bg-gradient-to-b from-[#0f2340] to-[#19355e] text-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#ffda8d] text-xs font-semibold uppercase tracking-wider mb-6">
                            <MapPin className="w-3.5 h-3.5" />
                            Greater Western Sydney Club Heartland
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-light leading-tight mb-6">
                            Western Sydney <br />
                            <span className="italic font-normal text-[#ffda8d]">Club Catering Services</span>
                        </h1>
                        <p className="text-lg text-white/80 font-light leading-relaxed mb-8 max-w-2xl">
                            High-volume dining, family bistro value, and robust kitchen systems tailored for Western Sydney's premier registered clubs, leagues venues, and community bowlos.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => setIsBookingOpen(true)}
                                className="inline-flex items-center justify-center space-x-3 bg-[#ffda8d] text-[#0f2340] px-8 py-4 text-xs uppercase tracking-[0.15em] font-semibold hover:bg-[#ffe8b3] transition-all rounded-sm shadow-lg cursor-pointer"
                            >
                                <span>Request Western Sydney Brief</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                            <Link
                                to="/tenders-eoi"
                                className="inline-flex items-center justify-center space-x-3 border border-white/30 text-white px-8 py-4 text-xs uppercase tracking-[0.15em] hover:bg-white/10 transition-all rounded-sm"
                            >
                                <span>Submit EOI / Tender</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                            <h3 className="text-xl font-serif mb-4 text-[#ffda8d]">Western Sydney Realities</h3>
                            <ul className="space-y-4 text-sm text-white/90">
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>High Cover Velocity:</strong> Operating kitchens capable of serving 500+ covers during peak weekend shifts.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>Multicultural Menus:</strong> Harmonizing Aussie club classics with modern Asian, Mediterranean, and smoked meats.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>Margin Discipline:</strong> Protecting clubs against 32% penalty rate pressures under Registered Clubs Award.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-serif font-light">Frequently Asked Questions</h2>
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
