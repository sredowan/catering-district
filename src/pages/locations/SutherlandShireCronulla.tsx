import { useState } from 'react';
import { ArrowRight, Check, MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookingModal from '../../components/BookingModal';
import SEO, { breadcrumbSchema, locationBusinessSchema, faqSchema } from '../../components/SEO';

const FAQS = [
    {
        question: "What style of club catering resonates best in the Sutherland Shire?",
        answer: "Shire members love coastal, relaxed premium dining: fresh Sydney rock oysters, chargrilled seafood, vibrant summer salads, alongside authentic craft burgers and dry-aged steaks enjoyed overlooking water or bowling greens."
    },
    {
        question: "How do you manage coastal weekend volume spikes in Cronulla?",
        answer: "Warm sunny weekends in Cronulla see dramatic cover spikes. We deploy dynamic roster scaling, pre-prepped speed lines, and outdoor terrace food stations to absorb high pedestrian crowds effortlessly."
    }
];

export default function SutherlandShireCronulla() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#ffffff] text-[#19355e]">
            <SEO
                title="Sutherland Shire & Cronulla Club Catering NSW — Catering District"
                description="Professional club catering across Cronulla, Caringbah, Gymea, and the Sutherland Shire. Coastal bistro operations, surf club dining, and high-margin function catering."
                path="/locations/sutherland-shire-cronulla-club-catering"
                ogImage="/images/home-pastry.jpg"
                jsonLd={[
                    breadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'Locations', url: '/locations' },
                        { name: 'Sutherland Shire & Cronulla', url: '/locations/sutherland-shire-cronulla-club-catering' },
                    ]),
                    locationBusinessSchema({
                        suburb: 'Cronulla',
                        region: 'Sutherland Shire NSW',
                        description: 'Specialised coastal club catering, RSL bistro management, and surf club food services in the Sutherland Shire.',
                        path: '/locations/sutherland-shire-cronulla-club-catering',
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
                    <span className="text-[#19355e] font-medium">Sutherland Shire &amp; Cronulla</span>
                </div>
            </div>

            <section className="relative py-20 px-6 bg-gradient-to-b from-[#0f2340] to-[#19355e] text-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#ffda8d] text-xs font-semibold uppercase tracking-wider mb-6">
                            <MapPin className="w-3.5 h-3.5" />
                            The Shire &amp; Coastal South Sydney
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-light leading-tight mb-6">
                            Sutherland Shire <br />
                            <span className="italic font-normal text-[#ffda8d]">&amp; Cronulla Club Catering</span>
                        </h1>
                        <p className="text-lg text-white/80 font-light leading-relaxed mb-8 max-w-2xl">
                            Elevating coastal club dining across Cronulla, Caringbah, and Gymea. From relaxed oceanfront surf clubs to prestigious RSLs and community bowlos.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => setIsBookingOpen(true)}
                                className="inline-flex items-center justify-center space-x-3 bg-[#ffda8d] text-[#0f2340] px-8 py-4 text-xs uppercase tracking-[0.15em] font-semibold hover:bg-[#ffe8b3] transition-all rounded-sm shadow-lg cursor-pointer"
                            >
                                <span>Request Shire Proposal</span>
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
                            <h3 className="text-xl font-serif mb-4 text-[#ffda8d]">Shire Catering Excellence</h3>
                            <ul className="space-y-4 text-sm text-white/90">
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>Coastal Lifestyle Concepts:</strong> Seafood-forward, fresh grill menus tailored for relaxed local living.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>Waterfront Function Yields:</strong> Premium wedding and birthday milestone banquet execution.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>Zero Food Losses:</strong> Commercially disciplined contracts that guarantee positive returns.</span>
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
