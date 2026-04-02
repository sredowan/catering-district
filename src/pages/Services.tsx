import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check, Users, Utensils, Building2, Leaf, GlassWater, UtensilsCrossed, PartyPopper, Star, TrendingUp, Shield, Heart, Calendar, ChefHat } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookingModal from '../components/BookingModal';

export default function Services() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    const capabilities = [
        {
            icon: <Leaf className="w-5 h-5" />,
            title: "Fresh Produce",
            description: "Catering District is dedicated to offering fresh, sustainable ingredients to create high-quality meals. Our commitment to freshness starts with sourcing locally grown produce and working closely with trusted suppliers to ensure every dish is made with the best ingredients available. This focus on sustainability helps reduce our carbon footprint, while supporting local farmers and businesses.",
            highlights: ['Locally sourced ingredients', 'Sustainable practices', 'Trusted supplier network', 'Reduced carbon footprint']
        },
        {
            icon: <GlassWater className="w-5 h-5" />,
            title: "Dining Event Experience",
            description: "Catering District ensures a seamless dining experience from start to finish, whether it's a casual meal or a large event. We focus on creating a welcoming atmosphere that suits each occasion, making guests feel comfortable and relaxed. The friendly and professional staff provide personalized service, ensuring every need is met and every guest feels valued.",
            highlights: ['End-to-end event management', 'Personalised guest service', 'Welcoming atmosphere design', 'Impeccable attention to detail']
        },
        {
            icon: <UtensilsCrossed className="w-5 h-5" />,
            title: "Dish Selection",
            description: "Catering District offers a wide variety of menu options to suit any occasion, from casual meals like sandwiches and buffets to elegant fine dining for special events. We prioritize flexibility by offering options that cater to different dietary needs, including vegan, gluten-free, and allergy-friendly dishes. With a focus on seasonal ingredients and innovative dishes, we ensure every meal is fresh, flavorful, and tailored to create a memorable experience.",
            highlights: ['Casual to fine dining menus', 'Dietary-friendly options', 'Seasonal & innovative dishes', 'Fully customised menus']
        },
        {
            icon: <PartyPopper className="w-5 h-5" />,
            title: "Functions & Catering",
            description: "Catering District specializes in catering for all types of events, including birthdays, weddings, corporate functions, and social gatherings. We offer customized catering packages tailored to fit any budget, ensuring that each event is perfectly suited to the client's needs. Our event coordinators work closely with clients to ensure the food, atmosphere, and service exceed expectations.",
            highlights: ['Weddings & birthdays', 'Corporate functions', 'Custom budget packages', 'Full event coordination']
        }
    ];

    const services = [
        {
            id: "club-operations",
            icon: <Users className="w-5 h-5" />,
            title: "Club Operations",
            tagline: "Full-service management for social clubs, private clubs, and experience-driven venues.",
            description: "We provide comprehensive operational management tailored to the unique atmosphere of your club. From conceptualisation to daily execution, our team ensures that every touchpoint is executed with precision and warmth.",
            deliverables: [
                "Club concept and identity development",
                "Comprehensive daily operations management",
                "Bespoke membership programs and retention strategies",
                "Event coordination and execution",
                "Strategic food & beverage partnerships",
                "Proactive community engagement initiatives",
            ],
            stats: [
                { value: "18+", label: "Years Experience" },
                { value: "95%", label: "Member Retention" },
                { value: "24/7", label: "Operations Support" }
            ]
        },
        {
            id: "experience-clubs",
            icon: <Utensils className="w-5 h-5" />,
            title: "Experience Clubs",
            tagline: "Designing and operating experience-focused clubs that combine hospitality, events, and lifestyle activities.",
            description: "Modern hospitality is about more than just a meal — it's about the entire experience. We specialize in curating dynamic programmatic elements that transform a standard venue into a vibrant lifestyle destination.",
            deliverables: [
                "Curated multi-course dining experiences",
                "Exclusive social events and networking nights",
                "Themed gatherings and live entertainment",
                "Holistic lifestyle and wellness programs",
                "Seasonal calendar and programming strategy",
                "Brand partnerships and sponsorship management"
            ],
            stats: [
                { value: "200+", label: "Events Delivered" },
                { value: "4.9★", label: "Avg. Rating" },
                { value: "50+", label: "Active Programs" }
            ]
        },
        {
            id: "hospitality-partnerships",
            icon: <Building2 className="w-5 h-5" />,
            title: "Hospital Partnerships",
            tagline: "Collaborating with venues, property owners, and organisations to manage or activate hospitality spaces.",
            description: "Unlock the hidden potential of your property. We partner with venue owners and developers to activate underutilised spaces, turning them into thriving hospitality hubs that add lasting value to the community.",
            deliverables: [
                "Strategic activation of underutilised venues",
                "End-to-end management of hospitality operations",
                "Designing tailored experience-driven programs",
                "Building and nurturing local community engagement",
                "Property enhancement and space optimisation",
                "Revenue growth strategy and implementation"
            ],
            stats: [
                { value: "12", label: "Venues Managed" },
                { value: "40%", label: "Avg. Revenue Growth" },
                { value: "100%", label: "Partner Retention" }
            ]
        }
    ];

    const processSteps = [
        { num: "01", title: "Discovery", desc: "We immerse ourselves in your venue, audience, and goals through site visits, stakeholder interviews, and market analysis.", icon: <Star className="w-4 h-4" /> },
        { num: "02", title: "Strategy", desc: "We develop detailed operational frameworks, culinary direction, experience programming, and financial models.", icon: <TrendingUp className="w-4 h-4" /> },
        { num: "03", title: "Execution", desc: "Our team brings the vision to life — from recruiting staff to curating menus, designing spaces, and launching campaigns.", icon: <Shield className="w-4 h-4" /> },
        { num: "04", title: "Growth", desc: "Continuous management, performance optimisation, and community-building ensure your venue thrives for years.", icon: <Heart className="w-4 h-4" /> }
    ];

    return (
        <div className="min-h-screen bg-[#ffffff] text-[#19355e]">

            {/* ─── Hero ─── */}
            <section className="relative pt-24 md:pt-28 pb-14 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0 bg-[#19355e]">
                    <img src="/images/home-cafe-1.jpg" alt="Hospitality Services" className="w-full h-full object-cover mix-blend-luminosity opacity-40" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#19355e]/90 via-[#19355e]/80 to-[#ffffff]"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#ffda8d] mb-3">Our Services</p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-[1.1] mb-5 tracking-tight text-[#ffffff]">
                            Elevated Operations
                        </h1>
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.7 }}>
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-t border-[#ffffff]/15 pt-8">
                            <p className="text-[15px] md:text-lg text-[#ffffff]/75 font-light leading-relaxed max-w-2xl">
                                We transform venues into dynamic spaces where people connect, relax, and enjoy curated experiences through professional management and a community-first approach.
                            </p>
                            <button
                                onClick={() => setIsBookingOpen(true)}
                                className="shrink-0 inline-flex items-center gap-2.5 border border-[#ffffff]/30 rounded-full px-7 py-3.5 text-xs uppercase tracking-[0.15em] font-medium text-[#ffffff] hover:bg-[#ffffff] hover:text-[#19355e] transition-all duration-300"
                            >
                                <span>Book a Consultation</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    </motion.div>
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
                        <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#64620B] mb-2">What We Offer</p>
                        <h2 className="text-3xl md:text-4xl font-serif font-light">Our Capabilities</h2>
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

            {/* ─── Image Band ─── */}
            <section className="relative h-[30vh] min-h-[220px] overflow-hidden mx-6 rounded-xl">
                <img src="/images/about-team-1.jpeg" alt="Chef preparing dishes" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#19355e]/70 via-[#19355e]/30 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#19355e]/40 via-transparent to-transparent"></div>
                <div className="relative z-10 h-full flex items-center px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-md"
                    >
                        <p className="text-3xl md:text-4xl font-serif font-light text-[#ffffff] mb-2">Culinary excellence, every single time.</p>
                        <p className="text-xs text-[#ffffff]/50 font-light">From kitchen to table, we pursue perfection.</p>
                    </motion.div>
                </div>
            </section>

            {/* ─── Our Expertise (Operational Services) ─── */}
            <section className="py-14 md:py-18 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="mb-10"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#64620B] mb-2">How We Operate</p>
                        <h2 className="text-3xl md:text-4xl font-serif font-light">Our Expertise</h2>
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
                            <div className={`grid grid-cols-1 lg:grid-cols-5 gap-6 items-start rounded-xl border border-[#19355e]/6 overflow-hidden bg-[#fafaf8]`}>
                                {/* Stats sidebar */}
                                <div className={`lg:col-span-2 bg-[#19355e] p-7 md:p-8 text-white h-full flex flex-col justify-between ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                                    <div>
                                        <div className="w-10 h-10 rounded-lg bg-[#ffda8d]/20 flex items-center justify-center text-[#ffda8d] mb-5">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-2xl font-serif mb-2">{service.title}</h3>
                                        <p className="text-[13px] text-white/55 font-light leading-relaxed mb-6">{service.tagline}</p>
                                    </div>
                                    <div className="grid grid-cols-3 gap-3">
                                        {service.stats.map((stat, i) => (
                                            <div key={i} className="text-center">
                                                <p className="text-xl md:text-2xl font-serif text-[#ffda8d] mb-0.5">{stat.value}</p>
                                                <p className="text-[9px] uppercase tracking-[0.15em] text-white/35 font-medium">{stat.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={`lg:col-span-3 p-7 md:p-8 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                                    <p className="text-[14px] text-[#19355e]/65 font-light leading-relaxed mb-6">{service.description}</p>
                                    <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#19355e]/40 mb-4 flex items-center gap-3">
                                        <span className="w-5 h-px bg-[#64620B]"></span>
                                        What We Deliver
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                        {service.deliverables.map((item, i) => (
                                            <div key={i} className="flex items-start gap-2.5 text-[13px] text-[#19355e]/60">
                                                <Check className="w-3.5 h-3.5 text-[#64620B] mt-0.5 shrink-0" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
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
                            <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#ffda8d] mb-2">How We Work</p>
                            <h2 className="text-3xl md:text-4xl font-serif font-light text-white">Our Process</h2>
                        </div>
                        <div className="md:w-1/2">
                            <p className="text-[13px] text-white/50 font-light leading-relaxed">
                                A proven four-step framework from initial concept through to sustained operational excellence and community growth.
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

            {/* ─── Why Us ─── */}
            <section className="py-14 md:py-18 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="flex flex-col lg:flex-row gap-12"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="lg:w-2/5">
                            <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#64620B] mb-2">Why Us</p>
                            <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">
                                The Catering District Difference
                            </h2>
                            <p className="text-[14px] text-[#19355e]/55 font-light leading-relaxed">
                                We don't just manage venues — we build communities. Our approach combines deep operational expertise with genuine passion for creating spaces where people want to spend their time.
                            </p>
                        </div>
                        <div className="lg:w-3/5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                                {[
                                    "Experienced in club operations across Australia",
                                    "Focus on experience-based hospitality, not just food",
                                    "Flexible venue partnership model suited to any scale",
                                    "Community-driven approach that builds genuine loyalty",
                                    "Designed for Australia's modern social culture",
                                    "End-to-end management from concept to daily ops"
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className="flex items-start gap-3 py-3 border-b border-[#19355e]/8"
                                        initial={{ opacity: 0, x: -8 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: i * 0.06 }}
                                    >
                                        <Check className="w-4 h-4 text-[#64620B] mt-0.5 shrink-0" />
                                        <span className="text-[13px] text-[#19355e]/60 font-light">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ─── Testimonial ─── */}
            <section className="py-12 md:py-16 px-6 bg-[#fafaf8] border-y border-[#19355e]/6">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <svg className="w-8 h-8 mx-auto mb-5 text-[#64620B]/30" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                        <blockquote className="text-xl md:text-2xl font-serif font-light text-[#19355e] leading-snug mb-5">
                            Catering District transformed our underperforming club into a vibrant community hub. Their operational expertise and genuine care for our members has been extraordinary.
                        </blockquote>
                        <p className="text-[11px] text-[#19355e]/40 uppercase tracking-[0.15em] font-medium">
                            Venue Partner — Sydney, NSW
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ─── CTA ─── */}
            <section className="py-16 md:py-20 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#64620B] mb-3">Get Started</p>
                        <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">
                            Ready to elevate your venue?
                        </h2>
                        <p className="text-[14px] text-[#19355e]/50 font-light max-w-lg mx-auto mb-8">
                            Let's discuss how our operational expertise and community-driven approach can transform your space into a premier destination.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button
                                onClick={() => setIsBookingOpen(true)}
                                className="inline-flex items-center gap-2.5 bg-[#19355e] text-[#ffffff] rounded-full px-8 py-4 text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#0d2240] transition-colors duration-300 group"
                            >
                                <span>Book a Consultation</span>
                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2.5 text-[13px] uppercase tracking-[0.15em] font-medium text-[#19355e]/50 hover:text-[#19355e] transition-colors duration-300"
                            >
                                <span>Or Send Us a Message</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </div>
    );
}
