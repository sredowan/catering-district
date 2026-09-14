import { ArrowRight, BookOpen, Clock, ChevronRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO, { breadcrumbSchema } from '../../components/SEO';

export const INSIGHTS_ARTICLES = [
    {
        title: "In-House vs. Contract Catering for Registered Clubs: What NSW Boards Need to Know",
        slug: "in-house-vs-contract-catering-clubs",
        readTime: "7 min read",
        date: "September 2026",
        category: "Governance & Strategy",
        excerpt: "Why ~70% of in-house club kitchens run at an unbudgeted loss, and how contract catering transfers labour liability and food cost risk off the board's balance sheet."
    },
    {
        title: "How NSW Clubs Turn Underperforming Bistros into Profitable Operations",
        slug: "how-to-run-a-profitable-club-bistro",
        readTime: "8 min read",
        date: "September 2026",
        category: "F&B Operations",
        excerpt: "The 32% penalty rate challenge under the Registered Clubs Award, menu engineering secrets, portion control, and ticket speed strategies that protect margins."
    },
    {
        title: "A Club Director's Guide to Running a Successful Catering EOI & Tender in NSW",
        slug: "club-catering-eoi-tender-guide",
        readTime: "10 min read",
        date: "September 2026",
        category: "Procurement & Tenders",
        excerpt: "Step-by-step roadmap for General Managers and Boards preparing to go to market: writing specifications, scoring matrices, and avoiding catastrophic caterer transitions."
    },
    {
        title: "HACCP & NSW Food Authority Compliance: Kitchen Risk Management for Clubs",
        slug: "haccp-food-safety-compliance-nsw-clubs",
        readTime: "6 min read",
        date: "September 2026",
        category: "Compliance & Safety",
        excerpt: "Director statutory liability under the NSW Food Act, digital temperature monitoring, allergen management, and how certified auditing protects your liquor and gaming license."
    }
];

export default function InsightsHub() {
    return (
        <div className="min-h-screen bg-[#ffffff] text-[#19355e]">
            <SEO
                title="Club Industry Insights & Whitepapers NSW — Catering District"
                description="Strategic advice, operational frameworks, and compliance guides for NSW club CEOs, General Managers, and Board Directors."
                path="/insights"
                ogImage="/images/home-team.jpg"
                jsonLd={[
                    breadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'Insights', url: '/insights' },
                    ])
                ]}
            />

            {/* Breadcrumb */}
            <div className="bg-[#f8f9fa] border-b border-[#19355e]/10 pt-24 pb-4 px-6">
                <div className="max-w-7xl mx-auto flex items-center space-x-2 text-xs text-[#19355e]/60">
                    <Link to="/" className="hover:text-[#64620B]">Home</Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-[#19355e] font-medium">Executive Insights</span>
                </div>
            </div>

            {/* Hero */}
            <section className="py-20 px-6 bg-gradient-to-b from-[#0f2340] to-[#19355e] text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#ffda8d] mb-4 block">
                        Executive Knowledge Hub
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-light leading-tight mb-6">
                        NSW Club Hospitality <br />
                        <span className="italic font-normal text-[#ffda8d]">Strategy, Margin &amp; Governance</span>
                    </h1>
                    <p className="text-lg text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
                        In-depth operational analysis and regulatory roadmaps written specifically for Club General Managers, Secretary Managers, and Board Directors.
                    </p>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {INSIGHTS_ARTICLES.map((article, i) => (
                        <article key={i} className="p-8 rounded-2xl border border-[#19355e]/10 bg-[#fafaf8] flex flex-col justify-between hover:shadow-xl transition-all">
                            <div>
                                <div className="flex items-center gap-3 text-xs text-[#19355e]/60 mb-4">
                                    <span className="bg-[#64620B]/10 text-[#64620B] font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                                        {article.category}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-3.5 h-3.5" />
                                        {article.readTime}
                                    </span>
                                    <span>•</span>
                                    <span>{article.date}</span>
                                </div>
                                <h2 className="text-2xl font-serif mb-3 text-[#19355e] leading-snug">
                                    <Link to={`/insights/${article.slug}`} className="hover:text-[#64620B] transition-colors">
                                        {article.title}
                                    </Link>
                                </h2>
                                <p className="text-sm text-[#19355e]/70 leading-relaxed mb-6">
                                    {article.excerpt}
                                </p>
                            </div>
                            <div className="pt-4 border-t border-[#19355e]/10 flex items-center justify-between">
                                <div className="flex items-center gap-2 text-xs text-[#19355e]/60">
                                    <User className="w-3.5 h-3.5 text-[#64620B]" />
                                    <span>Maz Islam, JP &amp; Auditor</span>
                                </div>
                                <Link
                                    to={`/insights/${article.slug}`}
                                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#64620B] hover:text-[#19355e] transition-colors"
                                >
                                    <span>Read Full Guide</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}
