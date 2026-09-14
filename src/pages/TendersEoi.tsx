import { useState } from 'react';
import { ArrowRight, Check, FileText, Send, Award, Clock, ShieldCheck, ChevronRight, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookingModal from '../components/BookingModal';
import SEO, { breadcrumbSchema, serviceSchema, faqSchema } from '../components/SEO';

const FAQS = [
    {
        question: "How quickly can Catering District respond to an active Club Catering EOI or Tender?",
        answer: "We typically submit comprehensive, fully compliant tender responses within 7 to 14 business days. For urgent situations (such as sudden caterer liquidation or abandonment), our rapid-response team can review venue specifications and submit a commercial transition plan within 72 hours."
    },
    {
        question: "What information is included in your formal tender submission?",
        answer: "Our submissions include complete corporate background, executive CVs, certified HACCP food safety manuals, sample bistro & function menus with price points, projected 3-year P&L forecasts, award-compliant rostering models, marketing & member promotion strategies, and insurance certificates ($20M Public Liability)."
    },
    {
        question: "Can club boards request a formal presentation from Maz Islam?",
        answer: "Yes. Maz Islam and our senior operational team frequently present in person to Board of Directors meetings, Club Secretary Managers, and tender evaluation sub-committees across New South Wales."
    },
    {
        question: "How do we send our EOI or Tender specification documents to Catering District?",
        answer: "You can upload or email your EOI / RFT documents directly to contact@cateringdistrict.com.au or call Maz Islam directly on 0432 591 795 for an initial confidential discussion."
    }
];

export default function TendersEoi() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        clubName: '',
        contactName: '',
        role: '',
        phone: '',
        email: '',
        tenderClosingDate: '',
        notes: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await fetch('/api/enquiries', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.contactName,
                    email: formData.email,
                    phone: formData.phone,
                    clubName: formData.clubName,
                    tenderClosingDate: formData.tenderClosingDate,
                    message: formData.notes,
                    type: 'Club Catering Tender / EOI Brief'
                })
            });
        } catch (err) {
            console.error('Error submitting tender brief:', err);
        } finally {
            setIsSubmitting(false);
            setSubmitted(true);
        }
    };

    return (
        <div className="min-h-screen bg-[#ffffff] text-[#19355e]">
            <SEO
                title="Club Catering Tenders & EOI Responses NSW — Professional Submissions"
                description="Inviting catering tenders or Expressions of Interest (EOI)? Catering District delivers formal, board-ready submissions for NSW registered clubs and venues."
                path="/tenders-eoi"
                ogImage="/images/home-team.jpg"
                jsonLd={[
                    breadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'Tenders & EOI', url: '/tenders-eoi' },
                    ]),
                    serviceSchema({
                        name: 'Club Catering Tender and EOI Submissions',
                        description: 'Formal tender preparation, commercial feasibility, and Expression of Interest responses for NSW registered clubs.',
                        serviceType: 'Tender & Procurement',
                        url: '/tenders-eoi',
                    }),
                    faqSchema(FAQS),
                ]}
            />

            {/* Breadcrumb */}
            <div className="bg-[#f8f9fa] border-b border-[#19355e]/10 pt-24 pb-4 px-6">
                <div className="max-w-7xl mx-auto flex items-center space-x-2 text-xs text-[#19355e]/60">
                    <Link to="/" className="hover:text-[#64620B]">Home</Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-[#19355e] font-medium">Tenders &amp; EOI</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative py-20 px-6 bg-gradient-to-b from-[#0f2340] to-[#19355e] text-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#ffda8d] text-xs font-semibold uppercase tracking-wider mb-6">
                            <FileText className="w-3.5 h-3.5" />
                            Procurement &amp; Board Tenders
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-light leading-tight mb-6">
                            Club Catering Tender &amp; <br />
                            <span className="italic font-normal text-[#ffda8d]">EOI Submissions NSW</span>
                        </h1>
                        <p className="text-lg text-white/80 font-light leading-relaxed mb-8 max-w-2xl">
                            Is your Board or Management Committee going to market for a club caterer? Catering District delivers institutional-grade, commercially verified tender responses tailored to your club's charter.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#eoi-form"
                                className="inline-flex items-center justify-center space-x-3 bg-[#ffda8d] text-[#0f2340] px-8 py-4 text-xs uppercase tracking-[0.15em] font-semibold hover:bg-[#ffe8b3] transition-all rounded-sm shadow-lg"
                            >
                                <span>Invite Us to Your EOI</span>
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <button
                                onClick={() => setIsBookingOpen(true)}
                                className="inline-flex items-center justify-center space-x-3 border border-white/30 text-white px-8 py-4 text-xs uppercase tracking-[0.15em] hover:bg-white/10 transition-all rounded-sm cursor-pointer"
                            >
                                <span>Request Capability Statement</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                            <h3 className="text-xl font-serif mb-4 text-[#ffda8d]">Our Tender Commitments</h3>
                            <ul className="space-y-4 text-sm text-white/90">
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>Complete Compliance:</strong> Transparent financials, audited P&amp;Ls, and certified HACCP systems.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>Award-Mapped Rosters:</strong> Zero Fair Work grey areas; full compliance with Registered Clubs Award.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>Turnover Certainty:</strong> Commercial models that eliminate subsidies and safeguard cash flow.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-[#ffda8d] shrink-0 mt-0.5" />
                                    <span><strong>Board Presentations:</strong> Maz Islam attends board meetings in person to answer director questions.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* How We Respond to Tenders */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#64620B] mb-3">Structured Procurement</p>
                    <h2 className="text-3xl md:text-5xl font-serif font-light">
                        The Tender Evaluation <span className="italic">Framework</span>
                    </h2>
                    <p className="text-base text-[#19355e]/70 mt-4 leading-relaxed">
                        We respect the rigorous standards required by Club Boards, Chief Executives, and independent tender consultancies (such as Future Food Strategy and Tully Heard).
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="p-6 rounded-xl border border-[#19355e]/10 bg-[#fafaf8]">
                        <div className="w-10 h-10 rounded-full bg-[#64620B] text-white flex items-center justify-center font-bold text-sm mb-4">
                            01
                        </div>
                        <h3 className="text-lg font-serif mb-2 text-[#19355e]">Venue Inspection &amp; Audit</h3>
                        <p className="text-xs text-[#19355e]/70 leading-relaxed">
                            Confidential walkthrough to assess back-of-house workflow, kitchen plant health, equipment capex needs, and seating layouts.
                        </p>
                    </div>

                    <div className="p-6 rounded-xl border border-[#19355e]/10 bg-[#fafaf8]">
                        <div className="w-10 h-10 rounded-full bg-[#64620B] text-white flex items-center justify-center font-bold text-sm mb-4">
                            02
                        </div>
                        <h3 className="text-lg font-serif mb-2 text-[#19355e]">Financial Modeling</h3>
                        <p className="text-xs text-[#19355e]/70 leading-relaxed">
                            Bespoke commercial models: turnover percentage, fixed rental, or profit-share structures with transparent, auditable P&amp;L projections.
                        </p>
                    </div>

                    <div className="p-6 rounded-xl border border-[#19355e]/10 bg-[#fafaf8]">
                        <div className="w-10 h-10 rounded-full bg-[#64620B] text-white flex items-center justify-center font-bold text-sm mb-4">
                            03
                        </div>
                        <h3 className="text-lg font-serif mb-2 text-[#19355e]">Concept &amp; Demographic Match</h3>
                        <p className="text-xs text-[#19355e]/70 leading-relaxed">
                            Sample bistro, cafe, and function menus engineered specifically for the club's member base and local community demographics.
                        </p>
                    </div>

                    <div className="p-6 rounded-xl border border-[#19355e]/10 bg-[#fafaf8]">
                        <div className="w-10 h-10 rounded-full bg-[#64620B] text-white flex items-center justify-center font-bold text-sm mb-4">
                            04
                        </div>
                        <h3 className="text-lg font-serif mb-2 text-[#19355e]">Smooth Transition Plan</h3>
                        <p className="text-xs text-[#19355e]/70 leading-relaxed">
                            Seamless 30-day changeover plan guaranteeing zero downtime for members, full staff transfer protocols, and instant HACCP rollout.
                        </p>
                    </div>
                </div>
            </section>

            {/* Direct EOI Submission Form */}
            <section id="eoi-form" className="py-20 px-6 bg-[#fafaf8] border-y border-[#19355e]/10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#64620B] mb-2 block">Direct Procurement Desk</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">
                            Invite Catering District to Your <span className="italic">EOI / Tender</span>
                        </h2>
                        <p className="text-sm text-[#19355e]/70 max-w-lg mx-auto">
                            Submit your tender brief details below for an immediate, confidential response from Maz Islam.
                        </p>
                    </div>

                    {submitted ? (
                        <div className="p-8 bg-green-50 border border-green-200 rounded-xl text-center">
                            <Check className="w-12 h-12 text-green-600 mx-auto mb-4" />
                            <h3 className="text-xl font-serif text-green-900 mb-2">Tender Brief Received</h3>
                            <p className="text-sm text-green-800 max-w-md mx-auto mb-6">
                                Thank you for including Catering District in your procurement process. Maz Islam will review your documentation and get in touch within 24 hours.
                            </p>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="text-xs font-semibold text-green-900 uppercase tracking-wider underline"
                            >
                                Submit another inquiry
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-[#19355e]/10 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#19355e]/80 mb-2">
                                        Club / Venue Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="e.g. Parramatta Bowling Club"
                                        value={formData.clubName}
                                        onChange={(e) => setFormData({ ...formData, clubName: e.target.value })}
                                        className="w-full px-4 py-3 text-sm border border-[#19355e]/20 rounded-lg focus:outline-none focus:border-[#64620B]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#19355e]/80 mb-2">
                                        Your Name &amp; Title *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="e.g. John Smith, General Manager"
                                        value={formData.contactName}
                                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                                        className="w-full px-4 py-3 text-sm border border-[#19355e]/20 rounded-lg focus:outline-none focus:border-[#64620B]"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#19355e]/80 mb-2">
                                        Direct Phone *
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        placeholder="e.g. 0412 345 678"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full px-4 py-3 text-sm border border-[#19355e]/20 rounded-lg focus:outline-none focus:border-[#64620B]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#19355e]/80 mb-2">
                                        Official Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="gm@yourclub.com.au"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 text-sm border border-[#19355e]/20 rounded-lg focus:outline-none focus:border-[#64620B]"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-[#19355e]/80 mb-2">
                                    Tender / EOI Closing Date
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g. 30 October 2026 or Ongoing"
                                    value={formData.tenderClosingDate}
                                    onChange={(e) => setFormData({ ...formData, tenderClosingDate: e.target.value })}
                                    className="w-full px-4 py-3 text-sm border border-[#19355e]/20 rounded-lg focus:outline-none focus:border-[#64620B]"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-[#19355e]/80 mb-2">
                                    Scope &amp; Background Notes
                                </label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us about your venue, seating capacity, current bistro style, and what you are looking for in a catering partner..."
                                    value={formData.notes}
                                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                    className="w-full px-4 py-3 text-sm border border-[#19355e]/20 rounded-lg focus:outline-none focus:border-[#64620B]"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-[#64620B] text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#19355e] transition-colors rounded-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                            >
                                <Send className="w-4 h-4" />
                                <span>{isSubmitting ? 'Submitting to contact@cateringdistrict.com.au...' : 'Submit Tender Brief to Catering District'}</span>
                            </button>

                            <p className="text-center text-xs text-[#19355e]/60">
                                All submissions and preliminary discussions are treated with strict board-level confidentiality.
                            </p>
                        </form>
                    )}

                    {/* Direct Contact Bar */}
                    <div className="mt-12 p-6 bg-white rounded-xl border border-[#19355e]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                        <div>
                            <h4 className="font-serif font-medium text-base text-[#19355e]">Prefer direct executive contact?</h4>
                            <p className="text-xs text-[#19355e]/70">Contact Maz Islam directly for urgent tender questions.</p>
                        </div>
                        <div className="flex items-center gap-6">
                            <a href="tel:0432591795" className="flex items-center gap-2 text-xs font-semibold text-[#64620B] hover:underline">
                                <Phone className="w-4 h-4" />
                                <span>0432 591 795</span>
                            </a>
                            <a href="mailto:contact@cateringdistrict.com.au" className="flex items-center gap-2 text-xs font-semibold text-[#64620B] hover:underline">
                                <Mail className="w-4 h-4" />
                                <span>contact@cateringdistrict.com.au</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 px-6 max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#64620B] mb-3">Tender Process</p>
                    <h2 className="text-3xl font-serif font-light">
                        Frequently Asked Questions by <span className="italic">Evaluation Committees</span>
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
