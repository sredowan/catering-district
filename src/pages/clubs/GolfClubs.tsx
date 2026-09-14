import { useState } from 'react';
import { ArrowRight, Check, Award, Flag, Coffee, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookingModal from '../../components/BookingModal';
import SEO, { breadcrumbSchema, serviceSchema, faqSchema } from '../../components/SEO';

const FAQS = [
    {
        question: "How do you handle early morning tee-off catering and halfway kiosks?",
        answer: "We open early to service sunrise golfers with specialty barista coffee, breakfast wraps, protein pots, and quick-service snacks. Our halfway cart and kiosk operations are fast and cashless, keeping tee-times on schedule."
    },
    {
        question: "Can Catering District manage large corporate golf days?",
        answer: "Yes. Corporate golf days are high-yield events. We coordinate shotgun-start barbecue breakfasts, roving on-course drink and snack carts, and post-round banquet presentations with buffet or plated dining."
    },
    {
        question: "Do you cater weddings and external events in golf club clubhouses?",
        answer: "Golf club function rooms often command scenic green fairway views. We market, package, and deliver high-margin wedding banquets, milestone birthdays, and corporate offsite retreats."
    }
];

export default function GolfClubs() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#ffffff] text-[#19355e]">
            <SEO
                title="Golf Club Catering & Clubhouse Bistro Operations NSW — Catering District"
                description="Specialised golf club catering across NSW. Halfway kiosks, 19th-hole dining, corporate golf tournament banquets, and fairway wedding receptions."
                path="/clubs/golf-clubs"
                ogImage="/images/home-pastry.jpg"
                jsonLd={[
                    breadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'Clubs We Serve', url: '/clubs' },
                        { name: 'Golf Clubs', url: '/clubs/golf-clubs' },
                    ]),
                    serviceSchema({
                        name: 'Golf Club Catering Services',
                        description: 'Turnkey clubhouse bistro management, halfway kiosks, and corporate golf day catering across NSW.',
                        serviceType: 'Club Catering',
                        url: '/clubs/golf-clubs',
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
                    <span className="text-[#19355e] font-medium">Golf &amp; Country Clubs</span>
                </div>
            </div>

            <section className="relative py-20 px-6 bg-gradient-to-b from-[#0f2340] to-[#19355e] text-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#ffda8d] text-xs font-semibold uppercase tracking-wider mb-6">
                            <Flag className="w-3.5 h-3.5" />
                            Premium Clubhouse Hospitality
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-light leading-tight mb-6">
                            Golf Club Catering <br />
                            <span className="italic font-normal text-[#ffda8d]">&amp; 19th-Hole Hospitality</span>
                        </h1>
                        <p className="text-lg text-white/80 font-light leading-relaxed mb-8 max-w-2xl">
                            From dawn barista kiosks to lively 19th-hole clubhouse bistros and corporate tournament banquets, we provide golf clubs with seamless, profitable food and beverage management.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => setIsBookingOpen(true)}
                                className="inline-flex items-center justify-center space-x-3 bg-[#ffda8d] text-[#0f2340] px-8 py-4 text-xs uppercase tracking-[0.15em] font-semibold hover:bg-[#ffe8b3] transition-all rounded-sm shadow-lg cursor-pointer"
                            >
                                <span>Request Golf Club Proposal</span>
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
                            <h3 className="text-xl font-serif mb-4 text-[#ffda8d]">Clubhouse Dining Solutions</h3>
                            <ul className="space-y-4 text-sm text-white/90">
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>Early Morning Kiosk:</strong> Premium espresso coffee and grab-and-go items for early tee-offs.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>19th-Hole Bistro:</strong> Gourmet steaks, schnitzels, burgers, and post-round member specials.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>Corporate Tournaments:</strong> High-capacity shotgun breakfasts, roving carts, and awards dinners.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 px-6 max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#64620B] mb-3">Golf Venue Inquiries</p>
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
