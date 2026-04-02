import { Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Menu, X } from 'lucide-react';

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

// Removed duplicate lucide-react import
import { useSiteData } from '../context/SiteContext';

function Footer() {
    const { siteData } = useSiteData();
    const { contactDetails, socialLinks } = siteData;

    return (
        <footer id="contact" className="bg-[#19355e] text-[#ffffff] border-t border-white/10 pt-20 pb-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">

                {/* Brand Column */}
                <div className="md:col-span-1 border-b border-white/10 md:border-none pb-8 md:pb-0">
                    <div className="font-serif text-3xl mb-4">Catering District</div>
                    <p className="text-sm text-[#ffffff]/60 font-light leading-relaxed mb-8 pr-4">
                        Hospitality Experiences & Club Operations across Australia. Elevating community spaces through premium management.
                    </p>
                </div>

                {/* Quick Links Column */}
                <div className="md:col-span-1">
                    <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-[#ffda8d] mb-6">Explore</h4>
                    <ul className="space-y-4 text-sm font-light text-[#ffffff]/70">
                        <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                        <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
                        <li><Link to="/team" className="hover:text-white transition-colors">Our Team</Link></li>
                        <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                        <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
                        <li><a href="/#approach" className="hover:text-white transition-colors">Approach</a></li>
                    </ul>
                </div>

                {/* Contact Column */}
                <div className="md:col-span-2">
                    <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-[#ffda8d] mb-6">Get in Touch</h4>
                    <div className="grid grid-cols-1 gap-6 text-sm font-light text-[#ffffff]/70">
                        <div className="space-y-4">
                            <a href={`mailto:${contactDetails.email}`} className="flex items-center space-x-3 hover:text-white transition-colors group">
                                <Mail className="w-4 h-4 text-[#ffda8d] group-hover:text-white transition-colors" />
                                <span>{contactDetails.email}</span>
                            </a>
                            <a href={`tel:${contactDetails.phone.replace(/\s/g, '')}`} className="flex items-center space-x-3 hover:text-white transition-colors group">
                                <Phone className="w-4 h-4 text-[#ffda8d] group-hover:text-white transition-colors" />
                                <span>{contactDetails.phone}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-xs text-[#ffffff]/40 flex flex-col md:flex-row justify-between items-center gap-4">
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
