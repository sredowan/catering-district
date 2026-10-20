import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, User, Phone, Check, Building2, MessageSquare } from 'lucide-react';

const emptyForm = { clubName: '', name: '', phone: '', email: '' };

const HINT_DISMISSED_KEY = 'contactHintDismissed';

/** Perceived brightness (0–1) of a computed CSS colour, or null if transparent/unparseable. */
function colorLightness(color: string): number | null {
    const nums = (color.match(/-?[\d.]+%?/g) || []).map(n => (n.endsWith('%') ? parseFloat(n) / 100 : parseFloat(n)));
    if (color.startsWith('oklab') || color.startsWith('oklch')) {
        const alpha = nums.length > 3 ? nums[3] : 1;
        return alpha < 0.5 ? null : nums[0];
    }
    if (color.startsWith('color(srgb')) {
        const [r, g, b, alpha = 1] = nums;
        return alpha < 0.5 ? null : 0.299 * r + 0.587 * g + 0.114 * b;
    }
    if (color.startsWith('rgb')) {
        const [r, g, b, alpha = 1] = nums;
        return alpha < 0.5 ? null : (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    }
    return null;
}

/** Whether the page content behind the given point is dark. */
function isDarkBehind(x: number, y: number, ignore: HTMLElement | null): boolean {
    for (const el of document.elementsFromPoint(x, y)) {
        if (ignore && ignore.contains(el)) continue;
        const style = getComputedStyle(el);
        let lightness = colorLightness(style.backgroundColor);
        if (lightness === null && style.backgroundImage.includes('gradient')) {
            const firstStop = style.backgroundImage.match(/(rgba?|oklab|oklch|color)\([^)]*\)/);
            if (firstStop) lightness = colorLightness(firstStop[0]);
        }
        if (lightness !== null) return lightness < 0.5;
    }
    return false;
}

const inputClass =
    'w-full bg-white border border-[#19355e]/10 rounded-xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:border-[#64620B] focus:ring-1 focus:ring-[#64620B] transition-all';

export default function ContactNowButton() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState(emptyForm);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [onDark, setOnDark] = useState(false);
    const [showHint, setShowHint] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    // Switch to a white button whenever it floats over a dark section (hero, footer, etc.).
    useEffect(() => {
        let frame = 0;
        const check = () => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(() => {
                const btn = buttonRef.current;
                if (!btn) return;
                const rect = btn.getBoundingClientRect();
                setOnDark(isDarkBehind(rect.left + rect.width / 2, rect.top + rect.height / 2, btn.parentElement));
            });
        };
        // Re-check once the new page has painted.
        const settle = window.setTimeout(check, 300);
        check();
        window.addEventListener('scroll', check, { passive: true });
        window.addEventListener('resize', check);
        return () => {
            cancelAnimationFrame(frame);
            window.clearTimeout(settle);
            window.removeEventListener('scroll', check);
            window.removeEventListener('resize', check);
        };
    }, [location.pathname]);

    // Briefly hint at the button each time a visitor lands on a page, unless they dismissed it.
    useEffect(() => {
        try {
            if (sessionStorage.getItem(HINT_DISMISSED_KEY)) return;
        } catch {}
        setShowHint(false);
        const show = window.setTimeout(() => setShowHint(true), 1500);
        const hide = window.setTimeout(() => setShowHint(false), 8000);
        return () => {
            window.clearTimeout(show);
            window.clearTimeout(hide);
        };
    }, [location.pathname]);

    const dismissHint = () => {
        setShowHint(false);
        try {
            sessionStorage.setItem(HINT_DISMISSED_KEY, '1');
        } catch {}
    };

    const openModal = () => {
        setShowHint(false);
        setIsOpen(true);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setIsSuccess(false);
            setErrorMsg('');
        } else {
            document.body.style.overflow = 'unset';
        }
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', onKey);
        };
    }, [isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMsg('');

        try {
            const res = await fetch('/api/enquiries', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    type: 'Quick Contact',
                    subject: `Quick contact request — ${formData.clubName}`,
                    sourcePage: location.pathname,
                }),
            });
            const data = await res.json();
            if (data.success) {
                setIsSuccess(true);
                setFormData(emptyForm);
            } else {
                setErrorMsg(data.error || 'Failed to send your details. Please try again.');
            }
        } catch (error) {
            setErrorMsg('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* Floating trigger + landing hint */}
            <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[90] flex items-center gap-3">
                <AnimatePresence>
                    {showHint && !isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: 12 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 12 }}
                            transition={{ duration: 0.3 }}
                            className="relative flex items-center gap-2 bg-[#ffffff] text-[#19355e] pl-4 pr-2 py-2.5 rounded-2xl shadow-xl border border-[#19355e]/10"
                        >
                            <button type="button" onClick={openModal} className="text-sm font-medium whitespace-nowrap cursor-pointer">
                                Need club catering? <span className="text-[#64620B]">Contact now</span>
                            </button>
                            <button
                                type="button"
                                onClick={dismissHint}
                                aria-label="Dismiss"
                                className="p-1 rounded-full text-[#19355e]/40 hover:text-[#19355e] hover:bg-[#19355e]/5 transition-colors"
                            >
                                <X className="w-3.5 h-3.5" />
                            </button>
                            {/* Pointer towards the button */}
                            <span className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rotate-45 bg-[#ffffff] border-r border-t border-[#19355e]/10"></span>
                        </motion.div>
                    )}
                </AnimatePresence>

                <button
                    ref={buttonRef}
                    type="button"
                    onClick={openModal}
                    aria-label="Contact us now"
                    title="Contact Now"
                    className={`w-14 h-14 sm:w-16 sm:h-16 shrink-0 flex items-center justify-center rounded-full shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer ${
                        onDark
                            ? 'bg-[#ffffff] text-[#19355e] shadow-black/30 hover:bg-[#64620B] hover:text-[#ffffff]'
                            : 'bg-[#19355e] text-[#ffffff] shadow-[#19355e]/30 hover:bg-[#64620B] hover:shadow-[#64620B]/30'
                    }`}
                >
                    <MessageSquare className="w-6 h-6" />
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[100] flex flex-col justify-end sm:items-center sm:justify-center px-0 sm:px-6">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-[#19355e]/60 backdrop-blur-sm"
                        ></motion.div>

                        {/* Modal Content */}
                        <motion.div
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="contact-now-title"
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            exit={{ y: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="relative w-full max-w-lg bg-[#ffffff] rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[90vh] overflow-hidden flex flex-col"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between px-6 py-5 border-b border-[#19355e]/10 shrink-0">
                                <h2 id="contact-now-title" className="text-2xl font-serif text-[#19355e]">
                                    Contact <span className="italic">Us Now</span>
                                </h2>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    aria-label="Close"
                                    className="p-2 rounded-full hover:bg-[#19355e]/5 transition-colors text-[#19355e]/60 hover:text-[#19355e]"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Body */}
                            <div className="overflow-y-auto w-full">
                                {isSuccess ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="p-10 text-center flex flex-col items-center justify-center"
                                    >
                                        <div className="w-20 h-20 bg-[#64620B]/10 rounded-full flex items-center justify-center mb-6 text-[#64620B]">
                                            <Check className="w-10 h-10" />
                                        </div>
                                        <h3 className="text-3xl font-serif mb-3 text-[#19355e]">Thank You</h3>
                                        <p className="text-[#19355e]/70 font-light mb-8 max-w-sm text-sm leading-relaxed">
                                            Your details have been sent to our team. We'll be in touch within 24 hours.
                                        </p>
                                        <button
                                            onClick={() => setIsOpen(false)}
                                            className="bg-[#19355e] text-[#ffffff] px-8 py-3 text-xs uppercase tracking-[0.15em] hover:bg-[#64620B] transition-colors rounded-full font-semibold cursor-pointer"
                                        >
                                            Close Window
                                        </button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
                                        <p className="text-sm text-[#19355e]/70 font-light leading-relaxed">
                                            Leave your details and our team will reach out to discuss catering for your club.
                                        </p>

                                        {errorMsg && (
                                            <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm border border-red-100">
                                                {errorMsg}
                                            </div>
                                        )}

                                        <div className="space-y-4">
                                            <div className="relative">
                                                <Building2 className="absolute left-4 top-3.5 w-4 h-4 text-[#19355e]/40" />
                                                <input
                                                    type="text" required placeholder="Club Name" autoComplete="organization"
                                                    value={formData.clubName} onChange={e => setFormData({ ...formData, clubName: e.target.value })}
                                                    className={inputClass}
                                                />
                                            </div>
                                            <div className="relative">
                                                <User className="absolute left-4 top-3.5 w-4 h-4 text-[#19355e]/40" />
                                                <input
                                                    type="text" required placeholder="Contact Name" autoComplete="name"
                                                    value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
                                                    className={inputClass}
                                                />
                                            </div>
                                            <div className="relative">
                                                <Phone className="absolute left-4 top-3.5 w-4 h-4 text-[#19355e]/40" />
                                                <input
                                                    type="tel" required placeholder="Phone Number" autoComplete="tel"
                                                    value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                                    className={inputClass}
                                                />
                                            </div>
                                            <div className="relative">
                                                <Mail className="absolute left-4 top-3.5 w-4 h-4 text-[#19355e]/40" />
                                                <input
                                                    type="email" required placeholder="Email Address" autoComplete="email"
                                                    value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
                                                    className={inputClass}
                                                />
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-[#19355e] text-[#ffffff] border border-[#19355e] py-4 rounded-xl text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#64620B] hover:border-[#64620B] transition-colors duration-300 disabled:opacity-50 flex items-center justify-center space-x-2"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                                                    <span>Sending...</span>
                                                </>
                                            ) : (
                                                <span>Send My Details</span>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
