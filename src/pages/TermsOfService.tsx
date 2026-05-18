import SEO from '../components/SEO';
import { motion } from 'motion/react';

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-[#ffffff] text-[#19355e]">
            <SEO
                title="Terms of Service — Catering District Pty Ltd"
                description="Terms of Service for Catering District Pty Ltd."
                path="/terms-of-service"
            />
            
            <section className="pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#64620B] mb-3">Legal</p>
                        <h1 className="text-4xl md:text-5xl font-serif font-light mb-8">Terms of Service</h1>
                        <div className="w-10 h-[2px] bg-[#64620B] mb-10"></div>
                        
                        <div className="prose prose-sm md:prose-base text-[#19355e]/70 font-light leading-relaxed max-w-none">
                            <p className="mb-6">
                                <strong>Last updated: {new Date().toLocaleDateString()}</strong>
                            </p>
                            <p className="mb-6">
                                Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the cateringdistrict.com.au website (the "Service") operated by Catering District Pty Ltd ("us", "we", or "our").
                            </p>
                            
                            <h2 className="text-2xl font-serif text-[#19355e] mt-10 mb-4">Acceptance of Terms</h2>
                            <p className="mb-6">
                                By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.
                            </p>

                            <h2 className="text-2xl font-serif text-[#19355e] mt-10 mb-4">Intellectual Property</h2>
                            <p className="mb-6">
                                The Service and its original content, features, and functionality are and will remain the exclusive property of Catering District Pty Ltd and its licensors. The Service is protected by copyright, trademark, and other laws of Australia.
                            </p>

                            <h2 className="text-2xl font-serif text-[#19355e] mt-10 mb-4">Links To Other Web Sites</h2>
                            <p className="mb-6">
                                Our Service may contain links to third-party web sites or services that are not owned or controlled by Catering District Pty Ltd. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party web sites or services.
                            </p>

                            <h2 className="text-2xl font-serif text-[#19355e] mt-10 mb-4">Limitation of Liability</h2>
                            <p className="mb-6">
                                In no event shall Catering District Pty Ltd, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                            </p>

                            <h2 className="text-2xl font-serif text-[#19355e] mt-10 mb-4">Changes</h2>
                            <p className="mb-6">
                                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
