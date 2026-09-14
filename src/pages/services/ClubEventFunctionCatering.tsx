import { useState } from 'react';
import { ArrowRight, Check, Calendar, PartyPopper, Award, GlassWater, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookingModal from '../../components/BookingModal';
import SEO, { breadcrumbSchema, serviceSchema, faqSchema } from '../../components/SEO';

const FAQS = [
    {
        question: "How does function catering boost overall club profitability?",
        answer: "Private functions and corporate events offer the highest profit margins in club hospitality. With pre-set guest numbers and predetermined banquet menus, food waste is near zero and staffing can be rostered with exact precision, generating high-margin food and beverage revenues."
    },
    {
        question: "Can Catering District handle barefoot bowls catering packages?",
        answer: "Yes. Barefoot bowls is a proven gateway for community and corporate bookings at bowling and recreation clubs. We offer gourmet barbecue platters, grazing tables, pizza ovens, and craft burger stations that convert casual weekend players into repeat club visitors."
    },
    {
        question: "Do you provide sensitive catering for wakes and memorial services?",
        answer: "Club memorial gatherings and wakes require quiet dignity, prompt discreet service, and flexible packages. We work closely with club management and families to ensure seamless funeral and memorial catering on short notice."
    }
];

export default function ClubEventFunctionCatering() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#ffffff] text-[#19355e]">
            <SEO
                title="Club Function & Event Catering NSW — Weddings, Wakes, Banquets & Bowls"
                description="High-margin event and function catering for NSW licensed clubs. Barefoot bowls packages, corporate seminars, milestone banquets, and wakes by Catering District."
                path="/services/club-event-function-catering"
                ogImage="/images/home-pastry.jpg"
                jsonLd={[
                    breadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'Services', url: '/services' },
                        { name: 'Club Function & Event Catering', url: '/services/club-event-function-catering' },
                    ]),
                    serviceSchema({
                        name: 'Club Event & Function Catering',
                        description: 'Turnkey event, banquet, conference, and private function catering for registered clubs and venues across NSW.',
                        serviceType: 'Event Catering',
                        url: '/services/club-event-function-catering',
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
                    <span className="text-[#19355e] font-medium">Event &amp; Function Catering</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative py-20 px-6 bg-gradient-to-b from-[#0f2340] to-[#19355e] text-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#ffda8d] text-xs font-semibold uppercase tracking-wider mb-6">
                            <PartyPopper className="w-3.5 h-3.5" />
                            High-Margin Venue Activation
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-light leading-tight mb-6">
                            Club Event &amp; <br />
                            <span className="italic font-normal text-[#ffda8d]">Function Catering NSW</span>
                        </h1>
                        <p className="text-lg text-white/80 font-light leading-relaxed mb-8 max-w-2xl">
                            Unlock the true revenue potential of your club's function spaces. From barefoot bowls parties to 400-guest seated banquets, we maximize function room yields.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => setIsBookingOpen(true)}
                                className="inline-flex items-center justify-center space-x-3 bg-[#ffda8d] text-[#0f2340] px-8 py-4 text-xs uppercase tracking-[0.15em] font-semibold hover:bg-[#ffe8b3] transition-all rounded-sm shadow-lg cursor-pointer"
                            >
                                <span>Request Function Packages</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center space-x-3 border border-white/30 text-white px-8 py-4 text-xs uppercase tracking-[0.15em] hover:bg-white/10 transition-all rounded-sm"
                            >
                                <span>Discuss Your Venue</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                            <h3 className="text-xl font-serif mb-4 text-[#ffda8d]">Function Packages We Deliver</h3>
                            <ul className="space-y-4 text-sm text-white/90">
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>Barefoot Bowls &amp; Casual Socials:</strong> Sliders, street food, artisan pizzas, and BBQ feasts.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>Auditorium Banquets &amp; Presentation Dinners:</strong> 2-course and 3-course alternate drops for up to 500 guests.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>Corporate Seminars &amp; Conferences:</strong> Day delegate packages, morning tea pastries, and executive lunches.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>Wakes &amp; Memorials:</strong> Respectful, flexible finger-food and warm refreshments.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Event Formats */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#64620B] mb-3">Revenue Streams</p>
                    <h2 className="text-3xl md:text-5xl font-serif font-light">
                        Turning Function Rooms into <span className="italic">Profit Centers</span>
                    </h2>
                    <p className="text-base text-[#19355e]/70 mt-4 leading-relaxed">
                        Idle function rooms cost clubs rates and air conditioning. We help clubs package and market their rooms to local businesses, sports associations, and community members.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-8 rounded-2xl border border-[#19355e]/10 bg-[#fafaf8]">
                        <Calendar className="w-10 h-10 text-[#64620B] mb-6" />
                        <h3 className="text-xl font-serif mb-3">Corporate &amp; Community</h3>
                        <p className="text-sm text-[#19355e]/70 leading-relaxed">
                            Mid-week boardroom lunches, charity fundraisers, trade expos, and annual club general meetings with seamless audiovisual timing.
                        </p>
                    </div>

                    <div className="p-8 rounded-2xl border border-[#19355e]/10 bg-[#fafaf8]">
                        <PartyPopper className="w-10 h-10 text-[#64620B] mb-6" />
                        <h3 className="text-xl font-serif mb-3">Celebrations &amp; Birthdays</h3>
                        <p className="text-sm text-[#19355e]/70 leading-relaxed">
                            21sts, 50ths, retirement parties, and wedding anniversaries with cocktail canapes and dessert stations.
                        </p>
                    </div>

                    <div className="p-8 rounded-2xl border border-[#19355e]/10 bg-[#fafaf8]">
                        <Award className="w-10 h-10 text-[#64620B] mb-6" />
                        <h3 className="text-xl font-serif mb-3">Sports Presentations</h3>
                        <p className="text-sm text-[#19355e]/70 leading-relaxed">
                            Junior and senior sporting club award nights, golf tournament banquets, and seasonal club trophy presentations.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 px-6 max-w-4xl mx-auto border-t border-[#19355e]/10">
                <div className="text-center mb-16">
                    <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#64620B] mb-3">Event Operations</p>
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
            <section className="py-16 px-6 bg-[#0f2340] text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">
                        Activate your club's function spaces today
                    </h2>
                    <p className="text-base text-white/80 mb-8 max-w-xl mx-auto">
                        Contact us to review sample menus, banquet pricing, and marketing strategies for your club's event spaces.
                    </p>
                    <button
                        onClick={() => setIsBookingOpen(true)}
                        className="bg-[#ffda8d] text-[#0f2340] px-8 py-4 text-xs uppercase tracking-[0.15em] font-semibold hover:bg-[#ffe8b3] transition-all rounded-sm shadow-md cursor-pointer"
                    >
                        Request Event Hospitality Packages
                    </button>
                </div>
            </section>

            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </div>
    );
}
