import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Lock } from 'lucide-react';

export default function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        if (email === 'aarsayem002@gmail.com' && password === 'Sayem614') {
            localStorage.setItem('isAdmin', 'true');
            navigate('/admin/dashboard');
        } else {
            setError('Invalid email or password.');
        }
    };

    return (
        <div className="min-h-screen bg-[#ffffff] flex flex-col justify-center items-center px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-[#19355e]/10"
            >
                <div className="flex justify-center mb-6">
                    <div className="w-12 h-12 bg-[#64620B]/10 rounded-full flex items-center justify-center text-[#64620B]">
                        <Lock className="w-6 h-6" />
                    </div>
                </div>

                <h2 className="text-3xl font-serif text-center mb-2">Admin Portal</h2>
                <p className="text-[#19355e]/60 text-center mb-8 font-light text-sm">
                    Enter your credentials to access the dashboard.
                </p>

                {error && (
                    <div className="mb-6 p-3 bg-red-50 text-red-600 text-sm rounded-lg text-center border border-red-100">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-[#19355e]/70 mb-2 font-medium">Email Address</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-[#ffffff] border-transparent focus:border-[#64620B] focus:ring-0 rounded-lg px-4 py-3 text-sm transition-all outline-none border"
                            placeholder="admin@cateringdistrict.com.au"
                        />
                    </div>

                    <div>
                        <label className="block text-xs uppercase tracking-widest text-[#19355e]/70 mb-2 font-medium">Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-[#ffffff] border-transparent focus:border-[#64620B] focus:ring-0 rounded-lg px-4 py-3 text-sm transition-all outline-none border"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#19355e] text-white rounded-lg py-4 text-sm uppercase tracking-widest font-medium hover:bg-[#64620B] transition-colors mt-4"
                    >
                        Sign In
                    </button>
                </form>
            </motion.div>
        </div>
    );
}
