import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check, Users, Utensils, Building2, ShieldCheck, Calendar, Star, TrendingUp, Shield, Heart, FileText, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookingModal from '../components/BookingModal';
import SEO, { breadcrumbSchema, serviceSchema } from '../components/SEO';

export default function Services() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    const capabilities = [
        {
            icon: <Users className="w-5 h-5" />,
            title: "Whole-of-Kitchen Catering",
            description: "End-to-end management of club bistros, cafes, and restaurants. We assume complete employer and operational liability, staffing, menu engineering, and daily service delivery.",
            highlights: ['Turnkey kitchen operations', 'Subsidies eliminated', 'Award-compliant rostering', 'Consistent member dining']
        },
        {
            icon: <FileText className="w-5 h-5" />,
            title: "Tender & EOI Execution",
            description: "Commercially rigorous tender submissions prepared specifically for Club Boards, Chief Executives, and independent tender advisory consultants across NSW.",
            highlights: ['Formal EOI submissions', 'Audited 3-year P&L forecasts', 'Seamless 30-day transitions', 'Direct board presentations']
        },
        {
            icon: <ShieldCheck className="w-5 h-5" />,
            title: "HACCP & Regulatory Compliance",
            description: "Food safety oversight led by an accredited Quality & HACCP Food Safety Auditor (Maz Islam, JP). Daily digital logging and 100% NSW Food Authority audit readiness.",
            highlights: ['Certified HACCP systems', 'NSW Food Authority compliance', 'Allergen safety protocols', 'Clean council audit logs']
        },
        {
            icon: <Calendar className="w-5 h-5" />,
            title: "Club Event & Function Yields",
            description: "Maximizing the revenue potential of idle function spaces through corporate seminars, barefoot bowls packages, wakes, birthday milestones, and presentation banquets.",
            highlights: ['Barefoot bowls packages', 'Large seated banquets', 'Auditorium galas & wakes', 'Zero-waste event catering']
        }
    ];

    const services = [
        {
            id: "club-catering",
            path: "/services/club-catering",
            icon: <Users className="w-5 h-5" />,
            title: "Club Catering Operations",
            tagline: "Turnkey kitchen, bistro, and dining room management for NSW licensed clubs.",
            description: "We partner with RSLs, bowling clubs, golf clubs, and leagues venues across NSW to deliver high-volume bistro excellence, member satisfaction, and strict commercial margin control.",
            deliverables: [
                "Full commercial kitchen and bistro management",
                "Classic club pantry favourites and modern blackboard specials",
                "High-volume ticket pacing (under 15 minutes during peak rushes)",
                "Transparent monthly P&L and operational reporting to Boards",
                "Staff recruitment and performance management",
                "Community and member demographic alignment",
            ],
            stats: [
                { value: "19+", label: "Years Experience" },
                { value: "95%+", label: "Member Satisfaction" },
                { value: "<15m", label: "Ticket Speed" }
            ]
        },
        {
            id: "contract-catering",
            path: "/services/contract-catering",
            icon: <Building2 className="w-5 h-5" />,
            title: "Contract Catering & Tenders",
            tagline: "Risk-free commercial agreements tailored to club financial governance.",
            description: "Eliminate the financial volatility of running an in-house kitchen. We offer turnover rental, hybrid profit-share, and management-fee models that remove subsidies from your balance sheet.",
            deliverables: [
                "Turnover lease and hybrid profit-share agreements",
                "Full transfer of employer and labour liabilities",
                "Mitigation of 32% weekend award penalty rate spikes",
                "Wholesale food procurement scale protecting gross margins",
                "Formal response to club EOI and tender processes",
                "Direct executive board meeting presentations",
            ],
            stats: [
                { value: "0%", label: "Club Food Losses" },
                { value: "28-32%", label: "Target Food Cost" },
                { value: "100%", label: "Fair Work Aligned" }
            ]
        },
        {
            id: "bistro-restaurant-management",
            path: "/services/bistro-restaurant-management",
            icon: <Utensils className="w-5 h-5" />,
            title: "Bistro & Restaurant Management",
            tagline: "High-volume dining room execution, menu engineering, and member loyalty.",
            description: "Transforming tired club bistros into buzzing community dining destinations. We combine traditional member favourites (schnitzels, steaks, roasts) with contemporary blackboard creations.",
            deliverables: [
                "Menu engineering using Boston matrix popularity & margin scoring",
                "Speed-line kitchen design for rapid raffle and bingo breaks",
                "Mid-week seniors' lunches and family value dinner specials",
                "Digital Kitchen Display System (KDS) integration",
                "Bar beverage turnover synergy and food pairing",
                "Dietary inclusivity (certified gluten-free & vegan options)",
            ],
            stats: [
                { value: "500+", label: "Peak Covers/Shift" },
                { value: "4.9★", label: "Dining Feedback" },
                { value: "7 Days", label: "Reliable Service" }
            ]
        },
        {
            id: "kitchen-management-compliance",
            path: "/services/kitchen-management-compliance",
            icon: <ShieldCheck className="w-5 h-5" />,
            title: "Kitchen Management & HACCP Compliance",
            tagline: "Certified food safety auditing and Registered Clubs Award labour governance.",
            description: "Led by Maz Islam (Diploma in Quality Auditing, Certified HACCP Food Safety Auditor), we protect Club Directors and General Managers from food safety and Fair Work statutory liabilities.",
            deliverables: [
                "Accredited HACCP food safety plan implementation",
                "Digital temperature logging and automated cold-chain alerts",
                "NSW Food Authority Standard 3.2.2A audit readiness",
                "Fair Work Registered Clubs Award MA000058 roster auditing",
                "Preventative equipment maintenance and asset protection",
                "Comprehensive chemical handling and WHS compliance",
            ],
            stats: [
                { value: "100%", label: "Audit Pass Rate" },
                { value: "HACCP", label: "Auditor Certified" },
                { value: "MA000058", label: "Award Mapped" }
            ]
        },
        {
            id: "club-event-function-catering",
            path: "/services/club-event-function-catering",
            icon: <Calendar className="w-5 h-5" />,
            title: "Club Event & Function Catering",
            tagline: "Monetizing club function spaces through high-margin corporate and private events.",
            description: "From barefoot bowls barbecue feasts to 400-guest seated presentation banquets, we market, package, and execute profitable events in club function rooms.",
            deliverables: [
                "Tiered barefoot bowls packages (sliders, pizzas, BBQ grills)",
                "Auditorium galas and sporting club presentation banquets",
                "Corporate conference day-delegate and boardroom packages",
                "Respectful, dignified catering for member memorial wakes",
                "Fairway and clubhouse wedding banquet packages",
                "Zero-waste pre-set banquet management",
            ],
            stats: [
                { value: "400+", label: "Max Banquet Pax" },
                { value: "40%+", label: "Avg Margin Yield" },
                { value: "Turnkey", label: "Event Delivery" }
            ]
        }
    ];

    const processSteps = [
        { num: "01", title: "Feasibility & Audit", desc: "We inspect your club's kitchen plant, review historical covers, and analyze member demographics and current catering costs.", icon: <Star className="w-4 h-4" /> },
        { num: "02", title: "Commercial Model", desc: "We structure a transparent contract (turnover lease, hybrid, or management fee) with board-ready financial projections.", icon: <TrendingUp className="w-4 h-4" /> },
        { num: "03", title: "30-Day Transition", desc: "Our executive team conducts staff interviews under the Registered Clubs Award, deploys HACCP systems, and rolls out engineered menus with zero downtime.", icon: <Shield className="w-4 h-4" /> },
        { num: "04", title: "Monthly Governance", desc: "Ongoing management, monthly P&L reviews, member feedback tracking, and direct reporting to the Club Board of Directors.", icon: <Heart className="w-4 h-4" /> }
    ];

    return (
        <div className="min-h-screen bg-[#ffffff] text-[#19355e]">
            <SEO
                title="Club Catering Services NSW — Bistro, Contract & Compliance Operations"
                description="Comprehensive catering solutions for NSW registered clubs: turnkey club catering, contract catering, bistro management, HACCP compliance audits, and function catering."
                path="/services"
                ogImage="/images/home-cafe-1.jpg"
                jsonLd={[
                    breadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'Services', url: '/services' },
                    ]),
                    serviceSchema({
                        name: 'Club Catering Services NSW',
                        description: 'Turnkey food and beverage, bistro management, and commercial kitchen operations for registered clubs across New South Wales.',
                        serviceType: 'Club Catering Hub',
                        url: '/services',
                    }),
                ]}
            />

            {/* ─── Hero ─── */}
            <section className="relative pt-24 md:pt-28 pb-14 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0 bg-[#19355e]">
                    <img src="/images/home-cafe-1.jpg" alt="Hospitality Services" className="w-full h-full object-cover mix-blend-luminosity opacity-40" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#19355e]/90 via-[#19355e]/80 to-[#ffffff]"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#ffda8d] mb-3">NSW Club Hospitality</p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-[1.1] mb-5 tracking-tight text-[#ffffff]">
                            Specialised Club Catering Services
                        </h1>
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }}>
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-t border-[#ffffff]/15 pt-8">
                            <p className="text-[15px] md:text-lg text-[#ffffff]/75 font-light leading-relaxed max-w-2xl">
                                We partner with Club Boards, Chief Executives, and General Managers across New South Wales to eliminate kitchen subsidies, maintain strict regulatory compliance, and delight community members.
                            </p>
                            <div className="flex gap-3">
                                <button
                                    onClick={() => setIsBookingOpen(true)}
                                    className="shrink-0 inline-flex items-center gap-2.5 bg-[#ffda8d] text-[#0f2340] rounded-full px-7 py-3.5 text-xs uppercase tracking-[0.15em] font-semibold hover:bg-[#ffe8b3] transition-all duration-300 shadow-md cursor-pointer"
                                >
                                    <span>Request Capability Statement</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </button>
                                <Link
                                    to="/tenders-eoi"
                                    className="shrink-0 inline-flex items-center gap-2.5 border border-[#ffffff]/30 rounded-full px-7 py-3.5 text-xs uppercase tracking-[0.15em] font-medium text-[#ffffff] hover:bg-white/10 transition-all duration-300"
                                >
                                    <span>Tenders &amp; EOI</span>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ─── Tender & EOI Banner ─── */}
            <section className="py-6 px-6 bg-[#64620B] text-white">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-[#ffda8d] shrink-0" />
                        <span className="text-sm font-medium">
                            Is your club preparing an Expression of Interest (EOI) or Request for Tender (RFT)?
                        </span>
                    </div>
                    <Link
                        to="/tenders-eoi"
                        className="inline-flex items-center gap-2 bg-white text-[#19355e] px-5 py-2 text-xs font-semibold uppercase tracking-wider rounded hover:bg-gray-100 transition-all shrink-0"
                    >
                        <span>View Tender &amp; EOI Responses</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </div>
            </section>

            {/* ─── What We Offer (Capabilities) ─── */}
            <section className="py-14 md:py-18 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="mb-10"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#64620B] mb-2">Core Pillars</p>
                        <h2 className="text-3xl md:text-4xl font-serif font-light">Operational Capabilities</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {capabilities.map((cap, i) => (
                            <motion.div
                                key={i}
                                className="rounded-xl border border-[#19355e]/6 p-7 bg-[#fafaf8] hover:border-[#64620B]/25 transition-colors duration-300 group"
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                            >
                                <div className="flex items-start gap-5">
                                    <div className="w-10 h-10 rounded-lg bg-[#64620B]/10 flex items-center justify-center text-[#64620B] shrink-0 group-hover:bg-[#64620B] group-hover:text-white transition-colors duration-300">
                                        {cap.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-lg font-serif mb-2">{cap.title}</h3>
                                        <p className="text-[13px] text-[#19355e]/55 font-light leading-relaxed mb-4">{cap.description}</p>
                                        <div className="grid grid-cols-2 gap-2">
                                            {cap.highlights.map((h, j) => (
                                                <div key={j} className="flex items-center gap-2 text-[12px] text-[#19355e]/60">
                                                    <Check className="w-3 h-3 text-[#64620B] shrink-0" />
                                                    <span>{h}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Dedicated Service Lines ─── */}
            <section className="py-14 md:py-18 px-6 bg-[#fafaf8]">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="mb-10 text-center max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#64620B] mb-2">Dedicated Service Lines</p>
                        <h2 className="text-3xl md:text-4xl font-serif font-light">Explore Our Specialised Offerings</h2>
                        <p className="text-sm text-[#19355e]/70 mt-3">
                            Click any service below to explore comprehensive operational details, sample menus, compliance frameworks, and case studies.
                        </p>
                    </motion.div>

                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            id={service.id}
                            className="mb-8 last:mb-0 scroll-mt-20"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className={`grid grid-cols-1 lg:grid-cols-5 gap-6 items-start rounded-xl border border-[#19355e]/6 overflow-hidden bg-white shadow-sm`}>
                                {/* Stats sidebar */}
                                <div className={`lg:col-span-2 bg-[#19355e] p-7 md:p-8 text-white h-full flex flex-col justify-between ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                                    <div>
                                        <div className="w-10 h-10 rounded-lg bg-[#ffda8d]/20 flex items-center justify-center text-[#ffda8d] mb-5">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-2xl font-serif mb-2">{service.title}</h3>
                                        <p className="text-[13px] text-white/55 font-light leading-relaxed mb-6">{service.tagline}</p>
                                    </div>
                                    <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
                                        {service.stats.map((stat, i) => (
                                            <div key={i} className="text-center">
                                                <p className="text-xl md:text-2xl font-serif text-[#ffda8d] mb-0.5">{stat.value}</p>
                                                <p className="text-[9px] uppercase tracking-[0.15em] text-white/35 font-medium">{stat.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={`lg:col-span-3 p-7 md:p-8 flex flex-col justify-between h-full ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                                    <div>
                                        <p className="text-[14px] text-[#19355e]/65 font-light leading-relaxed mb-6">{service.description}</p>
                                        <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#19355e]/40 mb-4 flex items-center gap-3">
                                            <span className="w-5 h-px bg-[#64620B]"></span>
                                            Key Deliverables
                                        </h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                                            {service.deliverables.map((item, i) => (
                                                <div key={i} className="flex items-start gap-2.5 text-[13px] text-[#19355e]/70">
                                                    <Check className="w-3.5 h-3.5 text-[#64620B] mt-0.5 shrink-0" />
                                                    <span>{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="pt-4 border-t border-[#19355e]/10">
                                        <Link
                                            to={service.path}
                                            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#64620B] hover:text-[#19355e] transition-colors"
                                        >
                                            <span>Explore Detailed {service.title} Page</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ─── Process ─── */}
            <section className="py-14 md:py-18 px-6 bg-[#19355e]">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="flex flex-col md:flex-row md:items-end gap-6 mb-12"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="md:w-1/2">
                            <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#ffda8d] mb-2">Transition &amp; Execution</p>
                            <h2 className="text-3xl md:text-4xl font-serif font-light text-white">Our 4-Stage Operational Model</h2>
                        </div>
                        <div className="md:w-1/2">
                            <p className="text-[13px] text-white/50 font-light leading-relaxed">
                                A structured framework ensuring seamless kitchen takeovers, total regulatory compliance, and consistent monthly reporting to Club Boards.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {processSteps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                className="relative border-t-2 border-[#ffda8d]/30 pt-6"
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.08 }}
                            >
                                <div className="flex items-center gap-2.5 mb-4">
                                    <div className="w-8 h-8 rounded-lg bg-[#ffda8d]/15 flex items-center justify-center text-[#ffda8d]">
                                        {step.icon}
                                    </div>
                                    <span className="text-white/10 font-serif text-3xl">{step.num}</span>
                                </div>
                                <h3 className="text-base font-serif text-white mb-2">{step.title}</h3>
                                <p className="text-[12px] text-white/45 font-light leading-relaxed">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CTA ─── */}
            <section className="py-16 md:py-20 px-6 bg-white text-center">
                <div className="max-w-3xl mx-auto">
                    <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#64620B] mb-3">Executive Inquiry</p>
                    <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">
                        Is your club reviewing its catering arrangements?
                    </h2>
                    <p className="text-[14px] text-[#19355e]/60 font-light max-w-lg mx-auto mb-8">
                        Speak directly with Maz Islam (JP, Accredited Food Safety Auditor) for a confidential operational appraisal of your club's kitchen.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => setIsBookingOpen(true)}
                            className="inline-flex items-center gap-2.5 bg-[#19355e] text-[#ffffff] rounded-full px-8 py-4 text-xs uppercase tracking-[0.15em] font-semibold hover:bg-[#0d2240] transition-colors duration-300 shadow-md cursor-pointer"
                        >
                            <span>Request Capability Statement</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                        <Link
                            to="/tenders-eoi"
                            className="inline-flex items-center gap-2.5 border border-[#19355e]/20 rounded-full px-8 py-4 text-xs uppercase tracking-[0.15em] font-semibold text-[#19355e] hover:bg-[#fafaf8] transition-colors duration-300"
                        >
                            <span>Submit Tender Brief</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>
                </div>
            </section>

            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </div>
    );
}
