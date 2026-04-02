import { motion } from 'motion/react';
import { ChefHat, ClipboardList, Calendar, Building2, Award, Users, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Team() {
    return (
        <div className="min-h-screen bg-[#ffffff] text-[#19355e]">

            {/* ─── Hero: Compact ─── */}
            <section className="pt-24 md:pt-28 pb-10 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#64620B] mb-3">Our People</p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-[1.1] mb-4 tracking-tight">
                            The Team Behind Catering District
                        </h1>
                        <p className="text-[15px] text-[#19355e]/60 font-light max-w-2xl leading-relaxed">
                            Meet the dedicated professionals who bring passion, expertise, and operational excellence to every venue we manage.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ─── Maz Islam — Founder Feature ─── */}
            <section className="py-10 md:py-14 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
                        {/* Photo — 2 cols */}
                        <motion.div
                            className="lg:col-span-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden">
                                <img
                                    src="/images/maz-portrait.jpeg"
                                    alt="Maz Islam - Founder & Director"
                                    className="w-full h-full object-cover object-center"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#19355e]/60 via-transparent to-transparent"></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#ffffff]/15"></div>
                                {/* Name overlay at bottom */}
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <p className="text-2xl font-serif text-[#ffffff] mb-1">Maz Islam</p>
                                    <p className="text-xs uppercase tracking-[0.2em] text-[#ffffff]/60 font-medium">Founder & Director</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Bio + Highlights — 3 cols */}
                        <motion.div
                            className="lg:col-span-3 flex flex-col justify-center"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                        >
                            <div className="bg-[#fafaf8] rounded-xl p-7 md:p-9 border border-[#19355e]/6">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-9 h-9 rounded-lg bg-[#64620B]/10 flex items-center justify-center text-[#64620B]">
                                        <ChefHat className="w-4.5 h-4.5" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-serif">Maz Islam</h2>
                                        <p className="text-[11px] uppercase tracking-[0.2em] text-[#64620B] font-medium">Founder & Director</p>
                                    </div>
                                </div>

                                <p className="text-[14px] text-[#19355e]/65 font-light leading-relaxed mb-4">
                                    With a career that spans over 19+ years in the hospitality and catering
                                    industry, Maz is the visionary behind Catering District Pty Ltd. His
                                    extensive experience in kitchen management, event coordination, and
                                    large-scale catering services has established the company as a trusted
                                    name in the industry.
                                </p>
                                <p className="text-[14px] text-[#19355e]/65 font-light leading-relaxed mb-6">
                                    Chef Maz has successfully managed kitchens, led event coordination teams,
                                    and delivered large-scale catering services at renowned venues such as
                                    Five Dock RSL, Crossroads Hotel, and EBP RSL. He is committed to excellence,
                                    ensuring that every event is delivered with culinary brilliance and seamless execution.
                                </p>

                                {/* Key highlights */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {[
                                        { icon: <Calendar className="w-4 h-4" />, text: '19+ Years in Hospitality' },
                                        { icon: <Building2 className="w-4 h-4" />, text: 'Five Dock RSL, Crossroads Hotel' },
                                        { icon: <Award className="w-4 h-4" />, text: 'Kitchen Management Expert' },
                                        { icon: <Users className="w-4 h-4" />, text: 'Team Leadership & Training' },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-2.5 text-[13px] text-[#19355e]/60">
                                            <div className="w-7 h-7 rounded-md bg-[#64620B]/8 flex items-center justify-center text-[#64620B] shrink-0">
                                                {item.icon}
                                            </div>
                                            <span>{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── Team Kitchen Image Band ─── */}
            <section className="relative h-[30vh] min-h-[200px] overflow-hidden mx-6 rounded-xl">
                <img
                    src="/images/about-team-2.jpeg"
                    alt="Team in action in the kitchen"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#ffffff]/70 via-[#ffffff]/20 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#ffffff]/30 via-transparent to-[#ffffff]/20"></div>
                <div className="relative z-10 h-full flex items-center px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#64620B] mb-1">Kitchen Leadership</p>
                        <p className="text-xl md:text-2xl font-serif text-[#19355e]">Where Precision Meets Passion</p>
                    </motion.div>
                </div>
            </section>

            {/* ─── Kimberly May Abing ─── */}
            <section className="py-10 md:py-14 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
                        {/* Bio — 3 cols (reversed order from Maz) */}
                        <motion.div
                            className="lg:col-span-3 flex flex-col justify-center order-2 lg:order-1"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="bg-[#fafaf8] rounded-xl p-7 md:p-9 border border-[#19355e]/6">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-9 h-9 rounded-lg bg-[#64620B]/10 flex items-center justify-center text-[#64620B]">
                                        <ClipboardList className="w-4.5 h-4.5" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-serif">Kimberly May Abing</h2>
                                        <p className="text-[11px] uppercase tracking-[0.2em] text-[#64620B] font-medium">Operations & Logistics Manager</p>
                                    </div>
                                </div>

                                <p className="text-[14px] text-[#19355e]/65 font-light leading-relaxed mb-4">
                                    Kim leads Operations & Logistics, ensuring the smooth
                                    execution of daily operations and efficient service delivery. With her
                                    expertise in managing inventory, coordinating deliveries, and
                                    overseeing on-site setups, she ensures every event runs seamlessly
                                    from start to finish.
                                </p>
                                <p className="text-[14px] text-[#19355e]/65 font-light leading-relaxed mb-6">
                                    With over 10 years of experience in Operations
                                    and Human Resources, Kim has developed an extensive
                                    understanding of both operational management and human resource
                                    coordination, making her an invaluable part of the Catering District leadership.
                                </p>

                                {/* Key highlights */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {[
                                        { icon: <Briefcase className="w-4 h-4" />, text: '10+ Years in Operations & HR' },
                                        { icon: <ClipboardList className="w-4 h-4" />, text: 'Inventory & Logistics Expert' },
                                        { icon: <Calendar className="w-4 h-4" />, text: 'On-Site Setup Coordination' },
                                        { icon: <Users className="w-4 h-4" />, text: 'Human Resources Management' },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-2.5 text-[13px] text-[#19355e]/60">
                                            <div className="w-7 h-7 rounded-md bg-[#64620B]/8 flex items-center justify-center text-[#64620B] shrink-0">
                                                {item.icon}
                                            </div>
                                            <span>{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Photo — 2 cols */}
                        <motion.div
                            className="lg:col-span-2 order-1 lg:order-2"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                        >
                            <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden bg-[#f0efe8]">
                                <img
                                    src="/images/kim-portrait.png"
                                    alt="Kimberly May Abing - Operations & Logistics Manager"
                                    className="w-full h-full object-cover object-top"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#19355e]/50 via-transparent to-transparent"></div>
                                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#ffffff]/15"></div>
                                {/* Name overlay at bottom */}
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <p className="text-2xl font-serif text-[#ffffff] mb-1">Kimberly May Abing</p>
                                    <p className="text-xs uppercase tracking-[0.2em] text-[#ffffff]/60 font-medium">Operations & Logistics Manager</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ─── Team Values Bar ─── */}
            <section className="py-12 px-6 bg-[#19355e]">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-8"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#ffda8d] mb-2">Our Principles</p>
                        <h2 className="text-2xl md:text-3xl font-serif font-light text-[#ffffff]">What We Stand For</h2>
                    </motion.div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { icon: <Award className="w-5 h-5" />, title: 'Excellence', desc: 'Highest standards in every delivery' },
                            { icon: <Users className="w-5 h-5" />, title: 'Teamwork', desc: 'Collaborative, united approach' },
                            { icon: <ChefHat className="w-5 h-5" />, title: 'Craft', desc: 'Culinary precision and creativity' },
                            { icon: <Building2 className="w-5 h-5" />, title: 'Integrity', desc: 'Transparent and trustworthy' },
                        ].map((val, i) => (
                            <motion.div
                                key={i}
                                className="p-5 rounded-xl bg-white/5 border border-white/5 text-center"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.06 }}
                            >
                                <div className="w-9 h-9 rounded-lg bg-[#ffda8d]/20 flex items-center justify-center mx-auto mb-3 text-[#ffda8d]">
                                    {val.icon}
                                </div>
                                <h3 className="text-sm font-serif text-[#ffffff] mb-1">{val.title}</h3>
                                <p className="text-[11px] text-[#ffffff]/40 font-light">{val.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CTA ─── */}
            <section className="py-14 md:py-18 px-6 bg-[#fafaf8] border-t border-[#19355e]/6">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#64620B] mb-3">Join Us</p>
                        <h2 className="text-2xl md:text-3xl font-serif font-light mb-3">
                            Want to work with our team?
                        </h2>
                        <p className="text-[14px] text-[#19355e]/50 font-light mb-6 max-w-md mx-auto">
                            We're always looking for passionate professionals to join Catering District.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                            <Link to="/contact" className="inline-flex items-center gap-2 bg-[#19355e] text-[#ffffff] rounded-full px-7 py-3 text-xs uppercase tracking-[0.15em] hover:bg-[#0d2240] transition-colors duration-300 font-medium group">
                                <span>Get In Touch</span>
                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/about" className="inline-flex items-center gap-2 border border-[#19355e]/15 text-[#19355e] rounded-full px-7 py-3 text-xs uppercase tracking-[0.15em] hover:bg-[#19355e] hover:text-white transition-all duration-300 font-medium">
                                <span>About Us</span>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}
