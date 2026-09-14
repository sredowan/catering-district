import { Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin, Menu, X, ArrowUpRight, ChevronRight, ChevronDown } from 'lucide-react';

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
            <div className="px-4 h-full md:px-6 lg:px-8 max-w-7xl mx-auto flex justify-between items-center relative z-50">
                <Link to="/" className="flex items-center h-full py-2 shrink-0 mr-4" onClick={() => setIsOpen(false)}>
                    <img src="/logo-wide.png" alt="Catering District - Premier Club Catering Sydney" className="w-auto h-full max-h-[38px] md:max-h-[48px] object-contain drop-shadow-sm" />
                </Link>
                
                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-6 text-[11px] uppercase tracking-[0.14em] font-medium">
                    {/* About */}
                    <div className="relative group">
                        <Link to="/about" className="flex items-center gap-1 hover:text-[#64620B] transition-colors py-2">
                            About
                            <ChevronDown className="w-3 h-3 opacity-40 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-300" />
                        </Link>
                        <div className="absolute left-0 top-full pt-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 focus-within:opacity-100 focus-within:visible focus-within:translate-y-0 transition-all duration-200">
                            <div className="min-w-[210px] bg-[#ffffff] border border-[#19355e]/10 rounded-lg shadow-xl py-2">
                                <Link to="/about" className="block px-4 py-2.5 text-[11px] tracking-[0.12em] text-[#19355e]/80 hover:text-[#64620B] hover:bg-[#fafaf8] transition-colors">
                                    Our Story &amp; Values
                                </Link>
                                <Link to="/about/maz-islam" className="block px-4 py-2.5 text-[11px] tracking-[0.12em] text-[#19355e]/80 hover:text-[#64620B] hover:bg-[#fafaf8] transition-colors">
                                    Maz Islam — Founder &amp; JP
                                </Link>
                                <Link to="/team" className="block px-4 py-2.5 text-[11px] tracking-[0.12em] text-[#19355e]/80 hover:text-[#64620B] hover:bg-[#fafaf8] transition-colors">
                                    Executive Team
                                </Link>
                                <Link to="/gallery" className="block px-4 py-2.5 text-[11px] tracking-[0.12em] text-[#19355e]/80 hover:text-[#64620B] hover:bg-[#fafaf8] transition-colors">
                                    Culinary Gallery
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Services Dropdown */}
                    <div className="relative group">
                        <Link to="/services" className="flex items-center gap-1 hover:text-[#64620B] transition-colors py-2">
                            Services
                            <ChevronDown className="w-3 h-3 opacity-40 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-300" />
                        </Link>
                        <div className="absolute left-0 top-full pt-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 focus-within:opacity-100 focus-within:visible focus-within:translate-y-0 transition-all duration-200">
                            <div className="min-w-[260px] bg-[#ffffff] border border-[#19355e]/10 rounded-lg shadow-xl py-2">
                                <Link to="/services" className="block px-4 py-2.5 text-[11px] font-semibold tracking-[0.12em] text-[#19355e] hover:text-[#64620B] hover:bg-[#fafaf8] transition-colors border-b border-gray-100">
                                    All Services Overview
                                </Link>
                                <Link to="/services/club-catering" className="block px-4 py-2.5 text-[11px] tracking-[0.12em] text-[#19355e]/80 hover:text-[#64620B] hover:bg-[#fafaf8] transition-colors">
                                    Club Catering Solutions
                                </Link>
                                <Link to="/services/contract-catering" className="block px-4 py-2.5 text-[11px] tracking-[0.12em] text-[#19355e]/80 hover:text-[#64620B] hover:bg-[#fafaf8] transition-colors">
                                    Contract Catering NSW
                                </Link>
                                <Link to="/services/bistro-restaurant-management" className="block px-4 py-2.5 text-[11px] tracking-[0.12em] text-[#19355e]/80 hover:text-[#64620B] hover:bg-[#fafaf8] transition-colors">
                                    Bistro &amp; Restaurant Operations
                                </Link>
                                <Link to="/services/kitchen-management-compliance" className="block px-4 py-2.5 text-[11px] tracking-[0.12em] text-[#19355e]/80 hover:text-[#64620B] hover:bg-[#fafaf8] transition-colors">
                                    Kitchen Management &amp; HACCP
                                </Link>
                                <Link to="/services/club-event-function-catering" className="block px-4 py-2.5 text-[11px] tracking-[0.12em] text-[#19355e]/80 hover:text-[#64620B] hover:bg-[#fafaf8] transition-colors">
                                    Club Events &amp; Functions
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Clubs Dropdown */}
                    <div className="relative group">
                        <Link to="/clubs" className="flex items-center gap-1 hover:text-[#64620B] transition-colors py-2">
                            Club Sectors
                            <ChevronDown className="w-3 h-3 opacity-40 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-300" />
                        </Link>
                        <div className="absolute left-0 top-full pt-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 focus-within:opacity-100 focus-within:visible focus-within:translate-y-0 transition-all duration-200">
                            <div className="min-w-[240px] bg-[#ffffff] border border-[#19355e]/10 rounded-lg shadow-xl py-2">
                                <Link to="/clubs" className="block px-4 py-2.5 text-[11px] font-semibold tracking-[0.12em] text-[#19355e] hover:text-[#64620B] hover:bg-[#fafaf8] transition-colors border-b border-gray-100">
                                    All Club Types Hub
                                </Link>
                                <Link to="/clubs/rsl-clubs" className="block px-4 py-2.5 text-[11px] tracking-[0.12em] text-[#19355e]/80 hover:text-[#64620B] hover:bg-[#fafaf8] transition-colors">
                                    RSL &amp; Memorial Clubs
                                </Link>
                                <Link to="/clubs/bowling-clubs" className="block px-4 py-2.5 text-[11px] tracking-[0.12em] text-[#19355e]/80 hover:text-[#64620B] hover:bg-[#fafaf8] transition-colors">
                                    Bowling Clubs
                                </Link>
                                <Link to="/clubs/golf-clubs" className="block px-4 py-2.5 text-[11px] tracking-[0.12em] text-[#19355e]/80 hover:text-[#64620B] hover:bg-[#fafaf8] transition-colors">
                                    Golf Clubs
                                </Link>
                                <Link to="/clubs/leagues-sports-clubs" className="block px-4 py-2.5 text-[11px] tracking-[0.12em] text-[#19355e]/80 hover:text-[#64620B] hover:bg-[#fafaf8] transition-colors">
                                    Leagues &amp; Sports Clubs
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Locations Dropdown */}
                    <div className="relative group">
                        <Link to="/locations" className="flex items-center gap-1 hover:text-[#64620B] transition-colors py-2">
                            Locations
                            <ChevronDown className="w-3 h-3 opacity-40 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-300" />
                        </Link>
                        <div className="absolute left-0 top-full pt-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 focus-within:opacity-100 focus-within:visible focus-within:translate-y-0 transition-all duration-200">
                            <div className="min-w-[250px] bg-[#ffffff] border border-[#19355e]/10 rounded-lg shadow-xl py-2">
                                <Link to="/locations" className="block px-4 py-2.5 text-[11px] font-semibold tracking-[0.12em] text-[#19355e] hover:text-[#64620B] hover:bg-[#fafaf8] transition-colors border-b border-gray-100">
                                    All 12 NSW Regions
                                </Link>
                                <Link to="/locations/western-sydney-club-catering" className="block px-4 py-2 text-[11px] tracking-[0.12em] text-[#19355e]/80 hover:text-[#64620B] hover:bg-[#fafaf8] transition-colors">
                                    Western Sydney
                                </Link>
                                <Link to="/locations/parramatta-club-catering" className="block px-4 py-2 text-[11px] tracking-[0.12em] text-[#19355e]/80 hover:text-[#64620B] hover:bg-[#fafaf8] transition-colors">
                                    Parramatta &amp; Cumberland
                                </Link>
                                <Link to="/locations/penrith-club-catering" className="block px-4 py-2 text-[11px] tracking-[0.12em] text-[#19355e]/80 hover:text-[#64620B] hover:bg-[#fafaf8] transition-colors">
                                    Penrith &amp; Nepean
                                </Link>
                                <Link to="/locations/canterbury-bankstown-club-catering" className="block px-4 py-2 text-[11px] tracking-[0.12em] text-[#19355e]/80 hover:text-[#64620B] hover:bg-[#fafaf8] transition-colors">
                                    Canterbury-Bankstown
                                </Link>
                                <Link to="/locations/sutherland-shire-cronulla-club-catering" className="block px-4 py-2 text-[11px] tracking-[0.12em] text-[#19355e]/80 hover:text-[#64620B] hover:bg-[#fafaf8] transition-colors">
                                    Sutherland Shire &amp; Cronulla
                                </Link>
                                <Link to="/locations/northern-beaches-club-catering" className="block px-4 py-2 text-[11px] tracking-[0.12em] text-[#19355e]/80 hover:text-[#64620B] hover:bg-[#fafaf8] transition-colors">
                                    Northern Beaches
                                </Link>
                                <Link to="/locations/inner-west-sydney-club-catering" className="block px-4 py-2 text-[11px] tracking-[0.12em] text-[#19355e]/80 hover:text-[#64620B] hover:bg-[#fafaf8] transition-colors">
                                    Inner West Sydney
                                </Link>
                                <Link to="/locations/newcastle-hunter-club-catering" className="block px-4 py-2 text-[11px] tracking-[0.12em] text-[#19355e]/80 hover:text-[#64620B] hover:bg-[#fafaf8] transition-colors">
                                    Newcastle &amp; Hunter Valley
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Link to="/insights" className="hover:text-[#64620B] transition-colors py-2">Insights</Link>
                    <Link to="/contact" className="hover:text-[#64620B] transition-colors py-2">Contact</Link>

                    {/* Tenders & EOI High-Priority CTA */}
                    <Link
                        to="/tenders-eoi"
                        className="inline-flex items-center gap-1.5 bg-[#19355e] text-[#ffffff] px-4 py-2 rounded-sm text-[10px] font-semibold uppercase tracking-[0.16em] hover:bg-[#64620B] transition-all shadow-sm"
                    >
                        Tenders &amp; EOI
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#ffda8d]" />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="lg:hidden p-2 -mr-2 text-[#19355e] hover:text-[#64620B] transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div 
                className={`fixed inset-0 bg-[#0f2340] flex flex-col justify-start pt-20 pb-10 px-6 transition-all duration-300 ease-in-out lg:hidden overflow-y-auto ${
                    isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
            >
                <div className="flex flex-col space-y-6 text-sm tracking-[0.15em] uppercase font-light text-[#ffffff] max-w-md mx-auto w-full">
                    {/* Tenders CTA Button */}
                    <Link
                        to="/tenders-eoi"
                        className="flex items-center justify-center gap-2 bg-[#ffda8d] text-[#0f2340] py-3.5 px-4 rounded-sm font-semibold tracking-[0.15em] text-xs uppercase shadow-md mb-2"
                        onClick={() => setIsOpen(false)}
                    >
                        Tender Briefs &amp; EOI Submissions
                        <ArrowUpRight className="w-4 h-4" />
                    </Link>

                    <Link to="/" className="text-lg font-medium text-white hover:text-[#ffda8d] transition-colors border-b border-white/10 pb-2" onClick={() => setIsOpen(false)}>
                        Home
                    </Link>

                    {/* Services */}
                    <div>
                        <div className="text-xs tracking-[0.2em] font-semibold text-[#ffda8d] mb-2">Hospitality Services</div>
                        <div className="flex flex-col space-y-2 pl-3 border-l border-white/15 text-xs text-white/80">
                            <Link to="/services" className="hover:text-white" onClick={() => setIsOpen(false)}>All Services</Link>
                            <Link to="/services/club-catering" className="hover:text-white" onClick={() => setIsOpen(false)}>Club Catering</Link>
                            <Link to="/services/contract-catering" className="hover:text-white" onClick={() => setIsOpen(false)}>Contract Catering</Link>
                            <Link to="/services/bistro-restaurant-management" className="hover:text-white" onClick={() => setIsOpen(false)}>Bistro &amp; Restaurant Operations</Link>
                            <Link to="/services/kitchen-management-compliance" className="hover:text-white" onClick={() => setIsOpen(false)}>Kitchen Compliance &amp; HACCP</Link>
                            <Link to="/services/club-event-function-catering" className="hover:text-white" onClick={() => setIsOpen(false)}>Club Events &amp; Functions</Link>
                        </div>
                    </div>

                    {/* Club Sectors */}
                    <div>
                        <div className="text-xs tracking-[0.2em] font-semibold text-[#ffda8d] mb-2">Club Sectors</div>
                        <div className="flex flex-col space-y-2 pl-3 border-l border-white/15 text-xs text-white/80">
                            <Link to="/clubs" className="hover:text-white" onClick={() => setIsOpen(false)}>Club Sectors Hub</Link>
                            <Link to="/clubs/rsl-clubs" className="hover:text-white" onClick={() => setIsOpen(false)}>RSL &amp; Memorial Clubs</Link>
                            <Link to="/clubs/bowling-clubs" className="hover:text-white" onClick={() => setIsOpen(false)}>Bowling Clubs</Link>
                            <Link to="/clubs/golf-clubs" className="hover:text-white" onClick={() => setIsOpen(false)}>Golf Clubs</Link>
                            <Link to="/clubs/leagues-sports-clubs" className="hover:text-white" onClick={() => setIsOpen(false)}>Leagues &amp; Sports Clubs</Link>
                        </div>
                    </div>

                    {/* Key Locations */}
                    <div>
                        <div className="text-xs tracking-[0.2em] font-semibold text-[#ffda8d] mb-2">NSW Regions</div>
                        <div className="flex flex-col space-y-2 pl-3 border-l border-white/15 text-xs text-white/80">
                            <Link to="/locations" className="hover:text-white" onClick={() => setIsOpen(false)}>All 12 NSW Locations</Link>
                            <Link to="/locations/western-sydney-club-catering" className="hover:text-white" onClick={() => setIsOpen(false)}>Western Sydney</Link>
                            <Link to="/locations/parramatta-club-catering" className="hover:text-white" onClick={() => setIsOpen(false)}>Parramatta &amp; Cumberland</Link>
                            <Link to="/locations/canterbury-bankstown-club-catering" className="hover:text-white" onClick={() => setIsOpen(false)}>Canterbury-Bankstown</Link>
                            <Link to="/locations/sutherland-shire-cronulla-club-catering" className="hover:text-white" onClick={() => setIsOpen(false)}>Sutherland Shire</Link>
                        </div>
                    </div>

                    {/* Company & Insights */}
                    <div>
                        <div className="text-xs tracking-[0.2em] font-semibold text-[#ffda8d] mb-2">Company &amp; Insights</div>
                        <div className="flex flex-col space-y-2 pl-3 border-l border-white/15 text-xs text-white/80">
                            <Link to="/about" className="hover:text-white" onClick={() => setIsOpen(false)}>Our Story</Link>
                            <Link to="/about/maz-islam" className="hover:text-white" onClick={() => setIsOpen(false)}>Maz Islam JP (Founder)</Link>
                            <Link to="/team" className="hover:text-white" onClick={() => setIsOpen(false)}>Executive Team</Link>
                            <Link to="/gallery" className="hover:text-white" onClick={() => setIsOpen(false)}>Culinary Gallery</Link>
                            <Link to="/insights" className="hover:text-white" onClick={() => setIsOpen(false)}>Executive Insights &amp; Guides</Link>
                            <Link to="/contact" className="hover:text-white" onClick={() => setIsOpen(false)}>Contact Us</Link>
                        </div>
                    </div>
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
                <div className="max-w-7xl mx-auto px-6 md:px-8 py-14 md:py-16">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                        <div>
                            <span className="text-[#ffda8d] text-xs uppercase tracking-[0.25em] font-semibold mb-2 block">
                                Direct Board &amp; Executive Procurement
                            </span>
                            <h3 className="font-serif text-3xl md:text-4xl mb-3 tracking-tight">
                                Ready to Transform Your Club Dining Operations?
                            </h3>
                            <p className="text-[#ffffff]/60 font-light text-sm md:text-base max-w-xl leading-relaxed">
                                Partner with Catering District for benchmark compliance, profitable bistro revenue shares, and bespoke dining that keeps club members loyal.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                            <Link
                                to="/tenders-eoi"
                                className="group inline-flex items-center justify-center gap-2.5 bg-[#ffda8d] text-[#0f2340] px-7 py-3.5 text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#ffe8b3] transition-all duration-300 rounded-sm shadow-md"
                            >
                                Submit Tender / EOI
                                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-6 py-3.5 text-xs uppercase tracking-[0.16em] font-medium hover:bg-white/10 transition-colors rounded-sm"
                            >
                                Book Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Grid */}
            <div className="relative max-w-7xl mx-auto px-6 md:px-8 pt-16 pb-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">

                    {/* Brand Column */}
                    <div className="lg:col-span-3">
                        <img src="/logo-white.png" alt="Catering District" className="h-12 w-auto mb-5 opacity-95 object-contain" />
                        <p className="text-xs text-[#ffffff]/60 font-light leading-relaxed mb-6">
                            NSW's premier club catering, contract dining management, and bistro hospitality partner. Led by Maz Islam, JP (19+ years experience, Certified HACCP Food Safety Auditor).
                        </p>
                        <div className="space-y-2.5 mb-6 text-xs text-white/70">
                            <div className="flex items-center gap-2">
                                <span className="text-[#ffda8d] font-semibold">ABN:</span>
                                <span>39 676 052 052</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-[#ffda8d] font-semibold">Executive:</span>
                                <span>Maz Islam JP, Managing Director</span>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-2.5">
                            {SOCIAL_LINKS.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Follow Catering District on ${social.name}`}
                                    className="group relative w-9 h-9 flex items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.04] hover:bg-[#ffda8d] hover:border-[#ffda8d] transition-all duration-300"
                                >
                                    <social.icon className="w-4 h-4 text-[#ffffff]/70 group-hover:text-[#0f2340] transition-colors duration-300" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div className="lg:col-span-2">
                        <h4 className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#ffda8d] mb-5">
                            Services
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { to: '/services/club-catering', label: 'Club Catering' },
                                { to: '/services/contract-catering', label: 'Contract Catering' },
                                { to: '/services/bistro-restaurant-management', label: 'Bistro Management' },
                                { to: '/services/kitchen-management-compliance', label: 'Kitchen & HACCP' },
                                { to: '/services/club-event-function-catering', label: 'Functions & Events' },
                                { to: '/services', label: 'All Services &rarr;' },
                            ].map((item) => (
                                <li key={item.to}>
                                    <Link
                                        to={item.to}
                                        className="group flex items-center text-xs font-light text-[#ffffff]/60 hover:text-white transition-colors duration-200"
                                    >
                                        <ChevronRight className="w-3 h-3 mr-1.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#ffda8d]" />
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Club Sectors */}
                    <div className="lg:col-span-2">
                        <h4 className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#ffda8d] mb-5">
                            Club Sectors
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { to: '/clubs/rsl-clubs', label: 'RSL & Memorial Clubs' },
                                { to: '/clubs/bowling-clubs', label: 'Bowling Clubs' },
                                { to: '/clubs/golf-clubs', label: 'Golf & Country Clubs' },
                                { to: '/clubs/leagues-sports-clubs', label: 'Leagues & Sports' },
                                { to: '/clubs', label: 'Sector Hub' },
                                { to: '/tenders-eoi', label: 'Tenders & EOI Portal' },
                            ].map((item) => (
                                <li key={item.to}>
                                    <Link
                                        to={item.to}
                                        className="group flex items-center text-xs font-light text-[#ffffff]/60 hover:text-white transition-colors duration-200"
                                    >
                                        <ChevronRight className="w-3 h-3 mr-1.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#ffda8d]" />
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Key Locations */}
                    <div className="lg:col-span-2">
                        <h4 className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#ffda8d] mb-5">
                            NSW Locations
                        </h4>
                        <ul className="space-y-2.5">
                            {[
                                { to: '/locations/western-sydney-club-catering', label: 'Western Sydney' },
                                { to: '/locations/parramatta-club-catering', label: 'Parramatta & Cumberland' },
                                { to: '/locations/penrith-club-catering', label: 'Penrith & Blue Mtns' },
                                { to: '/locations/canterbury-bankstown-club-catering', label: 'Canterbury-Bankstown' },
                                { to: '/locations/sutherland-shire-cronulla-club-catering', label: 'Sutherland Shire' },
                                { to: '/locations/northern-beaches-club-catering', label: 'Northern Beaches' },
                                { to: '/locations/inner-west-sydney-club-catering', label: 'Inner West Sydney' },
                                { to: '/locations/newcastle-hunter-club-catering', label: 'Newcastle & Hunter' },
                                { to: '/locations/wollongong-illawarra-club-catering', label: 'Wollongong Illawarra' },
                                { to: '/locations', label: 'All 12 Locations &rarr;' },
                            ].map((item) => (
                                <li key={item.to}>
                                    <Link
                                        to={item.to}
                                        className="group flex items-center text-xs font-light text-[#ffffff]/60 hover:text-white transition-colors duration-200"
                                    >
                                        <ChevronRight className="w-3 h-3 mr-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#ffda8d]" />
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 5: Insights & Contact */}
                    <div className="lg:col-span-3">
                        <h4 className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#ffda8d] mb-5">
                            Executive Insights
                        </h4>
                        <ul className="space-y-2.5 mb-6">
                            {[
                                { to: '/insights/in-house-vs-contract-catering-clubs', label: 'In-House vs Contract Catering' },
                                { to: '/insights/how-to-run-a-profitable-club-bistro', label: 'Running a Profitable Bistro' },
                                { to: '/insights/club-catering-eoi-tender-guide', label: 'Club Catering EOI Guide' },
                                { to: '/insights/haccp-food-safety-compliance-nsw-clubs', label: 'HACCP Compliance in NSW' },
                                { to: '/insights', label: 'All Industry Insights &rarr;' },
                            ].map((item) => (
                                <li key={item.to}>
                                    <Link
                                        to={item.to}
                                        className="group flex items-center text-xs font-light text-[#ffffff]/60 hover:text-white transition-colors duration-200"
                                    >
                                        <ChevronRight className="w-3 h-3 mr-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#ffda8d]" />
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="space-y-3 pt-3 border-t border-white/10">
                            <a
                                href={`mailto:${FOOTER_EMAIL}`}
                                className="group flex items-center gap-2.5 text-xs font-light text-[#ffffff]/60 hover:text-white transition-colors duration-200"
                            >
                                <Mail className="w-3.5 h-3.5 text-[#ffda8d]/80 shrink-0" />
                                <span>{FOOTER_EMAIL}</span>
                            </a>
                            <a
                                href={`tel:${contactDetails.phone.replace(/\s/g, '')}`}
                                className="group flex items-center gap-2.5 text-xs font-light text-[#ffffff]/60 hover:text-white transition-colors duration-200"
                            >
                                <Phone className="w-3.5 h-3.5 text-[#ffda8d]/80 shrink-0" />
                                <span>{contactDetails.phone}</span>
                            </a>
                            <div className="flex items-center gap-2.5 text-xs font-light text-[#ffffff]/50">
                                <MapPin className="w-3.5 h-3.5 text-[#ffda8d]/80 shrink-0" />
                                <span>Sydney &amp; Regional NSW, Australia</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/[0.06]">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-xs text-[#ffffff]/40 font-light tracking-wide">
                            &copy; {new Date().getFullYear()} Catering District (ABN 39 676 052 052). All rights reserved. NSW Registered Commercial Food Business.
                        </p>
                        <div className="flex items-center gap-6 text-xs text-[#ffffff]/40 font-light">
                            <Link to="/about/maz-islam" className="hover:text-[#ffffff]/70 transition-colors duration-200">Maz Islam JP</Link>
                            <span className="w-px h-3 bg-white/10" />
                            <Link to="/tenders-eoi" className="hover:text-[#ffffff]/70 transition-colors duration-200">Procurement &amp; Tenders</Link>
                            <span className="w-px h-3 bg-white/10" />
                            <Link to="/privacy-policy" className="hover:text-[#ffffff]/70 transition-colors duration-200">Privacy Policy</Link>
                            <span className="w-px h-3 bg-white/10" />
                            <Link to="/terms-of-service" className="hover:text-[#ffffff]/70 transition-colors duration-200">Terms of Service</Link>
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
