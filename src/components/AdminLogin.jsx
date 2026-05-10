import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            // Attempt to log in with the hardcoded admin email or user input
            // The user wanted "zaintea" as username, so if they type "zaintea", we append the domain.
            const loginEmail = email === 'zaintea' ? 'zaintea@admin.com' : email;
            
            await signInWithEmailAndPassword(auth, loginEmail, password);
            navigate('/admin/dashboard');
        } catch (err) {
            console.error("Login Error:", err);
            setError('Invalid credentials. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-zain-beige dark:bg-[#0b0b0b] px-4">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md w-full bg-white dark:bg-white/5 rounded-2xl shadow-2xl overflow-hidden border border-zain-brown/10 dark:border-white/10"
            >
                <div className="p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-display font-bold text-zain-brown dark:text-zain-beige mb-2">
                            Admin Access
                        </h2>
                        <p className="text-sm text-zain-brown/60 dark:text-zain-beige/60 uppercase tracking-widest">
                            Zaintea Dashboard
                        </p>
                    </div>

                    {error && (
                        <div className="mb-6 p-3 rounded bg-red-500/10 border border-red-500/50 text-red-500 text-sm text-center">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-xs font-bold text-zain-brown/70 dark:text-zain-beige/70 uppercase tracking-wider mb-2">
                                Username
                            </label>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 bg-zain-brown/5 dark:bg-black/50 border border-zain-brown/20 dark:border-white/10 rounded-lg focus:outline-none focus:border-zain-red dark:focus:border-zain-gold text-zain-brown dark:text-white transition-colors"
                                placeholder="Enter username"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-zain-brown/70 dark:text-zain-beige/70 uppercase tracking-wider mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 bg-zain-brown/5 dark:bg-black/50 border border-zain-brown/20 dark:border-white/10 rounded-lg focus:outline-none focus:border-zain-red dark:focus:border-zain-gold text-zain-brown dark:text-white transition-colors"
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 bg-zain-red dark:bg-zain-gold text-white dark:text-black font-bold tracking-widest uppercase rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                        >
                            {loading ? 'Authenticating...' : 'Sign In'}
                        </button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default AdminLogin;
