import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check, Users, Utensils, Building, Star, TrendingUp, Shield, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookingModal from '../components/BookingModal';

export default function Services() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    const services = [
        {
            id: "club-operations",
            num: "01",
            title: "Club Operations",
            tagline: "Full-service management for social clubs, private clubs, and experience-driven venues.",
            description: "We provide comprehensive operational management tailored to the unique atmosphere of your club. From conceptualisation to daily execution, our team ensures that every touchpoint — from the welcome desk to the dining room — is executed with precision and warmth. Our approach merges strategic thinking with hands-on hospitality to create clubs that members genuinely love.",
            extendedDescription: "Our operations team handles everything from staffing rosters and compliance management to menu curation and member communications. We implement industry-leading systems that ensure consistency, quality, and financial transparency across every aspect of your club's daily life.",
            image: "/images/home-team.jpg",
            deliverables: [
                "Club concept and identity development",
                "Comprehensive daily operations management",
                "Bespoke membership programs and retention strategies",
                "Event coordination and execution",
                "Strategic food & beverage partnerships",
                "Proactive community engagement initiatives",
                "Financial reporting and performance tracking",
                "Staff recruitment, training and development"
            ],
            stats: [
                { value: "18+", label: "Years Experience" },
                { value: "95%", label: "Member Retention" },
                { value: "24/7", label: "Operations Support" }
            ]
        },
        {
            id: "experience-clubs",
            num: "02",
            title: "Experience Clubs",
            tagline: "Designing and operating experience-focused clubs that combine hospitality, events, and lifestyle activities.",
            description: "Modern hospitality is about more than just a meal — it's about the entire experience. We specialize in curating dynamic programmatic elements that transform a standard venue into a vibrant lifestyle destination, drawing guests back time and time again. Our experience design methodology combines cultural insight with operational excellence.",
            extendedDescription: "From intimate wine dinners to large-scale social gatherings, we design experiences that reflect the identity of your community. Every event is crafted to build genuine connections among members while maintaining the highest standards of service, ambiance, and culinary quality.",
            image: "/images/home-pastry.jpg",
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
            num: "03",
            title: "Hospitality Partnerships",
            tagline: "Collaborating with venues, property owners, and organisations to manage or activate hospitality spaces.",
            description: "Unlock the hidden potential of your property. We partner with venue owners and developers to activate underutilised spaces, turning them into thriving hospitality hubs that add lasting value to the surrounding community and precinct. Our partnership model is designed for flexibility and mutual growth.",
            extendedDescription: "Whether you own a heritage building looking for a new purpose, a commercial space needing an F&B anchor, or a community facility requiring professional management, we bring the expertise, systems, and creative vision to transform your asset into a destination.",
            image: "/images/home-cafe-1.jpg",
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
        {
            num: "01",
            title: "Discovery",
            desc: "We immerse ourselves in your venue, audience, and goals. Through site visits, stakeholder interviews, and market analysis, we build a complete picture of opportunities and challenges.",
            icon: <Star className="w-5 h-5" />
        },
        {
            num: "02",
            title: "Strategy",
            desc: "We develop detailed operational frameworks, culinary direction, experience programming, and financial models tailored to your specific context and ambitions.",
            icon: <TrendingUp className="w-5 h-5" />
        },
        {
            num: "03",
            title: "Execution",
            desc: "Our team brings the vision to life — from recruiting and training staff to curating menus, designing spaces, and launching marketing campaigns that generate immediate momentum.",
            icon: <Shield className="w-5 h-5" />
        },
        {
            num: "04",
            title: "Growth",
            desc: "Continuous management, performance optimisation, community-building, and innovation ensure your venue doesn't just launch well — it thrives for years to come.",
            icon: <Heart className="w-5 h-5" />
        }
    ];

    const differentiators = [
        "Experienced in club operations across Australia",
        "Focus on experience-based hospitality, not just food",
        "Flexible venue partnership model suited to any scale",
        "Community-driven approach that builds genuine loyalty",
        "Designed for Australia's modern social culture",
        "End-to-end management from concept to daily ops"
    ];

    return (
        <div className="bg-[#ffffff] min-h-screen text-[#19355e]">

            {/* Hero — Hyper minimal white + huge typography */}
            <section className="pt-40 md:pt-48 pb-24 md:pb-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
                        <p className="text-xs uppercase tracking-[0.3em] font-medium text-[#ffda8d] mb-8">Our Services</p>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-[1.05] mb-12 tracking-tight">
                            Elevated<br />
                            <span className="italic text-[#19355e]/60">Operations.</span>
                        </h1>
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 1 }}>
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 border-t border-[#19355e]/10 pt-10">
                            <p className="text-xl md:text-2xl text-[#19355e]/60 font-light leading-relaxed max-w-2xl">
                                We transform venues into dynamic spaces where people connect, relax, and enjoy curated experiences through professional management and a community-first approach.
                            </p>
                            <button
                                onClick={() => setIsBookingOpen(true)}
                                className="shrink-0 inline-flex items-center space-x-3 border border-[#19355e] rounded-full px-8 py-4 text-xs uppercase tracking-[0.15em] font-medium text-[#ffffff] bg-[#19355e] hover:bg-transparent hover:text-[#19355e] transition-all duration-300"
                            >
                                <span>Book a Consultation</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Service Navigation */}
            <section className="px-6 pb-20 border-b border-[#19355e]/10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#19355e]/10 rounded-2xl overflow-hidden">
                        {services.map((service) => (
                            <a
                                key={service.id}
                                href={`#${service.id}`}
                                className="bg-white p-8 md:p-10 group hover:bg-[#19355e]/[0.02] transition-colors duration-300"
                            >
                                <div className="text-sm font-serif italic text-[#19355e]/30 mb-3">{service.num}</div>
                                <h3 className="text-xl font-serif text-[#19355e] mb-3 group-hover:text-[#19355e] transition-colors">{service.title}</h3>
                                <p className="text-sm text-[#19355e]/50 font-light leading-relaxed">{service.tagline}</p>
                                <div className="mt-6 flex items-center space-x-2 text-[#ffda8d] text-xs uppercase tracking-[0.15em] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span>Learn more</span>
                                    <ArrowRight className="w-3 h-3" />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Service Sections */}
            {services.map((service, index) => {
                const isEven = index % 2 === 0;
                return (
                    <section key={service.id} id={service.id} className="py-24 md:py-32 px-6 border-b border-[#19355e]/10 scroll-mt-20">
                        <div className="max-w-7xl mx-auto">

                            {/* Service Header */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.8 }}
                                className="mb-16"
                            >
                                <div className="flex items-center space-x-4 mb-6">
                                    <span className="text-sm font-serif italic text-[#19355e]/30">{service.num}</span>
                                    <div className="w-12 h-px bg-[#ffda8d]"></div>
                                </div>
                                <h2 className="text-4xl md:text-6xl font-serif font-light mb-6">{service.title}</h2>
                                <p className="text-xl md:text-2xl text-[#19355e]/70 font-light leading-relaxed max-w-3xl">{service.tagline}</p>
                            </motion.div>

                            {/* Image + Content Grid */}
                            <div className={`flex flex-col gap-12 lg:gap-20 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-start`}>
                                {/* Image */}
                                <motion.div
                                    className="w-full lg:w-1/2"
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <div className="aspect-[4/5] overflow-hidden rounded-sm">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
                                        />
                                    </div>

                                    {/* Stats Row under image */}
                                    <div className="grid grid-cols-3 gap-px mt-px bg-[#19355e]/10">
                                        {service.stats.map((stat, i) => (
                                            <div key={i} className="bg-white py-6 px-4 text-center">
                                                <div className="text-2xl md:text-3xl font-serif text-[#19355e] mb-1">{stat.value}</div>
                                                <div className="text-xs uppercase tracking-[0.15em] text-[#19355e]/40 font-medium">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Content */}
                                <motion.div
                                    className="w-full lg:w-1/2"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                >
                                    <p className="text-lg text-[#19355e]/80 font-light leading-relaxed mb-8">
                                        {service.description}
                                    </p>
                                    <p className="text-[#19355e]/60 font-light leading-relaxed mb-12">
                                        {service.extendedDescription}
                                    </p>

                                    {/* Deliverables */}
                                    <div>
                                        <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-[#19355e] mb-6 flex items-center">
                                            <span className="w-6 h-px bg-[#ffda8d] mr-4"></span>
                                            What We Deliver
                                        </h4>
                                        <ul className="border-t border-[#19355e]/10">
                                            {service.deliverables.map((item, i) => (
                                                <li key={i} className="flex items-center space-x-4 py-4 border-b border-[#19355e]/10 group">
                                                    <Check className="w-4 h-4 text-[#ffda8d] shrink-0 group-hover:scale-110 transition-transform" />
                                                    <span className="text-[#19355e]/70 font-light tracking-wide group-hover:text-[#19355e] transition-colors">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </section>
                );
            })}

            {/* Why Choose Us — full-width band */}
            <section className="py-24 md:py-32 px-6 bg-[#19355e] text-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col lg:flex-row gap-16 lg:gap-24"
                    >
                        <div className="lg:w-2/5">
                            <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#ffda8d] mb-4">Why Us</p>
                            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
                                The Catering District<br /><span className="italic">Difference</span>
                            </h2>
                            <p className="text-white/60 font-light leading-relaxed">
                                We don't just manage venues — we build communities. Our approach combines deep operational expertise with genuine passion for creating spaces where people want to spend their time.
                            </p>
                        </div>
                        <div className="lg:w-3/5">
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                {differentiators.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.08 }}
                                        className="flex items-start space-x-4 py-4 border-b border-white/10"
                                    >
                                        <Check className="w-4 h-4 text-[#ffda8d] mt-1 shrink-0" />
                                        <span className="text-white/80 font-light">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Process Timeline */}
            <section className="py-24 md:py-32 px-6 border-b border-[#19355e]/10">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col md:flex-row md:items-end gap-8 mb-20"
                    >
                        <div className="md:w-1/2">
                            <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#19355e]/40 mb-4">How We Work</p>
                            <h2 className="text-4xl md:text-5xl font-serif font-light">Our Process</h2>
                        </div>
                        <div className="md:w-1/2">
                            <p className="text-[#19355e]/60 font-light leading-relaxed">
                                A proven four-step framework that takes your venue from initial concept through to sustained operational excellence and community growth.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
                        {processSteps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.12 }}
                                className="relative"
                            >
                                <div className="border-t border-[#19355e]/10 pt-8 relative">
                                    <div className="absolute top-0 left-0 w-10 h-[2px] bg-[#ffda8d] -translate-y-[1px]"></div>
                                    <div className="flex items-center space-x-3 mb-6">
                                        <div className="w-10 h-10 rounded-full bg-[#19355e]/5 flex items-center justify-center text-[#ffda8d]">
                                            {step.icon}
                                        </div>
                                        <span className="text-[#19355e]/15 font-serif text-4xl">{step.num}</span>
                                    </div>
                                    <h3 className="text-xl font-serif text-[#19355e] mb-4">{step.title}</h3>
                                    <p className="text-[#19355e]/60 font-light leading-relaxed text-sm">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial / Trust Band */}
            <section className="py-20 md:py-24 px-6 bg-[#faf9f7]">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="text-[#ffda8d] mb-8">
                            <svg className="w-10 h-10 mx-auto opacity-60" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                        </div>
                        <blockquote className="text-2xl md:text-3xl font-serif font-light text-[#19355e] leading-snug mb-8">
                            Catering District transformed our underperforming club into a vibrant community hub. Their operational expertise and genuine care for our members has been extraordinary.
                        </blockquote>
                        <div className="text-sm text-[#19355e]/50 uppercase tracking-[0.15em] font-medium">
                            Venue Partner — Sydney, NSW
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 md:py-40 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <p className="text-xs uppercase tracking-[0.3em] font-medium text-[#ffda8d] mb-8">Get Started</p>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-[#19355e] mb-8 leading-tight">
                            Ready to elevate<br /><span className="italic">your venue?</span>
                        </h2>
                        <p className="text-lg text-[#19355e]/60 font-light max-w-xl mx-auto mb-12">
                            Let's discuss how our operational expertise and community-driven approach can transform your space into a premier destination.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button
                                onClick={() => setIsBookingOpen(true)}
                                className="inline-flex items-center space-x-3 border border-[#19355e] rounded-full px-10 py-5 text-xs uppercase tracking-[0.15em] font-medium text-[#ffffff] bg-[#19355e] hover:bg-transparent hover:text-[#19355e] transition-all duration-300"
                            >
                                <span>Book a Consultation</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                            <Link
                                to="/contact"
                                className="inline-flex items-center space-x-3 text-sm uppercase tracking-[0.15em] font-medium text-[#19355e]/60 hover:text-[#19355e] transition-colors duration-300"
                            >
                                <span>Or Send Us a Message</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </div>
    );
}
