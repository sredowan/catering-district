import { Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin, Menu, X, ArrowUpRight, ChevronRight } from 'lucide-react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#ffffff] text-[#19355e] shadow-md border-b border-[#19355e]/10 transition-all duration-300 h-[60px] md:h-[70px]">
            <div className="px-5 h-full md:px-8 max-w-7xl mx-auto flex justify-between items-center relative z-50">
                <Link to="/" className="flex items-center h-full py-2" onClick={() => setIsOpen(false)}>
                    <img src="/logo-wide.png" alt="Catering District" className="w-auto h-full max-h-[40px] md:max-h-[50px] object-contain drop-shadow-sm" />
                </Link>
                
                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 text-xs uppercase tracking-[0.15em] font-medium">
                    <Link to="/about" className="hover:text-[#64620B] transition-colors">About</Link>
                    <Link to="/team" className="hover:text-[#64620B] transition-colors">Team</Link>
                    <Link to="/services" className="hover:text-[#64620B] transition-colors">Services</Link>
                    <Link to="/gallery" className="hover:text-[#64620B] transition-colors">Gallery</Link>
                    <Link to="/contact" className="hover:text-[#64620B] transition-colors">Contact</Link>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden p-2 -mr-2 text-[#19355e] hover:text-[#64620B] transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div 
                className={`fixed inset-0 bg-[#19355e] flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden ${
                    isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
            >
                <div className="flex flex-col items-center space-y-10 text-xl tracking-[0.2em] uppercase font-light text-[#ffffff]">
                    <Link to="/" className="hover:text-[#64620B] transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/about" className="hover:text-[#64620B] transition-colors" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/team" className="hover:text-[#64620B] transition-colors" onClick={() => setIsOpen(false)}>Team</Link>
                    <Link to="/services" className="hover:text-[#64620B] transition-colors" onClick={() => setIsOpen(false)}>Services</Link>
                    <Link to="/gallery" className="hover:text-[#64620B] transition-colors" onClick={() => setIsOpen(false)}>Gallery</Link>
                    <Link to="/contact" className="hover:text-[#64620B] transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
                </div>
            </div>
        </nav>
    );
}

import { useSiteData } from '../context/SiteContext';

const FOOTER_EMAIL = 'contact@cateringdistrict.com.au';

const SOCIAL_LINKS = [
    {
        name: 'Facebook',
        url: 'https://www.facebook.com/people/Catering-District/61587745174197/',
        icon: Facebook,
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/catering_district/',
        icon: Instagram,
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/company/catering-district/',
        icon: Linkedin,
    },
];

function Footer() {
    const { siteData } = useSiteData();
    const { contactDetails } = siteData;

    return (
        <footer id="footer" className="relative bg-gradient-to-b from-[#0f2340] to-[#0a1929] text-[#ffffff] overflow-hidden">

            {/* Subtle decorative background elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#ffda8d]/[0.03] rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#19355e]/30 rounded-full blur-3xl" />
            </div>

            {/* CTA Strip */}
            <div className="relative border-b border-white/[0.06]">
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                        <div>
                            <h3 className="font-serif text-3xl md:text-4xl mb-3 tracking-tight">
                                Ready to elevate your space?
                            </h3>
                            <p className="text-[#ffffff]/50 font-light text-sm md:text-base max-w-md leading-relaxed">
                                Let's discuss how Catering District can transform your hospitality experience.
                            </p>
                        </div>
                        <Link
                            to="/contact"
                            className="group inline-flex items-center gap-3 bg-[#ffda8d] text-[#0f2340] px-8 py-4 text-sm uppercase tracking-[0.15em] font-semibold hover:bg-[#ffe8b3] transition-all duration-300 rounded-sm"
                        >
                            Get in Touch
                            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Footer Grid */}
            <div className="relative max-w-7xl mx-auto px-6 md:px-8 pt-16 pb-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Brand Column */}
                    <div className="lg:col-span-4">
                        <img src="/logo-white.png" alt="Catering District" className="h-14 w-auto mb-6 opacity-95 object-contain" />
                        <p className="text-sm text-[#ffffff]/50 font-light leading-[1.8] mb-8 max-w-xs">
                            Premium hospitality experiences &amp; club operations across Australia. Elevating community spaces through exceptional management.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3">
                            {SOCIAL_LINKS.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Follow us on ${social.name}`}
                                    className="group relative w-10 h-10 flex items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.04] hover:bg-[#ffda8d] hover:border-[#ffda8d] transition-all duration-300"
                                >
                                    <social.icon className="w-[18px] h-[18px] text-[#ffffff]/70 group-hover:text-[#0f2340] transition-colors duration-300" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2 lg:col-start-5">
                        <h4 className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#ffda8d] mb-6">
                            Explore
                        </h4>
                        <ul className="space-y-3.5">
                            {[
                                { to: '/', label: 'Home' },
                                { to: '/about', label: 'Our Story' },
                                { to: '/team', label: 'Our Team' },
                                { to: '/services', label: 'Services' },
                                { to: '/gallery', label: 'Gallery' },
                            ].map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        className="group flex items-center text-sm font-light text-[#ffffff]/55 hover:text-white transition-colors duration-200"
                                    >
                                        <ChevronRight className="w-3 h-3 mr-2 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#ffda8d]" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="lg:col-span-3">
                        <h4 className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#ffda8d] mb-6">
                            Services
                        </h4>
                        <ul className="space-y-3.5">
                            {[
                                'Club Operations',
                                'Experience Clubs',
                                'Hospitality Partnerships',
                                'Event Coordination',
                            ].map((item) => (
                                <li key={item}>
                                    <Link
                                        to="/services"
                                        className="group flex items-center text-sm font-light text-[#ffffff]/55 hover:text-white transition-colors duration-200"
                                    >
                                        <ChevronRight className="w-3 h-3 mr-2 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#ffda8d]" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="lg:col-span-3">
                        <h4 className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#ffda8d] mb-6">
                            Contact
                        </h4>
                        <div className="space-y-5">
                            <a
                                href={`mailto:${FOOTER_EMAIL}`}
                                className="group flex items-start gap-3 text-sm font-light text-[#ffffff]/55 hover:text-white transition-colors duration-200"
                            >
                                <Mail className="w-4 h-4 mt-0.5 text-[#ffda8d]/80 shrink-0" />
                                <span>{FOOTER_EMAIL}</span>
                            </a>
                            <a
                                href={`tel:${contactDetails.phone.replace(/\s/g, '')}`}
                                className="group flex items-start gap-3 text-sm font-light text-[#ffffff]/55 hover:text-white transition-colors duration-200"
                            >
                                <Phone className="w-4 h-4 mt-0.5 text-[#ffda8d]/80 shrink-0" />
                                <span>{contactDetails.phone}</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/[0.06]">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-xs text-[#ffffff]/30 font-light tracking-wide">
                            &copy; {new Date().getFullYear()} Catering District. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6 text-xs text-[#ffffff]/30 font-light">
                            <Link to="/privacy-policy" className="hover:text-[#ffffff]/60 transition-colors duration-200">Privacy Policy</Link>
                            <span className="w-px h-3 bg-white/10" />
                            <Link to="/terms-of-service" className="hover:text-[#ffffff]/60 transition-colors duration-200">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default function Layout() {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
