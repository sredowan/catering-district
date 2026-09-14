import { useState } from 'react';
import { ArrowRight, Check, Calendar, Clock, User, ChevronRight, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookingModal from '../../components/BookingModal';
import SEO, { breadcrumbSchema, articleSchema, faqSchema } from '../../components/SEO';

const FAQS = [
    {
        question: "Why do so many in-house club kitchens run at an unbudgeted loss?",
        answer: "Club benchmarking reports indicate approximately 70% of registered clubs subsidize their food operations. In-house operations face severe labour penalties under the Registered Clubs Award, unhedged food price inflation, unpredictable customer volume variations, and high chef turnover."
    },
    {
        question: "What is the greatest financial risk of in-house kitchen operations?",
        answer: "Labour volatility. On weekends and public holidays, penalty rates increase labour costs by up to 32% compared to standard restaurants. When bad weather keeps members away, an in-house kitchen bears the entire fixed labour burden."
    },
    {
        question: "How does contract catering protect the Club Board's governance?",
        answer: "By contractually transferring employer liabilities, WHS responsibilities, and day-to-day food safety compliance to a professional, accredited operator with specialized operational systems."
    }
];

export default function InHouseVsContractCatering() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#ffffff] text-[#19355e]">
            <SEO
                title="In-House vs. Contract Catering for Registered Clubs: Board Guide NSW"
                description="Comprehensive guide for NSW Club Directors and General Managers: comparing in-house kitchen risks against professional contract catering models."
                path="/insights/in-house-vs-contract-catering-clubs"
                ogType="article"
                ogImage="/images/home-team.jpg"
                jsonLd={[
                    breadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'Insights', url: '/insights' },
                        { name: 'In-House vs Contract Catering', url: '/insights/in-house-vs-contract-catering-clubs' },
                    ]),
                    articleSchema({
                        title: 'In-House vs. Contract Catering for Registered Clubs: What NSW Boards Need to Know',
                        description: 'Detailed analysis of kitchen subsidies, Registered Clubs Award penalty rates, and commercial risk transfer for club directors.',
                        path: '/insights/in-house-vs-contract-catering-clubs',
                        datePublished: '2026-09-01T08:00:00+10:00',
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
                    <span className="text-[#19355e] font-medium">In-House vs. Contract Catering</span>
                </div>
            </div>

            <article className="py-16 px-6 max-w-4xl mx-auto">
                <div className="mb-10">
                    <span className="bg-[#64620B]/10 text-[#64620B] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                        Governance &amp; Strategy
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif font-light mt-4 mb-6 leading-tight text-[#19355e]">
                        In-House vs. Contract Catering for Registered Clubs: What NSW Boards Need to Know
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
                            7 min read
                        </span>
                    </div>
                </div>

                <div className="prose max-w-none text-base text-[#19355e]/80 leading-relaxed space-y-6">
                    <p className="text-lg font-light leading-relaxed text-[#19355e]">
                        Across New South Wales, hundreds of registered clubs are confronting an uncomfortable reality: food and beverage operations, once seen as an automatic amenity for members, are consuming an unsustainable share of club operating cash flow.
                    </p>

                    <div className="my-8 p-6 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl">
                        <div className="flex items-start gap-3">
                            <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                            <div>
                                <h3 className="text-sm font-semibold text-amber-900 mb-1">The 70% Club Benchmark</h3>
                                <p className="text-xs text-amber-800 leading-relaxed">
                                    According to national club industry benchmarking, roughly 70% of registered club venues subsidize their food operations out of gaming machine profits or membership dues. In an era of regulatory reform and rising operational costs, continuing to subsidize an inefficient kitchen is an unnecessary board liability.
                                </p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-2xl font-serif text-[#19355e] pt-4">The Realities of In-House Kitchen Management</h2>
                    <p>
                        When a club operates its kitchen in-house, the Board of Directors and the General Manager assume direct executive responsibility for every operational risk:
                    </p>
                    <ul className="space-y-2 list-disc pl-6 text-sm">
                        <li><strong>Fixed Labour Costs:</strong> Head chefs, sous chefs, and kitchen attendants are permanent club employees. When trade drops due to poor weather or midweek lulls, wages remain fixed.</li>
                        <li><strong>Award Penalties:</strong> Under the Registered Clubs Award [MA000058], weekend and public holiday penalty rates push kitchen wage costs up to 32% higher than standalone restaurants.</li>
                        <li><strong>Recruitment Fatigue:</strong> In an industry with severe chef shortages, finding and retaining talented culinary staff drains hours of GM and HR time.</li>
                        <li><strong>Procurement Squeeze:</strong> Single-venue clubs lack the bargaining power to secure wholesale tier-one supplier rebates, resulting in food costs escalating past 36%.</li>
                    </ul>

                    <h2 className="text-2xl font-serif text-[#19355e] pt-4">How Contract Catering Restructures the Equation</h2>
                    <p>
                        Contract catering is not merely outsourcing cooking; it is a structured financial risk transfer. When a club engages an accredited operator like Catering District, the financial dynamic shifts:
                    </p>
                    <ul className="space-y-2 list-disc pl-6 text-sm">
                        <li><strong>Labour Liability Transferred:</strong> Staff are employed directly by the caterer, removing workers comp, leave accruals, and unfair dismissal exposures from the club balance sheet.</li>
                        <li><strong>Predictable Revenue:</strong> Under a turnover lease or hybrid agreement, the club receives a predictable return on food turnover rather than absorbing weekly losses.</li>
                        <li><strong>Accredited Food Safety:</strong> Operations are audited by certified HACCP auditors, giving the board absolute confidence during local council health inspections.</li>
                    </ul>

                    <h2 className="text-2xl font-serif text-[#19355e] pt-4">Key Questions for the Next Board Meeting</h2>
                    <p>
                        Before your board resolves to continue funding kitchen subsidies or sign another short-term lease, consider these four governance questions:
                    </p>
                    <ol className="space-y-3 list-decimal pl-6 text-sm">
                        <li>What is the true net cost of our kitchen once utilities, cleaning, POS maintenance, and award penalty rates are accounted for?</li>
                        <li>Are our kitchen food safety logs fully compliant with NSW Food Authority standards if an audit occurred tomorrow morning?</li>
                        <li>Does our current bistro format attract younger family demographics, or is patronage slowly dwindling?</li>
                        <li>Could a structured contract catering partnership eliminate our catering losses while elevating food quality?</li>
                    </ol>
                </div>

                <div className="mt-12 p-8 bg-[#fafaf8] border border-[#19355e]/10 rounded-2xl text-center">
                    <h3 className="text-xl font-serif mb-2 text-[#19355e]">Request a Confidential Board Appraisal</h3>
                    <p className="text-sm text-[#19355e]/70 max-w-lg mx-auto mb-6">
                        Maz Islam regularly assists Club General Managers and Boards with independent operational reviews and contract feasibility comparisons.
                    </p>
                    <button
                        onClick={() => setIsBookingOpen(true)}
                        className="bg-[#64620B] text-white px-8 py-3.5 text-xs uppercase tracking-wider font-semibold rounded-lg hover:bg-[#19355e] transition-colors cursor-pointer"
                    >
                        Schedule an Appraisal Discussion
                    </button>
                </div>
            </article>

            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </div>
    );
}
