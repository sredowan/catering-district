import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, Utensils, Building, Check, ArrowRight, MapPin, ShieldCheck, TrendingUp, Calendar, FileText, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteData } from '../context/SiteContext';
import SEO, { ORGANIZATION_SCHEMA, WEBSITE_SCHEMA, LOCAL_BUSINESS_SCHEMA, faqSchema } from '../components/SEO';

const HOME_FAQS = [
    {
        question: "Why should NSW club boards consider a catering partner over in-house operations?",
        answer: "Many registered clubs find in-house kitchens hard to sustain, with penalty rates under the Registered Clubs Award (up to 32% higher on weekends) and chef turnover adding pressure. A catering partner takes on employer responsibilities and food cost risk, so your team can focus on members and the wider club."
    },
    {
        question: "How does Catering District respond to formal Club Catering EOIs and Tenders?",
        answer: "Maz prepares every submission personally: a clear commercial model, menus built around your members, HACCP-based food safety plans, Registered Clubs Award rostering, and a structured transition plan, with an open invitation to meet your Board."
    },
    {
        question: "Who will we actually be dealing with?",
        answer: "Maz Islam, our founder, personally. Catering District is owner-led, so you have direct access to the person accountable for your kitchen. Maz is a Justice of the Peace (JP) with an Advanced Diploma of Hospitality Management, a Diploma of Quality Auditing and a Certificate IV in Kitchen Management, and 19+ years of hands-on hospitality experience."
    }
];

function Hero() {
    const { siteData } = useSiteData();
    const heroImages = siteData.hero.images;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (heroImages.length === 0) return;
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [heroImages.length]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#111111] to-[#1c1c1c]">
                <AnimatePresence>
                    <motion.img
                        key={currentImageIndex}
                        src={heroImages[currentImageIndex]}
                        alt="Owner-led club catering in NSW"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 0.85, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity"
                        referrerPolicy="no-referrer"
                    />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#0a0a0a]/65 to-[#0a0a0a]/85"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h1 className="font-serif font-light tracking-tight text-[#ffffff] leading-none mb-6 text-6xl sm:text-8xl md:text-9xl">
                        Catering <span className="italic">District</span>
                    </h1>

                    <p className="font-serif font-light text-[#ffffff]/90 leading-snug mb-10 text-2xl sm:text-3xl md:text-4xl">
                        Owner-Led Club Catering. <br className="hidden sm:block" />
                        <span className="italic">Personally Committed.</span>
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/contact"
                            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-[#ffffff] text-[#19355e] px-8 py-4 text-xs uppercase tracking-[0.15em] font-semibold hover:bg-[#ffda8d] transition-all rounded-full shadow-xl"
                        >
                            <span>Explore a Partnership</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            to="/tenders-eoi"
                            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 border border-white/40 text-white px-8 py-4 text-xs uppercase tracking-[0.15em] hover:bg-white/10 transition-all rounded-full backdrop-blur-sm font-medium"
                        >
                            <span>Invite Us to Your EOI / Tender</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function MeetMaz() {
    const background = [
        { role: 'Head Chef', org: 'Crossroads Hotel, Casula' },
        { role: 'Relief Kitchen Manager', org: 'Moorebank Sports Club, with On Point Catering Solutions' },
        { role: 'Club Hospitality', org: 'EBP RSL' },
        { role: 'Hospitality Manager', org: 'Jesmond Aged Care, Strathfield' },
        { role: 'Large-scale production', org: 'Qantas Airline Catering, Mascot' },
        { role: 'Training & Placements', org: 'Future Chefs and Industry Placement Solutions' },
    ];

    return (
        <section id="meet-maz" className="py-24 md:py-28 px-6 bg-[#ffffff]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="lg:col-span-5 relative"
                >
                    <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src="/images/maz-portrait.jpeg"
                            alt="Chef Maz Islam JP, Founder of Catering District"
                            className="w-full h-full object-cover object-center"
                            loading="lazy"
                        />
                    </div>
                    <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#19355e] text-white px-6 py-5 rounded-2xl shadow-xl max-w-[15rem]">
                        <div className="text-3xl font-serif text-[#ffda8d] leading-none mb-1">19+ Years</div>
                        <p className="text-xs text-white/75 font-light">of hands-on hospitality experience</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="lg:col-span-7"
                >
                    <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#64620B] mb-4">Meet the Founder</p>
                    <h2 className="text-3xl md:text-5xl font-serif font-light leading-tight text-[#19355e] mb-3">
                        Chef Maz Islam <span className="italic">JP</span>
                    </h2>
                    <p className="text-sm uppercase tracking-[0.15em] text-[#19355e]/60 mb-6">Founder &amp; Managing Director, Catering District</p>

                    <blockquote className="border-l-4 border-[#64620B] pl-5 mb-6 text-lg md:text-xl font-serif italic text-[#19355e]/85 leading-relaxed">
                        &ldquo;My goal is to help clubs build sustainable food and beverage operations that enhance the member experience while delivering long-term commercial success.&rdquo;
                    </blockquote>

                    <p className="text-base text-[#19355e]/70 font-light leading-relaxed mb-8">
                        When you partner with Catering District, you work with Maz directly. He brings practical knowledge from commercial kitchens, licensed clubs, functions and large-scale catering, and stays personally involved from the first conversation to day-to-day service.
                    </p>

                    <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#19355e]/50 mb-3">Where Maz built his experience</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {background.map((item) => (
                            <li key={item.org} className="p-4 rounded-xl bg-[#fafaf8] border border-[#19355e]/10">
                                <p className="text-sm font-semibold text-[#19355e]">{item.role}</p>
                                <p className="text-xs text-[#19355e]/60 mt-0.5">{item.org}</p>
                            </li>
                        ))}
                    </ul>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-sm text-[#19355e]/75">
                        <p className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#64620B] mt-0.5 shrink-0" />
                            <span><strong className="font-semibold text-[#19355e]">Industry Placement Solutions</strong> — founded by Maz, supporting 1,500+ students, 700+ placements and a network of 300+ industry venues.</span>
                        </p>
                        <p className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#64620B] mt-0.5 shrink-0" />
                            <span><strong className="font-semibold text-[#19355e]">Future Chefs</strong> — a purpose-built, 9B-compliant commercial training kitchen in Parramatta.</span>
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-6">
                        <Link to="/about/maz-islam" className="inline-flex items-center space-x-2 bg-[#19355e] text-white rounded-full px-7 py-3.5 text-xs uppercase tracking-[0.15em] font-semibold hover:bg-[#64620B] transition-colors">
                            <span>Read Maz&apos;s Story</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a href="tel:0432591795" className="inline-flex items-center space-x-2 text-[#64620B] hover:text-[#19355e] transition-colors uppercase text-xs tracking-[0.15em] font-semibold border-b border-[#64620B] pb-1">
                            <span>Speak with Maz &middot; 0432 591 795</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function About() {
    const { siteData } = useSiteData();

    return (
        <section id="about" className="py-28 px-6 bg-[#ffffff] relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 relative z-10"
                >
                    <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#64620B] mb-4">Our Story</p>
                    <h2 className="text-3xl md:text-5xl font-serif font-light mb-6 leading-tight text-[#19355e]">
                        {siteData.about.heading.split(' ').slice(0, 2).join(' ')} <br />
                        <span className="italic font-normal">{siteData.about.heading.split(' ').slice(2).join(' ')}</span>
                    </h2>
                    <div className="w-12 h-px bg-[#64620B]/40 mb-6"></div>

                    <p className="text-base md:text-lg text-[#19355e]/70 font-light leading-relaxed mb-6">
                        {siteData.about.description}
                    </p>
                    <p className="text-sm text-[#19355e]/70 leading-relaxed mb-8">
                        Your club is never just another venue to us. We listen first, take the time to understand your members and your community, and stay personally involved, working alongside your Board, General Manager and staff to build a dining experience people love to return to.
                    </p>
                    <div className="flex flex-wrap items-center gap-6">
                        <Link to="/about" className="inline-flex items-center space-x-2 text-[#64620B] hover:text-[#19355e] transition-colors uppercase text-xs tracking-[0.15em] font-semibold border-b border-[#64620B] pb-1">
                            <span>Read Our Full Story</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link to="/team" className="inline-flex items-center space-x-2 text-[#19355e]/70 hover:text-[#64620B] transition-colors uppercase text-xs tracking-[0.15em] font-medium pb-1">
                            <span>Meet Our Team</span>
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="md:w-1/2 relative"
                >
                    <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative">
                        <img
                            src="/images/home-team.jpg"
                            alt="Catering District Team and Maz Islam"
                            className="w-full h-full object-cover object-top"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#19355e]/30 to-transparent"></div>
                    </div>
                    {/* Floating stat card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-[#19355e]/10 max-w-xs"
                    >
                        <div className="text-2xl font-serif text-[#64620B] mb-1">Your Club. Our Commitment.</div>
                        <p className="text-xs font-light text-[#19355e]/70">Owner-led club catering, community hospitality and operational accountability.</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

const serviceIcons = [
    <Users className="w-6 h-6" key="users" />,
    <Utensils className="w-6 h-6" key="utensils" />,
    <Building className="w-6 h-6" key="building" />
];

function CoreServices() {
    const { siteData } = useSiteData();
    const services = siteData.services;

    return (
        <section id="services" className="relative py-32 px-6 overflow-hidden min-h-screen flex flex-col justify-center">
            {/* Parallax Background */}
            <div className="absolute inset-0 z-0 bg-[#19355e]">
                <img
                    src="/images/home-cafe-1.jpg"
                    alt="Cafe and Club Dining Operations"
                    className="absolute inset-0 w-full h-full object-cover opacity-30 fixed-bg"
                    style={{ backgroundAttachment: 'fixed' }}
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#19355e] via-[#19355e]/80 to-[#19355e]/40"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full">
                <div className="mb-20 text-center">
                    <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#ffffff]/50 mb-4">What We Do</p>
                    <h2 className="text-5xl md:text-6xl font-serif font-light text-[#ffffff]">Experienced People. <span className="italic">Dedicated Service.</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-colors duration-500 group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-[#ffda8d]/20 flex items-center justify-center mb-8 text-[#ffffff] group-hover:bg-[#ffda8d] group-hover:scale-110 transition-all duration-500">
                                {serviceIcons[index % serviceIcons.length]}
                            </div>
                            <h3 className="text-2xl font-serif mb-4 text-[#ffffff]">{service.title}</h3>
                            <p className="text-[#ffffff]/70 font-light mb-8 h-20">
                                {service.description}
                            </p>
                            <ul className="space-y-3">
                                {service.items.map((item, i) => (
                                    <li key={i} className="flex items-start space-x-3 text-sm text-[#ffffff]/80">
                                        <Check className="w-4 h-4 text-[#ffda8d] mt-0.5 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <Link to="/services" className="inline-flex items-center space-x-3 border border-[#ffffff]/30 rounded-full px-8 py-4 text-xs uppercase tracking-[0.15em] text-[#ffffff] hover:bg-[#ffffff] hover:text-[#19355e] transition-all duration-300">
                        <span>Explore All Services</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

function DedicatedCapabilities() {
    const serviceList = [
        {
            title: "Club Catering Operations",
            path: "/services/club-catering",
            desc: "Hands-on kitchen, bistro and dining management, shaped around your members and your community.",
            tag: "Club Dining"
        },
        {
            title: "Contract Catering & Tenders",
            path: "/services/contract-catering",
            desc: "Clear, transparent agreements with a commercially focused approach to hospitality operations.",
            tag: "Partnerships"
        },
        {
            title: "Bistro & Restaurant Management",
            path: "/services/bistro-restaurant-management",
            desc: "Menus members love, consistent quality and reliable service, from weekday lunches to busy Saturday nights.",
            tag: "Bistro & Dining"
        },
        {
            title: "Kitchen Compliance & HACCP",
            path: "/services/kitchen-management-compliance",
            desc: "HACCP-based food safety, Standard 3.2.2A readiness and fair, award-based rostering, done properly.",
            tag: "Food Safety"
        },
        {
            title: "Club Event & Function Catering",
            path: "/services/club-event-function-catering",
            desc: "Barefoot bowls, birthdays, presentation nights and community celebrations your members will remember.",
            tag: "Functions & Events"
        },
        {
            title: "Tender & EOI Responses",
            path: "/tenders-eoi",
            desc: "Thoughtful, board-ready submissions prepared personally by Maz, with a structured transition plan.",
            tag: "Tenders & EOI"
        }
    ];

    return (
        <section className="py-24 px-6 bg-[#fafaf8] border-y border-[#19355e]/10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#64620B] mb-3">How We Can Help</p>
                    <h2 className="text-3xl md:text-5xl font-serif font-light text-[#19355e]">
                        Dedicated to <span className="italic">Clubs</span>
                    </h2>
                    <p className="text-sm text-[#19355e]/70 mt-3">
                        From contract catering and bistro management to food safety, staffing and member experiences, our approach combines practical hospitality knowledge with a commitment to doing things properly.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {serviceList.map((svc, i) => (
                        <div key={i} className="p-8 rounded-2xl bg-white border border-[#19355e]/10 hover:shadow-xl transition-all flex flex-col justify-between group">
                            <div>
                                <span className="text-[10px] uppercase font-bold tracking-wider text-[#64620B] bg-[#64620B]/10 px-2.5 py-1 rounded-full inline-block mb-4">
                                    {svc.tag}
                                </span>
                                <h3 className="text-xl font-serif text-[#19355e] mb-3 group-hover:text-[#64620B] transition-colors">
                                    {svc.title}
                                </h3>
                                <p className="text-xs text-[#19355e]/70 leading-relaxed mb-6">
                                    {svc.desc}
                                </p>
                            </div>
                            <Link
                                to={svc.path}
                                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#64620B] group-hover:translate-x-1 transition-transform"
                            >
                                <span>Explore Service</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Approach() {
    const pillars = [
        {
            num: "01",
            title: "Genuine & Personal",
            desc: "We genuinely care about clubs and the communities around them. Every partnership we build is grounded in trust and personal commitment."
        },
        {
            num: "02",
            title: "Experienced & Capable",
            desc: "19+ years of hands-on hospitality experience and kitchen leadership, applied with practical knowledge."
        },
        {
            num: "03",
            title: "Community-Focused",
            desc: "Member-first hospitality that understands your community: a welcoming place people love to return to."
        },
        {
            num: "04",
            title: "Accountable & Dedicated",
            desc: "Accessible leadership, clear responsibility and dependable service, with a commitment to doing things properly."
        }
    ];

    return (
        <section id="approach" className="py-32 px-6 bg-white relative">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:items-start">

                {/* Sticky Text Section */}
                <div className="lg:w-1/2 lg:sticky lg:top-32">
                    <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#64620B] mb-4">Our Approach</p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-tight mb-8">
                        Hospitality <br />
                        <span className="italic">with purpose.</span>
                    </h2>
                    <p className="text-lg text-[#19355e]/70 font-light mb-12 max-w-lg">
                        Great club hospitality deserves more than a standard catering arrangement. It deserves people who listen, understand the venue, take responsibility and genuinely care about the outcome.
                    </p>

                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl lg:w-4/5">
                        <img
                            src="/images/home-pastry.jpg"
                            alt="Culinary prep"
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#19355e]/40 to-transparent"></div>
                    </div>
                </div>

                {/* Scrolling Pillars */}
                <div className="lg:w-1/2 space-y-12 lg:pt-20">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="bg-[#fafaf8] p-10 md:p-12 rounded-3xl border border-[#19355e]/10 shadow-sm"
                        >
                            <div className="flex items-baseline space-x-6 mb-6">
                                <span className="text-6xl font-serif font-light text-[#19355e]/15">{pillar.num}</span>
                                <h3 className="text-3xl font-serif text-[#19355e]">{pillar.title}</h3>
                            </div>
                            <p className="text-[#19355e]/70 font-light text-lg leading-relaxed ml-[5.5rem]">
                                {pillar.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}

function ClubSectors() {
    const sectors = [
        {
            title: "Bowling Clubs (Bowlos)",
            path: "/clubs/bowling-clubs",
            share: "24% of Industry",
            desc: "Barefoot bowls BBQs, community family nights, and tighter kitchen cost control."
        },
        {
            title: "RSL & Memorial Clubs",
            path: "/clubs/rsl-clubs",
            share: "15% of Industry",
            desc: "ANZAC Day catering, traditional carvery service, and respectful commemorative functions."
        },
        {
            title: "Golf & Country Clubs",
            path: "/clubs/golf-clubs",
            share: "17% of Industry",
            desc: "Dawn halfway kiosk carts, 19th-hole casual clubhouse dining, and tournament banquets."
        },
        {
            title: "Leagues & Sporting Clubs",
            path: "/clubs/leagues-sports-clubs",
            share: "24% of Industry",
            desc: "Match-day menus, sports bar grill favourites, and junior presentation nights."
        }
    ];

    return (
        <section className="py-24 px-6 bg-[#0f2340] text-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
                    <div>
                        <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#ffda8d] mb-3">Every Club Is Different</p>
                        <h2 className="text-3xl md:text-5xl font-serif font-light">
                            Built Around <span className="italic text-[#ffda8d]">Members</span>
                        </h2>
                    </div>
                    <Link
                        to="/clubs"
                        className="mt-4 md:mt-0 text-xs uppercase tracking-wider text-[#ffda8d] hover:underline inline-flex items-center gap-1 font-medium"
                    >
                        <span>View all club types</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {sectors.map((sec, i) => (
                        <Link
                            key={i}
                            to={sec.path}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all block group"
                        >
                            <span className="text-[10px] uppercase tracking-wider text-[#ffda8d] font-bold block mb-2">{sec.share}</span>
                            <h3 className="text-lg font-serif text-white mb-3 group-hover:text-[#ffda8d] transition-colors">{sec.title}</h3>
                            <p className="text-xs text-white/70 leading-relaxed mb-4">{sec.desc}</p>
                            <span className="text-xs text-[#ffda8d] font-semibold uppercase tracking-wider flex items-center gap-1">
                                <span>Learn More</span>
                                <ArrowRight className="w-3 h-3" />
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

function GalleryPreview() {
    const { siteData } = useSiteData();
    const images = siteData.galleryImages;

    if (!images || images.length === 0) return null;

    // Duplicate images once for seamless infinite scrolling
    const marqueeImages = [...images, ...images];

    return (
        <section className="py-32 bg-[#19355e] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#ffffff]/50 mb-4">Portfolio</p>
                <h2 className="text-4xl md:text-5xl font-serif font-light text-[#ffffff]">Visual <span className="italic">Journey</span></h2>
            </div>

            <div className="relative w-full pb-8">
                {/* Gradient overlays for smooth fading edges */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#19355e] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#19355e] to-transparent z-10 pointer-events-none"></div>

                <div className="flex w-[200vw] sm:w-[300vw] overflow-hidden">
                    <motion.div
                        className="flex gap-4 sm:gap-6 px-4"
                        animate={{ x: [0, -1035] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 30
                        }}
                    >
                        {marqueeImages.map((img, idx) => (
                            <div key={idx} className="w-[280px] sm:w-[400px] h-[350px] sm:h-[500px] shrink-0 rounded-2xl overflow-hidden relative group">
                                <img
                                    src={img.src}
                                    alt={img.title || "Gallery image"}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#19355e]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <div className="mt-12 text-center">
                <Link to="/gallery" className="inline-flex items-center space-x-3 border border-[#ffffff]/30 rounded-full px-8 py-4 text-xs uppercase tracking-[0.15em] text-[#ffffff] hover:bg-[#ffffff] hover:text-[#19355e] transition-all duration-300">
                    <span>View Full Gallery</span>
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </section>
    );
}

function Future() {
    return (
        <section className="py-32 bg-[#ffffff] relative overflow-hidden flex items-center min-h-[80vh]">
            <div className="absolute inset-0 z-0">
                <picture className="w-full h-full">
                    <source media="(min-width: 768px)" srcSet="/images/future-new.jpg" />
                    <img
                        src="/images/future-new.jpg"
                        alt="Future Direction"
                        className="w-full h-full object-cover object-center md:object-right"
                        loading="lazy"
                    />
                </picture>
            </div>

            {/* Masking linear gradient effect */}
            <div className="absolute inset-0 z-10 bg-[#ffffff]"
                style={{
                    maskImage: 'linear-gradient(to right, black 30%, transparent 65%)',
                    WebkitMaskImage: 'linear-gradient(to right, black 30%, transparent 65%)'
                }}
            ></div>

            <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
                <div className="md:w-1/2 md:pr-16 py-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#64620B] mb-6">Growing Together</p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-8 leading-tight">
                            A Partnership <span className="italic">Worth Building</span>
                        </h2>
                        <p className="text-lg text-[#19355e]/70 font-light mb-10 leading-relaxed max-w-lg">
                            Our ambition is to build meaningful, long-term partnerships through experienced leadership, reliable operations and personal involvement, and to grow alongside the clubs and communities we serve.
                        </p>
                        <ul className="space-y-5">
                            {['Club catering partnerships', 'Workplace and corporate dining', 'Venue hospitality management'].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                                    className="flex items-center space-x-4 text-[#19355e]/80"
                                >
                                    <ArrowRight className="w-4 h-4 text-[#64620B]" />
                                    <span className="font-medium text-lg">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function RegionalLocations() {
    const hubs = [
        { name: "Western Sydney", path: "/locations/western-sydney-club-catering" },
        { name: "Parramatta & Northmead", path: "/locations/parramatta-club-catering" },
        { name: "Penrith & Nepean", path: "/locations/penrith-club-catering" },
        { name: "Canterbury-Bankstown", path: "/locations/canterbury-bankstown-club-catering" },
        { name: "Sutherland Shire & Cronulla", path: "/locations/sutherland-shire-cronulla-club-catering" },
        { name: "Northern Beaches & Dee Why", path: "/locations/northern-beaches-club-catering" },
        { name: "Liverpool & Fairfield", path: "/locations/liverpool-fairfield-club-catering" },
        { name: "Macarthur & Campbelltown", path: "/locations/macarthur-campbelltown-club-catering" },
        { name: "Central Coast & Gosford", path: "/locations/central-coast-club-catering" },
        { name: "Newcastle & Hunter", path: "/locations/newcastle-hunter-club-catering" },
        { name: "Wollongong & Illawarra", path: "/locations/wollongong-illawarra-club-catering" },
        { name: "Inner West & Strathfield", path: "/locations/inner-west-sydney-club-catering" }
    ];

    return (
        <section className="py-24 px-6 bg-[#fafaf8] border-y border-[#19355e]/10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#64620B] mb-3">Across NSW</p>
                    <h2 className="text-3xl md:text-4xl font-serif font-light text-[#19355e]">
                        Local Connections. <span className="italic">Genuine Commitment.</span>
                    </h2>
                    <p className="text-xs text-[#19355e]/70 mt-2">
                        Ready to build trusted partnerships with clubs across New South Wales. See what we understand about your region and its members.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {hubs.map((hub, i) => (
                        <Link
                            key={i}
                            to={hub.path}
                            className="p-4 rounded-xl border border-[#19355e]/10 bg-white hover:border-[#64620B] hover:shadow-md transition-all flex items-center justify-between group"
                        >
                            <div className="flex items-center gap-2.5">
                                <MapPin className="w-3.5 h-3.5 text-[#64620B]" />
                                <span className="text-xs font-medium text-[#19355e] group-hover:text-[#64620B] transition-colors">{hub.name}</span>
                            </div>
                            <ChevronRight className="w-3.5 h-3.5 text-[#19355e]/40 group-hover:translate-x-0.5 group-hover:text-[#64620B] transition-all" />
                        </Link>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <Link
                        to="/locations"
                        className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#64620B] hover:underline"
                    >
                        <span>View All NSW Regions</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

function WhyUs() {
    const reasons = [
        "Owner-led and personally involved",
        "19+ years of hands-on hospitality experience",
        "Accessible leadership: talk directly to Maz",
        "Member-first, community-focused hospitality",
        "Food safety and accountability built in"
    ];

    return (
        <section className="py-24 px-6 bg-[#19355e] text-[#ffffff]">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-light mb-12">
                    Why Clubs Choose to <span className="italic">Talk With Us</span>
                </h2>
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    {reasons.map((reason, index) => (
                        <div key={index} className="flex items-center space-x-2 bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm border border-white/5">
                            <Check className="w-4 h-4 text-[#ffda8d]" />
                            <span className="text-sm tracking-wide">{reason}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ExecutiveInsights() {
    const articles = [
        {
            title: "In-House vs. Contract Catering for Registered Clubs: What NSW Boards Need to Know",
            path: "/insights/in-house-vs-contract-catering-clubs",
            tag: "Board Governance",
            time: "7 min read"
        },
        {
            title: "How NSW Clubs Turn Underperforming Bistros into Profitable Operations",
            path: "/insights/how-to-run-a-profitable-club-bistro",
            tag: "F&B Operations",
            time: "8 min read"
        },
        {
            title: "A Club Director's Guide to Running a Successful Catering EOI & Tender in NSW",
            path: "/insights/club-catering-eoi-tender-guide",
            tag: "Procurement",
            time: "10 min read"
        },
        {
            title: "HACCP & NSW Food Authority Compliance: Kitchen Risk Management for Clubs",
            path: "/insights/haccp-food-safety-compliance-nsw-clubs",
            tag: "Food Safety",
            time: "6 min read"
        }
    ];

    return (
        <section className="py-24 px-6 bg-[#ffffff] border-t border-[#19355e]/10">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
                    <div>
                        <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#64620B] mb-2">Practical Guides</p>
                        <h2 className="text-3xl md:text-4xl font-serif font-light text-[#19355e]">
                            Insights for Club <span className="italic">Directors &amp; GMs</span>
                        </h2>
                    </div>
                    <Link
                        to="/insights"
                        className="mt-4 md:mt-0 text-xs uppercase tracking-wider text-[#64620B] hover:underline inline-flex items-center gap-1 font-semibold"
                    >
                        <span>Read all guides</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {articles.map((art, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-[#fafaf8] border border-[#19355e]/10 hover:shadow-lg transition-all flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between text-[10px] text-[#19355e]/60 mb-3">
                                    <span className="font-semibold text-[#64620B] uppercase">{art.tag}</span>
                                    <span>{art.time}</span>
                                </div>
                                <h3 className="text-base font-serif text-[#19355e] mb-4 leading-snug">
                                    <Link to={art.path} className="hover:text-[#64620B] transition-colors">
                                        {art.title}
                                    </Link>
                                </h3>
                            </div>
                            <Link
                                to={art.path}
                                className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-[#64620B] hover:text-[#19355e] transition-colors pt-4 border-t border-[#19355e]/10"
                            >
                                <span>Read Article</span>
                                <ArrowRight className="w-3 h-3" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function HomeFaqs() {
    return (
        <section className="py-24 px-6 max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#64620B] mb-3">Common Inquiries</p>
                <h2 className="text-3xl md:text-4xl font-serif font-light text-[#19355e]">
                    Questions Clubs <span className="italic">Often Ask Us</span>
                </h2>
            </div>

            <div className="space-y-6">
                {HOME_FAQS.map((faq, i) => (
                    <div key={i} className="p-6 rounded-xl border border-[#19355e]/10 bg-white shadow-sm">
                        <h3 className="text-base font-semibold mb-2 text-[#19355e]">{faq.question}</h3>
                        <p className="text-sm text-[#19355e]/70 leading-relaxed">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

function DirectTenderCta() {
    return (
        <section className="py-20 px-6 bg-gradient-to-br from-[#0f2340] to-[#19355e] text-white text-center">
            <div className="max-w-4xl mx-auto">
                <span className="text-xs uppercase tracking-[0.25em] text-[#ffda8d] font-semibold mb-3 block">
                    Your Club. Our Commitment.
                </span>
                <h2 className="text-3xl md:text-5xl font-serif font-light mb-6">
                    Going to Market with an <span className="italic text-[#ffda8d]">EOI or Tender?</span>
                </h2>
                <p className="text-base text-white/80 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
                    We'd welcome the chance to be considered. Maz reviews every brief personally and is happy to meet your Board. Send your documents to <strong>contact@cateringdistrict.com.au</strong>.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        to="/tenders-eoi"
                        className="inline-flex items-center justify-center gap-2 bg-[#ffda8d] text-[#0f2340] px-8 py-4 text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#ffe8b3] transition-all rounded-sm shadow-xl"
                    >
                        <span>Submit Tender Brief / EOI</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                        href="mailto:contact@cateringdistrict.com.au"
                        className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 text-xs uppercase tracking-[0.16em] hover:bg-white/10 transition-colors rounded-sm"
                    >
                        <span>Email contact@cateringdistrict.com.au</span>
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default function Home() {
    return (
        <>
            <SEO
                title="Owner-Led Club Catering NSW | Catering District"
                description="Your Club. Our Commitment. Owner-led club catering, community hospitality and operational accountability, led by Maz Islam with 19+ years of hands-on hospitality experience."
                path="/"
                ogImage="/images/home-team.jpg"
                jsonLd={[ORGANIZATION_SCHEMA, WEBSITE_SCHEMA, LOCAL_BUSINESS_SCHEMA, faqSchema(HOME_FAQS)]}
            />
            {/* 1. Original Hero with rotating images + Book Now + B2B Trust Badges */}
            <Hero />

            {/* 2. Meet the founder, directly under the hero */}
            <MeetMaz />

            {/* 3. Our story */}
            <About />

            {/* 3. Original Services with Parallax Background Image */}
            <CoreServices />

            {/* 4. Dedicated Commercial Capabilities Suite */}
            <DedicatedCapabilities />

            {/* 5. Original Approach Section (Hospitality Beyond Food Service + 3 Pillars) */}
            <Approach />

            {/* 6. Club Classifications Grid (RSL, Bowling, Golf, Leagues) */}
            <ClubSectors />

            {/* 7. Original Visual Journey Gallery Marquee */}
            <GalleryPreview />

            {/* 8. Original Future Direction (Expanding Our Horizons) */}
            <Future />

            {/* 9. Regional NSW Heartland Hub (12 Suburb Clusters) */}
            <RegionalLocations />

            {/* 10. Original Why Work With Catering District Pill Badges */}
            <WhyUs />

            {/* 11. Executive Insights & Guides for Club Boards */}
            <ExecutiveInsights />

            {/* 12. Common Inquiries & Frequently Asked Questions */}
            <HomeFaqs />

            {/* 13. Direct Tender & EOI Executive Callout */}
            <DirectTenderCta />
        </>
    );
}
