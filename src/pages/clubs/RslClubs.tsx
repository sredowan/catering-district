import { useState } from 'react';
import { ArrowRight, Check, Award, HeartHandshake, Utensils, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookingModal from '../../components/BookingModal';
import SEO, { breadcrumbSchema, serviceSchema, faqSchema } from '../../components/SEO';

const FAQS = [
    {
        question: "How does Catering District manage high-volume days like ANZAC Day?",
        answer: "ANZAC Day is the sacred centerpiece of the RSL calendar. We plan months in advance, coordinating dawn service gunfire breakfasts, veteran morning teas, high-capacity two-up arena food stalls, and full carvery lunch and dinner operations for thousands of patrons."
    },
    {
        question: "How do you maintain value for sub-branch and senior members?",
        answer: "We design subsidized sub-branch meal packages, daily seniors' roasts, and classic member favorites at price points that reward membership loyalty while maintaining disciplined back-of-house kitchen margin controls."
    },
    {
        question: "Can you cater large auditorium events and memorial wakes?",
        answer: "Yes. From 400-guest military association anniversary dinners to discreet, respectful wakes in member lounges, our brigade provides seamless banquet catering."
    }
];

export default function RslClubs() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#ffffff] text-[#19355e]">
            <SEO
                title="RSL Club Catering Services NSW — Bistro, Carvery & Memorial Banquets"
                description="Specialised catering for NSW RSL and Memorial Clubs. Respecting tradition with high-volume bistro operations, ANZAC Day catering, and certified food safety."
                path="/clubs/rsl-clubs"
                ogImage="/images/home-team.jpg"
                jsonLd={[
                    breadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'Clubs We Serve', url: '/clubs' },
                        { name: 'RSL & Memorial Clubs', url: '/clubs/rsl-clubs' },
                    ]),
                    serviceSchema({
                        name: 'RSL Club Catering Services',
                        description: 'Specialised bistro management, carvery buffets, and ANZAC Day hospitality for NSW RSL and Memorial Clubs.',
                        serviceType: 'Club Catering',
                        url: '/clubs/rsl-clubs',
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
                    <span className="text-[#19355e] font-medium">RSL &amp; Memorial Clubs</span>
                </div>
            </div>

            <section className="relative py-20 px-6 bg-gradient-to-b from-[#0f2340] to-[#19355e] text-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#ffda8d] text-xs font-semibold uppercase tracking-wider mb-6">
                            <Award className="w-3.5 h-3.5" />
                            Honouring Community Heritage
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-light leading-tight mb-6">
                            RSL &amp; Memorial <br />
                            <span className="italic font-normal text-[#ffda8d]">Club Catering NSW</span>
                        </h1>
                        <p className="text-lg text-white/80 font-light leading-relaxed mb-8 max-w-2xl">
                            We understand the sacred traditions and community responsibilities of RSL clubs. We combine veteran respect and traditional hospitality with modern kitchen profitability.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => setIsBookingOpen(true)}
                                className="inline-flex items-center justify-center space-x-3 bg-[#ffda8d] text-[#0f2340] px-8 py-4 text-xs uppercase tracking-[0.15em] font-semibold hover:bg-[#ffe8b3] transition-all rounded-sm shadow-lg cursor-pointer"
                            >
                                <span>Request RSL Capability Brief</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                            <Link
                                to="/tenders-eoi"
                                className="inline-flex items-center justify-center space-x-3 border border-white/30 text-white px-8 py-4 text-xs uppercase tracking-[0.15em] hover:bg-white/10 transition-all rounded-sm"
                            >
                                <span>Submit EOI Details</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                            <h3 className="text-xl font-serif mb-4 text-[#ffda8d]">RSL Operational Standards</h3>
                            <ul className="space-y-4 text-sm text-white/90">
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>ANZAC Day &amp; Remembrance Day:</strong> Precision catering for thousands of patrons with zero logistical delays.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>Carvery &amp; Traditional Menus:</strong> Highest-grade roast carvery, fresh Yorkshire puddings, and seasonal vegetables.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>Sub-Branch Support:</strong> Dedicated meeting lunches and commemorative dinners tailored to veteran members.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 px-6 max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#64620B] mb-3">RSL Insights</p>
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
