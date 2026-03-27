import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Instagram, MapPin, Play } from "lucide-react";

// Assets
import chickenVideo from '../assets/chicken2.mp4';
import karakTea from '../assets/karak-tea.png';
import burgerImage from '../assets/menu-burger.png';
import clubImage from '../assets/menu-club.png';

export default function GrilBaraStyleLanding() {
  const [currentScene, setCurrentScene] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentScene((prev) => (prev + 1) % 3), 12000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0A0A0A] font-sans text-white">

      {/* 🧭 NAVIGATION HUD (Gril Bara Style) */}
      <nav className="absolute top-0 w-full z-[100] flex justify-between items-center p-8 px-12 border-b border-white/5 backdrop-blur-md">
        <div className="text-2xl font-black tracking-tighter italic">ZAIN<span className="text-zain-red">TEA.</span></div>
        <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.3em] font-bold text-white/60">
          <a href="#" className="text-white">Home</a>
          <a href="#" className="hover:text-white transition-colors">The Grill</a>
          <a href="#" className="hover:text-white transition-colors">Our Tea</a>
          <a href="#" className="hover:text-white transition-colors">Find Us</a>
        </div>
        <button className="bg-zain-red text-white px-6 py-2 text-[10px] font-black uppercase tracking-widest rounded-full hover:scale-105 transition-transform">
          Order Now
        </button>
      </nav>

      {/* 🎬 MAIN SCENE ENGINE */}
      <AnimatePresence mode="wait">
        {currentScene === 0 && <HeroGrillScene key="h" />}
        {currentScene === 1 && <SignatureTeaScene key="s" />}
        {currentScene === 2 && <ProductShowcaseScene key="p" />}
      </AnimatePresence>

      {/* 🔢 SCENE INDICATOR (Bottom Left) */}
      <div className="absolute bottom-12 left-12 z-[100] flex items-end gap-4">
        <div className="text-6xl font-black leading-none text-white/10 italic">0{currentScene + 1}</div>
        <div className="flex flex-col gap-2 pb-1">
          {[0, 1, 2].map((i) => (
            <div key={i} className={`h-1 transition-all duration-500 ${currentScene === i ? 'w-12 bg-zain-red' : 'w-4 bg-white/20'}`} />
          ))}
        </div>
      </div>

      {/* 📍 LOCATION TAG (Bottom Right) */}
      <div className="absolute bottom-12 right-12 z-[100] text-right">
        <div className="flex items-center justify-end gap-2 text-zain-gold mb-1">
          <MapPin size={14} />
          <span className="text-[10px] font-black uppercase tracking-widest">Bur Dubai, UAE</span>
        </div>
        <div className="text-[10px] text-white/40 uppercase tracking-[0.2em]">Open Daily: 10AM - 12AM</div>
      </div>
    </div>
  );
}

// --- SCENE 01: BOLD VIDEO HERO ---
function HeroGrillScene() {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="absolute inset-0 grid grid-cols-12 h-full"
    >
      <div className="col-span-12 lg:col-span-7 relative h-full overflow-hidden">
        <video autoPlay loop muted className="w-full h-full object-cover scale-110">
          <source src={chickenVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="col-span-12 lg:col-span-5 bg-zain-beige flex flex-col justify-center p-12 lg:p-24 text-zain-dark">
        <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
          <span className="inline-block px-3 py-1 bg-zain-red text-white text-[10px] font-black uppercase tracking-[0.2em] mb-8">
            The Art of Fire
          </span>
          <h1 className="text-7xl lg:text-[10rem] font-black leading-[0.85] italic tracking-tighter mb-8">
            PRECISION <br /> <span className="text-zain-red">GRILLING.</span>
          </h1>
          <p className="text-xl font-medium leading-relaxed opacity-70 mb-10 max-w-md">
            Dubai's premium destination for wood-fired flavors and artisanal hospitality.
          </p>
          <button className="group flex items-center gap-4 text-sm font-black uppercase tracking-widest border-b-2 border-zain-dark pb-2 hover:text-zain-red hover:border-zain-red transition-all">
            Explore Menu <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}

// --- SCENE 02: THE ASYMMETRIC TEA FEATURE ---
function SignatureTeaScene() {
  return (
    <motion.div
      initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} transition={{ type: "tween", duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-0 flex items-center justify-center bg-[#0F0F0F]"
    >
      <div className="grid grid-cols-12 w-full max-w-[1800px] items-center px-12">
        <div className="col-span-5 z-10">
          <motion.h2
            initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
            className="text-[12rem] font-black italic tracking-tighter leading-none text-white mix-blend-difference"
          >
            GOLDEN <br /> <span className="text-zain-gold">KARAK.</span>
          </motion.h2>
          <div className="mt-12 h-1 w-32 bg-zain-gold" />
          <p className="mt-8 text-2xl text-white/50 font-light max-w-sm">
            Hand-picked leaves meets Saffron infusion. A legacy in every cup.
          </p>
        </div>

        <div className="col-span-7 relative">
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: 10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="relative z-20"
          >
            <img src={karakTea} className="w-full drop-shadow-[0_40px_80px_rgba(244,196,48,0.2)]" />
          </motion.div>
          {/* Gril Bara inspired background shape */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[60%] bg-zain-gold/5 -rotate-6 rounded-[4rem]" />
        </div>
      </div>
    </motion.div>
  );
}

// --- SCENE 03: THE PRODUCT CAROUSEL ---
function ProductShowcaseScene() {
  const items = [
    { name: "Zain Burger", img: burgerImage, price: "25", color: "bg-[#1A1A1A]" },
    { name: "Club Sandwich", img: clubImage, price: "22", color: "bg-zain-red" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
      className="absolute inset-0 flex flex-col justify-center px-12 bg-white"
    >
      <div className="flex justify-between items-end mb-20">
        <h2 className="text-9xl font-black italic tracking-tighter text-zain-dark">DAILY <br /> SPECIALS.</h2>
        <div className="text-zain-dark/40 font-mono text-sm tracking-widest pb-4">/ MENU_V2.0 / BUR_DUBAI</div>
      </div>

      <div className="grid grid-cols-2 gap-8 h-[50vh]">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 0.98 }}
            className={`${item.color} rounded-[3rem] p-12 relative overflow-hidden group flex items-center justify-between`}
          >
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 block mb-4">Item_{idx + 1}</span>
                <h3 className="text-6xl font-black italic text-white uppercase leading-none">{item.name}</h3>
              </div>
              <div className="text-4xl font-black text-white italic">AED {item.price}</div>
            </div>

            <motion.img
              initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 + (idx * 0.2) }}
              src={item.img}
              className="h-[120%] object-contain absolute -right-20 group-hover:-rotate-12 transition-transform duration-700"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}