import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Users, Clock, Mail, User, Phone, Check } from 'lucide-react';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        guests: '2',
        type: 'dinner',
        time: '',
    });

    const [specialReqs, setSpecialReqs] = useState({
        highchair: false,
        pram: false,
        wheelchair: false,
        business: false
    });

    const [agreedToUpdates, setAgreedToUpdates] = useState(false);
    const [agreedToTerms, setAgreedToTerms] = useState(false);

    const [showTerms, setShowTerms] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setIsSuccess(false);
            setErrorMsg('');
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
            setShowTerms(false);
        };
    }, [isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!agreedToTerms) {
            setErrorMsg('You must agree to the Terms and Conditions to proceed.');
            return;
        }

        setIsSubmitting(true);
        setErrorMsg('');

        try {
            const res = await fetch('/api/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    specialReqs: {
                        'Highchair (subject to availability)': specialReqs.highchair,
                        'Pram Space Required': specialReqs.pram,
                        'Wheelchair/Walker': specialReqs.wheelchair,
                        'Business Meal': specialReqs.business
                    },
                    agreedToUpdates,
                    agreedToTerms
                })
            });

            const data = await res.json();
            if (data.success) {
                setIsSuccess(true);
                // Reset form fields
                setFormData({ name: '', email: '', phone: '', date: '', guests: '2', type: 'dinner', time: '' });
                setSpecialReqs({ highchair: false, pram: false, wheelchair: false, business: false });
                setAgreedToUpdates(false);
                setAgreedToTerms(false);
            } else {
                setErrorMsg(data.error || 'Failed to submit booking. Please try again.');
            }
        } catch (error) {
            setErrorMsg('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex flex-col justify-end sm:items-center sm:justify-center px-0 sm:px-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-[#1a1a1a]/60 backdrop-blur-sm"
                    ></motion.div>

                    {/* Modal Content */}
                    <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="relative w-full max-w-2xl bg-[#f5f2ed] rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[90vh] overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-5 border-b border-[#1a1a1a]/10 shrink-0 bg-[#f5f2ed] z-10 sticky top-0">
                            <h2 className="text-2xl font-serif text-[#1a1a1a]">Make a <span className="italic">Reservation</span></h2>
                            <button onClick={onClose} className="p-2 rounded-full hover:bg-[#1a1a1a]/5 transition-colors text-[#1a1a1a]/60 hover:text-[#1a1a1a]">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="overflow-y-auto w-full">
                            {isSuccess ? (
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.95 }} 
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="p-12 text-center flex flex-col items-center justify-center min-h-[400px]"
                                >
                                    <div className="w-20 h-20 bg-[#5A5A40]/10 rounded-full flex items-center justify-center mb-6 text-[#5A5A40]">
                                        <Check className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-3xl font-serif mb-4">Reservation Requested</h3>
                                    <p className="text-[#1a1a1a]/70 font-light mb-8 max-w-sm">
                                        Thank you for your request. Our team will review your details and send you a confirmation email shortly.
                                    </p>
                                    <button 
                                        onClick={onClose}
                                        className="bg-[#1a1a1a] text-[#f5f2ed] px-8 py-3 text-xs uppercase tracking-[0.15em] hover:bg-[#5A5A40] transition-colors"
                                    >
                                        Close Window
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-8">
                                    
                                    {errorMsg && (
                                        <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm border border-red-100 flex items-start">
                                            <span>{errorMsg}</span>
                                        </div>
                                    )}

                                    {/* Personal Info */}
                                    <div>
                                        <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-[#5A5A40] mb-4">Your Details</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div className="relative">
                                                <User className="absolute left-4 top-3.5 w-4 h-4 text-[#1a1a1a]/40" />
                                                <input 
                                                    type="text" required placeholder="Full Name"
                                                    value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                                                    className="w-full bg-white border border-[#1a1a1a]/10 rounded-xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:border-[#5A5A40] focus:ring-1 focus:ring-[#5A5A40] transition-all"
                                                />
                                            </div>
                                            <div className="relative">
                                                <Mail className="absolute left-4 top-3.5 w-4 h-4 text-[#1a1a1a]/40" />
                                                <input 
                                                    type="email" required placeholder="Email Address"
                                                    value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                                                    className="w-full bg-white border border-[#1a1a1a]/10 rounded-xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:border-[#5A5A40] focus:ring-1 focus:ring-[#5A5A40] transition-all"
                                                />
                                            </div>
                                            <div className="relative sm:col-span-2">
                                                <Phone className="absolute left-4 top-3.5 w-4 h-4 text-[#1a1a1a]/40" />
                                                <input 
                                                    type="tel" placeholder="Phone Number (Optional)"
                                                    value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                                                    className="w-full bg-white border border-[#1a1a1a]/10 rounded-xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:border-[#5A5A40] focus:ring-1 focus:ring-[#5A5A40] transition-all"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Booking Details */}
                                    <div>
                                        <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-[#5A5A40] mb-4">Reservation Details</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div className="relative">
                                                <Calendar className="absolute left-4 top-3.5 w-4 h-4 text-[#1a1a1a]/40" />
                                                <input 
                                                    type="date" required min={new Date().toISOString().split('T')[0]}
                                                    value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})}
                                                    className="w-full bg-white border border-[#1a1a1a]/10 rounded-xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:border-[#5A5A40] focus:ring-1 focus:ring-[#5A5A40] transition-all text-[#1a1a1a]/80"
                                                />
                                                <label className="absolute -top-2 left-4 px-1 text-[10px] uppercase font-bold text-[#1a1a1a]/40 bg-white">Date</label>
                                            </div>
                                            <div className="relative flex">
                                                <div className="relative w-1/2 pr-2">
                                                    <Users className="absolute left-4 top-3.5 w-4 h-4 text-[#1a1a1a]/40" />
                                                    <input 
                                                        type="number" required min="1" max="50"
                                                        value={formData.guests} onChange={e => setFormData({...formData, guests: e.target.value})}
                                                        className="w-full bg-white border border-[#1a1a1a]/10 rounded-xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:border-[#5A5A40] focus:ring-1 focus:ring-[#5A5A40] transition-all text-[#1a1a1a]/80"
                                                    />
                                                    <label className="absolute -top-2 left-4 px-1 text-[10px] uppercase font-bold text-[#1a1a1a]/40 bg-white">Guests</label>
                                                </div>
                                                <div className="relative w-1/2 pl-2">
                                                    <select 
                                                        required
                                                        value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})}
                                                        className="w-full bg-white border border-[#1a1a1a]/10 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-[#5A5A40] focus:ring-1 focus:ring-[#5A5A40] transition-all text-[#1a1a1a]/80 appearance-none"
                                                    >
                                                        <option value="lunch">Lunch</option>
                                                        <option value="dinner">Dinner</option>
                                                        <option value="other">Other</option>
                                                    </select>
                                                    <label className="absolute -top-2 left-4 px-1 text-[10px] uppercase font-bold text-[#1a1a1a]/40 bg-white">Meal</label>
                                                </div>
                                            </div>
                                            <div className="relative sm:col-span-2">
                                                <Clock className="absolute left-4 top-3.5 w-4 h-4 text-[#1a1a1a]/40" />
                                                <input 
                                                    type="time" required
                                                    value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})}
                                                    className="w-full bg-white border border-[#1a1a1a]/10 rounded-xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:border-[#5A5A40] focus:ring-1 focus:ring-[#5A5A40] transition-all text-[#1a1a1a]/80"
                                                />
                                                <label className="absolute -top-2 left-4 px-1 text-[10px] uppercase font-bold text-[#1a1a1a]/40 bg-white">Time</label>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Special Requirements */}
                                    <div>
                                        <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-[#5A5A40] mb-4">Special Requirements</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-white p-5 rounded-xl border border-[#1a1a1a]/10">
                                            <label className="flex items-center space-x-3 cursor-pointer group">
                                                <input type="checkbox" checked={specialReqs.highchair} onChange={(e) => setSpecialReqs({...specialReqs, highchair: e.target.checked})} className="w-4 h-4 rounded text-[#5A5A40] focus:ring-[#5A5A40] accent-[#5A5A40]" />
                                                <span className="text-sm text-[#1a1a1a]/80 group-hover:text-[#1a1a1a] transition-colors">Highchair (subject to availability)</span>
                                            </label>
                                            <label className="flex items-center space-x-3 cursor-pointer group">
                                                <input type="checkbox" checked={specialReqs.pram} onChange={(e) => setSpecialReqs({...specialReqs, pram: e.target.checked})} className="w-4 h-4 rounded text-[#5A5A40] focus:ring-[#5A5A40] accent-[#5A5A40]" />
                                                <span className="text-sm text-[#1a1a1a]/80 group-hover:text-[#1a1a1a] transition-colors">Pram Space Required</span>
                                            </label>
                                            <label className="flex items-center space-x-3 cursor-pointer group">
                                                <input type="checkbox" checked={specialReqs.wheelchair} onChange={(e) => setSpecialReqs({...specialReqs, wheelchair: e.target.checked})} className="w-4 h-4 rounded text-[#5A5A40] focus:ring-[#5A5A40] accent-[#5A5A40]" />
                                                <span className="text-sm text-[#1a1a1a]/80 group-hover:text-[#1a1a1a] transition-colors">Wheelchair / Walker Space</span>
                                            </label>
                                            <label className="flex items-center space-x-3 cursor-pointer group">
                                                <input type="checkbox" checked={specialReqs.business} onChange={(e) => setSpecialReqs({...specialReqs, business: e.target.checked})} className="w-4 h-4 rounded text-[#5A5A40] focus:ring-[#5A5A40] accent-[#5A5A40]" />
                                                <span className="text-sm text-[#1a1a1a]/80 group-hover:text-[#1a1a1a] transition-colors">Business Meal</span>
                                            </label>
                                        </div>
                                    </div>

                                    {/* Agreements */}
                                    <div className="space-y-4 pt-2">
                                        <label className="flex items-start space-x-3 cursor-pointer group">
                                            <div className="flex-shrink-0 mt-0.5">
                                                <input type="checkbox" checked={agreedToUpdates} onChange={(e) => setAgreedToUpdates(e.target.checked)} className="w-4 h-4 rounded text-[#5A5A40] focus:ring-[#5A5A40] accent-[#5A5A40]" />
                                            </div>
                                            <span className="text-sm text-[#1a1a1a]/70 group-hover:text-[#1a1a1a] transition-colors leading-relaxed">
                                                I agree to receive special invitations and updates from Catering District.
                                            </span>
                                        </label>
                                        <div className="flex items-start space-x-3 group">
                                            <div className="flex-shrink-0 mt-0.5 cursor-pointer">
                                                <input type="checkbox" checked={agreedToTerms} onChange={(e) => setAgreedToTerms(e.target.checked)} className="w-4 h-4 rounded text-[#5A5A40] focus:ring-[#5A5A40] accent-[#5A5A40] cursor-pointer" />
                                            </div>
                                            <span className="text-sm text-[#1a1a1a]/70 leading-relaxed">
                                                I agree to the booking{' '}
                                                <button type="button" onClick={() => setShowTerms(true)} className="text-[#5A5A40] border-b border-[#5A5A40]/30 hover:border-[#5A5A40] transition-colors font-medium">Terms and Conditions</button>.
                                            </span>
                                        </div>
                                    </div>

                                    {/* Submit */}
                                    <button 
                                        type="submit" 
                                        disabled={isSubmitting}
                                        className="w-full bg-[#1a1a1a] text-[#f5f2ed] border border-[#1a1a1a] py-4 rounded-xl text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#5A5A40] hover:border-[#5A5A40] transition-colors duration-300 disabled:opacity-50 flex items-center justify-center space-x-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                                                <span>Processing...</span>
                                            </>
                                        ) : (
                                            <span>Request Booking</span>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Terms and Conditions Popup */}
                        <AnimatePresence>
                            {showTerms && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    className="absolute inset-0 z-50 bg-[#f5f2ed] flex flex-col"
                                >
                                    <div className="flex items-center justify-between px-6 py-5 border-b border-[#1a1a1a]/10 shrink-0 bg-[#f5f2ed]">
                                        <h3 className="text-xl font-serif text-[#1a1a1a]">Terms & Conditions</h3>
                                        <button onClick={() => setShowTerms(false)} className="px-4 py-2 bg-[#1a1a1a]/5 hover:bg-[#1a1a1a]/10 rounded-full text-xs uppercase tracking-widest font-medium transition-colors">
                                            Close
                                        </button>
                                    </div>
                                    <div className="overflow-y-auto p-6 sm:p-10 text-sm font-light leading-relaxed text-[#1a1a1a]/80 space-y-6">
                                        <p>By using our website and services, you agree to receive communications from us via electronic means, including email, SMS/text messages, or mobile notifications, in accordance with our Privacy Policy.</p>
                                        <p>If you no longer wish to receive communications or be part of our customer database, you may request removal at any time by contacting the venue where your reservation was made.</p>
                                        <p>As a courtesy, customers are required to notify the venue directly of any changes, updates, or cancellations to their reservation.</p>
                                        <p>All reservations will be assigned to the best available table or service arrangement at the time of booking, based on availability and operational requirements.</p>
                                        <p>While we strive to accommodate all special requests, these are subject to availability and cannot be guaranteed.</p>
                                        
                                        <h4 className="font-medium text-[#1a1a1a] uppercase text-xs tracking-widest mt-8 mb-4">Data Protection & Privacy (GDPR)</h4>
                                        <p>Catering District respects your privacy and is committed to protecting your personal information. You have the right to request access to, correction of, or deletion of your personal data at any time.</p>
                                        <p>To learn more about how your data is handled or to submit a request, please refer to our Privacy Policy or contact us directly.</p>
                                        
                                        <button 
                                            onClick={() => {
                                                setAgreedToTerms(true);
                                                setShowTerms(false);
                                            }}
                                            className="mt-8 bg-[#1a1a1a] text-white px-8 py-4 rounded-xl text-xs uppercase tracking-widest hover:bg-[#5A5A40] transition-colors w-full"
                                        >
                                            I Agree to these Terms
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
