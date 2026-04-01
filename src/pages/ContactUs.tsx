import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function ContactUs() {
    return (
        <div className="pt-32 pb-24 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#5A5A40] mb-4">Get In Touch</p>
                        <h1 className="text-5xl md:text-7xl font-serif font-light mb-8 text-[#1a1a1a]">
                            Let's <span className="italic">Connect</span>
                        </h1>
                        <div className="w-px h-16 bg-[#1a1a1a]/20 mx-auto mb-8"></div>
                        <p className="text-lg text-[#1a1a1a]/70 font-light leading-relaxed">
                            Whether you are looking for a partnership or have inquiries about our club operations,
                            we are here to answer your questions and explore opportunities.
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
                            <h3 className="text-2xl font-serif font-light text-[#1a1a1a] mb-8 border-b border-[#1a1a1a]/10 pb-4">Our Details</h3>
                            <ul className="space-y-8">
                                <li className="flex items-start space-x-4">
                                    <Mail className="w-6 h-6 text-[#5A5A40] mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-sm uppercase tracking-widest text-[#1a1a1a]/50 font-medium mb-1">Email</h4>
                                        <a href="mailto:contact@cateringdistrict.com.au" className="text-lg text-[#1a1a1a] hover:text-[#5A5A40] transition-colors overflow-wrap break-word">
                                            contact@cateringdistrict.com.au
                                        </a>
                                    </div>
                                </li>

                                <li className="flex items-start space-x-4">
                                    <Phone className="w-6 h-6 text-[#5A5A40] mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="text-sm uppercase tracking-widest text-[#1a1a1a]/50 font-medium mb-1">Phone</h4>
                                        <a href="tel:0432591795" className="text-lg text-[#1a1a1a] hover:text-[#5A5A40] transition-colors">
                                            0432 591 795
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Contact Form Column */}
                    <motion.div
                        className="w-full lg:w-2/3 bg-[#f5f2ed] p-10 md:p-14"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-3xl font-serif font-light text-[#1a1a1a] mb-8">Send a Message</h3>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-xs uppercase tracking-widest text-[#1a1a1a]/60 font-medium mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-transparent border-b border-[#1a1a1a]/20 py-3 px-0 text-[#1a1a1a] focus:outline-none focus:border-[#5A5A40] transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-xs uppercase tracking-widest text-[#1a1a1a]/60 font-medium mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-transparent border-b border-[#1a1a1a]/20 py-3 px-0 text-[#1a1a1a] focus:outline-none focus:border-[#5A5A40] transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-xs uppercase tracking-widest text-[#1a1a1a]/60 font-medium mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full bg-transparent border-b border-[#1a1a1a]/20 py-3 px-0 text-[#1a1a1a] focus:outline-none focus:border-[#5A5A40] transition-colors"
                                    placeholder="How can we help you?"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-xs uppercase tracking-widest text-[#1a1a1a]/60 font-medium mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-transparent border-b border-[#1a1a1a]/20 py-3 px-0 text-[#1a1a1a] focus:outline-none focus:border-[#5A5A40] transition-colors resize-none"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="mt-8 bg-[#1a1a1a] text-[#f5f2ed] border border-[#1a1a1a] px-8 py-4 text-xs uppercase tracking-[0.15em] hover:bg-transparent hover:text-[#1a1a1a] transition-colors duration-300 w-full sm:w-auto"
                            >
                                Submit Message
                            </button>
                        </form>
                    </motion.div>
                </div>

            </div>
        </div>
    );
}
