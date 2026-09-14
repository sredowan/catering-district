import { useState } from 'react';
import { ArrowRight, Check, MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookingModal from '../../components/BookingModal';
import SEO, { breadcrumbSchema, locationBusinessSchema, faqSchema } from '../../components/SEO';

const FAQS = [
    {
        question: "What dining expectations do Northern Beaches club members have?",
        answer: "Northern Beaches members look for sustainable sourcing, fresh seafood, plant-forward options, and vibrant modern Australian dining without losing traditional club value and comfort."
    },
    {
        question: "How do you manage large function spaces along the Northern Beaches?",
        answer: "Northern Beaches clubs boast some of Sydney's most spectacular coastal function rooms. We package and manage corporate offsites, wedding receptions, and milestone family celebrations with bespoke banquet packages."
    }
];

export default function NorthernBeaches() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#ffffff] text-[#19355e]">
            <SEO
                title="Northern Beaches & Dee Why Club Catering NSW — Catering District"
                description="Turnkey club catering and bistro operations across Dee Why, Manly, Mona Vale, and the Northern Beaches. Sustainable sourcing, high-volume dining, and HACCP compliance."
                path="/locations/northern-beaches-club-catering"
                ogImage="/images/home-pastry.jpg"
                jsonLd={[
                    breadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'Locations', url: '/locations' },
                        { name: 'Northern Beaches', url: '/locations/northern-beaches-club-catering' },
                    ]),
                    locationBusinessSchema({
                        suburb: 'Dee Why',
                        region: 'Northern Beaches NSW',
                        description: 'Specialised coastal club catering, RSL dining, and sailing skiff food services on the Northern Beaches.',
                        path: '/locations/northern-beaches-club-catering',
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
                    <span className="text-[#19355e] font-medium">Northern Beaches</span>
                </div>
            </div>

            <section className="relative py-20 px-6 bg-gradient-to-b from-[#0f2340] to-[#19355e] text-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#ffda8d] text-xs font-semibold uppercase tracking-wider mb-6">
                            <MapPin className="w-3.5 h-3.5" />
                            Manly to Palm Beach Peninsula
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-light leading-tight mb-6">
                            Northern Beaches <br />
                            <span className="italic font-normal text-[#ffda8d]">Club Catering Services</span>
                        </h1>
                        <p className="text-lg text-white/80 font-light leading-relaxed mb-8 max-w-2xl">
                            From landmark RSLs in Dee Why to oceanfront sailing and bowling clubs across Manly and Mona Vale, we bring culinary precision and commercial stability to Northern Beaches venues.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => setIsBookingOpen(true)}
                                className="inline-flex items-center justify-center space-x-3 bg-[#ffda8d] text-[#0f2340] px-8 py-4 text-xs uppercase tracking-[0.15em] font-semibold hover:bg-[#ffe8b3] transition-all rounded-sm shadow-lg cursor-pointer"
                            >
                                <span>Request Northern Beaches Proposal</span>
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
                            <h3 className="text-xl font-serif mb-4 text-[#ffda8d]">Northern Beaches Standards</h3>
                            <ul className="space-y-4 text-sm text-white/90">
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>Sustainable Culinary Philosophy:</strong> Marine stewardship certified fish, local produce, and eco packaging.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>Oceanfront Event Yields:</strong> Premium banqueting packages tailored for weddings and corporate gatherings.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>Total Regulatory Compliance:</strong> Strict adherence to Food Standards Code and Registered Clubs Award.</span>
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
