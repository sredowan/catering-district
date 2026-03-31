import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, Utensils, Building, Check, ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteData } from '../context/SiteContext';
import BookingModal from '../components/BookingModal';

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
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0 bg-[#1a1a1a]">
                <AnimatePresence>
                    <motion.img
                        key={currentImageIndex}
                        src={heroImages[currentImageIndex]}
                        alt="Hospitality"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 0.4, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity"
                        referrerPolicy="no-referrer"
                    />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1a1a]/50 to-[#1a1a1a]"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div className="flex items-center justify-center space-x-2 mb-8 text-[#f5f2ed] opacity-80">
                        <MapPin className="w-4 h-4" />
                        <p className="text-xs uppercase tracking-[0.2em] font-medium">Australia</p>
                    </div>
                    <h1 className="text-7xl md:text-9xl font-serif font-light leading-none mb-6 tracking-tight text-[#f5f2ed]">
                        {siteData.hero.heading.includes(' ') ? (<>{siteData.hero.heading.split(' ').slice(0, -1).join(' ')} <span className="italic">{siteData.hero.heading.split(' ').slice(-1)[0]}</span></>) : siteData.hero.heading}
                    </h1>
                    <p className="text-lg md:text-2xl max-w-2xl mx-auto font-light text-[#f5f2ed]/90 mb-12">
                        {siteData.hero.subheading}
                    </p>
                    <motion.button
                        onClick={() => setIsBookingOpen(true)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="inline-flex items-center space-x-3 border border-[#f5f2ed]/30 rounded-full px-8 py-4 text-xs uppercase tracking-[0.15em] text-[#1a1a1a] bg-[#f5f2ed] hover:bg-transparent hover:text-[#f5f2ed] transition-all duration-500"
                    >
                        <span>Book Now</span>
                        <ArrowRight className="w-4 h-4" />
                    </motion.button>
                </motion.div>
            </div>
            
            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </section>
    );
}

function About() {
    const { siteData } = useSiteData();

    return (
        <section id="about" className="py-32 px-6 bg-[#f5f2ed] relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 relative z-10"
                >
                    <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#5A5A40] mb-4">Our Story</p>
                    <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 leading-tight">
                        {siteData.about.heading.split(' ').slice(0, 2).join(' ')} <br />
                        <span className="italic">{siteData.about.heading.split(' ').slice(2).join(' ')}</span>
                    </h2>
                    <div className="w-12 h-px bg-[#5A5A40]/30 mb-8"></div>
                    <p className="text-lg text-[#1a1a1a]/70 font-light leading-relaxed mb-8">
                        {siteData.about.description}
                    </p>
                    <Link to="/about" className="inline-flex items-center space-x-3 text-[#5A5A40] hover:text-[#1a1a1a] transition-colors border-b border-transparent hover:border-[#1a1a1a] pb-1 uppercase text-xs tracking-[0.15em] font-medium">
                        <span>Read Our Full Story</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
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
                            alt="Catering District Team"
                            className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#1a1a1a]/30 to-transparent"></div>
                    </div>
                    {/* Floating stat card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20 max-w-xs"
                    >
                        <div className="text-4xl font-serif mb-2 text-[#5A5A40]">4+ Years</div>
                        <p className="text-sm font-light text-[#1a1a1a]/70">Of transforming spaces into vibrant community hubs.</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

const serviceIcons = [
    <Users className="w-6 h-6" />,
    <Utensils className="w-6 h-6" />,
    <Building className="w-6 h-6" />
];

function Services() {
    const { siteData } = useSiteData();
    const services = siteData.services;

    return (
        <section id="services" className="relative py-32 px-6 overflow-hidden min-h-screen flex flex-col justify-center">
            {/* Parallax Background */}
            <div className="absolute inset-0 z-0 bg-[#1a1a1a]">
                <img
                    src="/images/home-cafe-1.jpg"
                    alt="Cafe operations"
                    className="absolute inset-0 w-full h-full object-cover opacity-30 fixed-bg"
                    style={{ backgroundAttachment: 'fixed' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/80 to-[#1a1a1a]/40"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full">
                <div className="mb-20 text-center">
                    <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#f5f2ed]/50 mb-4">What We Do</p>
                    <h2 className="text-5xl md:text-6xl font-serif font-light text-[#f5f2ed]">Our <span className="italic">Expertise</span></h2>
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
                            <div className="w-16 h-16 rounded-2xl bg-[#5A5A40]/20 flex items-center justify-center mb-8 text-[#f5f2ed] group-hover:bg-[#5A5A40] group-hover:scale-110 transition-all duration-500">
                                {serviceIcons[index % serviceIcons.length]}
                            </div>
                            <h3 className="text-2xl font-serif mb-4 text-[#f5f2ed]">{service.title}</h3>
                            <p className="text-[#f5f2ed]/70 font-light mb-8 h-20">
                                {service.description}
                            </p>
                            <ul className="space-y-3">
                                {service.items.map((item, i) => (
                                    <li key={i} className="flex items-start space-x-3 text-sm text-[#f5f2ed]/80">
                                        <Check className="w-4 h-4 text-[#5A5A40] mt-0.5 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <Link to="/services" className="inline-flex items-center space-x-3 border border-[#f5f2ed]/30 rounded-full px-8 py-4 text-xs uppercase tracking-[0.15em] text-[#f5f2ed] hover:bg-[#f5f2ed] hover:text-[#1a1a1a] transition-all duration-300">
                        <span>Explore All Services</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
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
                    <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#5A5A40] mb-4">Our Approach</p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-tight mb-8">
                        Hospitality <br />
                        <span className="italic">beyond food</span> service.
                    </h2>
                    <p className="text-lg text-[#1a1a1a]/70 font-light mb-12 max-w-lg">
                        We blend culinary craft with thoughtful, community-focused operations to transform ordinary venues into thriving social ecosystems.
                    </p>

                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl lg:w-4/5">
                        <img
                            src="/images/home-pastry.jpg"
                            alt="Culinary prep"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/40 to-transparent"></div>
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
                            className="bg-[#f5f2ed] p-10 md:p-12 rounded-3xl"
                        >
                            <div className="flex items-baseline space-x-6 mb-6">
                                <span className="text-6xl font-serif font-light text-[#1a1a1a]/10">{pillar.num}</span>
                                <h3 className="text-3xl font-serif">{pillar.title}</h3>
                            </div>
                            <p className="text-[#1a1a1a]/70 font-light text-lg leading-relaxed ml-[5.5rem]">
                                {pillar.desc}
                            </p>
                        </motion.div>
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

    // Duplicate images for infinite scrolling effect
    const marqueeImages = [...images, ...images, ...images];

    return (
        <section className="py-32 bg-[#1a1a1a] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#f5f2ed]/50 mb-4">Portfolio</p>
                <h2 className="text-4xl md:text-5xl font-serif font-light text-[#f5f2ed]">Visual <span className="italic">Journey</span></h2>
            </div>

            <div className="relative w-full pb-8">
                {/* Gradient overlays for smooth fading edges */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#1a1a1a] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#1a1a1a] to-transparent z-10 pointer-events-none"></div>

                <div className="flex w-[200vw] sm:w-[300vw] overflow-hidden">
                    <motion.div
                        className="flex gap-4 sm:gap-6 px-4"
                        animate={{ x: [0, -1035] }} // Adjust based on item width to create a loop
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
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <div className="mt-12 text-center">
                <Link to="/gallery" className="inline-flex items-center space-x-3 border border-[#f5f2ed]/30 rounded-full px-8 py-4 text-xs uppercase tracking-[0.15em] text-[#f5f2ed] hover:bg-[#f5f2ed] hover:text-[#1a1a1a] transition-all duration-300">
                    <span>View Full Gallery</span>
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </section>
    );
}

function Future() {
    return (
        <section className="py-32 bg-[#f5f2ed] relative overflow-hidden flex items-center min-h-[80vh]">
            <div className="absolute inset-0 z-0">
                <picture className="w-full h-full">
                    <source media="(min-width: 768px)" srcSet="/images/future-desktop.jpg" />
                    <img
                        src="/images/future-mobile-2.png"
                        alt="Future Direction"
                        className="w-full h-full object-cover object-center md:object-right"
                    />
                </picture>
            </div>

            {/* Exactly recreating the masking linear gradient effect requested */}
            <div className="absolute inset-0 z-10 bg-[#f5f2ed]"
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
                        <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#5A5A40] mb-6">Future Direction</p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-8 leading-tight">
                            Expanding our <span className="italic">Horizons</span>
                        </h2>
                        <p className="text-lg text-[#1a1a1a]/70 font-light mb-10 leading-relaxed max-w-lg">
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
                                    className="flex items-center space-x-4 text-[#1a1a1a]/80"
                                >
                                    <ArrowRight className="w-4 h-4 text-[#5A5A40]" />
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

function WhyUs() {
    const reasons = [
        "Experienced in club operations",
        "Focus on experience-based hospitality",
        "Flexible venue partnership model",
        "Community-driven approach",
        "Designed for Australia's modern social culture"
    ];

    return (
        <section className="py-24 px-6 bg-[#5A5A40] text-[#f5f2ed]">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-light mb-12">
                    Why Work With <span className="italic">Catering District</span>
                </h2>
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    {reasons.map((reason, index) => (
                        <div key={index} className="flex items-center space-x-2 bg-white/10 rounded-full px-6 py-3 backdrop-blur-sm border border-white/5">
                            <Check className="w-4 h-4 text-[#f5f2ed]/70" />
                            <span className="text-sm tracking-wide">{reason}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Approach />
            <GalleryPreview />
            <Future />
            <WhyUs />
        </>
    );
}
