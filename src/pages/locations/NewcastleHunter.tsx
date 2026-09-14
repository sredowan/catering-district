import { useState } from 'react';
import { ArrowRight, Check, MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookingModal from '../../components/BookingModal';
import SEO, { breadcrumbSchema, locationBusinessSchema, faqSchema } from '../../components/SEO';

const FAQS = [
    {
        question: "What types of clubs do you service across Newcastle and Lake Macquarie?",
        answer: "We support aquatic and yacht clubs (such as Lake Macquarie and sailing venues), high-capacity leagues venues, community workers clubs, and bowling clubs across Newcastle, Maitland, and the Hunter."
    },
    {
        question: "How do you handle Hunter Valley corporate events and wine dinners?",
        answer: "With our culinary leadership, we curate regional Hunter Valley wine dinners, degustations, and corporate banquets that celebrate local Hunter produce alongside high-speed bistro operations."
    }
];

export default function NewcastleHunter() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#ffffff] text-[#19355e]">
            <SEO
                title="Newcastle & Hunter Valley Club Catering NSW — Catering District"
                description="Professional club catering and bistro operations across Newcastle, Lake Macquarie, and the Hunter Valley. High-volume dining, yacht club catering, and tender responses."
                path="/locations/newcastle-hunter-club-catering"
                ogImage="/images/home-team.jpg"
                jsonLd={[
                    breadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'Locations', url: '/locations' },
                        { name: 'Newcastle & Hunter', url: '/locations/newcastle-hunter-club-catering' },
                    ]),
                    locationBusinessSchema({
                        suburb: 'Newcastle',
                        region: 'Newcastle & Hunter Valley NSW',
                        description: 'Specialised club catering, aquatic and yacht club food services, and bistro management in Newcastle.',
                        path: '/locations/newcastle-hunter-club-catering',
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
                    <span className="text-[#19355e] font-medium">Newcastle &amp; Hunter</span>
                </div>
            </div>

            <section className="relative py-20 px-6 bg-gradient-to-b from-[#0f2340] to-[#19355e] text-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#ffda8d] text-xs font-semibold uppercase tracking-wider mb-6">
                            <MapPin className="w-3.5 h-3.5" />
                            Newcastle &amp; Lake Macquarie
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-light leading-tight mb-6">
                            Newcastle &amp; Hunter <br />
                            <span className="italic font-normal text-[#ffda8d]">Club Catering Services</span>
                        </h1>
                        <p className="text-lg text-white/80 font-light leading-relaxed mb-8 max-w-2xl">
                            From lakeside sailing and yacht clubs to major Newcastle sporting venues, we bring exceptional culinary standards, fast ticket velocity, and transparent commercial contracts.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => setIsBookingOpen(true)}
                                className="inline-flex items-center justify-center space-x-3 bg-[#ffda8d] text-[#0f2340] px-8 py-4 text-xs uppercase tracking-[0.15em] font-semibold hover:bg-[#ffe8b3] transition-all rounded-sm shadow-lg cursor-pointer"
                            >
                                <span>Request Newcastle Proposal</span>
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
                            <h3 className="text-xl font-serif mb-4 text-[#ffda8d]">Hunter Strengths</h3>
                            <ul className="space-y-4 text-sm text-white/90">
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>Aquatic &amp; Yachting Expertise:</strong> High-margin banquet packages with spectacular lake and harbour backdrops.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>Industrial Heritage Respect:</strong> Hearty, honest portions and fair member pricing.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>Full Compliance:</strong> Strict HACCP monitoring and registered award rostering governance.</span>
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
