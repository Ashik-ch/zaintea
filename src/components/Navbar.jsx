import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 1);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Animation Variants
    const menuVariants = {
        closed: { x: "100%", transition: { type: "spring", stiffness: 300, damping: 30 } },
        opened: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30, staggerChildren: 0.1, delayChildren: 0.2 } }
    };

    const linkVariants = {
        closed: { x: 50, opacity: 0 },
        opened: { x: 0, opacity: 1 }
    };

    const navLinks = ['ABOUT', 'MENU', 'CONTACT'];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 transition-all duration-500 ${isScrolled
                    ? 'py-4 bg-white/90 dark:bg-zain-dark/90 backdrop-blur-lg border-b border-zain-brown/10 dark:border-zain-red/20 shadow-xl'
                    : 'py-8 bg-transparent'
                    }`}
            >
                {/* Logo */}
                <a href="#" className="text-2xl md:text-3xl font-display font-extrabold text-zain-brown dark:text-zain-beige tracking-tighter hover:scale-105 transition-transform whitespace-nowrap">
                    ZAIN <span className="text-zain-red">TEA</span>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-10 items-center">
                    {navLinks.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-xs font-sans font-bold tracking-[0.3em] text-zain-brown dark:text-zain-beige hover:text-zain-red dark:hover:text-zain-gold transition-all relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-zain-red dark:bg-zain-gold transition-all group-hover:w-full"></span>
                        </a>
                    ))}
                    <div className="pl-6 border-l border-zain-brown/20 dark:border-zain-beige/20">
                        <ThemeToggle />
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-zain-brown dark:text-zain-beige hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors"
                    onClick={() => setIsMenuOpen(true)}
                    aria-label="Open Menu"
                >
                    <Menu size={28} />
                </button>
            </nav>

            {/* Mobile Full-Screen Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="opened"
                        exit="closed"
                        className="fixed inset-0 z-[70] bg-zain-beige dark:bg-zain-dark flex flex-col p-8"
                    >
                        {/* Header inside Menu */}
                        <div className="flex justify-between items-center mb-20">
                            <span className="text-zain-brown dark:text-zain-beige font-bold tracking-widest text-sm opacity-50">NAVIGATION</span>
                            <div className="flex items-center gap-4">
                                <ThemeToggle />
                                <button
                                    className="p-3 bg-zain-red/10 text-zain-red rounded-full hover:bg-zain-red hover:text-white transition-all"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <X size={32} />
                                </button>
                            </div>
                        </div>

                        {/* Mobile Links */}
                        <div className="flex flex-col gap-8">
                            {navLinks.map((item) => (
                                <motion.a
                                    variants={linkVariants}
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-5xl md:text-8xl font-display font-bold text-zain-brown dark:text-zain-beige hover:text-zain-red dark:hover:text-zain-gold transition-colors flex items-center gap-4 group"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <span className="text-sm font-sans text-zain-red group-hover:translate-x-2 transition-transform">0{navLinks.indexOf(item) + 1}</span>
                                    {item}
                                </motion.a>
                            ))}
                        </div>

                        {/* Footer Info inside Menu */}
                        <div className="mt-auto border-t border-zain-brown/10 dark:border-white/10 pt-8 text-zain-brown/50 dark:text-zain-beige/50 text-sm">
                            <p>Premium Tea Experience</p>
                            <div className="flex gap-4 mt-4">
                                <span className="hover:text-zain-gold cursor-pointer">INSTAGRAM</span>
                                <span className="hover:text-zain-gold cursor-pointer">FACEBOOK</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;