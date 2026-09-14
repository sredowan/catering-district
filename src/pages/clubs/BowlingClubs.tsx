import { useState } from 'react';
import { ArrowRight, Check, Award, UtensilsCrossed, Users, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookingModal from '../../components/BookingModal';
import SEO, { breadcrumbSchema, serviceSchema, faqSchema } from '../../components/SEO';

const FAQS = [
    {
        question: "How do you help community bowling clubs that cannot afford kitchen losses?",
        answer: "Bowling clubs are often hit hardest by F&B cost blowouts. Our turnover-percentage or hybrid lease models eliminate kitchen operational losses entirely for the club, converting what was once an unbudgeted drain on gaming or green fees into a reliable monthly revenue source."
    },
    {
        question: "What is your barefoot bowls catering offering?",
        answer: "We offer tiered barefoot bowls packages ranging from craft burger sliders and gourmet BBQ platters to artisan pizzas and finger food platters. These packages are easy to book, fast to execute, and highly profitable for the club."
    },
    {
        question: "How do you cater for pennants tournaments and bowling carnivals?",
        answer: "We provide early morning tea and coffee, grab-and-go tournament lunch rolls, and seated post-match presentation dinners that keep players in the clubhouse spending on bar beverages."
    }
];

export default function BowlingClubs() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#ffffff] text-[#19355e]">
            <SEO
                title="Bowling Club Catering & Bowlo Bistro Management NSW — Catering District"
                description="Professional catering and bistro management for NSW bowling clubs. Barefoot bowls packages, pennants tournament catering, and margin turnaround."
                path="/clubs/bowling-clubs"
                ogImage="/images/home-cafe-1.jpg"
                jsonLd={[
                    breadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'Clubs We Serve', url: '/clubs' },
                        { name: 'Bowling Clubs', url: '/clubs/bowling-clubs' },
                    ]),
                    serviceSchema({
                        name: 'Bowling Club Catering Services',
                        description: 'Turnkey bistro operations, barefoot bowls catering, and tournament hospitality for NSW bowling clubs.',
                        serviceType: 'Club Catering',
                        url: '/clubs/bowling-clubs',
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
                    <span className="text-[#19355e] font-medium">Bowling Clubs</span>
                </div>
            </div>

            <section className="relative py-20 px-6 bg-gradient-to-b from-[#0f2340] to-[#19355e] text-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#ffda8d] text-xs font-semibold uppercase tracking-wider mb-6">
                            <UtensilsCrossed className="w-3.5 h-3.5" />
                            Largest NSW Club Segment (24%)
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-light leading-tight mb-6">
                            Bowling Club Catering <br />
                            <span className="italic font-normal text-[#ffda8d]">&amp; Bowlo Bistro Operations</span>
                        </h1>
                        <p className="text-lg text-white/80 font-light leading-relaxed mb-8 max-w-2xl">
                            We transform bowling club bistros into thriving community hubs. From tournament mornings to sunny weekend barefoot bowls, we drive foot traffic and eliminate kitchen subsidies.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => setIsBookingOpen(true)}
                                className="inline-flex items-center justify-center space-x-3 bg-[#ffda8d] text-[#0f2340] px-8 py-4 text-xs uppercase tracking-[0.15em] font-semibold hover:bg-[#ffe8b3] transition-all rounded-sm shadow-lg cursor-pointer"
                            >
                                <span>Request Bowlo Proposal</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                            <Link
                                to="/tenders-eoi"
                                className="inline-flex items-center justify-center space-x-3 border border-white/30 text-white px-8 py-4 text-xs uppercase tracking-[0.15em] hover:bg-white/10 transition-all rounded-sm"
                            >
                                <span>Invite to EOI / Tender</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                            <h3 className="text-xl font-serif mb-4 text-[#ffda8d]">Why Bowling Clubs Partner With Us</h3>
                            <ul className="space-y-4 text-sm text-white/90">
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>Zero Food Losses:</strong> Protect club reserves by transferring kitchen overheads to Catering District.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>Barefoot Bowls Packages:</strong> Turn sunny greens into reliable weekend corporate and social revenue.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>Pennants Support:</strong> Fresh breakfast rolls and hearty post-game lunches for bowling members.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 px-6 max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#64620B] mb-3">Bowlo Questions</p>
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
