import { motion } from 'motion/react';
import { Target, Compass, Shield, Users, ChefHat, Building2, Utensils, HandshakeIcon, ArrowRight, Check, Briefcase, ClipboardCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutUs() {
    return (
        <div className="min-h-screen bg-[#ffffff] text-[#19355e]">

            {/* ─── Hero: Compact Split Layout ─── */}
            <section className="relative pt-24 md:pt-28 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Left – Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="py-8 lg:py-16"
                        >
                            <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#64620B] mb-3">About Catering District</p>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-[1.1] mb-6 tracking-tight">
                                Premium Catering, Exceptional Experiences
                            </h1>
                            <div className="w-10 h-[2px] bg-[#64620B] mb-6"></div>
                            <p className="text-[15px] text-[#19355e]/70 font-light leading-relaxed mb-4">
                                Catering District Pty Ltd is a leading provider of professional catering services
                                that have been at the forefront of delivering high-quality culinary experiences for a
                                variety of events, ranging from community gatherings to large-scale corporate functions.
                            </p>
                            <p className="text-[15px] text-[#19355e]/70 font-light leading-relaxed mb-6">
                                Our dedication to excellence is rooted in our passion for fresh, high-quality
                                food, and exceptional service. With years of experience in the hospitality and catering
                                industry, we specialize in providing comprehensive, tailored solutions to meet
                                the needs of our clients.
                            </p>
                            <div className="flex items-center gap-6 text-xs text-[#19355e]/50 font-medium">
                                <span>Catering District Pty Ltd</span>
                                <span className="w-px h-3 bg-[#19355e]/20"></span>
                                <span>ABN: 29 695 591 943</span>
                            </div>
                        </motion.div>

                        {/* Right – Image with white gradient blend */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative aspect-[4/3] lg:aspect-[3/4] overflow-hidden rounded-2xl">
                                <img
                                    src="/images/about-team-1.jpeg"
                                    alt="Chef Maz and team preparing dishes"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#ffffff]/60"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#ffffff]/40 via-transparent to-[#ffffff]/20"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── Stats Strip ─── */}
            <section className="py-10 px-6 border-y border-[#19355e]/8">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { value: '18+', label: 'Years Experience' },
                        { value: '50+', label: 'Events Hosted' },
                        { value: '12+', label: 'Venues Managed' },
                        { value: '10K+', label: 'Happy Guests' },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            className="text-center py-2"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                        >
                            <p className="text-3xl md:text-4xl font-serif text-[#19355e] mb-1">{stat.value}</p>
                            <p className="text-[10px] uppercase tracking-[0.2em] text-[#19355e]/40 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ─── Vision & Mission: Side by Side Cards ─── */}
            <section className="py-14 md:py-20 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Vision */}
                    <motion.div
                        className="relative overflow-hidden rounded-xl bg-[#fafaf8] p-8 md:p-10 border border-[#19355e]/6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#64620B] via-[#64620B]/40 to-transparent"></div>
                        <div className="w-11 h-11 rounded-lg bg-[#64620B]/10 flex items-center justify-center mb-5 text-[#64620B]">
                            <Compass className="w-5 h-5" />
                        </div>
                        <h2 className="text-2xl font-serif mb-3">Our Vision</h2>
                        <p className="text-[14px] text-[#19355e]/60 font-light leading-relaxed">
                            To redefine the landscape of managed spaces by integrating premium
                            hospitality with community-driven environments. We envision a future where
                            every club, venue, and workspace feels like a carefully curated destination —
                            a place people genuinely love to be.
                        </p>
                    </motion.div>

                    {/* Mission */}
                    <motion.div
                        className="relative overflow-hidden rounded-xl bg-[#19355e] p-8 md:p-10 text-[#ffffff]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#ffffff]/50 via-[#ffffff]/20 to-transparent"></div>
                        <div className="w-11 h-11 rounded-lg bg-[#ffffff]/10 flex items-center justify-center mb-5 text-[#ffffff]/80">
                            <Target className="w-5 h-5" />
                        </div>
                        <h2 className="text-2xl font-serif mb-3">Our Mission</h2>
                        <p className="text-[14px] text-[#ffffff]/60 font-light leading-relaxed">
                            To deliver exceptional operational management and culinary excellence. We
                            strive to be the invisible force that makes every event flow seamlessly and every
                            space feel welcoming, ensuring unparalleled satisfaction for our partners and
                            their guests.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ─── Full-Width Image Band ─── */}
            <section className="relative h-[45vh] min-h-[300px] overflow-hidden">
                <img
                    src="/images/about-team-2.jpeg"
                    alt="Chef Maz training team in professional kitchen"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#ffffff] via-[#ffffff]/30 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#ffffff]/50 via-transparent to-[#ffffff]/30"></div>

                <div className="relative z-10 h-full flex items-center px-6">
                    <div className="max-w-7xl mx-auto w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="max-w-sm"
                        >
                            <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#64620B] mb-2">Culinary Leadership</p>
                            <h2 className="text-3xl md:text-4xl font-serif font-light mb-3 text-[#19355e]">
                                Hands-On Training & Excellence
                            </h2>
                            <p className="text-sm text-[#19355e]/60 font-light leading-relaxed">
                                Our Chef-led team brings precision, creativity and mentorship to every kitchen we manage.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── Our Expertise ─── */}
            <section className="py-14 md:py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="mb-10"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#64620B] mb-2">What We Do</p>
                        <h2 className="text-3xl md:text-4xl font-serif font-light">Our Expertise</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {/* Club Operations */}
                        <motion.div
                            className="rounded-xl border border-[#19355e]/8 p-7 hover:border-[#64620B]/30 transition-colors duration-300 group bg-[#fafaf8]"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="w-10 h-10 rounded-lg bg-[#64620B]/10 flex items-center justify-center mb-4 text-[#64620B] group-hover:bg-[#64620B] group-hover:text-white transition-colors duration-300">
                                <Users className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-serif mb-2">Club Operations</h3>
                            <p className="text-[13px] text-[#19355e]/55 font-light leading-relaxed mb-4">
                                Full-service management for social clubs, private clubs, and experience-driven venues.
                            </p>
                            <ul className="space-y-2">
                                {['Club concept development', 'Daily operations management', 'Membership programs', 'Event coordination', 'Food & beverage partnerships', 'Community engagement'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-[13px] text-[#19355e]/65">
                                        <Check className="w-3.5 h-3.5 text-[#64620B] mt-0.5 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Experience Clubs */}
                        <motion.div
                            className="rounded-xl border border-[#19355e]/8 p-7 hover:border-[#64620B]/30 transition-colors duration-300 group bg-[#fafaf8]"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.08 }}
                        >
                            <div className="w-10 h-10 rounded-lg bg-[#64620B]/10 flex items-center justify-center mb-4 text-[#64620B] group-hover:bg-[#64620B] group-hover:text-white transition-colors duration-300">
                                <Utensils className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-serif mb-2">Experience Clubs</h3>
                            <p className="text-[13px] text-[#19355e]/55 font-light leading-relaxed mb-4">
                                Designing and operating experience-focused clubs that combine hospitality, events, and lifestyle activities.
                            </p>
                            <ul className="space-y-2">
                                {['Curated dining experiences', 'Social events and networking', 'Themed gatherings and entertainment', 'Lifestyle and community programs'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-[13px] text-[#19355e]/65">
                                        <Check className="w-3.5 h-3.5 text-[#64620B] mt-0.5 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Hospital Partnerships */}
                        <motion.div
                            className="rounded-xl border border-[#19355e]/8 p-7 hover:border-[#64620B]/30 transition-colors duration-300 group bg-[#fafaf8]"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.16 }}
                        >
                            <div className="w-10 h-10 rounded-lg bg-[#64620B]/10 flex items-center justify-center mb-4 text-[#64620B] group-hover:bg-[#64620B] group-hover:text-white transition-colors duration-300">
                                <Building2 className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-serif mb-2">Hospital Partnerships</h3>
                            <p className="text-[13px] text-[#19355e]/55 font-light leading-relaxed mb-4">
                                Collaborating with venues, property owners, and organisations to manage or activate hospitality spaces.
                            </p>
                            <ul className="space-y-2">
                                {['Activating underutilised venues', 'Managing hospitality operations', 'Designing experience-driven programs', 'Building community engagement'].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-[13px] text-[#19355e]/65">
                                        <Check className="w-3.5 h-3.5 text-[#64620B] mt-0.5 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── Core Values ─── */}
            <section className="py-14 md:py-20 px-6 bg-[#19355e]">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="mb-10 text-center"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#64620B] mb-2">What Drives Us</p>
                        <h2 className="text-3xl md:text-4xl font-serif font-light text-[#ffffff]">Our Core Values</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { icon: <Shield className="w-5 h-5" />, title: "Precision", desc: "Every detail meticulously planned and executed with flawless accuracy." },
                            { icon: <ClipboardCheck className="w-5 h-5" />, title: "Excellence", desc: "Holding ourselves to the highest standards in everything we create." },
                            { icon: <ChefHat className="w-5 h-5" />, title: "Hospitality", desc: "Genuine warmth and care define every interaction and service." },
                            { icon: <HandshakeIcon className="w-5 h-5" />, title: "Collaboration", desc: "Working with partners to bring bold visions to life, together." },
                            { icon: <Briefcase className="w-5 h-5" />, title: "Innovation", desc: "Pushing boundaries to create fresh, memorable experiences." },
                            { icon: <Users className="w-5 h-5" />, title: "Community", desc: "Building meaningful connections through shared experiences." },
                        ].map((val, i) => (
                            <motion.div
                                key={i}
                                className="p-6 rounded-xl bg-white/5 border border-white/5 hover:border-[#64620B]/30 hover:bg-white/[0.07] transition-all duration-300 group"
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.06 }}
                            >
                                <div className="w-9 h-9 rounded-lg bg-[#64620B]/20 flex items-center justify-center mb-4 text-[#64620B] group-hover:bg-[#64620B]/30 transition-colors duration-300">
                                    {val.icon}
                                </div>
                                <h3 className="text-base font-serif mb-2 text-[#ffffff]">{val.title}</h3>
                                <p className="text-[13px] text-[#ffffff]/45 font-light leading-relaxed">{val.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Industry Gallery Strip ─── */}
            <section className="py-3 bg-[#ffffff]">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 px-3">
                    {[
                        { src: '/images/home-pastry.jpg', alt: 'Pastry preparation' },
                        { src: '/images/home-cafe-1.jpg', alt: 'Cafe operations' },
                        { src: '/images/future-new.jpg', alt: 'Venue management' },
                        { src: '/images/home-team.jpg', alt: 'Team collaboration' },
                    ].map((img, i) => (
                        <motion.div
                            key={i}
                            className="relative aspect-[16/10] overflow-hidden rounded-lg"
                            initial={{ opacity: 0, scale: 0.97 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                        >
                            <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#19355e]/30 via-transparent to-[#ffffff]/10"></div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ─── CTA Banner ─── */}
            <section className="py-16 md:py-20 px-6 bg-[#fafaf8] border-t border-[#19355e]/6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#64620B] mb-3">Get Started</p>
                        <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">
                            Ready to create something extraordinary?
                        </h2>
                        <p className="text-[15px] text-[#19355e]/55 font-light max-w-xl mx-auto mb-8">
                            Let's collaborate and bring your vision to life. Our team is ready to craft an unforgettable experience.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link to="/contact" className="inline-flex items-center gap-2.5 bg-[#19355e] text-[#ffffff] rounded-full px-7 py-3.5 text-xs uppercase tracking-[0.15em] hover:bg-[#0d2240] transition-colors duration-300 font-medium group">
                                <span>Get In Touch</span>
                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/services" className="inline-flex items-center gap-2.5 border border-[#19355e]/15 text-[#19355e] rounded-full px-7 py-3.5 text-xs uppercase tracking-[0.15em] hover:bg-[#19355e] hover:text-white transition-all duration-300 font-medium">
                                <span>Explore Services</span>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}
