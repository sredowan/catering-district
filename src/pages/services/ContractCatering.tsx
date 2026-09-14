import { useState } from 'react';
import { ArrowRight, Check, Briefcase, Calculator, Users, Scale, FileText, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookingModal from '../../components/BookingModal';
import SEO, { breadcrumbSchema, serviceSchema, faqSchema } from '../../components/SEO';

const FAQS = [
    {
        question: "What contract models does Catering District offer for clubs?",
        answer: "We offer flexible, commercially sound structures: percentage-of-turnover leases, management-fee agreements, or hybrid profit-share arrangements. We tailor the contract to the club's risk profile, capital expenditure capacity, and member pricing strategy."
    },
    {
        question: "Who employs the kitchen staff under a contract catering model?",
        answer: "Catering District assumes full employer liability for the kitchen brigade. We handle recruitment, compliance with the Registered Clubs Award MA000058, superannuation, workers compensation, and performance management, lifting the labour risk directly off the club's balance sheet."
    },
    {
        question: "How does contract catering protect our club's cash flow?",
        answer: "In-house kitchens expose clubs to fixed chef salaries, volatile ingredient spikes, and unbudgeted penalty rates during low-turnover shifts. Our contract models shift kitchen operational risk to us while guaranteeing predictable commercial returns and consistent service."
    },
    {
        question: "How often do you report to the Club Board?",
        answer: "We provide monthly formal management reporting, including covers served, member satisfaction metrics, average spend per head, promotional performance, and food safety audit scores."
    }
];

export default function ContractCatering() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#ffffff] text-[#19355e]">
            <SEO
                title="Contract Catering for Clubs & Venues NSW — Risk-Free Hospitality Management"
                description="Professional contract catering solutions for NSW licensed clubs and commercial venues. Proven commercial structures, labour risk transfer, and margin guarantees by Catering District."
                path="/services/contract-catering"
                ogImage="/images/home-cafe-1.jpg"
                jsonLd={[
                    breadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'Services', url: '/services' },
                        { name: 'Contract Catering', url: '/services/contract-catering' },
                    ]),
                    serviceSchema({
                        name: 'Contract Catering for Clubs & Hospitality Venues',
                        description: 'Turnkey contract catering partnerships for licensed clubs and commercial venues across NSW.',
                        serviceType: 'Contract Catering',
                        url: '/services/contract-catering',
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
                    <span className="text-[#19355e] font-medium">Contract Catering</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative py-20 px-6 bg-gradient-to-b from-[#0f2340] to-[#19355e] text-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#ffda8d] text-xs font-semibold uppercase tracking-wider mb-6">
                            <Briefcase className="w-3.5 h-3.5" />
                            Commercial Partnership Models
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-light leading-tight mb-6">
                            Contract Catering <br />
                            <span className="italic font-normal text-[#ffda8d]">For NSW Clubs &amp; Venues</span>
                        </h1>
                        <p className="text-lg text-white/80 font-light leading-relaxed mb-8 max-w-2xl">
                            Eliminate the operational complexity and financial volatility of running an in-house kitchen. We take on the operational risk while you retain commercial clarity and member delight.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => setIsBookingOpen(true)}
                                className="inline-flex items-center justify-center space-x-3 bg-[#ffda8d] text-[#0f2340] px-8 py-4 text-xs uppercase tracking-[0.15em] font-semibold hover:bg-[#ffe8b3] transition-all rounded-sm shadow-lg cursor-pointer"
                            >
                                <span>Discuss Contract Options</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                            <Link
                                to="/tenders-eoi"
                                className="inline-flex items-center justify-center space-x-3 border border-white/30 text-white px-8 py-4 text-xs uppercase tracking-[0.15em] hover:bg-white/10 transition-all rounded-sm"
                            >
                                <span>Submit Your Tender / EOI</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                            <h3 className="text-xl font-serif mb-4 text-[#ffda8d]">The Contract Advantage</h3>
                            <ul className="space-y-4 text-sm text-white/90">
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>Labour Liability Transferred:</strong> No chef payroll, superannuation, or Workers Comp burdens on your books.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>Guaranteed Kitchen Standards:</strong> Dedicated head chefs and sous chefs trained in high-volume hospitality.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>Economies of Scale:</strong> Access tier-one food procurement rates, shielding margins from retail inflation.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>Alignment with Board Objectives:</strong> Transparent monthly KPI reports and joint commercial reviews.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Commercial Models Comparison */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#64620B] mb-3">Structured Agreements</p>
                    <h2 className="text-3xl md:text-5xl font-serif font-light">
                        Commercial Models Tailored to <span className="italic">Your Club's Strategy</span>
                    </h2>
                    <p className="text-base text-[#19355e]/70 mt-4 leading-relaxed">
                        Every licensed club has unique community demographics, asset conditions, and financial targets. We adapt to your requirements.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-8 rounded-2xl border border-[#19355e]/10 bg-[#fafaf8] flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-[#64620B]/10 text-[#64620B] flex items-center justify-center mb-6">
                                <Calculator className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-serif mb-2">Turnover Rental Model</h3>
                            <p className="text-xs uppercase tracking-wider text-[#64620B] font-semibold mb-4">Zero Risk for Club</p>
                            <p className="text-sm text-[#19355e]/70 leading-relaxed mb-6">
                                The club provides kitchen premises; Catering District handles 100% of staff, food, and operating costs, paying the club an agreed percentage of gross food turnover.
                            </p>
                            <ul className="space-y-2 text-xs text-[#19355e]/80 mb-8">
                                <li>✓ Zero direct catering losses for the club</li>
                                <li>✓ Direct revenue stream tied to bistro volume</li>
                                <li>✓ Full operational risk transferred to operator</li>
                            </ul>
                        </div>
                        <button onClick={() => setIsBookingOpen(true)} className="text-xs uppercase tracking-widest text-[#64620B] font-semibold flex items-center gap-1 hover:underline cursor-pointer">
                            <span>Inquire about this model</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                    </div>

                    <div className="p-8 rounded-2xl border-2 border-[#64620B] bg-[#ffffff] shadow-lg flex flex-col justify-between relative">
                        <div className="absolute -top-3 right-6 bg-[#64620B] text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full">
                            Most Popular for GMs
                        </div>
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-[#64620B]/10 text-[#64620B] flex items-center justify-center mb-6">
                                <Scale className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-serif mb-2">Hybrid Profit-Share</h3>
                            <p className="text-xs uppercase tracking-wider text-[#64620B] font-semibold mb-4">Shared Upside Alignment</p>
                            <p className="text-sm text-[#19355e]/70 leading-relaxed mb-6">
                                A collaborative framework where baseline operating costs are capped and profits above agreed benchmarks are shared between club and operator.
                            </p>
                            <ul className="space-y-2 text-xs text-[#19355e]/80 mb-8">
                                <li>✓ Full incentive alignment between board and caterer</li>
                                <li>✓ Transparent open-book monthly reporting</li>
                                <li>✓ Shared investment in venue marketing and specials</li>
                            </ul>
                        </div>
                        <button onClick={() => setIsBookingOpen(true)} className="text-xs uppercase tracking-widest text-[#64620B] font-semibold flex items-center gap-1 hover:underline cursor-pointer">
                            <span>Inquire about this model</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                    </div>

                    <div className="p-8 rounded-2xl border border-[#19355e]/10 bg-[#fafaf8] flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-[#64620B]/10 text-[#64620B] flex items-center justify-center mb-6">
                                <Briefcase className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-serif mb-2">Management Fee Model</h3>
                            <p className="text-xs uppercase tracking-wider text-[#64620B] font-semibold mb-4">For Large Venues &amp; Precincts</p>
                            <p className="text-sm text-[#19355e]/70 leading-relaxed mb-6">
                                The club retains the direct P&amp;L while Catering District provides expert culinary directors, executive chefs, procurement systems, and HACCP compliance for a fixed fee.
                            </p>
                            <ul className="space-y-2 text-xs text-[#19355e]/80 mb-8">
                                <li>✓ Complete ownership of all F&amp;B profits</li>
                                <li>✓ Professional management without hiring a permanent F&amp;B exec</li>
                                <li>✓ Continuous menu engineering and staff upskilling</li>
                            </ul>
                        </div>
                        <button onClick={() => setIsBookingOpen(true)} className="text-xs uppercase tracking-widest text-[#64620B] font-semibold flex items-center gap-1 hover:underline cursor-pointer">
                            <span>Inquire about this model</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </div>
            </section>

            {/* In-House vs Contract Comparison Banner */}
            <section className="py-20 px-6 bg-[#0f2340] text-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif font-light mb-4">
                            In-House vs. Contract Catering: What NSW Boards Need to Consider
                        </h2>
                        <p className="text-sm text-white/70 max-w-2xl mx-auto">
                            Operating an in-house kitchen requires substantial capital, complex award rostering, and intense daily oversight. Discover how contract catering shifts the balance.
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm border-collapse">
                            <thead>
                                <tr className="border-b border-white/20 text-xs uppercase tracking-wider text-[#ffda8d]">
                                    <th className="py-4 pr-6">Operational Area</th>
                                    <th className="py-4 px-6">In-House Club Kitchen</th>
                                    <th className="py-4 pl-6 text-[#ffda8d]">With Catering District</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/10 text-xs md:text-sm">
                                <tr>
                                    <td className="py-4 pr-6 font-semibold">Labour Risk</td>
                                    <td className="py-4 px-6 text-white/70">Club absorbs penalty rates, overtime, sick leave &amp; turnover</td>
                                    <td className="py-4 pl-6 font-medium text-white">Full staffing risk managed &amp; absorbed by Catering District</td>
                                </tr>
                                <tr>
                                    <td className="py-4 pr-6 font-semibold">Food Cost Exposure</td>
                                    <td className="py-4 px-6 text-white/70">Club pays full spot-market food prices and kitchen waste</td>
                                    <td className="py-4 pl-6 font-medium text-white">Bulk purchasing scale maintains food cost target under 32%</td>
                                </tr>
                                <tr>
                                    <td className="py-4 pr-6 font-semibold">Regulatory Compliance</td>
                                    <td className="py-4 px-6 text-white/70">Board and GM personally liable for food safety breaches</td>
                                    <td className="py-4 pl-6 font-medium text-white">Certified HACCP food safety audit systems &amp; full compliance</td>
                                </tr>
                                <tr>
                                    <td className="py-4 pr-6 font-semibold">Bottom Line Impact</td>
                                    <td className="py-4 px-6 text-white/70">70% of club kitchens run at an unbudgeted loss</td>
                                    <td className="py-4 pl-6 font-medium text-white">Guaranteed revenue or sustainable margin model</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="text-center mt-10">
                        <Link to="/insights/in-house-vs-contract-catering-clubs" className="text-xs uppercase tracking-widest text-[#ffda8d] hover:underline inline-flex items-center gap-1 font-semibold">
                            <span>Read the complete Board Guide to In-House vs Contract Catering</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 px-6 max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#64620B] mb-3">Answers for Decision-Makers</p>
                    <h2 className="text-3xl md:text-4xl font-serif font-light">
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
            <section className="py-16 px-6 bg-[#64620B] text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">
                        Reviewing your catering agreement?
                    </h2>
                    <p className="text-base text-white/90 mb-8 max-w-2xl mx-auto">
                        Speak directly with Maz Islam for a confidential commercial comparison of your current kitchen performance versus contract models.
                    </p>
                    <button
                        onClick={() => setIsBookingOpen(true)}
                        className="bg-white text-[#19355e] px-8 py-4 text-xs uppercase tracking-[0.15em] font-semibold hover:bg-gray-100 transition-all rounded-sm shadow-md cursor-pointer"
                    >
                        Schedule a Commercial Review
                    </button>
                </div>
            </section>

            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </div>
    );
}
