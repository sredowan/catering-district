import { useState } from 'react';
import { ArrowRight, Calendar, Clock, User, ChevronRight, TrendingUp, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookingModal from '../../components/BookingModal';
import SEO, { breadcrumbSchema, articleSchema, faqSchema } from '../../components/SEO';

const FAQS = [
    {
        question: "What target food cost percentage should a club bistro aim for?",
        answer: "A well-managed club bistro should maintain food costs strictly between 28% and 32%. Operating above 34% usually points to poor yield tracking, uncontrolled portion sizes, kitchen theft, or unhedged supplier price increases."
    },
    {
        question: "How do you control labour costs against the Registered Clubs Award?",
        answer: "By deploying tiered mise-en-place prep shifts during weekdays at standard hourly rates, minimizing overtime, and configuring high-speed ticket lines during peak weekend shifts to maximize revenue per staff hour."
    }
];

export default function ProfitableClubBistro() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#ffffff] text-[#19355e]">
            <SEO
                title="How NSW Clubs Turn Underperforming Bistros into Profitable Operations"
                description="Practical operational guide for club managers: menu engineering, Registered Clubs Award labour control, and food cost containment."
                path="/insights/how-to-run-a-profitable-club-bistro"
                ogType="article"
                ogImage="/images/home-pastry.jpg"
                jsonLd={[
                    breadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'Insights', url: '/insights' },
                        { name: 'Profitable Club Bistro', url: '/insights/how-to-run-a-profitable-club-bistro' },
                    ]),
                    articleSchema({
                        title: 'How NSW Clubs Turn Underperforming Bistros into Profitable Operations',
                        description: 'Detailed operational breakdown of menu engineering, portion control, and Fair Work rostering in club kitchens.',
                        path: '/insights/how-to-run-a-profitable-club-bistro',
                        datePublished: '2026-09-05T08:00:00+10:00',
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
                    <span className="text-[#19355e] font-medium">Profitable Club Bistro</span>
                </div>
            </div>

            <article className="py-16 px-6 max-w-4xl mx-auto">
                <div className="mb-10">
                    <span className="bg-[#64620B]/10 text-[#64620B] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                        F&amp;B Operations
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif font-light mt-4 mb-6 leading-tight text-[#19355e]">
                        How NSW Clubs Turn Underperforming Bistros into Profitable Operations
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
                            8 min read
                        </span>
                    </div>
                </div>

                <div className="prose max-w-none text-base text-[#19355e]/80 leading-relaxed space-y-6">
                    <p className="text-lg font-light leading-relaxed text-[#19355e]">
                        Running a profitable club bistro in New South Wales requires walking a razor-thin tightrope between member value expectations and unrelenting back-of-house cost pressures.
                    </p>

                    <h2 className="text-2xl font-serif text-[#19355e] pt-4">1. The Menu Engineering Matrix (The Boston Matrix for Bistros)</h2>
                    <p>
                        Every item on a club bistro menu should be categorized based on two parameters: **Popularity (sales volume)** and **Contribution Margin (gross dollar profit)**:
                    </p>
                    <ul className="space-y-2 list-disc pl-6 text-sm">
                        <li><strong>Stars (High Volume, High Margin):</strong> Must be given prime visual real estate on the printed and digital menu boards (e.g. signature burgers, premium steaks with high markup).</li>
                        <li><strong>Plowhorses (High Volume, Low Margin):</strong> Club staples like chicken schnitzels and fish &amp; chips. Re-engineer recipes, adjust side salads, or secure bulk protein pricing to convert these into Stars.</li>
                        <li><strong>Puzzles (Low Volume, High Margin):</strong> Often premium seafood specials or artisanal pastas. Re-train floor staff to proactively suggest these dishes to members.</li>
                        <li><strong>Dogs (Low Volume, Low Margin):</strong> Remove immediately. These create prep waste and slow ticket times down.</li>
                    </ul>

                    <h2 className="text-2xl font-serif text-[#19355e] pt-4">2. Navigating the 32% Award Penalty Squeeze</h2>
                    <p>
                        The Registered Clubs Award [MA000058] imposes substantial penalty multipliers for weekend, evening, and public holiday work. Profitable operators do not fight the award; they engineer around it:
                    </p>
                    <ul className="space-y-2 list-disc pl-6 text-sm">
                        <li><strong>Batch Prep at Base Rates:</strong> High-labor tasks (sauces, jus, peeling, crumbing, smoking) are performed during standard weekday morning shifts when base pay applies.</li>
                        <li><strong>Assembly-Line Service:</strong> Weekend peak shifts are staffed for speed and assembly rather than raw fabrication, keeping kitchen hours lean during high-penalty windows.</li>
                    </ul>

                    <h2 className="text-2xl font-serif text-[#19355e] pt-4">3. Ticket Speed Pacing: The Key to Wet Spend</h2>
                    <p>
                        In a licensed club, food service and beverage turnover are intrinsically linked. If ticket times drag past 30 minutes, patrons become frustrated, poker machine and bingo players leave, and bar turnover stalls. Keeping ticket times under 15 minutes keeps members relaxed, happy, and spending at the bar.
                    </p>
                </div>

                <div className="mt-12 p-8 bg-[#fafaf8] border border-[#19355e]/10 rounded-2xl text-center">
                    <h3 className="text-xl font-serif mb-2 text-[#19355e]">Evaluate Your Bistro's Operational Ratios</h3>
                    <p className="text-sm text-[#19355e]/70 max-w-lg mx-auto mb-6">
                        Catering District provides comprehensive operational benchmarking and kitchen reviews for licensed clubs across NSW.
                    </p>
                    <button
                        onClick={() => setIsBookingOpen(true)}
                        className="bg-[#64620B] text-white px-8 py-3.5 text-xs uppercase tracking-wider font-semibold rounded-lg hover:bg-[#19355e] transition-colors cursor-pointer"
                    >
                        Request a Bistro Benchmark Audit
                    </button>
                </div>
            </article>

            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </div>
    );
}
