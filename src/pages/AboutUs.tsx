import { motion } from 'motion/react';
import { Target, Award, Coffee, Users, Utensils, Building, ArrowRight, Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
    { value: '50+', label: 'Events Hosted' },
    { value: '12+', label: 'Venues Managed' },
    { value: '10K+', label: 'Happy Guests' },
    { value: '4+', label: 'Years Experience' },
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
        <div className="min-h-screen bg-[#f5f2ed]">

            {/* ─── Hero Banner with Gradient ─── */}
            <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden bg-[#1a1a1a]">
                <img
                    src="/images/team-meeting.jpg"
                    alt="Team meeting"
                    className="absolute inset-0 w-full h-full object-cover object-top opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/50 to-transparent" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                    >
                        <p className="text-xs uppercase tracking-[0.3em] font-medium text-[#5A5A40] mb-4">Our Story</p>
                        <h1 className="text-6xl md:text-8xl font-serif font-light leading-[0.95] mb-6 text-[#f5f2ed] max-w-3xl">
                            Crafting <span className="italic">Unforgettable</span> Experiences
                        </h1>
                        <p className="text-lg md:text-xl text-[#f5f2ed]/60 font-light max-w-2xl leading-relaxed">
                            Where culinary artistry meets community spirit — we create spaces that bring people together.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ─── Stats Bar ─── */}
            <section className="bg-[#1a1a1a] border-t border-white/5">
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
                            <p className="text-4xl md:text-5xl font-serif text-[#f5f2ed] mb-1">{stat.value}</p>
                            <p className="text-xs uppercase tracking-[0.2em] text-[#f5f2ed]/40 font-medium">{stat.label}</p>
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
                        <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#5A5A40] mb-4">Who We Are</p>
                        <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 leading-tight text-[#1a1a1a]">
                            More than catering — a <span className="italic">movement</span>
                        </h2>
                        <div className="w-12 h-px bg-[#5A5A40] mb-8" />
                        <p className="text-lg text-[#1a1a1a]/70 font-light leading-relaxed mb-6">
                            Catering District was founded on the belief that true hospitality goes beyond simply providing food.
                            We are dedicated to creating spaces that foster connection, community, and memorable experiences
                            across Australia.
                        </p>
                        <p className="text-lg text-[#1a1a1a]/70 font-light leading-relaxed mb-8">
                            While traditional contract catering focuses on managing food services for offices and institutions, we
                            specialise in operating and facilitating experience-driven clubs and hospitality environments. Our
                            expertise lies in creating vibrant communities, managing club operations, and delivering curated
                            hospitality experiences.
                        </p>
                        <Link to="/services" className="inline-flex items-center space-x-3 border border-[#1a1a1a]/20 rounded-full px-7 py-3.5 text-xs uppercase tracking-[0.15em] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#f5f2ed] transition-all duration-500 group">
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
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#1a1a1a]/20 via-transparent to-[#5A5A40]/10" />
                        </div>
                        {/* Decorative accent */}
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-[#5A5A40]/20 rounded-2xl -z-10" />
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#5A5A40]/10 rounded-2xl -z-10" />
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
                <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/40 via-[#1a1a1a]/30 to-[#1a1a1a]/40" />

                <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <p className="text-xs uppercase tracking-[0.3em] text-[#f5f2ed]/50 mb-6">Culinary Excellence</p>
                        <h2 className="text-4xl md:text-6xl font-serif font-light text-[#f5f2ed] mb-6 leading-tight">
                            Where passion meets <span className="italic">artistry</span>
                        </h2>
                        <p className="text-lg text-[#f5f2ed]/60 font-light leading-relaxed max-w-2xl mx-auto">
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
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#5A5A40] to-[#5A5A40]/0" />
                        <div className="w-14 h-14 rounded-xl bg-[#5A5A40]/10 flex items-center justify-center mb-6 text-[#5A5A40]">
                            <Target className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-serif mb-4 text-[#1a1a1a]">Our Vision</h2>
                        <p className="text-[#1a1a1a]/60 font-light leading-relaxed text-lg">
                            To redefine the landscape of managed spaces by integrating premium hospitality with community-driven
                            environments. We envision a future where every club, venue, and workspace feels like a carefully
                            curated destination — a place people genuinely love to be.
                        </p>
                    </motion.div>

                    <motion.div
                        className="relative overflow-hidden rounded-2xl bg-[#1a1a1a] p-10 md:p-14 text-[#f5f2ed] shadow-lg group"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#f5f2ed]/40 to-transparent" />
                        <div className="w-14 h-14 rounded-xl bg-[#f5f2ed]/10 flex items-center justify-center mb-6 text-[#f5f2ed]/80">
                            <Building className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-serif mb-4">Our Mission</h2>
                        <p className="text-[#f5f2ed]/60 font-light leading-relaxed text-lg">
                            To deliver exceptional operational management and culinary excellence. We strive to be the invisible
                            force that makes every event flow seamlessly and every space feel welcoming, ensuring unparalleled
                            satisfaction for our partners and their guests.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ─── Core Values ─── */}
            <section className="py-20 px-6 bg-[#1a1a1a]">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-xs uppercase tracking-[0.3em] text-[#5A5A40] mb-4">What Drives Us</p>
                        <h2 className="text-4xl md:text-5xl font-serif font-light text-[#f5f2ed]">
                            Our Core <span className="italic">Values</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {values.map((val, i) => (
                            <motion.div
                                key={i}
                                className="relative p-8 rounded-xl bg-white/5 border border-white/5 hover:border-[#5A5A40]/30 hover:bg-white/[0.08] transition-all duration-500 group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                            >
                                <div className="w-12 h-12 rounded-lg bg-[#5A5A40]/20 flex items-center justify-center mb-5 text-[#5A5A40] group-hover:bg-[#5A5A40]/30 transition-colors duration-300">
                                    {val.icon}
                                </div>
                                <h3 className="text-xl font-serif mb-3 text-[#f5f2ed]">{val.title}</h3>
                                <p className="text-[#f5f2ed]/50 font-light leading-relaxed text-sm">{val.desc}</p>
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
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/70 via-[#1a1a1a]/40 to-transparent" />

                <div className="relative z-10 h-full flex items-center px-6">
                    <div className="max-w-7xl mx-auto w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="max-w-xl"
                        >
                            <h2 className="text-4xl md:text-5xl font-serif text-[#f5f2ed] mb-6 font-light leading-tight">
                                Ready to create something <span className="italic">extraordinary</span>?
                            </h2>
                            <p className="text-[#f5f2ed]/60 font-light text-lg mb-8">
                                Let's collaborate and bring your vision to life. Our team is ready to craft an unforgettable experience for you.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/contact" className="inline-flex items-center space-x-3 bg-[#f5f2ed] text-[#1a1a1a] rounded-full px-8 py-4 text-xs uppercase tracking-[0.15em] hover:bg-white transition-all duration-300 group font-medium">
                                    <span>Get In Touch</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link to="/gallery" className="inline-flex items-center space-x-3 border border-[#f5f2ed]/30 text-[#f5f2ed] rounded-full px-8 py-4 text-xs uppercase tracking-[0.15em] hover:bg-[#f5f2ed]/10 transition-all duration-300">
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
