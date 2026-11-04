import { motion } from 'motion/react';
import { Target, Compass, Shield, Users, ChefHat, Building2, Utensils, HandshakeIcon, ArrowRight, Check, Briefcase, ClipboardCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO, { breadcrumbSchema } from '../components/SEO';

export default function AboutUs() {
    return (
        <div className="min-h-screen bg-[#ffffff] text-[#19355e]">
            <SEO
                title="About Us — Catering District Pty Ltd"
                description="Catering District is an owner-led hospitality business founded by Chef Maz Islam, built on 19+ years of hands-on experience and a genuine commitment to clubs and their communities."
                path="/about"
                ogImage="/images/about-team-1.jpeg"
                jsonLd={[
                    breadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'About Us', url: '/about' },
                    ]),
                    {
                        '@context': 'https://schema.org',
                        '@type': 'AboutPage',
                        name: 'About Catering District',
                        description: 'Catering District Pty Ltd is an owner-led club catering and hospitality business founded by Chef Maz Islam.',
                        url: 'https://cateringdistrict.com.au/about',
                    }
                ]}
            />

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
                                Hospitality Is <span className="italic">Personal</span> to Us.
                            </h1>
                            <div className="w-10 h-[2px] bg-[#64620B] mb-6"></div>
                            <p className="text-[15px] text-[#19355e]/70 font-light leading-relaxed mb-4">
                                Catering District was founded on a belief that great club hospitality deserves more
                                than a standard catering arrangement. It deserves people who listen, understand the
                                venue, take responsibility and genuinely care about the outcome.
                            </p>
                            <p className="text-[15px] text-[#19355e]/70 font-light leading-relaxed mb-6">
                                We are an owner-led hospitality business founded by Chef Maz Islam, drawing on more than
                                19 years of his experience in kitchens, catering, hospitality workforce development and
                                licensed-club environments. Our ambition is to build meaningful, long-term partnerships
                                with clubs through experienced leadership, reliable operations and personal involvement.
                            </p>
                            <div className="flex items-center gap-6 text-xs text-[#19355e]/50 font-medium">
                                <span>Catering District Pty Ltd</span>
                                <span className="w-px h-3 bg-[#19355e]/20"></span>
                                <span>Your Club. Our Commitment.</span>
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
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#ffffff]/60"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#ffffff]/40 via-transparent to-[#ffffff]/20"></div>
                            </div>
                        </motion.div>
                    </div>
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
                            Clubs where great food and genuine hospitality bring members together: welcoming,
                            community-focused venues that feel like a place people genuinely love to return to.
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
                            To support clubs with quality food, dependable service and accountable leadership.
                            We work closely with Boards, managers and staff, stay personally involved, and
                            commit to doing things properly, every service, every day.
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
                    loading="lazy"
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
                            <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#64620B] mb-2">Hands-On. From Day One.</p>
                            <h2 className="text-3xl md:text-4xl font-serif font-light mb-3 text-[#19355e]">
                                Practical Kitchen Leadership
                            </h2>
                            <p className="text-sm text-[#19355e]/60 font-light leading-relaxed">
                                Chef Maz works alongside the team in the kitchen, bringing practical skills, mentoring and high standards to every service.
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
                        <h2 className="text-3xl md:text-4xl font-serif font-light">How We Can Help</h2>
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
                                Hands-on support for social clubs, private clubs and community venues, from daily operations to member programs.
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
                                Bringing members together through dining, events and social programs that build a sense of belonging.
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

                        {/* Hospitality Partnerships */}
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
                            <h3 className="text-lg font-serif mb-2">Hospitality Partnerships</h3>
                            <p className="text-[13px] text-[#19355e]/55 font-light leading-relaxed mb-4">
                                Working with venues, property owners and organisations to bring hospitality spaces to life, together.
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
                            { icon: <HandshakeIcon className="w-5 h-5" />, title: "Genuine & Personal", desc: "We genuinely care. Every partnership is built on trust and personal commitment." },
                            { icon: <ChefHat className="w-5 h-5" />, title: "Experienced & Capable", desc: "19+ years of hands-on hospitality experience and practical kitchen leadership." },
                            { icon: <Users className="w-5 h-5" />, title: "Community-Focused", desc: "Member-first hospitality that understands your community and its people." },
                            { icon: <Shield className="w-5 h-5" />, title: "Accountable", desc: "Accessible leadership and clear responsibility. You always know who to call." },
                            { icon: <ClipboardCheck className="w-5 h-5" />, title: "Doing Things Properly", desc: "Quality, consistency and food safety in every service." },
                            { icon: <Briefcase className="w-5 h-5" />, title: "Growing Together", desc: "Building something meaningful with a shared vision and long-term partnerships." },
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

            {/* ─── Founder Spotlight ─── */}
            <section className="py-14 md:py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link
                            to="/about/maz-islam"
                            className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-center rounded-xl border border-[#19355e]/8 p-6 md:p-8 hover:border-[#64620B]/30 hover:bg-[#fafaf8] transition-all duration-300"
                        >
                            <div className="md:col-span-3">
                                <div className="aspect-[4/5] md:aspect-square rounded-lg overflow-hidden max-w-[220px]">
                                    <img
                                        src="/images/maz-portrait.jpeg"
                                        alt="Maz Islam, Founder & Managing Director"
                                        className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            <div className="md:col-span-9">
                                <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#64620B] mb-3">
                                    Meet the Founder
                                </p>
                                <h2 className="text-2xl md:text-3xl font-serif font-light mb-3 tracking-tight">
                                    Maz Islam — Founder &amp; Managing Director
                                </h2>
                                <p className="text-[14.5px] text-[#19355e]/60 font-light leading-relaxed max-w-2xl mb-5">
                                    Nineteen years across club catering, commercial kitchens, and high-volume events,
                                    from Qantas airline catering and Crossroads Hotel to founding Future Chefs and Industry
                                    Placement Solutions. Maz leads every Catering District partnership personally.
                                </p>
                                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-medium text-[#19355e] group-hover:text-[#64620B] transition-colors">
                                    View Full Profile
                                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                            </div>
                        </Link>
                    </motion.div>
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
                            <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
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
                            A Partnership Worth Building.
                        </h2>
                        <p className="text-[15px] text-[#19355e]/55 font-light max-w-xl mx-auto mb-8">
                            Tell us about your club. We'd love to understand your members, your community and what you want your hospitality to become.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link to="/contact" className="inline-flex items-center gap-2.5 bg-[#19355e] text-[#ffffff] rounded-full px-7 py-3.5 text-xs uppercase tracking-[0.15em] hover:bg-[#0d2240] transition-colors duration-300 font-medium group">
                                <span>Explore a Partnership</span>
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
