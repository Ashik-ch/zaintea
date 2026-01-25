import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-6 transition-all duration-300 ${isScrolled ? 'py-4 bg-zain-dark/80 backdrop-blur-md border-b border-zain-red/10' : 'py-6 bg-transparent'
                    }`}
            >
                <a href="#" className="text-3xl font-display font-bold text-zain-beige tracking-tighter hover:text-zain-gold transition-colors">
                    ZAIN TEA
                </a>

                <div className="hidden md:flex gap-8">
                    {['ABOUT', 'MENU', 'GALLERY', 'CONTACT'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-sans font-bold tracking-[0.2em] text-zain-beige hover:text-zain-gold transition-colors">
                            {item}
                        </a>
                    ))}
                </div>

                <button
                    className="md:hidden text-zain-beige"
                    onClick={() => setIsMenuOpen(true)}
                >
                    <Menu size={32} />
                </button>
            </nav>

            {/* Full Screen Kinetic Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-zain-gold flex flex-col items-center justify-center"
                    >
                        <button
                            className="absolute top-6 right-6 text-black"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <X size={48} />
                        </button>

                        <div className="flex flex-col gap-4 text-center">
                            {['ABOUT', 'MENU', 'GALLERY', 'CONTACT'].map((item, idx) => (
                                <motion.a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="text-6xl md:text-8xl font-kinetic font-bold text-black hover:text-white transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
