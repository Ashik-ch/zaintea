import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Moon } from "lucide-react";

import grill from "../assets/hero-chicken.png";
import club from "../assets/menu-club.png";
import porotta from "../assets/menu-porota.png";
import burger from "../assets/menu-burger.png";
import juice from "../assets/mojito-juice.jpg";
import tea from "../assets/chaya.jpg";

const menuImages = [grill, club, porotta, burger, juice, tea];
const menuItems = [
    "Signature Grill",
    "Club Sandwich",
    "Porotta Sandwich",
    "Burgers",
    "Fresh Juices",
    "Tea and Beverages",
];

const Hero = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
    const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const [active, setActive] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActive((i) => (i + 1) % menuItems.length);
        }, 2200);
        return () => clearInterval(timer);
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen  overflow-hidden pt-32 md:pt-0 flex items-center text-white"
            style={{
                backgroundColor: "#0B0F2F",
                backgroundImage:
                    "linear-gradient(to bottom, #0B0F2F, #1A1446, #2C1A5A)",
            }}>
            {/* 🌙 Ramadan Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-transparent to-amber-900/30" />

            {/* ✨ Floating Particles */}
            {[...Array(25)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-yellow-300 rounded-full opacity-60"
                    initial={{ y: "100vh", x: Math.random() * window.innerWidth }}
                    animate={{ y: "-10vh" }}
                    transition={{
                        duration: 12 + Math.random() * 8,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                    }}
                />
            ))}

            {/* 🌙 Big Moon Glow */}
            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-20 right-[10%] w-40 h-40 bg-yellow-300/10 rounded-full blur-[100px]"
            />

            <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-2 gap-8 md:gap-16 items-center w-full">
                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    className="flex flex-col gap-6"
                >


                    <h1 className="font-display text-5xl md:text-8xl leading-[0.9]">
                        ZAINTEA
                    </h1>

                    <p className="text-2xl text-yellow-300 italic">
                        anytime tea
                    </p>

                    {/* Arabic Ramadan Text */}
                    <motion.h2
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="text-4xl md:text-6xl font-[Aref_Ruqaa] text-yellow-300 drop-shadow-[0_0_20px_rgba(255,215,0,0.5)]"
                    >
                        رمضان كريم
                    </motion.h2>

                    <p className="max-w-md text-md text-white/70 leading-relaxed">
                        Celebrate the blessed month with our special Iftar platters,
                        fresh juices, and signature grills made with love.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a
                            href="https://wa.me/971501229617?text=Hi%20Zaintea!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-yellow-400 text-black font-semibold hover:scale-105 transition"
                        >
                            ORDER NOW
                        </a>

                        <a
                            href="#menu"
                            className="px-8 py-4 border border-yellow-300/40 text-yellow-300 hover:bg-yellow-300/10 transition"
                        >
                            VIEW MENU
                        </a>
                    </div>
                </motion.div>

                {/* RIGHT IMAGE SLIDER */}
                <motion.div
                    style={{ y }}
                    className="relative max-w-lg mx-auto w-full flex flex-col items-center"
                >
                    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl w-full border border-yellow-300/20">
                        <motion.div
                            className="flex h-full"
                            animate={{ x: `-${active * 100}%` }}
                            transition={{ duration: 0.8 }}
                        >
                            {menuImages.map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    alt="Zaintea Ramadan Menu"
                                    className="w-full h-full object-cover flex-shrink-0"
                                />
                            ))}
                        </motion.div>
                    </div>

                    {/* 🟡 Now Serving Badge */}
                    <motion.div
                        className="absolute -bottom-6 left-1/2 -translate-x-1/2
            bg-black/60 backdrop-blur-xl px-6 py-2 rounded-full
            flex items-center gap-3 border border-yellow-300/20"
                    >
                        <motion.span
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-2 h-2 rounded-full bg-yellow-300"
                        />
                        <span className="text-white/60 text-xs uppercase tracking-widest">
                            Now Serving
                        </span>

                        <div className="w-36 text-center overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={menuItems[active]}
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -10, opacity: 0 }}
                                    transition={{ duration: 0.25 }}
                                    className="block text-yellow-300 text-sm font-medium whitespace-nowrap"
                                >
                                    {menuItems[active]}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;


// import React, { useRef, useEffect, useState } from "react";
// import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

// import grill from "../assets/hero-chicken.png";
// import club from "../assets/menu-club.png";
// import porotta from "../assets/menu-porota.png";
// import burger from "../assets/menu-burger.png";
// import juice from "../assets/mojito-juice.jpg";
// import tea from "../assets/chaya.jpg";

// const menuImages = [grill, club, porotta, burger, juice, tea];
// const menuItems = [
//     "Signature Grill",
//     "Club Sandwich",
//     "Porotta Sandwich",
//     "Burgers",
//     "Fresh Juices",
//     "Tea and Beverages",
// ];

// const Hero = () => {
//     const sectionRef = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: sectionRef,
//         offset: ["start start", "end start"],
//     });

//     const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
//     const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

//     const [active, setActive] = useState(0);

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setActive((i) => (i + 1) % menuItems.length);
//         }, 2200);
//         return () => clearInterval(timer);
//     }, []);

//     return (
//         <section
//             ref={sectionRef}
//             className="relative min-h-screen bg-zain-beige dark:bg-[#0b0b0b] overflow-hidden pt-32 md:pt-0 flex items-center transition-colors duration-500"
//         >
//             <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-zain-gold/10 blur-[160px]" />
//             <motion.h1
//                 style={{ opacity: bgOpacity }}
//                 className="absolute bottom-10 md:bottom-10 w-full text-center
//                 text-[20vw] md:text-[22vw] font-brush text-zain-brown/5 dark:text-transparent dark:stroke-text select-none z-0 pointer-events-none"
//             >
//                 Zaintea
//             </motion.h1>

//             <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-2 gap-8 md:gap-16 items-center w-full">
//                 <motion.div
//                     initial={{ opacity: 0, y: 50 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.9, ease: "easeOut" }}
//                     className="flex flex-col gap-4 md:gap-8 justify-center"
//                 >
//                     <span className="tracking-[0.4em] text-xs md:text-sm text-zain-red dark:text-zain-gold uppercase">
//                         Bur Dubai, UAE
//                     </span>

//                     <h1 className="font-display text-5xl md:text-8xl leading-[0.9] text-zain-brown dark:text-white">
//                         ZAINTEA
//                     </h1>

//                     <p className="text-xl md:text-3xl text-zain-red dark:text-zain-gold italic">
//                         anytime tea
//                     </p>

//                     <p className="text-zain-brown/70 dark:text-zain-beige/60 max-w-md text-lg font-brush leading-relaxed">
//                         A cozy café serving freshly brewed tea, comfort food, and
//                         signature grilled specials — perfect for any time of day.
//                     </p>
//                     <div className="flex flex-wrap gap-4 md:gap-6 pt-4">
//                         <a
//                             href="https://wa.me/971501229617?text=Hi%20Zaintea!"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="inline-flex items-center justify-center px-8 md:px-10 py-4 bg-zain-red dark:bg-zain-gold text-white dark:text-black font-semibold tracking-widest hover:scale-105 transition w-full md:w-auto text-center"
//                         >
//                             ORDER NOW
//                         </a>
//                         <a href="#menu" className="inline-flex items-center justify-center px-8 md:px-10 py-4 border border-zain-red/40 dark:border-zain-gold/40 text-zain-red dark:text-zain-gold hover:bg-zain-red/10 dark:hover:bg-zain-gold/10 transition w-full md:w-auto text-center">
//                             VIEW MENU
//                         </a>
//                     </div>
//                 </motion.div>

//                 <motion.div style={{ y }} className="relative max-w-lg mx-auto w-full flex flex-col items-center">
//                     <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl w-full">
//                         <motion.div
//                             className="flex h-full"
//                             animate={{ x: `-${active * 100}%` }}
//                             transition={{ duration: 0.8, ease: "easeInOut" }}
//                         >
//                             {menuImages.map((img, i) => (
//                                 <img
//                                     key={i}
//                                     src={img}
//                                     alt="Zaintea Menu"
//                                     className="w-full h-full object-cover flex-shrink-0"
//                                 />
//                             ))}
//                         </motion.div>
//                     </div>

//                     {/* Live Menu Badge */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         className="absolute -bottom-6 left-1/2 -translate-x-1/2
//   bg-black/60 backdrop-blur-xl px-6 py-2 rounded-full
//   flex items-center gap-3 border border-white/10 shadow-lg"
//                     >
//                         <motion.span
//                             animate={{ opacity: [0.3, 1, 0.3] }}
//                             transition={{ duration: 1.5, repeat: Infinity }}
//                             className="w-2 h-2 rounded-full bg-zain-gold"
//                         />
//                         <span className="text-zain-beige/60 text-xs uppercase tracking-widest">
//                             Now Serving
//                         </span>
//                         <div className="w-36 text-center overflow-hidden">
//                             <AnimatePresence mode="wait">
//                                 <motion.span
//                                     key={menuItems[active]}
//                                     initial={{ y: 10, opacity: 0 }}
//                                     animate={{ y: 0, opacity: 1 }}
//                                     exit={{ y: -10, opacity: 0 }}
//                                     transition={{ duration: 0.25 }}
//                                     className="block text-zain-gold text-sm font-medium whitespace-nowrap"
//                                 >
//                                     {menuItems[active]}
//                                 </motion.span>
//                             </AnimatePresence>
//                         </div>
//                     </motion.div>
//                 </motion.div>
//             </div>

//             <style jsx>{`
//                 .stroke-text {
//                   -webkit-text-stroke: 1px rgba(255, 255, 255, 0.05);
//                 }
//                 :global(.dark) .stroke-text {
//                    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.05);
//                 }
//             `}</style>
//         </section>
//     );
// };

// export default Hero;
