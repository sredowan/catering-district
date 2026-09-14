import { useState } from 'react';
import { ArrowRight, Check, ShieldCheck, FileCheck, ClipboardCheck, AlertTriangle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookingModal from '../../components/BookingModal';
import SEO, { breadcrumbSchema, serviceSchema, faqSchema } from '../../components/SEO';

const FAQS = [
    {
        question: "What qualifications does Maz Islam hold in kitchen compliance and auditing?",
        answer: "Maz Islam holds a Diploma in Quality Auditing (BSB51615), an Advanced Diploma in Hospitality Management (SIT60316), and is a certified HACCP Food Safety Auditor. He has 19+ years of hands-on experience auditing and running high-volume commercial kitchens across New South Wales."
    },
    {
        question: "How do you protect club boards from food safety liabilities?",
        answer: "Under the NSW Food Act and Food Standards Code, board directors bear statutory duty of care. We implement verifiable digital HACCP monitoring, daily sanitizer checks, cold-chain calibration, supplier traceability, and mock council audits to guarantee your club passes every environmental health officer inspection."
    },
    {
        question: "How do you manage the Registered Clubs Award MA000058?",
        answer: "We utilize automated rostering software mapped directly to Fair Work Registered Clubs Award classifications, ensuring correct penalty rate calculations, mandatory rest breaks between shifts, overtime caps, and accurate classification of kitchen attendants, apprentices, and chefs."
    }
];

export default function KitchenManagementCompliance() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#ffffff] text-[#19355e]">
            <SEO
                title="Commercial Kitchen Management & HACCP Compliance NSW — Catering District"
                description="HACCP food safety audits, NSW Food Authority compliance, and Registered Clubs Award labour management. Certified operational oversight led by Maz Islam."
                path="/services/kitchen-management-compliance"
                ogImage="/images/home-team.jpg"
                jsonLd={[
                    breadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'Services', url: '/services' },
                        { name: 'Kitchen Management & Compliance', url: '/services/kitchen-management-compliance' },
                    ]),
                    serviceSchema({
                        name: 'Commercial Kitchen Management & HACCP Compliance',
                        description: 'Specialised food safety auditing, HACCP compliance systems, and kitchen operational governance for NSW registered clubs.',
                        serviceType: 'Kitchen Compliance',
                        url: '/services/kitchen-management-compliance',
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
                    <span className="text-[#19355e] font-medium">Kitchen Management &amp; Compliance</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative py-20 px-6 bg-gradient-to-b from-[#0f2340] to-[#19355e] text-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#ffda8d] text-xs font-semibold uppercase tracking-wider mb-6">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            Certified Food Safety &amp; WHS Governance
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-light leading-tight mb-6">
                            Kitchen Management <br />
                            <span className="italic font-normal text-[#ffda8d]">&amp; HACCP Compliance</span>
                        </h1>
                        <p className="text-lg text-white/80 font-light leading-relaxed mb-8 max-w-2xl">
                            Eliminate food safety risks and Fair Work penalties. Led by an accredited Quality &amp; HACCP Food Safety Auditor, we bring rigorous corporate compliance to licensed club kitchens.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => setIsBookingOpen(true)}
                                className="inline-flex items-center justify-center space-x-3 bg-[#ffda8d] text-[#0f2340] px-8 py-4 text-xs uppercase tracking-[0.15em] font-semibold hover:bg-[#ffe8b3] transition-all rounded-sm shadow-lg cursor-pointer"
                            >
                                <span>Request Kitchen Audit</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                            <Link
                                to="/about/maz-islam"
                                className="inline-flex items-center justify-center space-x-3 border border-white/30 text-white px-8 py-4 text-xs uppercase tracking-[0.15em] hover:bg-white/10 transition-all rounded-sm"
                            >
                                <span>Maz Islam Credentials</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                            <h3 className="text-xl font-serif mb-4 text-[#ffda8d]">Compliance Guarantee</h3>
                            <ul className="space-y-4 text-sm text-white/90">
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>Certified HACCP Oversight:</strong> Complete food safety management system implemented on site.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>NSW Food Authority Audit Ready:</strong> Zero tolerance for breaches or environmental health officer non-conformances.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>Fair Work Award Adherence:</strong> Registered Clubs Award MA000058 strictly audited across every shift.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>Equipment Longevity:</strong> Preventative maintenance schedules that protect club-owned capital assets.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Pillars */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#64620B] mb-3">Governance Framework</p>
                    <h2 className="text-3xl md:text-5xl font-serif font-light">
                        Protecting Club Directors &amp; <span className="italic">General Managers</span>
                    </h2>
                    <p className="text-base text-[#19355e]/70 mt-4 leading-relaxed">
                        Under Australian food safety and workplace legislation, ignorance is no defense. We provide the institutional rigor necessary to keep your venue fully protected.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-8 rounded-2xl border border-[#19355e]/10 bg-[#fafaf8]">
                        <FileCheck className="w-10 h-10 text-[#64620B] mb-6" />
                        <h3 className="text-xl font-serif mb-3">HACCP Digital Systems</h3>
                        <p className="text-sm text-[#19355e]/70 leading-relaxed mb-4">
                            Replacing loose paper binders with cloud-synced temperature probes, sanitisation timestamping, delivery sign-offs, and automated expiry tracking.
                        </p>
                    </div>

                    <div className="p-8 rounded-2xl border border-[#19355e]/10 bg-[#fafaf8]">
                        <ClipboardCheck className="w-10 h-10 text-[#64620B] mb-6" />
                        <h3 className="text-xl font-serif mb-3">Allergen Safety Protocol</h3>
                        <p className="text-sm text-[#19355e]/70 leading-relaxed mb-4">
                            Strict allergen separation benches, dedicated colour-coded utensils, and automated POS ingredient transparency to ensure zero inadvertent cross-contamination.
                        </p>
                    </div>

                    <div className="p-8 rounded-2xl border border-[#19355e]/10 bg-[#fafaf8]">
                        <AlertTriangle className="w-10 h-10 text-[#64620B] mb-6" />
                        <h3 className="text-xl font-serif mb-3">WHS &amp; Kitchen Safety</h3>
                        <p className="text-sm text-[#19355e]/70 leading-relaxed mb-4">
                            Preventative chemical handling, non-slip flooring audits, fire suppression maintenance, and emergency response training for all kitchen personnel.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 px-6 max-w-4xl mx-auto border-t border-[#19355e]/10">
                <div className="text-center mb-16">
                    <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#64620B] mb-3">Auditing Questions</p>
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
            <section className="py-16 px-6 bg-[#64620B] text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">
                        Is your club kitchen due for a compliance audit?
                    </h2>
                    <p className="text-base text-white/90 mb-8 max-w-xl mx-auto">
                        Maz Islam personally conducts confidential kitchen audits for club CEOs and boards across New South Wales.
                    </p>
                    <button
                        onClick={() => setIsBookingOpen(true)}
                        className="bg-white text-[#19355e] px-8 py-4 text-xs uppercase tracking-[0.15em] font-semibold hover:bg-gray-100 transition-all rounded-sm shadow-md cursor-pointer"
                    >
                        Schedule a Kitchen Audit
                    </button>
                </div>
            </section>

            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </div>
    );
}
