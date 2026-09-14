import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, Utensils, Building, Check, ArrowRight, MapPin, ShieldCheck, TrendingUp, Calendar, FileText, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteData } from '../context/SiteContext';
import BookingModal from '../components/BookingModal';
import SEO, { ORGANIZATION_SCHEMA, WEBSITE_SCHEMA, LOCAL_BUSINESS_SCHEMA, faqSchema } from '../components/SEO';

const HOME_FAQS = [
    {
        question: "Why should NSW club boards consider contract catering over in-house operations?",
        answer: "Approximately 70% of registered clubs run their in-house kitchens at a loss due to penalty rates under the Registered Clubs Award (up to 32% higher on weekends) and chef turnover. Contract catering transfers employer liabilities and food cost risks to an experienced operator while delivering predictable revenue."
    },
    {
        question: "How does Catering District respond to formal Club Catering EOIs and Tenders?",
        answer: "We deliver comprehensive, board-ready submissions including 3-year P&L modeling, engineered demographic menus, certified HACCP food safety systems, Fair Work award compliance frameworks, and seamless 30-day transition plans."
    },
    {
        question: "Who oversees Catering District's kitchen operations and compliance?",
        answer: "Our operations are personally led by Maz Islam, a Justice of the Peace (JP) holding an Advanced Diploma in Hospitality Management, a Diploma in Quality Auditing, and certified HACCP Food Safety Auditor accreditation with 19+ years of industry experience."
    }
];

function Hero() {
    const { siteData } = useSiteData();
    const heroImages = siteData.hero.images;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    useEffect(() => {
        if (heroImages.length === 0) return;
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [heroImages.length]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0c1a2e] to-[#19355e]">
                <AnimatePresence>
                    <motion.img
                        key={currentImageIndex}
                        src={heroImages[currentImageIndex]}
                        alt="NSW Club Catering & Hospitality"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 0.85, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity"
                        referrerPolicy="no-referrer"
                    />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-b from-[#050a14]/90 via-[#19355e]/75 to-[#19355e]"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-light leading-tight mb-6 tracking-tight text-[#ffffff]">
                        {siteData.hero.heading.includes(' ') ? (
                            <>
                                {siteData.hero.heading.split(' ').slice(0, -1).join(' ')}{' '}
                                <span className="italic">{siteData.hero.heading.split(' ').slice(-1)[0]}</span>
                            </>
                        ) : (
                            siteData.hero.heading
                        )}
                    </h1>

                    <p className="text-sm uppercase tracking-[0.25em] text-[#ffda8d] font-semibold mb-4">
                        NSW Club Catering &amp; Hospitality Management
                    </p>

                    <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-light text-[#ffffff]/90 mb-10 leading-relaxed">
                        {siteData.hero.subheading}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => setIsBookingOpen(true)}
                            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-[#ffffff] text-[#19355e] px-8 py-4 text-xs uppercase tracking-[0.15em] font-semibold hover:bg-[#ffda8d] transition-all rounded-full shadow-xl cursor-pointer"
                        >
                            <span>Book Now / Enquire</span>
                            <ArrowRight className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => setIsBookingOpen(true)}
                            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-[#ffda8d] text-[#0f2340] px-8 py-4 text-xs uppercase tracking-[0.15em] font-semibold hover:bg-[#ffe8b3] transition-all rounded-full shadow-xl cursor-pointer"
                        >
                            <span>Request Capability Statement</span>
                            <ArrowRight className="w-4 h-4" />
                        </button>
                        <Link
                            to="/tenders-eoi"
                            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 border border-white/40 text-white px-8 py-4 text-xs uppercase tracking-[0.15em] hover:bg-white/10 transition-all rounded-full backdrop-blur-sm font-medium"
                        >
                            <span>Invite to EOI / Tender</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* Trust Badges */}
                    <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-4 text-white/80 text-xs">
                        <div className="flex items-center justify-center gap-2">
                            <Check className="w-4 h-4 text-[#ffda8d]" />
                            <span>19+ Years Experience</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <Check className="w-4 h-4 text-[#ffda8d]" />
                            <span>Certified HACCP Auditor</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <Check className="w-4 h-4 text-[#ffda8d]" />
                            <span>Zero Subsidies Contract</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <Check className="w-4 h-4 text-[#ffda8d]" />
                            <span>Award MA000058 Compliant</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
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

                    {/* Executive Leadership Highlight Card */}
                    <div className="p-4 mb-6 rounded-xl bg-[#fafaf8] border-l-4 border-[#64620B] shadow-sm flex items-start gap-3">
                        <ShieldCheck className="w-5 h-5 text-[#64620B] shrink-0 mt-0.5" />
                        <div>
                            <p className="text-sm font-semibold text-[#19355e]">
                                Led by Maz Islam, JP <span className="font-normal text-[#19355e]/80">(19+ years experience, Certified HACCP Food Safety Auditor)</span>
                            </p>
                        </div>
                    </div>

                    <p className="text-base md:text-lg text-[#19355e]/70 font-light leading-relaxed mb-6">
                        {siteData.about.description}
                    </p>
                    <p className="text-sm text-[#19355e]/70 leading-relaxed mb-8">
                        Unlike remote corporate franchises where your venue becomes just another number, Catering District delivers hands-on executive oversight. We sit directly with Club Boards, General Managers, and Secretary Managers to align menus with community demographics, optimize ticket speed, and eliminate kitchen subsidies.
                    </p>
                    <div className="flex flex-wrap items-center gap-6">
                        <Link to="/about" className="inline-flex items-center space-x-2 text-[#64620B] hover:text-[#19355e] transition-colors uppercase text-xs tracking-[0.15em] font-semibold border-b border-[#64620B] pb-1">
                            <span>Read Our Full Story</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link to="/about/maz-islam" className="inline-flex items-center space-x-2 text-[#19355e]/70 hover:text-[#64620B] transition-colors uppercase text-xs tracking-[0.15em] font-medium pb-1">
                            <span>Maz Islam Professional Bio</span>
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
                        <div className="text-3xl font-serif text-[#64620B] mb-1">19+ Years</div>
                        <p className="text-xs font-light text-[#19355e]/70">Of transforming spaces into vibrant, profitable community hubs.</p>
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
                    <h2 className="text-5xl md:text-6xl font-serif font-light text-[#ffffff]">Our <span className="italic">Expertise</span></h2>
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
            desc: "Turnkey kitchen, bistro, and dining management tailored for registered clubs across NSW.",
            tag: "Core Commercial"
        },
        {
            title: "Contract Catering & Tenders",
            path: "/services/contract-catering",
            desc: "Risk-free commercial agreements that remove kitchen subsidies and transfer labour liabilities.",
            tag: "Turnover Lease"
        },
        {
            title: "Bistro & Restaurant Management",
            path: "/services/bistro-restaurant-management",
            desc: "Menu engineering, sub-15 minute ticket speeds, and high-volume member dining execution.",
            tag: "Bistro Operations"
        },
        {
            title: "Kitchen Compliance & HACCP",
            path: "/services/kitchen-management-compliance",
            desc: "Accredited food safety audits, Standard 3.2.2A readiness, and award roster governance.",
            tag: "Certified Auditing"
        },
        {
            title: "Club Event & Function Catering",
            path: "/services/club-event-function-catering",
            desc: "Barefoot bowls packages, corporate seminars, auditoriums, and milestone presentation banquets.",
            tag: "High-Margin Yields"
        },
        {
            title: "Tender & EOI Responses",
            path: "/tenders-eoi",
            desc: "Board-ready tender submissions, financial modeling, and 30-day transition playbooks.",
            tag: "Procurement Portal"
        }
    ];

    return (
        <section className="py-24 px-6 bg-[#fafaf8] border-y border-[#19355e]/10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#64620B] mb-3">Commercial Capabilities</p>
                    <h2 className="text-3xl md:text-5xl font-serif font-light text-[#19355e]">
                        Specialised Services for <span className="italic">Registered Clubs</span>
                    </h2>
                    <p className="text-sm text-[#19355e]/70 mt-3">
                        Tailored commercial models designed to meet the fiduciary, regulatory, and member requirements of NSW licensed clubs.
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
            title: "Community",
            desc: "Creating spaces where people connect, belong, and celebrate life's moments."
        },
        {
            num: "02",
            title: "Experience",
            desc: "Designing memorable events, gatherings, and lifestyle moments tailored to every group."
        },
        {
            num: "03",
            title: "Professional Operations",
            desc: "Running clubs efficiently with structured management, culinary mastery, and hospitality expertise."
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
                        <span className="italic">beyond food</span> service.
                    </h2>
                    <p className="text-lg text-[#19355e]/70 font-light mb-12 max-w-lg">
                        We blend culinary craft with thoughtful, community-focused operations to transform ordinary venues into thriving social ecosystems.
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
            desc: "Barefoot bowls BBQs, community family nights, and elimination of kitchen operating subsidies."
        },
        {
            title: "RSL & Memorial Clubs",
            path: "/clubs/rsl-clubs",
            share: "15% of Industry",
            desc: "ANZAC Day dawn service execution, traditional carvery service, and auditorium gala dinners."
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
            desc: "High-speed match-day ticket pacing, sports bar grill concepts, and junior presentation banquets."
        }
    ];

    return (
        <section className="py-24 px-6 bg-[#0f2340] text-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
                    <div>
                        <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#ffda8d] mb-3">Targeted Experience</p>
                        <h2 className="text-3xl md:text-5xl font-serif font-light">
                            Built for Every <span className="italic text-[#ffda8d]">Club Classification</span>
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
                        <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#64620B] mb-6">Future Direction</p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-8 leading-tight">
                            Expanding our <span className="italic">Horizons</span>
                        </h2>
                        <p className="text-lg text-[#19355e]/70 font-light mb-10 leading-relaxed max-w-lg">
                            Catering District is building the foundation to expand into full contract catering services. Our extensive experience in operational systems and community-driven hospitality provides the perfect springboard for this evolution.
                        </p>
                        <ul className="space-y-5">
                            {['Workplace catering', 'Corporate dining', 'Venue hospitality management'].map((item, i) => (
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
                    <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#64620B] mb-3">Regional Network</p>
                    <h2 className="text-3xl md:text-4xl font-serif font-light text-[#19355e]">
                        Serving NSW's Premier <span className="italic">Club Heartland</span>
                    </h2>
                    <p className="text-xs text-[#19355e]/70 mt-2">
                        Explore our localized club catering footprint, demographic considerations, and tender support across New South Wales.
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
                        <span>View Complete NSW Locations Directory</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

function WhyUs() {
    const reasons = [
        "Experienced in club operations",
        "Focus on experience-based hospitality",
        "Flexible venue partnership model",
        "Community-driven approach",
        "Designed for Australia's modern social culture"
    ];

    return (
        <section className="py-24 px-6 bg-[#19355e] text-[#ffffff]">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-light mb-12">
                    Why Work With <span className="italic">Catering District</span>
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
                        <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#64620B] mb-2">Executive Thought Leadership</p>
                        <h2 className="text-3xl md:text-4xl font-serif font-light text-[#19355e]">
                            Insights for Club <span className="italic">Directors &amp; GMs</span>
                        </h2>
                    </div>
                    <Link
                        to="/insights"
                        className="mt-4 md:mt-0 text-xs uppercase tracking-wider text-[#64620B] hover:underline inline-flex items-center gap-1 font-semibold"
                    >
                        <span>Read all executive guides</span>
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
                    Frequently Asked Questions by <span className="italic">Club Executives</span>
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
                    Direct Board &amp; Executive Procurement
                </span>
                <h2 className="text-3xl md:text-5xl font-serif font-light mb-6">
                    Going to Market with an <span className="italic text-[#ffda8d]">EOI or Tender?</span>
                </h2>
                <p className="text-base text-white/80 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
                    Send your tender documentation directly to our executive team. Maz Islam personally oversees all commercial modeling, board presentations, and compliance frameworks. All enquiries sent to <strong>contact@cateringdistrict.com.au</strong>.
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
                title="NSW Club Catering & Contract Hospitality Operations | Catering District"
                description="NSW club catering, contract dining, and bistro operations. Led by Maz Islam, JP (19+ years experience, Certified HACCP Food Safety Auditor). 100% compliant, zero subsidies."
                path="/"
                ogImage="/images/home-team.jpg"
                jsonLd={[ORGANIZATION_SCHEMA, WEBSITE_SCHEMA, LOCAL_BUSINESS_SCHEMA, faqSchema(HOME_FAQS)]}
            />
            {/* 1. Original Hero with rotating images + Book Now + B2B Trust Badges */}
            <Hero />

            {/* 2. Original About with 19+ Years Stat Card + Maz Islam Leadership */}
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
