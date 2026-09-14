import { useState } from 'react';
import { ArrowRight, Check, Utensils, Clock, HeartHandshake, Sparkles, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookingModal from '../../components/BookingModal';
import SEO, { breadcrumbSchema, serviceSchema, faqSchema } from '../../components/SEO';

const FAQS = [
    {
        question: "How do you maintain fast ticket times during peak club rushes?",
        answer: "We deploy modern kitchen line design, mise-en-place prep protocols, and digital kitchen display systems (KDS) configured for rapid order firing. During peak bingo sessions, poker machine breaks, and Friday night raffles, our ticket times average under 15 minutes."
    },
    {
        question: "How do you balance traditional club favourites with modern dining trends?",
        answer: "We maintain a two-tier menu philosophy: core beloved favourites (parmigianas, 250g riverina steaks, flathead fillets, roast carvery) anchor the menu, while seasonal blackboard specials feature contemporary Mediterranean, Asian, and grill dishes that attract younger families and dining members."
    },
    {
        question: "Do you cater for special member promotions and seniors' deals?",
        answer: "Yes. Mid-week seniors' lunches, member badge-draw dinner specials, kids-eat-free promotions, and themed steak nights are proven drivers of mid-week club visitation and beverage spend."
    }
];

export default function BistroRestaurantManagement() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#ffffff] text-[#19355e]">
            <SEO
                title="Club Bistro & Restaurant Management NSW — High-Volume Dining Operations"
                description="Professional club bistro and restaurant operator across Sydney and NSW. Menu engineering, fast service times, member dining loyalty, and proven kitchen management by Catering District."
                path="/services/bistro-restaurant-management"
                ogImage="/images/home-cafe-1.jpg"
                jsonLd={[
                    breadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'Services', url: '/services' },
                        { name: 'Bistro & Restaurant Management', url: '/services/bistro-restaurant-management' },
                    ]),
                    serviceSchema({
                        name: 'Club Bistro & Restaurant Management',
                        description: 'Turnkey club bistro management, menu engineering, kitchen operations, and high-volume member dining for NSW registered clubs.',
                        serviceType: 'Bistro Management',
                        url: '/services/bistro-restaurant-management',
                    }),
                    faqSchema(FAQS),
                ]}
            />

            {/* Breadcrumb */}
            <div className="bg-[#f8f9fa] border-b border-[#19355e]/10 pt-24 pb-4 px-6">
                <div className="max-w-7xl mx-auto flex items-center space-x-2 text-xs text-[#19355e]/60">
                    <Link to="/" className="hover:text-[#64620B]">Home</Link>
                    <ChevronRight className="w-3 h-3" />
                    <Link to="/services" className="hover:text-[#64620B]">Services</Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-[#19355e] font-medium">Bistro &amp; Restaurant Management</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative py-20 px-6 bg-gradient-to-b from-[#0f2340] to-[#19355e] text-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#ffda8d] text-xs font-semibold uppercase tracking-wider mb-6">
                            <Utensils className="w-3.5 h-3.5" />
                            Club Bistro Operators
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-light leading-tight mb-6">
                            Club Bistro &amp; <br />
                            <span className="italic font-normal text-[#ffda8d]">Dining Room Management</span>
                        </h1>
                        <p className="text-lg text-white/80 font-light leading-relaxed mb-8 max-w-2xl">
                            Transforming club dining rooms into bustling community destinations. We deliver fresh, flavorful, high-volume dining that drives member loyalty and beverage revenue.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => setIsBookingOpen(true)}
                                className="inline-flex items-center justify-center space-x-3 bg-[#ffda8d] text-[#0f2340] px-8 py-4 text-xs uppercase tracking-[0.15em] font-semibold hover:bg-[#ffe8b3] transition-all rounded-sm shadow-lg cursor-pointer"
                            >
                                <span>Request a Bistro Review</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center space-x-3 border border-white/30 text-white px-8 py-4 text-xs uppercase tracking-[0.15em] hover:bg-white/10 transition-all rounded-sm"
                            >
                                <span>Speak With Maz Islam</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                            <h3 className="text-xl font-serif mb-4 text-[#ffda8d]">Bistro Performance Metrics</h3>
                            <ul className="space-y-4 text-sm text-white/90">
                                <li className="flex items-start gap-3">
                                    <Clock className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>&lt; 15 Min Ticket Times:</strong> Even during peak 300+ cover Saturday dinner rushes.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Sparkles className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>95%+ Member Satisfaction:</strong> Consistent portions, premium presentation, and hot meals.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <HeartHandshake className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>Community Alignment:</strong> Tailored pricing that protects member value while preserving margin.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Menu Philosophy */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#64620B] mb-3">Culinary Strategy</p>
                    <h2 className="text-3xl md:text-5xl font-serif font-light">
                        Engineered for High Volume &amp; <span className="italic">Member Loyalty</span>
                    </h2>
                    <p className="text-base text-[#19355e]/70 mt-4 leading-relaxed">
                        A club bistro cannot afford to alienate traditional members, nor can it afford to look like a relic from the 1990s. We harmonize classic club favourites with modern culinary innovation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-8 rounded-2xl border border-[#19355e]/10 bg-[#fafaf8]">
                        <h3 className="text-xl font-serif mb-3 text-[#19355e]">The Classic Club Pantry</h3>
                        <p className="text-sm text-[#19355e]/70 leading-relaxed mb-4">
                            Hand-crumbed chicken schnitzels, grass-fed Riverina sirloins, beer-battered barramundi, and slow-roasted beef with Yorkshire puddings done right every single service.
                        </p>
                        <span className="text-xs text-[#64620B] font-semibold uppercase tracking-wider">Demographic Foundation</span>
                    </div>

                    <div className="p-8 rounded-2xl border border-[#19355e]/10 bg-[#fafaf8]">
                        <h3 className="text-xl font-serif mb-3 text-[#19355e]">Modern Blackboard Specials</h3>
                        <p className="text-sm text-[#19355e]/70 leading-relaxed mb-4">
                            Rotating seasonal creations including chargrilled seafood, vibrant poke bowls, wood-smoked meats, and authentic Asian wok classics that excite younger families.
                        </p>
                        <span className="text-xs text-[#64620B] font-semibold uppercase tracking-wider">Growth &amp; Frequency</span>
                    </div>

                    <div className="p-8 rounded-2xl border border-[#19355e]/10 bg-[#fafaf8]">
                        <h3 className="text-xl font-serif mb-3 text-[#19355e]">Dietary Inclusivity</h3>
                        <p className="text-sm text-[#19355e]/70 leading-relaxed mb-4">
                            Dedicated gluten-free preparation areas, vegan selections, and certified allergen logging to ensure every family member can dine safely and without hesitation.
                        </p>
                        <span className="text-xs text-[#64620B] font-semibold uppercase tracking-wider">Modern Compliance</span>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 px-6 max-w-4xl mx-auto border-t border-[#19355e]/10">
                <div className="text-center mb-16">
                    <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#64620B] mb-3">Operational Questions</p>
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

            {/* CTA */}
            <section className="py-16 px-6 bg-[#19355e] text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">
                        Ready to elevate your club's dining reputation?
                    </h2>
                    <p className="text-base text-white/80 mb-8 max-w-xl mx-auto">
                        Invite Catering District to conduct a complimentary, no-obligation kitchen flow and menu audit for your club bistro.
                    </p>
                    <button
                        onClick={() => setIsBookingOpen(true)}
                        className="bg-[#ffda8d] text-[#0f2340] px-8 py-4 text-xs uppercase tracking-[0.15em] font-semibold hover:bg-[#ffe8b3] transition-all rounded-sm shadow-md cursor-pointer"
                    >
                        Request Bistro Assessment
                    </button>
                </div>
            </section>

            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </div>
    );
}
