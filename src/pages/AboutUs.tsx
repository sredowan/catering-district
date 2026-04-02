import { motion } from 'motion/react';
import { Target, Award, Coffee, Users, Utensils, Building, ArrowRight, Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
    { value: '50+', label: 'Events Hosted' },
    { value: '12+', label: 'Venues Managed' },
    { value: '10K+', label: 'Happy Guests' },
    { value: '18+', label: 'Years Experience' },
];

const values = [
    { icon: <Target className="w-6 h-6" />, title: "Precision", desc: "Every detail meticulously planned and executed with flawless accuracy to deliver seamless experiences." },
    { icon: <Award className="w-6 h-6" />, title: "Excellence", desc: "We hold ourselves to the highest standards, continuously raising the bar in everything we create." },
    { icon: <Coffee className="w-6 h-6" />, title: "Hospitality", desc: "Genuine warmth and care define every interaction, turning spaces into welcoming destinations." },
    { icon: <Heart className="w-6 h-6" />, title: "Community", desc: "Building meaningful connections and fostering vibrant communities through shared experiences." },
    { icon: <Star className="w-6 h-6" />, title: "Innovation", desc: "Constantly pushing boundaries to create fresh, memorable experiences that surprise and delight." },
    { icon: <Users className="w-6 h-6" />, title: "Collaboration", desc: "Working hand-in-hand with partners to bring bold visions to life, together." },
];

export default function AboutUs() {
    return (
        <div className="min-h-screen bg-[#ffffff]">

            {/* ─── Hero Banner with Gradient ─── */}
            <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden bg-[#19355e]">
                <img
                    src="/images/team-meeting.jpg"
                    alt="Team meeting"
                    className="absolute inset-0 w-full h-full object-cover object-top opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#19355e] via-[#19355e]/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#19355e]/50 to-transparent" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                    >
                        <p className="text-xs uppercase tracking-[0.3em] font-medium text-[#ffda8d] mb-4">Our Story</p>
                        <h1 className="text-6xl md:text-8xl font-serif font-light leading-[0.95] mb-6 text-[#ffffff] max-w-3xl">
                            Crafting <span className="italic">Unforgettable</span> Experiences
                        </h1>
                        <p className="text-lg md:text-xl text-[#ffffff]/60 font-light max-w-2xl leading-relaxed">
                            Where culinary artistry meets community spirit — we create spaces that bring people together.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ─── Stats Bar ─── */}
            <section className="bg-[#19355e] border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                        >
                            <p className="text-4xl md:text-5xl font-serif text-[#ffffff] mb-1">{stat.value}</p>
                            <p className="text-xs uppercase tracking-[0.2em] text-[#ffffff]/40 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ─── Story Section with Image ─── */}
            <section className="py-24 md:py-32 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#ffda8d] mb-4">Who We Are</p>
                        <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 leading-tight text-[#19355e]">
                            More than catering — a <span className="italic">movement</span>
                        </h2>
                        <div className="w-12 h-px bg-[#ffda8d] mb-8" />
                        <p className="text-lg text-[#19355e]/70 font-light leading-relaxed mb-6">
                            Catering District was founded on the belief that true hospitality goes beyond simply providing food.
                            We are dedicated to creating spaces that foster connection, community, and memorable experiences
                            across Australia.
                        </p>
                        <p className="text-lg text-[#19355e]/70 font-light leading-relaxed mb-8">
                            While traditional contract catering focuses on managing food services for offices and institutions, we
                            specialise in operating and facilitating experience-driven clubs and hospitality environments. Our
                            expertise lies in creating vibrant communities, managing club operations, and delivering curated
                            hospitality experiences.
                        </p>
                        <Link to="/services" className="inline-flex items-center space-x-3 border border-[#19355e]/20 rounded-full px-7 py-3.5 text-xs uppercase tracking-[0.15em] text-[#19355e] hover:bg-[#19355e] hover:text-[#ffffff] transition-all duration-500 group">
                            <span>Explore Our Services</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

                    {/* Image with gradient frame */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-2xl">
                            <img
                                src="/images/team-group.jpg"
                                alt="Our team"
                                className="w-full h-full object-cover object-top"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#19355e]/20 via-transparent to-[#ffda8d]/10" />
                        </div>
                        {/* Decorative accent */}
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-[#ffda8d]/20 rounded-2xl -z-10" />
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#ffda8d]/10 rounded-2xl -z-10" />
                    </motion.div>
                </div>
            </section>

            {/* ─── Full-Width Parallax Image Section ─── */}
            <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
                <img
                    src="/images/future-new.jpg"
                    alt="Culinary excellence"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#19355e]/40 via-[#19355e]/30 to-[#19355e]/40" />

                <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <p className="text-xs uppercase tracking-[0.3em] text-[#ffffff]/50 mb-6">Culinary Excellence</p>
                        <h2 className="text-4xl md:text-6xl font-serif font-light text-[#ffffff] mb-6 leading-tight">
                            Where passion meets <span className="italic">artistry</span>
                        </h2>
                        <p className="text-lg text-[#ffffff]/60 font-light leading-relaxed max-w-2xl mx-auto">
                            Our talented chefs bring creativity and precision to every dish. From intimate gatherings to
                            grand events, we craft culinary journeys that leave lasting impressions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ─── Vision & Mission ─── */}
            <section className="py-24 md:py-32 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        className="relative overflow-hidden rounded-2xl bg-white p-10 md:p-14 shadow-sm group"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ffda8d] to-[#ffda8d]/0" />
                        <div className="w-14 h-14 rounded-xl bg-[#ffda8d]/10 flex items-center justify-center mb-6 text-[#ffda8d]">
                            <Target className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-serif mb-4 text-[#19355e]">Our Vision</h2>
                        <p className="text-[#19355e]/60 font-light leading-relaxed text-lg">
                            To redefine the landscape of managed spaces by integrating premium hospitality with community-driven
                            environments. We envision a future where every club, venue, and workspace feels like a carefully
                            curated destination — a place people genuinely love to be.
                        </p>
                    </motion.div>

                    <motion.div
                        className="relative overflow-hidden rounded-2xl bg-[#19355e] p-10 md:p-14 text-[#ffffff] shadow-lg group"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ffffff]/40 to-transparent" />
                        <div className="w-14 h-14 rounded-xl bg-[#ffffff]/10 flex items-center justify-center mb-6 text-[#ffffff]/80">
                            <Building className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-serif mb-4">Our Mission</h2>
                        <p className="text-[#ffffff]/60 font-light leading-relaxed text-lg">
                            To deliver exceptional operational management and culinary excellence. We strive to be the invisible
                            force that makes every event flow seamlessly and every space feel welcoming, ensuring unparalleled
                            satisfaction for our partners and their guests.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ─── Core Values ─── */}
            <section className="py-20 px-6 bg-[#19355e]">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-xs uppercase tracking-[0.3em] text-[#ffda8d] mb-4">What Drives Us</p>
                        <h2 className="text-4xl md:text-5xl font-serif font-light text-[#ffffff]">
                            Our Core <span className="italic">Values</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {values.map((val, i) => (
                            <motion.div
                                key={i}
                                className="relative p-8 rounded-xl bg-white/5 border border-white/5 hover:border-[#ffda8d]/30 hover:bg-white/[0.08] transition-all duration-500 group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                            >
                                <div className="w-12 h-12 rounded-lg bg-[#ffda8d]/20 flex items-center justify-center mb-5 text-[#ffda8d] group-hover:bg-[#ffda8d]/30 transition-colors duration-300">
                                    {val.icon}
                                </div>
                                <h3 className="text-xl font-serif mb-3 text-[#ffffff]">{val.title}</h3>
                                <p className="text-[#ffffff]/50 font-light leading-relaxed text-sm">{val.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Team Image Banner with CTA ─── */}
            <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
                <img
                    src="/images/team-meeting.jpg"
                    alt="Team collaboration"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#19355e]/70 via-[#19355e]/40 to-transparent" />

                <div className="relative z-10 h-full flex items-center px-6">
                    <div className="max-w-7xl mx-auto w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="max-w-xl"
                        >
                            <h2 className="text-4xl md:text-5xl font-serif text-[#ffffff] mb-6 font-light leading-tight">
                                Ready to create something <span className="italic">extraordinary</span>?
                            </h2>
                            <p className="text-[#ffffff]/60 font-light text-lg mb-8">
                                Let's collaborate and bring your vision to life. Our team is ready to craft an unforgettable experience for you.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/contact" className="inline-flex items-center space-x-3 bg-[#ffffff] text-[#19355e] rounded-full px-8 py-4 text-xs uppercase tracking-[0.15em] hover:bg-white transition-all duration-300 group font-medium">
                                    <span>Get In Touch</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link to="/gallery" className="inline-flex items-center space-x-3 border border-[#ffffff]/30 text-[#ffffff] rounded-full px-8 py-4 text-xs uppercase tracking-[0.15em] hover:bg-[#ffffff]/10 transition-all duration-300">
                                    <span>View Gallery</span>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

        </div>
    );
}
