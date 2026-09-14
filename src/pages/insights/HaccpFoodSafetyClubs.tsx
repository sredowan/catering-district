import { useState } from 'react';
import { ArrowRight, Calendar, Clock, User, ChevronRight, ShieldCheck, AlertOctagon } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookingModal from '../../components/BookingModal';
import SEO, { breadcrumbSchema, articleSchema, faqSchema } from '../../components/SEO';

const FAQS = [
    {
        question: "What are the new Food Standard 3.2.2A requirements for NSW clubs?",
        answer: "Under Standard 3.2.2A, Category 1 food businesses (including club bistros) must implement three food safety management tools: certified Food Safety Supervisors, demonstrated food handler skills and knowledge, and documented verification of critical food safety controls (temperature logs, sanitising procedures)."
    },
    {
        question: "Can Club Directors be held personally liable for food safety breaches?",
        answer: "Yes. Under the NSW Food Act 2003, executive officers and directors can be held liable for food safety failures occurring within their licensed premises if due diligence was not exercised to prevent the contravention."
    }
];

export default function HaccpFoodSafetyClubs() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#ffffff] text-[#19355e]">
            <SEO
                title="HACCP & NSW Food Authority Compliance: Club Risk Guide — Catering District"
                description="Crucial compliance guide for NSW Club Directors: Standard 3.2.2A, HACCP digital logs, allergen safety, and mitigating director liability."
                path="/insights/haccp-food-safety-compliance-nsw-clubs"
                ogType="article"
                ogImage="/images/home-team.jpg"
                jsonLd={[
                    breadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'Insights', url: '/insights' },
                        { name: 'HACCP Food Safety Compliance', url: '/insights/haccp-food-safety-compliance-nsw-clubs' },
                    ]),
                    articleSchema({
                        title: 'HACCP & NSW Food Authority Compliance: Kitchen Risk Management for Clubs',
                        description: 'Detailed analysis of director statutory liabilities, Food Standard 3.2.2A, and certified auditing systems for registered clubs.',
                        path: '/insights/haccp-food-safety-compliance-nsw-clubs',
                        datePublished: '2026-09-10T08:00:00+10:00',
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
                    <span className="text-[#19355e] font-medium">HACCP &amp; Food Safety Compliance</span>
                </div>
            </div>

            <article className="py-16 px-6 max-w-4xl mx-auto">
                <div className="mb-10">
                    <span className="bg-[#64620B]/10 text-[#64620B] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                        Compliance &amp; Safety
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif font-light mt-4 mb-6 leading-tight text-[#19355e]">
                        HACCP &amp; NSW Food Authority Compliance: Kitchen Risk Management for Clubs
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
                            6 min read
                        </span>
                    </div>
                </div>

                <div className="prose max-w-none text-base text-[#19355e]/80 leading-relaxed space-y-6">
                    <p className="text-lg font-light leading-relaxed text-[#19355e]">
                        In licensed club management, food safety is not just a kitchen operational matter—it is a core governance responsibility. A single outbreak of foodborne illness or a penalty notice published on the NSW Food Authority register damages decades of community goodwill in hours.
                    </p>

                    <div className="my-8 p-6 bg-red-50 border-l-4 border-red-500 rounded-r-xl">
                        <div className="flex items-start gap-3">
                            <AlertOctagon className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
                            <div>
                                <h3 className="text-sm font-semibold text-red-900 mb-1">Director Statutory Duty of Care</h3>
                                <p className="text-xs text-red-800 leading-relaxed">
                                    Under the NSW Food Act 2003, executive officers of registered clubs are legally deemed to have committed an offence if the club contravenes food safety laws, unless they can prove due diligence was actively exercised.
                                </p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-2xl font-serif text-[#19355e] pt-4">1. Understanding Standard 3.2.2A Requirements</h2>
                    <p>
                        The introduction of Standard 3.2.2A across Australia mandates that club bistros maintain verifiable records demonstrating compliance across three critical areas:
                    </p>
                    <ul className="space-y-2 list-disc pl-6 text-sm">
                        <li><strong>Food Safety Supervisor (FSS):</strong> A fully certified supervisor with current NSW credentials must actively oversee food handling.</li>
                        <li><strong>Food Handler Competency:</strong> All kitchen staff must have documented training in safe food handling, cross-contamination, and personal hygiene.</li>
                        <li><strong>Evidence Tool Records:</strong> Time and temperature logs for cooking, cooling, hot holding, reheating, and thermometer calibration must be maintained daily.</li>
                    </ul>

                    <h2 className="text-2xl font-serif text-[#19355e] pt-4">2. Digital HACCP vs. Paper Binders</h2>
                    <p>
                        Traditional paper temperature logs are notoriously prone to falsification ("pencil whipping") right before council inspections. In modern club kitchens, Catering District enforces digital HACCP probe systems with Bluetooth connectivity, automated cloud logging, and instant alerts when refrigeration units exceed safe thresholds.
                    </p>

                    <h2 className="text-2xl font-serif text-[#19355e] pt-4">3. Allergen Safety Protocols</h2>
                    <p>
                        With severe food allergies increasing, clubs must maintain unambiguous allergen mapping. Our kitchens utilize dedicated prep zones for gluten-free and allergen-free meal assembly, preventing inadvertent cross-contact that could trigger an emergency anaphylactic incident.
                    </p>
                </div>

                <div className="mt-12 p-8 bg-[#fafaf8] border border-[#19355e]/10 rounded-2xl text-center">
                    <h3 className="text-xl font-serif mb-2 text-[#19355e]">Request a Confidential Kitchen Compliance Review</h3>
                    <p className="text-sm text-[#19355e]/70 max-w-lg mx-auto mb-6">
                        Maz Islam (Diploma in Quality Auditing, Certified HACCP Auditor) conducts independent kitchen audits for Club Boards across NSW.
                    </p>
                    <button
                        onClick={() => setIsBookingOpen(true)}
                        className="bg-[#64620B] text-white px-8 py-3.5 text-xs uppercase tracking-wider font-semibold rounded-lg hover:bg-[#19355e] transition-colors cursor-pointer"
                    >
                        Book a Compliance Audit
                    </button>
                </div>
            </article>

            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </div>
    );
}
