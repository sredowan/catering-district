import { useState } from 'react';
import { ArrowRight, Check, ShieldCheck, TrendingUp, UtensilsCrossed, Award, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookingModal from '../../components/BookingModal';
import SEO, { breadcrumbSchema, serviceSchema, faqSchema } from '../../components/SEO';

const FAQS = [
    {
        question: "How does Catering District handle club bistro transitions without disrupting service?",
        answer: "We execute a structured 30-to-60 day handover plan. This includes assessing existing kitchen plant, cross-interviewing and retaining key kitchen personnel under the Registered Clubs Award, auditing inventory, and rolling out engineered menus with full staff training prior to Day 1 go-live."
    },
    {
        question: "Can Catering District help our club eliminate F&B operating losses?",
        answer: "Yes. In the Australian club industry, ~70% of venues subsidise food operations. We operate on proven food cost ratios (28–32%) and dynamic Award-compliant rostering models, transforming kitchen subsidies into sustainable commercial returns while maintaining member price-value expectations."
    },
    {
        question: "Are your menus customized for each club's demographics?",
        answer: "Every menu is bespoke. We respect core club staples (schnitzels, steaks, Sunday roasts, fish and chips) while introducing contemporary club specials, healthy options, and fast-service lunch options tailored to bowling, golf, RSL, or sports club member profiles."
    },
    {
        question: "How do you ensure food safety and HACCP compliance?",
        answer: "Our operations are overseen by Maz Islam, an accredited Quality & HACCP Food Safety Auditor. Every kitchen maintains rigorous digital temperature monitoring, sanitation schedules, allergen protocols, and full NSW Food Authority audit readiness."
    }
];

export default function ClubCatering() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#ffffff] text-[#19355e]">
            <SEO
                title="Club Catering Services NSW — Commercial Kitchen & Bistro Management"
                description="Professional club catering services for NSW licensed clubs, RSLs, bowling and golf clubs. Proven bistro operations, margin turnaround, and HACCP compliance by Catering District."
                path="/services/club-catering"
                ogImage="/images/home-cafe-1.jpg"
                jsonLd={[
                    breadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'Services', url: '/services' },
                        { name: 'Club Catering', url: '/services/club-catering' },
                    ]),
                    serviceSchema({
                        name: 'Club Catering Services NSW',
                        description: 'Turnkey food and beverage, bistro management, and commercial kitchen operations for registered clubs across New South Wales.',
                        serviceType: 'Club Catering',
                        url: '/services/club-catering',
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
                    <span className="text-[#19355e] font-medium">Club Catering</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative py-20 px-6 bg-gradient-to-b from-[#0f2340] to-[#19355e] text-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#ffda8d] text-xs font-semibold uppercase tracking-wider mb-6">
                            <Award className="w-3.5 h-3.5" />
                            Registered Clubs Catering Partner
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-light leading-tight mb-6">
                            NSW Club Catering <br />
                            <span className="italic font-normal text-[#ffda8d]">Tailored for Community &amp; Profit</span>
                        </h1>
                        <p className="text-lg text-white/80 font-light leading-relaxed mb-8 max-w-2xl">
                            We partner with Club Boards, CEOs, and General Managers across New South Wales to deliver high-volume bistro excellence, member satisfaction, and strict commercial margin control.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => setIsBookingOpen(true)}
                                className="inline-flex items-center justify-center space-x-3 bg-[#ffda8d] text-[#0f2340] px-8 py-4 text-xs uppercase tracking-[0.15em] font-semibold hover:bg-[#ffe8b3] transition-all rounded-sm shadow-lg cursor-pointer"
                            >
                                <span>Request Capability Statement</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                            <Link
                                to="/tenders-eoi"
                                className="inline-flex items-center justify-center space-x-3 border border-white/30 text-white px-8 py-4 text-xs uppercase tracking-[0.15em] hover:bg-white/10 transition-all rounded-sm"
                            >
                                <span>Invite Us to Your EOI</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                    <div className="lg:col-span-5">
                        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                            <h3 className="text-xl font-serif mb-4 text-[#ffda8d]">Why Club Executives Choose Us</h3>
                            <ul className="space-y-4 text-sm text-white/90">
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>Eliminate Food Subsidies:</strong> Engineered menus and strict food cost management (28-32%).</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>Award-Compliant Rostering:</strong> Mitigate 32% penalty rate pressures under Registered Clubs Award MA000058.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>Certified Food Safety:</strong> Managed by an accredited Quality &amp; HACCP Food Safety Auditor.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>Hands-On Leadership:</strong> Maz Islam sits with your board and reports transparently each month.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Capabilities */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#64620B] mb-3">Operational Delivery</p>
                    <h2 className="text-3xl md:text-5xl font-serif font-light">
                        End-to-End Club Kitchen &amp; <span className="italic">Dining Operations</span>
                    </h2>
                    <p className="text-base text-[#19355e]/70 mt-4 leading-relaxed">
                        We handle every dimension of club hospitality so General Managers and Directors can focus on member welfare, club strategy, and community governance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-8 rounded-2xl border border-[#19355e]/10 bg-[#fafaf8] hover:shadow-xl transition-all">
                        <UtensilsCrossed className="w-10 h-10 text-[#64620B] mb-6" />
                        <h3 className="text-xl font-serif mb-3">Bistro &amp; Member Dining</h3>
                        <p className="text-sm text-[#19355e]/70 leading-relaxed mb-6">
                            From weekday lunches and seniors' specials to packed Saturday nights and Sunday family roasts, we deliver rapid ticket pacing without sacrificing culinary standards.
                        </p>
                        <ul className="space-y-2 text-xs text-[#19355e]/80">
                            <li>• High-volume bistro line efficiency</li>
                            <li>• Senior &amp; community meal packages</li>
                            <li>• Seasonal blackboard promotions</li>
                        </ul>
                    </div>

                    <div className="p-8 rounded-2xl border border-[#19355e]/10 bg-[#fafaf8] hover:shadow-xl transition-all">
                        <ShieldCheck className="w-10 h-10 text-[#64620B] mb-6" />
                        <h3 className="text-xl font-serif mb-3">Kitchen Compliance &amp; HACCP</h3>
                        <p className="text-sm text-[#19355e]/70 leading-relaxed mb-6">
                            Full statutory compliance with NSW Food Authority standards, WHS regulations, and comprehensive HACCP food safety audit logs maintained daily.
                        </p>
                        <ul className="space-y-2 text-xs text-[#19355e]/80">
                            <li>• Digital temperature and sanitisation logs</li>
                            <li>• Allergen management protocols</li>
                            <li>• 100% audit readiness for council inspectors</li>
                        </ul>
                    </div>

                    <div className="p-8 rounded-2xl border border-[#19355e]/10 bg-[#fafaf8] hover:shadow-xl transition-all">
                        <TrendingUp className="w-10 h-10 text-[#64620B] mb-6" />
                        <h3 className="text-xl font-serif mb-3">F&amp;B Margin Protection</h3>
                        <p className="text-sm text-[#19355e]/70 leading-relaxed mb-6">
                            Turning kitchen subsidies into sustainable commercial performance through portion control, wholesale procurement terms, and intelligent menu engineering.
                        </p>
                        <ul className="space-y-2 text-xs text-[#19355e]/80">
                            <li>• Target food cost percentage 28–32%</li>
                            <li>• Waste minimisation and yield tracking</li>
                            <li>• Transparent monthly P&amp;L reporting to Boards</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Club Types Grid */}
            <section className="py-20 px-6 bg-[#0f2340] text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
                        <div>
                            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#ffda8d] mb-3">Sector Specialisation</p>
                            <h2 className="text-3xl md:text-4xl font-serif font-light">
                                Tailored for Every <span className="italic">Registered Club Type</span>
                            </h2>
                        </div>
                        <Link to="/clubs" className="mt-4 md:mt-0 text-xs uppercase tracking-[0.15em] text-[#ffda8d] hover:underline inline-flex items-center gap-1">
                            <span>View all club types</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Link to="/clubs/rsl-clubs" className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all block group">
                            <h3 className="text-lg font-serif text-[#ffda8d] mb-2 group-hover:underline">RSL &amp; Memorial Clubs</h3>
                            <p className="text-xs text-white/70 leading-relaxed">ANZAC Day service, traditional roast carvery, veteran respect, and high-volume auditorium functions.</p>
                        </Link>
                        <Link to="/clubs/bowling-clubs" className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all block group">
                            <h3 className="text-lg font-serif text-[#ffda8d] mb-2 group-hover:underline">Bowling Clubs (Bowlos)</h3>
                            <p className="text-xs text-white/70 leading-relaxed">Barefoot bowls catering, family-friendly bistro classics, community trivia nights, and local sponsorships.</p>
                        </Link>
                        <Link to="/clubs/golf-clubs" className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all block group">
                            <h3 className="text-lg font-serif text-[#ffda8d] mb-2 group-hover:underline">Golf &amp; Country Clubs</h3>
                            <p className="text-xs text-white/70 leading-relaxed">Halfway kiosk, 19th-hole casual dining, tournament corporate buffets, and scenic wedding banquets.</p>
                        </Link>
                        <Link to="/clubs/leagues-sports-clubs" className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all block group">
                            <h3 className="text-lg font-serif text-[#ffda8d] mb-2 group-hover:underline">Leagues &amp; Sporting Clubs</h3>
                            <p className="text-xs text-white/70 leading-relaxed">Game-day ticket velocity, sports bar burgers and pizzas, family value packages, and presentation dinners.</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 px-6 max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#64620B] mb-3">Common Inquiries</p>
                    <h2 className="text-3xl md:text-4xl font-serif font-light">
                        Frequently Asked Questions by <span className="italic">Club Executives</span>
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

            {/* Bottom CTA Banner */}
            <section className="py-16 px-6 bg-[#64620B] text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">
                        Is your club reviewing its catering operations?
                    </h2>
                    <p className="text-base text-white/90 mb-8 max-w-2xl mx-auto">
                        Speak directly with Maz Islam for a confidential operational appraisal or invite Catering District to your next EOI process.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            onClick={() => setIsBookingOpen(true)}
                            className="bg-white text-[#19355e] px-8 py-4 text-xs uppercase tracking-[0.15em] font-semibold hover:bg-gray-100 transition-all rounded-sm shadow-md cursor-pointer"
                        >
                            Request Capability Statement
                        </button>
                        <Link
                            to="/tenders-eoi"
                            className="border border-white text-white px-8 py-4 text-xs uppercase tracking-[0.15em] font-semibold hover:bg-white/10 transition-all rounded-sm"
                        >
                            Submit EOI Documents
                        </Link>
                    </div>
                </div>
            </section>

            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </div>
    );
}
