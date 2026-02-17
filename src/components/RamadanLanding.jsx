import { motion } from "framer-motion";
import { Moon } from "lucide-react";
import ramadanImg from "../assets/ramadan.png";

export default function RamadanLanding() {
    return (
        <div>
            <div className="w-full h-screen overflow-hidden">
                <img
                    src={ramadanImg}
                    alt="Ramadan Background"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#0B0F2F] via-[#1a1f4d] to-[#2a1a10] text-white font-sans">

                {/* Floating Golden Particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(35)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1.5 h-1.5 bg-yellow-300 rounded-full opacity-70"
                            initial={{ y: "100vh", x: Math.random() * window.innerWidth }}
                            animate={{ y: "-10vh" }}
                            transition={{
                                duration: 12 + Math.random() * 8,
                                repeat: Infinity,
                                delay: Math.random() * 5
                            }}
                        />
                    ))}
                </div>

                {/* Soft Glow Orbs */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/30 rounded-full blur-[128px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[150px]" />

                {/* Hero Content */}
                <div className="relative z-10 container mx-auto px-6 min-h-screen flex flex-col justify-center items-center text-center">

                    {/* Brand */}
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute top-10 text-2xl md:text-3xl tracking-widest text-yellow-400 uppercase"
                    >
                        Zaintea Cafe
                    </motion.h2>

                    {/* Moon Icon */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="mb-8"
                    >
                        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border border-yellow-400/30 flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(255,215,0,0.15)] bg-white/5 backdrop-blur-md">
                            <Moon className="w-16 h-16 md:w-24 md:h-24 text-yellow-400 drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]" strokeWidth={1} />
                        </div>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="font-display text-5xl md:text-8xl leading-[0.9]  font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-white to-yellow-200"
                    >
                        Ramadan Kareem
                    </motion.h1>

                    <motion.h2
                        animate={{ opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="mt-6 font-display text-5xl md:text-7xl font-arabic bg-gradient-to-r from-zain-gold via-white to-zain-gold bg-clip-text text-transparent"
                    >
                        رمضان كريم
                    </motion.h2>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.8 }}
                        className="mt-12 flex flex-col md:flex-row gap-6"
                    >
                        <a
                            href="/"
                            className="px-8 py-4 rounded-full border border-white/10 text-white hover:bg-white/10 transition-all duration-300 font-semibold"
                        >
                            www.zainteacafe.com                    </a>
                    </motion.div>

                </div>

                {/* Floating Lantern Effect */}
                <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-20 left-[10%] w-16 h-24 bg-gradient-to-b from-yellow-400/10 to-transparent border border-yellow-400/20 rounded-b-3xl flex items-end justify-center pb-2 backdrop-blur-sm"
                >
                    <div className="w-2 h-12 bg-yellow-400/50 blur-md rounded-full" />
                </motion.div>

                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                    className="absolute top-40 right-[15%] w-12 h-20 bg-gradient-to-b from-yellow-400/10 to-transparent border border-yellow-400/20 rounded-b-3xl flex items-end justify-center pb-2 backdrop-blur-sm"
                >
                    <div className="w-2 h-10 bg-yellow-400/50 blur-md rounded-full" />
                </motion.div>

                {/* Bottom Fade */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
        </div>
    );
}
