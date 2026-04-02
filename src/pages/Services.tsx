import { motion } from 'motion/react';
import { Users, Utensils, Building, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Services() {
    const services = [
        {
            id: "club-operations",
            title: "Club Operations",
            subtitle: "Full-service management for social clubs, private clubs, and experience-driven venues.",
            content: "We provide comprehensive operational management tailored to the unique atmosphere of your club. From conceptualisation to daily execution, our team ensures that every touchpoint—from the welcome desk to the dining room—is executed with precision and warmth.",
            items: [
                "Club concept and identity development",
                "Comprehensive daily operations management",
                "Bespoke membership programs and retention strategies",
                "Event coordination and execution",
                "Strategic food & beverage partnerships",
                "Proactive community engagement initiatives"
            ],
            icon: <Users className="w-8 h-8" />,
            image: "https://images.unsplash.com/photo-1528605105345-5344ea20e269?q=80&w=2070&auto=format&fit=crop", // People networking/lounge
            reverse: false
        },
        {
            id: "experience-clubs",
            title: "Experience Clubs",
            subtitle: "Designing and operating experience-focused clubs that combine hospitality, events, and lifestyle activities.",
            content: "Modern hospitality is about more than just a meal; it's about the entire experience. We specialize in curating dynamic programmatic elements that transform a standard venue into a vibrant lifestyle destination, drawing guests back time and time again.",
            items: [
                "Curated, multi-course dining experiences",
                "Exclusive social events and networking nights",
                "Themed gatherings and live entertainment",
                "Holistic lifestyle and wellness community programs"
            ],
            icon: <Utensils className="w-8 h-8" />,
            image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop", // Fine dining/events
            reverse: true
        },
        {
            id: "hospitality-partnerships",
            title: "Hospitality Partnerships",
            subtitle: "Collaborating with venues, property owners, and organisations to manage or activate hospitality spaces.",
            content: "Unlock the hidden potential of your property. We partner with venue owners and developers to activate underutilised spaces, turning them into thriving hospitality hubs that add lasting value to the surrounding community and precinct.",
            items: [
                "Strategic activation of underutilised venues",
                "End-to-end management of hospitality operations",
                "Designing tailored, experience-driven programs",
                "Building and nurturing local community engagement"
            ],
            icon: <Building className="w-8 h-8" />,
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop", // Modern building/cafe
            reverse: false
        }
    ];

    return (
        <div className="pt-32 pb-24 bg-[#ffffff] min-h-screen">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#ffda8d] mb-4">What We Do</p>
                        <h1 className="text-5xl md:text-7xl font-serif font-light mb-8 text-[#19355e]">
                            Our <span className="italic">Expertise</span>
                        </h1>
                        <div className="w-px h-16 bg-[#19355e]/20 mx-auto mb-8"></div>
                        <p className="text-lg text-[#19355e]/80 font-light leading-relaxed">
                            Transforming venues into dynamic spaces where people connect, relax, and enjoy curated experiences.
                            We bring professional operations and a community-first approach to every partnership.
                        </p>
                    </motion.div>
                </div>

                {/* Services List */}
                <div className="space-y-32">
                    {services.map((service, index) => (
                        <div key={service.id} id={service.id} className={`flex flex-col gap-12 lg:gap-20 ${service.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}>

                            {/* Image Section */}
                            <motion.div
                                className="w-full lg:w-1/2"
                                initial={{ opacity: 0, x: service.reverse ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-xl">
                                    <div className="absolute inset-0 bg-[#19355e]/10 z-10 mix-blend-multiply"></div>
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                                        referrerPolicy="no-referrer"
                                    />
                                </div>
                            </motion.div>

                            {/* Content Section */}
                            <motion.div
                                className="w-full lg:w-1/2"
                                initial={{ opacity: 0, x: service.reverse ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="w-16 h-16 rounded-full border border-[#19355e]/10 flex items-center justify-center mb-8 text-[#ffda8d] bg-white shadow-sm">
                                    {service.icon}
                                </div>

                                <h2 className="text-4xl font-serif font-light text-[#19355e] mb-4">{service.title}</h2>
                                <h3 className="text-xl text-[#19355e]/60 font-serif italic mb-6">{service.subtitle}</h3>
                                <p className="text-[#19355e]/80 font-light leading-relaxed mb-8">
                                    {service.content}
                                </p>

                                <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-[#ffda8d] mb-6 border-b border-[#19355e]/10 pb-2">Key Deliverables</h4>
                                <ul className="space-y-4">
                                    {service.items.map((item, i) => (
                                        <li key={i} className="flex items-start space-x-3 text-[#19355e]/80">
                                            <CheckCircle2 className="w-5 h-5 text-[#ffda8d] mt-0.5 shrink-0" />
                                            <span className="leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    className="mt-32 text-center bg-[#19355e] text-[#ffffff] p-16 rounded-sm shadow-2xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-serif font-light mb-6">Ready to elevate your space?</h2>
                    <p className="text-[#ffffff]/70 font-light max-w-2xl mx-auto mb-10">
                        Let's discuss how our operational expertise and community-driven approach can transform your venue into a premier destination.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center space-x-3 border border-white/30 rounded-full px-8 py-4 text-xs uppercase tracking-[0.15em] text-white hover:bg-white hover:text-[#19355e] transition-all duration-300"
                    >
                        <span>Partner With Us</span>
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </motion.div>

            </div>
        </div>
    );
}
