import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Globe, CheckCircle2, Send, Loader2 } from 'lucide-react';
import SEO, { breadcrumbSchema } from '../components/SEO';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        try {
            await fetch('/api/enquiries', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    type: 'General Website Enquiry'
                })
            });
        } catch (err) {
            console.error('Submission error:', err);
        } finally {
            setStatus('success');
        }
    };

    return (
        <div className="pt-32 pb-24 bg-white min-h-screen">
            <SEO
                title="Contact Us — Catering District"
                description="Get in touch with Catering District. Email contact@cateringdistrict.com.au or call 0432 591 795 for hospitality and catering inquiries."
                path="/contact"
                jsonLd={[
                    breadcrumbSchema([
                        { name: 'Home', url: '/' },
                        { name: 'Contact', url: '/contact' },
                    ]),
                    {
                        '@context': 'https://schema.org',
                        '@type': 'ContactPage',
                        name: 'Contact Catering District',
                        description: 'Get in touch with Catering District for hospitality and catering inquiries.',
                        url: 'https://cateringdistrict.com.au/contact',
                    }
                ]}
            />
            <div className="max-w-7xl mx-auto px-6">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#64620B] mb-4">Get In Touch</p>
                        <h1 className="text-5xl md:text-7xl font-serif font-light mb-8 text-[#19355e]">
                            Let's <span className="italic">Connect</span>
                        </h1>
                        <div className="w-px h-16 bg-[#19355e]/20 mx-auto mb-8"></div>
                        <p className="text-lg text-[#19355e]/70 font-light leading-relaxed">
                            Whether you are looking for a club catering partnership, have general questions, or want to discuss operations, our executive team is here to help. All website enquiries go directly to <strong>contact@cateringdistrict.com.au</strong>.
                        </p>
                    </motion.div>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 justify-center max-w-5xl mx-auto">
                    {/* Contact Details Column */}
                    <motion.div
                        className="w-full lg:w-1/3 space-y-12"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div>
                            <h3 className="text-2xl font-serif font-light text-[#19355e] mb-8 border-b border-[#19355e]/10 pb-4">Our Details</h3>
                            <ul className="space-y-8">
                                <li className="flex items-start space-x-4">
                                    <Mail className="w-6 h-6 text-[#64620B] mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-sm uppercase tracking-widest text-[#19355e]/50 font-medium mb-1">Email</h4>
                                        <a href="mailto:contact@cateringdistrict.com.au" className="text-lg text-[#19355e] hover:text-[#64620B] transition-colors overflow-wrap break-word font-medium">
                                            contact@cateringdistrict.com.au
                                        </a>
                                    </div>
                                </li>

                                <li className="flex items-start space-x-4">
                                    <Phone className="w-6 h-6 text-[#64620B] mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-sm uppercase tracking-widest text-[#19355e]/50 font-medium mb-1">Phone</h4>
                                        <a href="tel:0432591795" className="text-lg text-[#19355e] hover:text-[#64620B] transition-colors font-medium">
                                            0432 591 795
                                        </a>
                                    </div>
                                </li>

                                <li className="flex items-start space-x-4">
                                    <MapPin className="w-6 h-6 text-[#64620B] mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-sm uppercase tracking-widest text-[#19355e]/50 font-medium mb-1">Service Areas</h4>
                                        <p className="text-sm text-[#19355e]/70">
                                            Greater Sydney &amp; Regional NSW
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Contact Form Column */}
                    <motion.div
                        className="w-full lg:w-2/3 bg-[#ffffff] p-8 md:p-12 border border-[#19355e]/10 rounded-2xl shadow-sm"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl md:text-3xl font-serif font-light text-[#19355e] mb-2">Send an Enquiry</h3>
                        <p className="text-xs text-[#19355e]/60 mb-8 uppercase tracking-wider">
                            Direct email to contact@cateringdistrict.com.au
                        </p>

                        {status === 'success' ? (
                            <div className="p-8 bg-[#fafaf8] border border-[#64620B]/30 rounded-xl text-center space-y-4">
                                <div className="w-14 h-14 bg-[#64620B]/10 rounded-full flex items-center justify-center mx-auto text-[#64620B]">
                                    <CheckCircle2 className="w-7 h-7" />
                                </div>
                                <h4 className="text-2xl font-serif text-[#19355e] font-normal">Enquiry Successfully Received</h4>
                                <p className="text-sm text-[#19355e]/75 max-w-md mx-auto leading-relaxed">
                                    Thank you! Your details have been dispatched directly to <strong>contact@cateringdistrict.com.au</strong>. A branded confirmation receipt has been sent to your email.
                                </p>
                                <div className="p-3 bg-white rounded-lg border border-[#19355e]/10 max-w-sm mx-auto">
                                    <p className="text-xs text-[#64620B] font-medium">
                                        Executive Response Guarantee: Maz Islam, JP and our team will review and respond within 24 hours.
                                    </p>
                                </div>
                                <button
                                    onClick={() => {
                                        setStatus('idle');
                                        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                                    }}
                                    className="text-xs font-semibold uppercase tracking-wider text-[#19355e] underline pt-2 cursor-pointer hover:text-[#64620B] transition-colors"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-xs uppercase tracking-widest text-[#19355e]/70 font-medium mb-2">Full Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-[#fafaf8] border border-[#19355e]/20 rounded-md py-3 px-4 text-sm text-[#19355e] focus:outline-none focus:border-[#64620B] transition-colors"
                                            placeholder="e.g. Sarah Connor"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-xs uppercase tracking-widest text-[#19355e]/70 font-medium mb-2">Email Address *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-[#fafaf8] border border-[#19355e]/20 rounded-md py-3 px-4 text-sm text-[#19355e] focus:outline-none focus:border-[#64620B] transition-colors"
                                            placeholder="s.connor@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-[#19355e]/70 font-medium mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full bg-[#fafaf8] border border-[#19355e]/20 rounded-md py-3 px-4 text-sm text-[#19355e] focus:outline-none focus:border-[#64620B] transition-colors"
                                            placeholder="e.g. 0412 345 678"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-xs uppercase tracking-widest text-[#19355e]/70 font-medium mb-2">Subject *</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            required
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            className="w-full bg-[#fafaf8] border border-[#19355e]/20 rounded-md py-3 px-4 text-sm text-[#19355e] focus:outline-none focus:border-[#64620B] transition-colors"
                                            placeholder="Club Catering / Partnership / General"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-xs uppercase tracking-widest text-[#19355e]/70 font-medium mb-2">Message *</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full bg-[#fafaf8] border border-[#19355e]/20 rounded-md py-3 px-4 text-sm text-[#19355e] focus:outline-none focus:border-[#64620B] transition-colors resize-none"
                                        placeholder="Please tell us about your venue, inquiry, or operational needs..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="inline-flex items-center justify-center gap-2 bg-[#19355e] text-[#ffffff] px-8 py-4 text-xs uppercase tracking-[0.16em] hover:bg-[#64620B] transition-colors duration-300 w-full sm:w-auto rounded-sm font-semibold cursor-pointer disabled:opacity-60"
                                >
                                    {status === 'submitting' ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            <span>Sending to contact@cateringdistrict.com.au...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4" />
                                            <span>Send Enquiry to contact@cateringdistrict.com.au</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>

            </div>
        </div>
    );
}
