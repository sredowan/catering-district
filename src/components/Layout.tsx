import { Link, Outlet } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 mix-blend-difference text-white">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/" className="font-serif text-2xl tracking-wide">CD.</Link>
                <div className="hidden md:flex space-x-8 text-xs uppercase tracking-[0.15em]">
                    <Link to="/about" className="hover:opacity-70 transition-opacity">About</Link>
                    <Link to="/services" className="hover:opacity-70 transition-opacity">Services</Link>
                    <Link to="/gallery" className="hover:opacity-70 transition-opacity">Gallery</Link>
                    <Link to="/contact" className="hover:opacity-70 transition-opacity">Contact</Link>
                </div>
            </div>
        </nav>
    );
}

import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useSiteData } from '../context/SiteContext';

function Footer() {
    const { siteData } = useSiteData();
    const { contactDetails, socialLinks } = siteData;

    return (
        <footer id="contact" className="bg-[#1a1a1a] text-[#f5f2ed] border-t border-white/10 pt-20 pb-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">

                {/* Brand Column */}
                <div className="md:col-span-1 border-b border-white/10 md:border-none pb-8 md:pb-0">
                    <div className="font-serif text-3xl mb-4">Catering District</div>
                    <p className="text-sm text-[#f5f2ed]/60 font-light leading-relaxed mb-8 pr-4">
                        Hospitality Experiences & Club Operations across Australia. Elevating community spaces through premium management.
                    </p>
                    <div className="flex space-x-5">
                        <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-[#f5f2ed]/60 hover:text-white transition-colors" aria-label="Instagram">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-[#f5f2ed]/60 hover:text-white transition-colors" aria-label="Facebook">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-[#f5f2ed]/60 hover:text-white transition-colors" aria-label="Twitter">
                            <Twitter className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Quick Links Column */}
                <div className="md:col-span-1">
                    <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-[#5A5A40] mb-6">Explore</h4>
                    <ul className="space-y-4 text-sm font-light text-[#f5f2ed]/70">
                        <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                        <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
                        <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                        <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
                        <li><a href="/#approach" className="hover:text-white transition-colors">Approach</a></li>
                    </ul>
                </div>

                {/* Contact Column */}
                <div className="md:col-span-2">
                    <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-[#5A5A40] mb-6">Get in Touch</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm font-light text-[#f5f2ed]/70">
                        <div className="space-y-4">
                            <a href={`mailto:${contactDetails.email}`} className="flex items-center space-x-3 hover:text-white transition-colors group">
                                <Mail className="w-4 h-4 text-[#5A5A40] group-hover:text-white transition-colors" />
                                <span>{contactDetails.email}</span>
                            </a>
                            <a href={`tel:${contactDetails.phone.replace(/\s/g, '')}`} className="flex items-center space-x-3 hover:text-white transition-colors group">
                                <Phone className="w-4 h-4 text-[#5A5A40] group-hover:text-white transition-colors" />
                                <span>{contactDetails.phone}</span>
                            </a>
                        </div>
                        <div className="flex items-start space-x-3">
                            <MapPin className="w-4 h-4 text-[#5A5A40] mt-0.5 shrink-0" />
                            <span className="leading-relaxed whitespace-pre-line">
                                {contactDetails.address}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-xs text-[#f5f2ed]/40 flex flex-col md:flex-row justify-between items-center gap-4">
                <p>&copy; {new Date().getFullYear()} Catering District. All rights reserved.</p>
                <div className="flex space-x-6">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
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
