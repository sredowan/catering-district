import SEO from '../components/SEO';
import { motion } from 'motion/react';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-[#ffffff] text-[#19355e]">
            <SEO
                title="Privacy Policy — Catering District Pty Ltd"
                description="Privacy Policy for Catering District Pty Ltd."
                path="/privacy-policy"
            />
            
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#64620B] mb-3">Legal</p>
                        <h1 className="text-4xl md:text-5xl font-serif font-light mb-8">Privacy Policy</h1>
                        <div className="w-10 h-[2px] bg-[#64620B] mb-10"></div>
                        
                        <div className="prose prose-sm md:prose-base text-[#19355e]/70 font-light leading-relaxed max-w-none">
                            <p className="mb-6">
                                <strong>Last updated: {new Date().toLocaleDateString()}</strong>
                            </p>
                            <p className="mb-6">
                                Catering District Pty Ltd ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Catering District.
                            </p>
                            
                            <h2 className="text-2xl font-serif text-[#19355e] mt-10 mb-4">Information We Collect</h2>
                            <p className="mb-6">
                                We collect information you provide directly to us when you use our website, such as when you fill out a contact form, request a quote, or sign up for our services. This may include your name, email address, phone number, and any other information you choose to provide.
                            </p>

                            <h2 className="text-2xl font-serif text-[#19355e] mt-10 mb-4">How We Use Your Information</h2>
                            <p className="mb-6">
                                We use the information we collect to operate and improve our services, respond to your inquiries, provide customer support, and communicate with you about updates, offers, and promotions.
                            </p>

                            <h2 className="text-2xl font-serif text-[#19355e] mt-10 mb-4">Information Sharing</h2>
                            <p className="mb-6">
                                We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your consent, except as required by law or to trusted third parties who assist us in operating our website and conducting our business.
                            </p>

                            <h2 className="text-2xl font-serif text-[#19355e] mt-10 mb-4">Data Security</h2>
                            <p className="mb-6">
                                We implement reasonable security measures to maintain the safety of your personal information. However, no method of transmission over the internet or electronic storage is 100% secure.
                            </p>

                            <h2 className="text-2xl font-serif text-[#19355e] mt-10 mb-4">Contact Us</h2>
                            <p className="mb-6">
                                If you have any questions about this Privacy Policy, please contact us at contact@cateringdistrict.com.au.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
