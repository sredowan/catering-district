import { useState } from 'react';
import { ArrowRight, Calendar, Clock, User, ChevronRight, FileText, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookingModal from '../../components/BookingModal';
import SEO, { breadcrumbSchema, articleSchema, faqSchema } from '../../components/SEO';

const FAQS = [
    {
        question: "How long should a club allow for an EOI and tender process?",
        answer: "A standard, thorough tender process typically requires 8 to 12 weeks: 2 weeks for specification drafting, 4 weeks for market response, 2 weeks for evaluation and interviews, and 4 weeks for transition and handover."
    },
    {
        question: "What are the common pitfalls club boards make when selecting a caterer?",
        answer: "The two most frequent mistakes are (1) choosing the highest promised rental percentage without auditing whether the caterer's food pricing can sustain it, and (2) failing to verify the operator's HACCP food safety audit record and worker award compliance."
    }
];

export default function ClubCateringEoiGuide() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#ffffff] text-[#19355e]">
            <SEO
                title="A Club Director's Guide to Catering EOIs & Tenders in NSW — Catering District"
                description="Comprehensive procurement guide for NSW Club Boards and General Managers: structuring Expression of Interest documents and selecting a catering operator."
                path="/insights/club-catering-eoi-tender-guide"
                ogType="article"
                ogImage="/images/home-team.jpg"
                jsonLd={[
                    breadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'Insights', url: '/insights' },
                        { name: 'Catering EOI & Tender Guide', url: '/insights/club-catering-eoi-tender-guide' },
                    ]),
                    articleSchema({
                        title: "A Club Director's Guide to Running a Successful Catering EOI & Tender in NSW",
                        description: 'Step-by-step roadmap for General Managers and Boards: tender specifications, evaluation matrices, and transition risk management.',
                        path: '/insights/club-catering-eoi-tender-guide',
                        datePublished: '2026-09-08T08:00:00+10:00',
                        authorName: 'Maz Islam',
                    }),
                    faqSchema(FAQS),
                ]}
            />

            <div className="bg-[#f8f9fa] border-b border-[#19355e]/10 pt-24 pb-4 px-6">
                <div className="max-w-4xl mx-auto flex items-center space-x-2 text-xs text-[#19355e]/60">
                    <Link to="/" className="hover:text-[#64620B]">Home</Link>
                    <ChevronRight className="w-3 h-3" />
                    <Link to="/insights" className="hover:text-[#64620B]">Insights</Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-[#19355e] font-medium">Catering Tender &amp; EOI Guide</span>
                </div>
            </div>

            <article className="py-16 px-6 max-w-4xl mx-auto">
                <div className="mb-10">
                    <span className="bg-[#64620B]/10 text-[#64620B] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                        Procurement &amp; Tenders
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif font-light mt-4 mb-6 leading-tight text-[#19355e]">
                        A Club Director's Guide to Running a Successful Catering EOI &amp; Tender in NSW
                    </h1>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-[#19355e]/70 pb-6 border-b border-[#19355e]/10">
                        <span className="flex items-center gap-1 font-medium">
                            <User className="w-3.5 h-3.5 text-[#64620B]" />
                            Maz Islam, JP &amp; Food Safety Auditor
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            September 2026
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            10 min read
                        </span>
                    </div>
                </div>

                <div className="prose max-w-none text-base text-[#19355e]/80 leading-relaxed space-y-6">
                    <p className="text-lg font-light leading-relaxed text-[#19355e]">
                        Going to market for a club contract caterer is one of the most consequential decisions a Club Board and General Manager will ever make. A successful partnership revitalizes club patronage and cash flow; a flawed choice leads to member rebellion, financial collapse, and brand damage.
                    </p>

                    <h2 className="text-2xl font-serif text-[#19355e] pt-4">Stage 1: Developing the Venue Specification</h2>
                    <p>
                        A clear tender begins with transparent disclosure. Before publishing your Expression of Interest (EOI), prepare an accurate operational brief covering:
                    </p>
                    <ul className="space-y-2 list-disc pl-6 text-sm">
                        <li>Historical weekly covers and revenue breakdown (bistro, cafe, functions).</li>
                        <li>An audited asset register of club-owned kitchen equipment and refrigeration condition.</li>
                        <li>Current member demographic profile (age distributions, peak trading sessions, sports affiliations).</li>
                        <li>Expectations regarding utility contributions, POS integration, and cleaning responsibilities.</li>
                    </ul>

                    <h2 className="text-2xl font-serif text-[#19355e] pt-4">Stage 2: Structuring the Weighted Evaluation Matrix</h2>
                    <p>
                        Never evaluate tender proposals solely on the highest percentage of rental turnover promised. Operators promising unrealistic 15–20% rental returns frequently cut food quality, underpay staff, or abandon the contract within six months. Use a balanced scoring matrix:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 text-xs">
                        <div className="p-4 bg-[#fafaf8] border border-[#19355e]/10 rounded-xl">
                            <strong className="text-[#19355e] block mb-1">Commercial Sustainability (25%)</strong>
                            Realistic P&amp;L model, sensible rental structure, and financial stability of the operating entity.
                        </div>
                        <div className="p-4 bg-[#fafaf8] border border-[#19355e]/10 rounded-xl">
                            <strong className="text-[#19355e] block mb-1">Culinary &amp; Member Fit (30%)</strong>
                            Demonstrated understanding of club member preferences, pricing tiers, and modern blackboard appeal.
                        </div>
                        <div className="p-4 bg-[#fafaf8] border border-[#19355e]/10 rounded-xl">
                            <strong className="text-[#19355e] block mb-1">Compliance &amp; Systems (25%)</strong>
                            Certified HACCP food safety protocols, Fair Work award compliance, and $20M liability coverage.
                        </div>
                        <div className="p-4 bg-[#fafaf8] border border-[#19355e]/10 rounded-xl">
                            <strong className="text-[#19355e] block mb-1">Track Record &amp; Leadership (20%)</strong>
                            Proven leadership, hands-on executive accountability, and positive references from industry peers.
                        </div>
                    </div>

                    <h2 className="text-2xl font-serif text-[#19355e] pt-4">Stage 3: Managing the 30-Day Transition</h2>
                    <p>
                        The transition window between outgoing and incoming caterers is where clubs suffer the most reputational damage. Ensure your tender contract mandates a detailed 30-day handover plan with clear staff interview provisions and zero operational closure days.
                    </p>
                </div>

                <div className="mt-12 p-8 bg-[#fafaf8] border border-[#19355e]/10 rounded-2xl text-center">
                    <h3 className="text-xl font-serif mb-2 text-[#19355e]">Planning a Catering EOI for Your Club?</h3>
                    <p className="text-sm text-[#19355e]/70 max-w-lg mx-auto mb-6">
                        Invite Catering District to participate in your upcoming tender or schedule a preliminary executive discussion with Maz Islam.
                    </p>
                    <Link
                        to="/tenders-eoi"
                        className="inline-flex items-center gap-2 bg-[#64620B] text-white px-8 py-3.5 text-xs uppercase tracking-wider font-semibold rounded-lg hover:bg-[#19355e] transition-colors"
                    >
                        <span>Go to Tender &amp; EOI Portal</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </article>

            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </div>
    );
}
