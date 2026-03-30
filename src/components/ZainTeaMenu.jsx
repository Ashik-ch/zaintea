import React, { useEffect, useState } from 'react';
import { Flame, Zap, Coffee, Clock, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ZainTeaMenu = () => {
  const specials = [
    { id: 1, name: "BAZOOKA", desc: "Chicken Chilli, Cheetos, cheese, hot sauce", price: "7", type: "spicy" },
    { id: 2, name: "ZAROONI", desc: "Zinger, Amwaj chips, cheese, mayo", price: "7", type: "classic" },
    { id: 3, name: "RAYYAN", desc: "Zinger, Amwaj chips, fries, cheese", price: "7", type: "classic" },
    { id: 4, name: "FRANCISCO", desc: "Chilli chicken, Amwaj, cheese, mayo", price: "7", type: "classic" },
    { id: 4, name: "Nuggets", desc: "Chicken Nuggets, Amwaj, cheese, mayo", price: "7", type: "classic" },
    { id: 5, name: "MAZMI", desc: "Zinger, Tikka, Oman chips, potato, cheese", price: "8", type: "pro" },
    { id: 6, name: "ROYAL MIX", desc: "Popcorn chicken, Tikka, fries, Oman chips, cheese", price: "8", type: "pro" },
    { id: 7, name: "ZAIN SPECIAL", desc: "Chilli chicken, Sheesh Tawook, Oman chips", price: "8", type: "star" },
  ];

  const classics = [
    { name: "Oman Crunch", p: "4", sl: "4", sm: "4" },
    { name: "Omelette", p: "5", sl: "6", sm: "6" },
    { name: "Vegetable", p: "5", sl: "6", sm: "6" },
    { name: "Falafel", p: "5", sl: "6", sm: "6" },
    { name: "Chicken Chilli", p: "6", sl: "6", sm: "6" },
    { name: "Hotdog", p: "6", sl: "6", sm: "6" },
    { name: "Zinger", p: "7", sl: "7", sm: "7" },
    { name: "Kebab (C/B)", p: "7", sl: "7", sm: "7" }, 
  ];

  return (
    <div className="h-screen w-full bg-[#050505] overflow-hidden font-sans text-white flex flex-col px-5 pt-2">
      
      {/* 1. TOP HEADER BAR */}
      <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-4">
        <div className="flex items-center gap-6">
          <h1 className="text-6xl font-black italic tracking-tighter uppercase leading-none">
            ZAIN <span className="text-red-600 drop-shadow-[0_0_10px_rgba(220,38,38,0.4)]">TEA</span>
          </h1>
          <div className="bg-red-600/10 border border-red-600/20 px-3 py-1 rounded text-red-500 text-[10px] font-black tracking-widest uppercase italic">
            Anytime Tea
          </div>
        </div>

        <div className="flex items-center gap-6 text-right">
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-green-500">Open 24/7</span>
            </div>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Bur Dubai</p>
          </div>
        </div>
      </div>


      {/* 2. MAIN CONTENT GRID (TV SPLIT) */}
      <div className="flex-1 grid grid-cols-12 gap-8 overflow-hidden">
        
        {/* LEFT COLUMN: POWER SIGNATURES (Static) */}
        <div className="col-span-7 space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="text-red-600" size={24} />
            <h2 className="text-2xl font-black italic uppercase tracking-tight">Power Signatures</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {specials.map((s) => (
              <div key={s.id} className="bg-[#111] border border-white/5 p-4 rounded-3xl flex justify-between items-center relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="text-xl font-black italic uppercase text-red-500">{s.name}</h3>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-tight">{s.desc}</p>
                </div>
                <div className="text-right relative z-10">
                  <span className="text-2xl font-black">{s.price}</span>
                  <span className="block text-[8px] font-bold text-gray-600 uppercase">AED</span>
                </div>
                {/* Visual Flair */}
                <div className="absolute -right-2 -bottom-2 opacity-5 text-white group-hover:opacity-20 transition-opacity">
                  {s.type === 'spicy' ? <Flame size={60} /> : <Zap size={60} />}
                </div>
              </div>
            ))}
          </div>

          {/* 24 KARAK PROMO BANNER */}
         
         
          <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative mt-2 overflow-hidden rounded-3xl p-1"
    >
      {/* 1. LIVE TRACING BORDER ANIMATION */}
      <motion.div
        className="absolute inset-0 z-0 bg-[conic-gradient(from_0deg,#ff0000,#7f1d1d,#ff0000)]"
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />

      {/* 2. INNER CONTENT BOX */}
      <div className="relative z-10 bg-[#0a0a0a] rounded-[1.4rem] p-6 flex justify-between items-center border border-white/5 shadow-2xl">
        <div className="flex items-center gap-6">
          <div className="relative">
            {/* Pulsing Steam Effect */}
            <motion.div 
              className="absolute -top-2 left-1/2 -translate-x-1/2 text-white/20"
              animate={{ y: [-5, -15], opacity: [0, 0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ~~
            </motion.div>
            <Coffee size={54} className="text-red-600 drop-shadow-[0_0_8px_rgba(220,38,38,0.5)]" />
          </div>

          <div>
            {/* Typing Effect for Header */}
            <motion.h4 
              className="text-4xl font-black italic uppercase leading-none tracking-tighter text-white"
            >
              {"FRESH KARAK".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1, repeat: Infinity, repeatDelay: 5 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h4>
            
            <div className="flex items-center gap-2 mt-2">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-200">
                Starting from 1 AED  
              </p>
            </div>
          </div>
        </div>

        {/* 3. NEON 24/7 BADGE */}
        <motion.div 
  animate={{ 
    boxShadow: ["0 0 0px rgba(220,38,38,0)", "0 0 30px rgba(220,38,38,0.3)", "0 0 0px rgba(220,38,38,0)"] 
  }}
  transition={{ duration: 2, repeat: Infinity }}
  className="bg-red-600/10 px-8 py-4 rounded-3xl border border-red-600/40 flex flex-col items-center justify-center min-w-[160px]"
>
  {/* The "We are Open" Tag */}
  <div className="flex items-center gap-2 mb-1">
    <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]" />
    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
      We are Open
    </span>
  </div>

  {/* The 24/7 Neon Text */}
  <span className="text-6xl font-black italic text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
    24/7
  </span>
</motion.div> 
      </div>
    </motion.div>
        </div>

        {/* RIGHT COLUMN: CLASSICS (Auto-Scrolling) */}
        <div className="col-span-5 flex flex-col">
          <div className="flex items-center gap-3 mb-4 px-2">
            <Clock className="text-gray-500" size={20} />
            <h2 className="text-2xl font-black italic uppercase tracking-tight">Classics</h2>
          </div>

          <div className="flex-1 bg-[#0a0a0a] rounded-[2.5rem] border border-white/5 overflow-hidden relative">
            {/* Header stays static */}
            <div className="grid grid-cols-4 bg-white/5 p-5 text-[10px] font-black uppercase tracking-widest text-gray-500 border-b border-white/10 relative z-20">
              <div className="col-span-1">Variety</div>
              <div className="text-center">Poratta</div>
              <div className="text-center">Slice</div>
              <div className="text-center">Samoon</div>
            </div>

            {/* SCROLLING AREA */}
            <div className="h-full overflow-hidden relative">
              <motion.div  
                className="flex flex-col p-2"
              >
                {classics.map((c, i) => (
                  <div key={i} className="grid grid-cols-4 p-3 items-center border-b border-white/[0.03]">
                    <div className="col-span-1 text-sm font-black text-gray-200 uppercase">{c.name}</div>
                    <div className="text-center text-lg font-black text-red-600">{c.p}</div>
                    <div className="text-center text-lg font-black text-gray-500">{c.sl}</div>
                    <div className="text-center text-lg font-black text-gray-500">{c.sm}</div>
                  </div>
                ))}
              </motion.div>
              {/* Fade out effect at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>     

    </div>
  );
};

export default ZainTeaMenu;

// import React from 'react';
// import { Flame, Star, Zap, Coffee, ChevronRight, Utensils, Clock } from 'lucide-react';

// const ZainTeaMenu = () => {
//   const specials = [
//     { id: 1, name: "BAZOOKA", desc: "Chicken Chilli, Cheetos, cheese, hot sauce", price: "7", type: "spicy" },
//     { id: 2, name: "ZAROONI", desc: "Zinger, Amwaj chips, cheese, mayo", price: "7", type: "classic" },
//     { id: 3, name: "RAYYAN", desc: "Zinger, Amwaj chips, fries, cheese", price: "7", type: "classic" },
//     { id: 4, name: "FRANCISCO", desc: "Chilli chicken, Amwaj, cheese, mayo", price: "7", type: "classic" },
//     { id: 5, name: "MAZMI", desc: "Zinger, Tikka, Oman chips, potato, cheese", price: "8", type: "pro" },
//     { id: 6, name: "ROYAL MIX", desc: "Popcorn chicken, Tikka, fries, Oman chips, cheese", price: "8", type: "pro" },
//     { id: 7, name: "ZAIN SPECIAL", desc: "Chilli chicken, Sheesh Tawook, Oman chips", price: "8", type: "star" },
//   ];

//   const classics = [
//     { name: "Oman Crunch", p: "4", sl: "4", sm: "4" },
//     { name: "Omelette Sandwich", p: "5", sl: "6", sm: "6" },
//     { name: "Veg Sandwich", p: "5", sl: "6", sm: "6" },
//     { name: "Falafel", p: "5", sl: "6", sm: "6" },
//     { name: "Chicken Chilli", p: "6", sl: "6", sm: "6" },
//     { name: "Hotdog", p: "6", sl: "6", sm: "6" },
//     { name: "Zinger", p: "7", sl: "7", sm: "7" },
//     { name: "Kebab (C/B)", p: "7", sl: "7", sm: "7" },
//   ];

//   return (
//     <div className="min-h-screen bg-[#050505] p-4 md:p-12 font-sans text-gray-100 selection:bg-red-600">
//       <div className="max-w-6xl mx-auto">
        
//         {/* TOP BAR: Status & Location */}
//         <div className="flex justify-between items-center mb-12 border-b border-white/5 pb-6">
//           <div className="flex items-center gap-3">
//             <div className="relative flex h-3 w-3">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
//             </div>
//             <span className="text-[10px] font-black tracking-[0.3em] uppercase text-green-500">Shop Open 24/7</span>
//           </div>
//           <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500 italic">Bur Dubai • UAE</span>
//         </div>

//         {/* HERO SECTION */}
//         <header className="relative mb-20 text-center">
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-600/20 blur-[120px] rounded-full -z-10"></div>
//           <h1 className="text-7xl md:text-8xl font-black italic tracking-tighter text-white uppercase leading-none">
//             ZAIN <span className="text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">TEA</span>
//           </h1>
//           <p className="mt-4 text-gray-400 font-medium tracking-[0.8em] uppercase text-[9px] md:text-xs">Signature Street Fusion</p>
//         </header>

//         {/* POWER SIGNATURES: STAGGERED GRID */}
//         <section className="mb-24">
//           <div className="flex items-end justify-between mb-10">
//             <div>
//               <h2 className="text-3xl font-black italic uppercase tracking-tighter">Power Signatures</h2>
//               <div className="h-1 w-20 bg-red-600 mt-2"></div>
//             </div>
//             <Zap className="text-red-600 hidden md:block" size={32} />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {specials.map((s, idx) => (
//               <div key={s.id} className={`group relative bg-[#0f0f0f] border border-white/10 p-6 rounded-3xl transition-all duration-500 hover:scale-[1.02] hover:bg-[#151515] hover:border-red-600/50 ${idx === 0 ? 'lg:col-span-2' : ''}`}>
//                 <div className="flex justify-between items-start mb-4">
//                   <div className="bg-white/5 p-3 rounded-2xl group-hover:bg-red-600 transition-colors">
//                     {s.type === 'spicy' ? <Flame size={20} /> : <Zap size={20} />}
//                   </div>
//                   <div className="text-right">
//                     <span className="text-3xl font-black italic leading-none">{s.price}</span>
//                     <span className="block text-[10px] font-bold text-gray-500 uppercase">AED</span>
//                   </div>
//                 </div>
                
//                 <h3 className="text-2xl font-black italic uppercase tracking-tight mb-2 group-hover:text-red-500 transition-colors">{s.name}</h3>
//                 <p className="text-xs text-gray-400 font-medium leading-relaxed uppercase tracking-wide">{s.desc}</p>
                
//                 {/* Decorative background number */}
//                 <span className="absolute bottom-4 right-6 text-6xl font-black text-white/[0.02] -z-0 pointer-events-none italic">0{s.id}</span>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* BOTTOM SECTION: CLASSICS & 24/7 PROMO */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
//           {/* THE CLASSICS GRID */}
//           <section className="lg:col-span-8">
//             <h2 className="text-xl font-black uppercase tracking-widest mb-8 flex items-center gap-3">
//               <Utensils className="text-red-600" size={18} /> The Classics
//             </h2>
//             <div className="bg-[#0f0f0f] border border-white/5 rounded-[2.5rem] overflow-hidden p-2">
//               <div className="grid grid-cols-4 bg-white/5 p-5 text-[10px] font-black uppercase tracking-widest text-gray-400 rounded-t-2xl">
//                 <div className="col-span-1">Variety</div>
//                 <div className="text-center">Poratta</div>
//                 <div className="text-center">Slice</div>
//                 <div className="text-center">Samoon</div>
//               </div>
//               <div className="p-2">
//                 {classics.map((c, i) => (
//                   <div key={i} className="grid grid-cols-4 p-4 items-center hover:bg-white/[0.03] transition-all rounded-xl">
//                     <div className="col-span-1 text-xs font-bold text-gray-200 uppercase tracking-tight">{c.name}</div>
//                     <div className="text-center text-sm font-black text-red-500">{c.p}</div>
//                     <div className="text-center text-sm font-black text-gray-500">{c.sl}</div>
//                     <div className="text-center text-sm font-black text-gray-500">{c.sm}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* 24/7 PROMO BOX */}
//           <section className="lg:col-span-4 h-full">
//             <div className="sticky top-12 p-8 bg-gradient-to-br from-red-600 to-red-800 rounded-[3rem] shadow-2xl shadow-red-900/20 flex flex-col justify-between h-[500px] overflow-hidden group">
//               <div className="relative z-10">
//                 <Clock className="text-white mb-6 opacity-50 group-hover:rotate-45 transition-transform duration-700" size={40} />
//                 <h4 className="text-4xl font-black italic text-white leading-none uppercase mb-4">
//                   Fresh <br /> Karak <br /> 
//                   <span className="text-red-200">Anytime</span>
//                 </h4>
//                 <div className="h-1 w-12 bg-white/30 rounded-full"></div>
//               </div>

//               <div className="relative z-10">
//                 <p className="text-white/90 font-black uppercase text-xs tracking-widest mb-1">We Never Close</p>
//                 <p className="text-white/50 font-bold uppercase text-[10px] tracking-widest">Available for late night pick-up</p>
//               </div>

//               <Coffee className="absolute -right-12 -bottom-10 text-black/10 group-hover:scale-110 transition-transform duration-500" size={280} />
              
//               {/* Floating AED Indicator */}
//               <div className="absolute top-8 right-8 bg-black text-white w-14 h-14 rounded-full flex flex-col items-center justify-center border-2 border-white/20 shadow-xl">
//                 <span className="text-lg font-black leading-none">1</span>
//                 <span className="text-[8px] font-bold uppercase">AED</span>
//               </div>
//             </div>
//           </section>

//         </div>

//         {/* FOOTER */}
//         <footer className="mt-32 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40">
//           <p className="text-[10px] font-black uppercase tracking-[0.8em]">Crunch • Heat • Smoke</p>
//           <p className="text-[10px] font-bold uppercase tracking-[0.2em]">© 2026 Zain Tea Signature Kitchen</p>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default ZainTeaMenu;

// import React from 'react';
// import { Flame, Star, Zap, Coffee, ChevronRight, Utensils, Clock } from 'lucide-react';

// const ZainTeaMenu = () => {
//   const specials = [
//     { id: 1, name: "BAZOOKA", desc: "Chicken Chilli, Cheetos, cheese, hot sauce", price: "7", type: "spicy" },
//     { id: 2, name: "ZAROONI", desc: "Zinger, Amwaj chips, cheese, mayo", price: "7", type: "classic" },
//     { id: 3, name: "RAYYAN", desc: "Zinger, Amwaj chips, fries, cheese", price: "7", type: "classic" },
//     { id: 4, name: "FRANCISCO", desc: "Chilli chicken, Amwaj, cheese, mayo", price: "7", type: "classic" },
//     { id: 5, name: "MAZMI", desc: "Zinger, Tikka, Oman chips, potato, cheese", price: "8", type: "pro" },
//     { id: 6, name: "ROYAL MIX", desc: "Popcorn chicken, Tikka, fries, Oman chips, cheese", price: "8", type: "pro" },
//     { id: 7, name: "ZAIN SPECIAL", desc: "Chilli chicken, Sheesh Tawook, Oman chips", price: "8", type: "star" },
//   ];

//   const classics = [
//     { name: "Oman Crunch", p: "4", sl: "4", sm: "4" },
//     { name: "Omelette Sandwich", p: "5", sl: "6", sm: "6" },
//     { name: "Veg Sandwich", p: "5", sl: "6", sm: "6" },
//     { name: "Falafel", p: "5", sl: "6", sm: "6" },
//     { name: "Chicken Chilli", p: "6", sl: "6", sm: "6" },
//     { name: "Hotdog", p: "6", sl: "6", sm: "6" },
//     { name: "Zinger", p: "7", sl: "7", sm: "7" },
//     { name: "Kebab (C/B)", p: "7", sl: "7", sm: "7" },
//   ];

//   return (
//     <div className="min-h-screen bg-[#050505] p-4 md:p-12 font-sans text-gray-100 selection:bg-red-600">
//       <div className="max-w-6xl mx-auto">
        
//         {/* TOP BAR: Status & Location */}
//         <div className="flex justify-between items-center mb-12 border-b border-white/5 pb-6">
//           <div className="flex items-center gap-3">
//             <div className="relative flex h-3 w-3">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
//             </div>
//             <span className="text-[10px] font-black tracking-[0.3em] uppercase text-green-500">Shop Open 24/7</span>
//           </div>
//           <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500 italic">Bur Dubai • UAE</span>
//         </div>

//         {/* HERO SECTION */}
//         <header className="relative mb-20 text-center">
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-600/20 blur-[120px] rounded-full -z-10"></div>
//           <h1 className="text-7xl md:text-8xl font-black italic tracking-tighter text-white uppercase leading-none">
//             ZAIN <span className="text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">TEA</span>
//           </h1>
//           <p className="mt-4 text-gray-400 font-medium tracking-[0.8em] uppercase text-[9px] md:text-xs">Signature Street Fusion</p>
//         </header>

//         {/* POWER SIGNATURES: STAGGERED GRID */}
//         <section className="mb-24">
//           <div className="flex items-end justify-between mb-10">
//             <div>
//               <h2 className="text-3xl font-black italic uppercase tracking-tighter">Power Signatures</h2>
//               <div className="h-1 w-20 bg-red-600 mt-2"></div>
//             </div>
//             <Zap className="text-red-600 hidden md:block" size={32} />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {specials.map((s, idx) => (
//               <div key={s.id} className={`group relative bg-[#0f0f0f] border border-white/10 p-6 rounded-3xl transition-all duration-500 hover:scale-[1.02] hover:bg-[#151515] hover:border-red-600/50 ${idx === 0 ? 'lg:col-span-2' : ''}`}>
//                 <div className="flex justify-between items-start mb-4">
//                   <div className="bg-white/5 p-3 rounded-2xl group-hover:bg-red-600 transition-colors">
//                     {s.type === 'spicy' ? <Flame size={20} /> : <Zap size={20} />}
//                   </div>
//                   <div className="text-right">
//                     <span className="text-3xl font-black italic leading-none">{s.price}</span>
//                     <span className="block text-[10px] font-bold text-gray-500 uppercase">AED</span>
//                   </div>
//                 </div>
                
//                 <h3 className="text-2xl font-black italic uppercase tracking-tight mb-2 group-hover:text-red-500 transition-colors">{s.name}</h3>
//                 <p className="text-xs text-gray-400 font-medium leading-relaxed uppercase tracking-wide">{s.desc}</p>
                
//                 {/* Decorative background number */}
//                 <span className="absolute bottom-4 right-6 text-6xl font-black text-white/[0.02] -z-0 pointer-events-none italic">0{s.id}</span>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* BOTTOM SECTION: CLASSICS & 24/7 PROMO */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
//           {/* THE CLASSICS GRID */}
//           <section className="lg:col-span-8">
//             <h2 className="text-xl font-black uppercase tracking-widest mb-8 flex items-center gap-3">
//               <Utensils className="text-red-600" size={18} /> The Classics
//             </h2>
//             <div className="bg-[#0f0f0f] border border-white/5 rounded-[2.5rem] overflow-hidden p-2">
//               <div className="grid grid-cols-4 bg-white/5 p-5 text-[10px] font-black uppercase tracking-widest text-gray-400 rounded-t-2xl">
//                 <div className="col-span-1">Variety</div>
//                 <div className="text-center">Poratta</div>
//                 <div className="text-center">Slice</div>
//                 <div className="text-center">Samoon</div>
//               </div>
//               <div className="p-2">
//                 {classics.map((c, i) => (
//                   <div key={i} className="grid grid-cols-4 p-4 items-center hover:bg-white/[0.03] transition-all rounded-xl">
//                     <div className="col-span-1 text-xs font-bold text-gray-200 uppercase tracking-tight">{c.name}</div>
//                     <div className="text-center text-sm font-black text-red-500">{c.p}</div>
//                     <div className="text-center text-sm font-black text-gray-500">{c.sl}</div>
//                     <div className="text-center text-sm font-black text-gray-500">{c.sm}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* 24/7 PROMO BOX */}
//           <section className="lg:col-span-4 h-full">
//             <div className="sticky top-12 p-8 bg-gradient-to-br from-red-600 to-red-800 rounded-[3rem] shadow-2xl shadow-red-900/20 flex flex-col justify-between h-[500px] overflow-hidden group">
//               <div className="relative z-10">
//                 <Clock className="text-white mb-6 opacity-50 group-hover:rotate-45 transition-transform duration-700" size={40} />
//                 <h4 className="text-4xl font-black italic text-white leading-none uppercase mb-4">
//                   Fresh <br /> Karak <br /> 
//                   <span className="text-red-200">Anytime</span>
//                 </h4>
//                 <div className="h-1 w-12 bg-white/30 rounded-full"></div>
//               </div>

//               <div className="relative z-10">
//                 <p className="text-white/90 font-black uppercase text-xs tracking-widest mb-1">We Never Close</p>
//                 <p className="text-white/50 font-bold uppercase text-[10px] tracking-widest">Available for late night pick-up</p>
//               </div>

//               <Coffee className="absolute -right-12 -bottom-10 text-black/10 group-hover:scale-110 transition-transform duration-500" size={280} />
              
//               {/* Floating AED Indicator */}
//               <div className="absolute top-8 right-8 bg-black text-white w-14 h-14 rounded-full flex flex-col items-center justify-center border-2 border-white/20 shadow-xl">
//                 <span className="text-lg font-black leading-none">1</span>
//                 <span className="text-[8px] font-bold uppercase">AED</span>
//               </div>
//             </div>
//           </section>

//         </div>

//         {/* FOOTER */}
//         <footer className="mt-32 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40">
//           <p className="text-[10px] font-black uppercase tracking-[0.8em]">Crunch • Heat • Smoke</p>
//           <p className="text-[10px] font-bold uppercase tracking-[0.2em]">© 2026 Zain Tea Signature Kitchen</p>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default ZainTeaMenu;