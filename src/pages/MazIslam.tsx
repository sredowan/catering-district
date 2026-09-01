import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    ArrowUpRight,
    Award,
    Building2,
    ChefHat,
    ClipboardList,
    Mail,
    ShieldCheck,
    Sparkles,
    Users,
} from 'lucide-react';
import SEO, { breadcrumbSchema, personSchema } from '../components/SEO';

/* ─── Content ─── */

const STATS = [
    { value: '19+', label: 'Years in Hospitality' },
    { value: '3', label: 'Ventures Founded' },
    { value: '6', label: 'Qualifications Held' },
    { value: 'NSW', label: 'Clubs & Venues Served' },
];

const EXPERTISE = [
    'Club & Golf Club Catering',
    'Restaurant & Café Operations',
    'Function & Wedding Catering',
    'Commercial Kitchen Management',
    'Menu Engineering & Food Cost Control',
    'Team Leadership & Rostering',
    'HACCP & Food Safety Compliance',
    'Business Growth & Operational Improvement',
];

const DELIVERS = [
    {
        icon: <Sparkles className="w-4 h-4" />,
        title: 'Profitable kitchen operations',
        body: 'Turns underperforming kitchens into profitable business units with disciplined cost control.',
    },
    {
        icon: <ClipboardList className="w-4 h-4" />,
        title: 'Stronger F&B margins',
        body: 'Improves margins through menu engineering, supplier negotiation, and waste reduction.',
    },
    {
        icon: <ChefHat className="w-4 h-4" />,
        title: 'High-volume catering',
        body: 'Delivers multicultural weddings and events at scale without compromising consistency.',
    },
    {
        icon: <ShieldCheck className="w-4 h-4" />,
        title: 'Audit-ready compliance',
        body: 'Maintains HACCP, NSW Food Authority, and WHS standards ready for inspection at any time.',
    },
    {
        icon: <Users className="w-4 h-4" />,
        title: 'Disciplined teams',
        body: 'Builds capable kitchen teams and efficient rostering systems that hold up under pressure.',
    },
    {
        icon: <Building2 className="w-4 h-4" />,
        title: 'Scalable frameworks',
        body: 'Implements structured operating frameworks that scale across multiple venues.',
    },
];

const VENTURES = [
    {
        role: 'Founder & Director',
        org: 'Catering District Pty Ltd',
        period: '2026 — Present',
        url: 'https://cateringdistrict.com.au/',
        points: [
            'Complete catering management for clubs, golf clubs, cafés and hospitality venues — kitchen operations, staffing, and menu development.',
            'Menu optimisation, cost reduction, and revenue improvement strategies.',
            'Full compliance, audit readiness, and performance consistency.',
        ],
    },
    {
        role: 'Founder & Director',
        org: 'Future Chefs Pty Ltd',
        period: '2023 — Present',
        url: 'https://futurechefs.com.au/',
        points: [
            'Established and operates a Class 9B commercial kitchen facility.',
            'Designed governance, WHS, and compliance systems from the ground up.',
            'Partners with RTOs and industry stakeholders for consistent utilisation.',
        ],
    },
    {
        role: 'Founder & Director',
        org: 'Industry Placement Solutions',
        period: '2020 — 2025',
        url: 'https://ipsaustralia.com.au/',
        points: [
            'Delivered workforce and training solutions across clubs and hospitality operators.',
            'Built compliance-driven induction and workforce readiness systems.',
            'Established reliable staffing pipelines through industry relationships.',
        ],
    },
];

const CAREER = [
    {
        role: 'Relief Kitchen Manager',
        org: 'On Point Catering Solutions Pty Ltd',
        location: 'Moorebank, NSW',
        period: '2023 — Current',
        body: 'On-call relief management across licensed clubs and hospitality venues — covering Kitchen Manager, Catering Manager, and Front of House roles through leave and peak trading. Works directly with Club CEOs and Venue Managers on operational excellence, compliance, and profitability.',
    },
    {
        role: 'Hospitality Manager',
        org: 'Jesmond Aged Care',
        location: 'Strathfield, NSW',
        period: '2013 — 2022',
        body: 'Managed large-scale catering operations with full budget responsibility, ensuring compliance with NSW Health and food safety standards while overseeing staffing, procurement, and operational performance.',
    },
    {
        role: 'Head Chef',
        org: 'Crossroads Hotel',
        location: 'Casula, NSW',
        period: '2010 — 2013',
        body: 'Led high-volume kitchen and function operations servicing daily trade and large events. Implemented cost controls that improved stock accuracy and reduced waste, strengthened HACCP compliance, and built kitchen teams around service consistency.',
    },
    {
        role: 'Airline Catering',
        org: 'Qantas Airline Catering',
        location: 'Mascot, NSW',
        period: 'Early career',
        body: 'Operated within high-volume, time-critical food production under strict quality assurance and efficiency systems — exposure to international standards and large-scale catering logistics.',
    },
];

const QUALIFICATIONS = [
    'Advanced Diploma of Hospitality Management',
    'Diploma of Quality Auditing',
    'Certificate IV in Kitchen Management',
    'Food Safety Supervisor (NSW)',
    'HACCP & Internal Food Safety Auditor',
    'White Card',
];

const MEMBERSHIPS = ['Australian Culinary Federation (ACF)', 'Tourism Training Australia (TTA)'];

/* ─── Small building blocks ─── */

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
    return (
        <div className="flex items-baseline gap-3 mb-5">
            <span className="text-[10px] font-mono text-[#64620B]/70 tabular-nums">{index}</span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#64620B]">{children}</span>
            <span className="flex-1 h-px bg-[#19355e]/8" />
        </div>
    );
}

export default function MazIslam() {
    return (
        <div className="min-h-screen bg-[#ffffff] text-[#19355e]">
            <SEO
                title="Maz Islam — Founder & Director | Catering District"
                description="Maz Islam JP, Founder & Director of Catering District Pty Ltd. 19+ years in club catering, commercial kitchen operations, and large-scale hospitality across NSW."
                path="/about/maz-islam"
                ogImage="/images/maz-portrait.jpeg"
                ogType="profile"
                jsonLd={[
                    breadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'About Us', url: '/about' },
                        { name: 'Maz Islam', url: '/about/maz-islam' },
                    ]),
                    personSchema({
                        name: 'Maz Islam',
                        jobTitle: 'Founder & Director',
                        image: '/images/maz-portrait.jpeg',
                        description:
                            'Hospitality executive and club catering specialist with 19+ years across clubs, large-scale catering, and commercial kitchen operations in NSW. Founder & Director of Catering District Pty Ltd.',
                    }),
                ]}
            />

            {/* ─── Hero ─── */}
            <section className="pt-28 md:pt-32 pb-14 md:pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Breadcrumb */}
                    <motion.nav
                        aria-label="Breadcrumb"
                        className="flex items-center gap-2 text-[11px] text-[#19355e]/40 font-light mb-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link to="/about" className="hover:text-[#64620B] transition-colors">About</Link>
                        <span className="text-[#19355e]/20">/</span>
                        <span className="text-[#19355e]/60">Maz Islam</span>
                    </motion.nav>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                        {/* Name block */}
                        <motion.div
                            className="lg:col-span-7 order-2 lg:order-1"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#64620B] mb-5">
                                Founder &amp; Director
                            </p>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light leading-[0.95] tracking-tight mb-6">
                                Maz Islam
                                <span className="align-super text-[#19355e]/35 text-base md:text-lg lg:text-xl ml-3 tracking-[0.1em]">
                                    JP
                                </span>
                            </h1>
                            <div className="w-10 h-[2px] bg-[#64620B] mb-7" />
                            <p className="text-[15px] md:text-base text-[#19355e]/60 font-light leading-relaxed max-w-xl mb-8">
                                Hospitality executive, club catering specialist, and commercial kitchen operator.
                                Nineteen years turning underperforming kitchens into profitable, compliant, and
                                scalable operations across New South Wales.
                            </p>

                            <div className="flex flex-wrap items-center gap-3">
                                <Link
                                    to="/contact"
                                    className="group inline-flex items-center gap-2.5 bg-[#19355e] text-[#ffffff] rounded-full px-7 py-3.5 text-xs uppercase tracking-[0.15em] hover:bg-[#0d2240] transition-colors duration-300 font-medium"
                                >
                                    Work with Maz
                                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                                <Link
                                    to="/team"
                                    className="inline-flex items-center gap-2.5 border border-[#19355e]/15 text-[#19355e] rounded-full px-7 py-3.5 text-xs uppercase tracking-[0.15em] hover:bg-[#19355e] hover:text-white transition-all duration-300 font-medium"
                                >
                                    Meet the Team
                                </Link>
                            </div>
                        </motion.div>

                        {/* Portrait */}
                        <motion.div
                            className="lg:col-span-5 order-1 lg:order-2"
                            initial={{ opacity: 0, scale: 0.97 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                        >
                            <div className="relative">
                                <div className="absolute -top-3 -left-3 w-full h-full border border-[#64620B]/20 rounded-xl pointer-events-none" />
                                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#fafaf8]">
                                    <img
                                        src="/images/maz-portrait.jpeg"
                                        alt="Maz Islam, Founder & Director of Catering District"
                                        className="w-full h-full object-cover object-center"
                                        width={800}
                                        height={1000}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#19355e]/35 via-transparent to-transparent" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── Stat strip ─── */}
            <section className="px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 border-y border-[#19355e]/8 divide-x divide-y md:divide-y-0 divide-[#19355e]/8">
                        {STATS.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                className="py-8 px-2 md:px-6 text-center"
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.07 }}
                            >
                                <p className="text-3xl md:text-4xl font-serif font-light text-[#19355e] mb-2">{stat.value}</p>
                                <p className="text-[10px] uppercase tracking-[0.2em] text-[#19355e]/40 font-medium">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── 01 Profile ─── */}
            <section className="py-16 md:py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <SectionLabel index="01">Profile</SectionLabel>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                            <div className="lg:col-span-7">
                                <h2 className="text-2xl md:text-3xl font-serif font-light leading-snug mb-6">
                                    Aligning food &amp; beverage performance with board-level expectations.
                                </h2>
                                <p className="text-[15px] text-[#19355e]/65 font-light leading-relaxed mb-5">
                                    With a career spanning over 19 years in hospitality and catering, Maz is the
                                    visionary behind Catering District Pty Ltd. His experience across kitchen
                                    management, event coordination, and large-scale catering has established the
                                    company as a trusted name in the industry.
                                </p>
                                <p className="text-[15px] text-[#19355e]/65 font-light leading-relaxed">
                                    Chef Maz has successfully managed kitchens, led event coordination teams, and
                                    delivered large-scale catering at renowned venues including Five Dock RSL,
                                    Crossroads Hotel, and EBP RSL. He is committed to excellence — ensuring every
                                    event is delivered with culinary brilliance and seamless execution.
                                </p>
                            </div>

                            {/* Expertise list */}
                            <div className="lg:col-span-5">
                                <p className="text-[10px] uppercase tracking-[0.2em] text-[#19355e]/35 font-semibold mb-5">
                                    Areas of Expertise
                                </p>
                                <ul className="space-y-0">
                                    {EXPERTISE.map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-baseline gap-3 py-3 border-b border-[#19355e]/6 text-[14px] text-[#19355e]/70 font-light"
                                        >
                                            <span className="w-1 h-1 rounded-full bg-[#64620B] shrink-0 translate-y-[-2px]" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ─── 02 What he delivers ─── */}
            <section className="py-16 md:py-20 px-6 bg-[#fafaf8] border-y border-[#19355e]/6">
                <div className="max-w-7xl mx-auto">
                    <SectionLabel index="02">What He Delivers</SectionLabel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 mt-8">
                        {DELIVERS.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                            >
                                <div className="w-9 h-9 rounded-lg bg-[#64620B]/10 flex items-center justify-center text-[#64620B] mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="text-base font-serif mb-2">{item.title}</h3>
                                <p className="text-[13.5px] text-[#19355e]/55 font-light leading-relaxed">{item.body}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── 03 Ventures ─── */}
            <section className="py-16 md:py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <SectionLabel index="03">Ventures Founded</SectionLabel>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        {VENTURES.map((v, i) => (
                            <motion.a
                                key={v.org}
                                href={v.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block rounded-xl border border-[#19355e]/8 p-7 hover:border-[#64620B]/30 hover:bg-[#fafaf8] transition-all duration-300"
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <div className="flex items-start justify-between gap-4 mb-5">
                                    <span className="text-[10px] font-mono text-[#19355e]/35 tabular-nums pt-1">{v.period}</span>
                                    <ArrowUpRight className="w-4 h-4 text-[#19355e]/25 group-hover:text-[#64620B] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300 shrink-0" />
                                </div>
                                <p className="text-[10px] uppercase tracking-[0.2em] text-[#64620B] font-medium mb-1.5">
                                    {v.role}
                                </p>
                                <h3 className="text-xl font-serif font-light mb-5 leading-snug">{v.org}</h3>
                                <ul className="space-y-2.5">
                                    {v.points.map((p) => (
                                        <li key={p} className="flex gap-2.5 text-[13px] text-[#19355e]/55 font-light leading-relaxed">
                                            <span className="w-1 h-1 rounded-full bg-[#64620B]/50 shrink-0 mt-2" />
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── 04 Career timeline ─── */}
            <section className="py-16 md:py-20 px-6 bg-[#19355e]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-baseline gap-3 mb-10">
                        <span className="text-[10px] font-mono text-[#ffda8d]/60 tabular-nums">04</span>
                        <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#ffda8d]">
                            Career Track
                        </span>
                        <span className="flex-1 h-px bg-white/10" />
                    </div>

                    <div className="space-y-0">
                        {CAREER.map((job, i) => (
                            <motion.div
                                key={`${job.org}-${job.period}`}
                                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 border-b border-white/[0.08] last:border-b-0"
                                initial={{ opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.06 }}
                            >
                                <div className="md:col-span-3">
                                    <p className="text-[11px] font-mono text-[#ffda8d]/70 tabular-nums mb-1">{job.period}</p>
                                    <p className="text-[11px] text-[#ffffff]/35 font-light">{job.location}</p>
                                </div>
                                <div className="md:col-span-4">
                                    <h3 className="text-xl font-serif font-light text-[#ffffff] mb-1 leading-snug">{job.role}</h3>
                                    <p className="text-[12px] uppercase tracking-[0.15em] text-[#ffffff]/40 font-medium">
                                        {job.org}
                                    </p>
                                </div>
                                <div className="md:col-span-5">
                                    <p className="text-[13.5px] text-[#ffffff]/50 font-light leading-relaxed">{job.body}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── 05 Qualifications ─── */}
            <section className="py-16 md:py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <SectionLabel index="05">Qualifications &amp; Compliance</SectionLabel>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-8">
                        <div className="lg:col-span-7">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {QUALIFICATIONS.map((q, i) => (
                                    <motion.div
                                        key={q}
                                        className="flex items-start gap-3 rounded-lg bg-[#fafaf8] border border-[#19355e]/6 px-4 py-3.5"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: (i % 2) * 0.06 }}
                                    >
                                        <Award className="w-4 h-4 text-[#64620B] shrink-0 mt-0.5" />
                                        <span className="text-[13.5px] text-[#19355e]/70 font-light leading-snug">{q}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <p className="text-[10px] uppercase tracking-[0.2em] text-[#19355e]/35 font-semibold mb-5">
                                Professional Memberships
                            </p>
                            <ul className="mb-10">
                                {MEMBERSHIPS.map((m) => (
                                    <li
                                        key={m}
                                        className="flex items-baseline gap-3 py-3 border-b border-[#19355e]/6 text-[14px] text-[#19355e]/70 font-light"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-[#64620B] shrink-0" />
                                        {m}
                                    </li>
                                ))}
                            </ul>

                            {/* Pull quote */}
                            <blockquote className="border-l-2 border-[#64620B] pl-6">
                                <p className="text-lg md:text-xl font-serif font-light leading-relaxed text-[#19355e]/80 mb-4">
                                    “My goal is to help clubs build sustainable food and beverage operations that
                                    enhance the member experience while delivering long-term commercial success.”
                                </p>
                                <cite className="not-italic text-[11px] uppercase tracking-[0.2em] text-[#64620B] font-medium">
                                    Maz Islam, Founder
                                </cite>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── CTA ─── */}
            <section className="py-16 md:py-20 px-6 bg-[#fafaf8] border-t border-[#19355e]/6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif font-light mb-3 tracking-tight">
                                Let's talk about your venue.
                            </h2>
                            <p className="text-[15px] text-[#19355e]/55 font-light max-w-lg leading-relaxed">
                                Maz works directly with club boards, CEOs, and venue managers on kitchen
                                performance, compliance, and catering strategy.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 shrink-0">
                            <Link
                                to="/contact"
                                className="group inline-flex items-center gap-2.5 bg-[#19355e] text-[#ffffff] rounded-full px-7 py-3.5 text-xs uppercase tracking-[0.15em] hover:bg-[#0d2240] transition-colors duration-300 font-medium"
                            >
                                Get in Touch
                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                            <a
                                href="mailto:contact@cateringdistrict.com.au"
                                className="inline-flex items-center gap-2.5 border border-[#19355e]/15 text-[#19355e] rounded-full px-7 py-3.5 text-xs uppercase tracking-[0.15em] hover:bg-[#19355e] hover:text-white transition-all duration-300 font-medium"
                            >
                                <Mail className="w-3.5 h-3.5" />
                                Email
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
