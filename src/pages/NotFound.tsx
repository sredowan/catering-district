import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#ffffff] text-[#19355e]">
            <SEO
                title="Page Not Found — Catering District"
                description="The page you requested could not be found."
                noindex
            />

            <section className="pt-32 pb-24 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#64620B] mb-4">Error 404</p>
                    <h1 className="text-4xl md:text-5xl font-serif font-light mb-5 tracking-tight">
                        This page doesn't exist
                    </h1>
                    <div className="w-10 h-[2px] bg-[#64620B] mx-auto mb-8" />
                    <p className="text-[15px] text-[#19355e]/60 font-light leading-relaxed max-w-xl mx-auto mb-10">
                        The page may have moved or the address may be mistyped. These are the
                        pages people most often need:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto mb-10 text-left">
                        {[
                            { to: '/services', label: 'Our Services', note: 'Club operations & catering' },
                            { to: '/about/maz-islam', label: 'Maz Islam', note: 'Founder & Director' },
                            { to: '/contact', label: 'Contact', note: 'Talk to our team' },
                        ].map((item) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                className="group rounded-xl border border-[#19355e]/8 px-5 py-4 hover:border-[#64620B]/30 hover:bg-[#fafaf8] transition-all duration-300"
                            >
                                <p className="text-[13px] font-medium mb-1 group-hover:text-[#64620B] transition-colors">
                                    {item.label}
                                </p>
                                <p className="text-[12px] text-[#19355e]/45 font-light">{item.note}</p>
                            </Link>
                        ))}
                    </div>

                    <Link
                        to="/"
                        className="group inline-flex items-center gap-2.5 bg-[#19355e] text-[#ffffff] rounded-full px-7 py-3.5 text-xs uppercase tracking-[0.15em] hover:bg-[#0d2240] transition-colors duration-300 font-medium"
                    >
                        Back to Home
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
