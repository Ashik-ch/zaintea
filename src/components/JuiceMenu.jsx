import React, { useState } from 'react';
import { juices } from '../data/juices';

const JuiceMenu = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % juices.menu_items.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + juices.menu_items.length) % juices.menu_items.length);
  };

  const activeJuice = juices.menu_items[activeIndex];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#090b0e] text-white font-sans antialiased selection:bg-emerald-500/30">

      {/* Dynamic Immersive Background Theater Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110 blur-[60px] brightness-[0.2] transition-all duration-1000 ease-in-out will-change-transform"
          style={{
            backgroundImage: `url(${activeJuice.image || 'https://images.unsplash.com/photo-1622597467836-f3085a26e7a1?auto=format&fit=crop&q=80&w=1200'})`,
          }}
        />
        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#090b0e]/40 via-transparent to-[#090b0e]" />
        <div className="absolute inset-0 bg-radial-vignette opacity-80" />

        {/* Soft Organic Ambient Light Halos */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-emerald-500/10 blur-[120px] rounded-full animate-pulse transition-all duration-1000" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-amber-500/10 blur-[120px] rounded-full animate-pulse transition-all duration-1000" />
      </div>

      {/* Main Interactive Stage Area */}
      <div className="relative z-10 flex flex-col min-h-screen justify-between structure-container">

        {/* BRAND IDENTITY HEADER */}
        <header className="pt-6 px-6 md:px-16 mix-blend-screen">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-md shadow-inner">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] tracking-[0.3em] font-black uppercase text-emerald-400/90">
                  {juices.attributes.join(' • ')}
                </span>
              </div>
              <h1 className="mt-4 text-4xl md:text-6xl font-black tracking-tight leading-none uppercase bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
                {juices.slogan}
              </h1>
            </div>

            {/* Displaying Live Total Counter */}
            <div className="text-right hidden md:block">
              <span className="text-4xl font-extrabold tracking-tighter text-white/20">
                {(activeIndex + 1).toString().padStart(2, '0')}
              </span>
              <span className="text-sm font-bold text-white/10 mx-1">/</span>
              <span className="text-xs font-bold text-white/40">
                {juices.menu_items.length.toString().padStart(2, '0')}
              </span>
            </div>
          </div>
        </header>

        {/* FEATURED 3D SLIDER STAGE */}
        <div className="flex-1 flex items-center justify-center px-4 py-8 relative">
          <div className="relative w-full max-w-7xl flex items-center justify-between min-h-[460px]">

            {/* Controller Left */}
            <button
              onClick={prev}
              className="group absolute left-2 md:left-6 z-30 w-14 h-14 rounded-full bg-black/40 hover:bg-white text-white hover:text-black border border-white/10 hover:border-white shadow-2xl flex items-center justify-center transition-all duration-300 backdrop-blur-md"
              aria-label="Previous Flavor"
            >
              <span className="text-xl font-medium transition-transform group-hover:-translate-x-0.5">←</span>
            </button>

            {/* Slider Track with Perspective Grid */}
            <div className="relative flex items-center justify-center w-full h-full overflow-visible perspective-[1200px]">
              {juices.menu_items.map((juice, idx) => {
                let cardTransformStyles = '';

                // Active Card Core Style Settings
                if (idx === activeIndex) {
                  cardTransformStyles = 'translate-x-0 scale-100 opacity-100 z-20 pointer-events-auto rotate-0 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border-white/20 bg-gradient-to-b from-white/15 to-white/5';
                }
                // Previous Card (Left Floating Peek)
                else if (idx === (activeIndex - 1 + juices.menu_items.length) % juices.menu_items.length) {
                  cardTransformStyles = '-translate-x-[40%] md:-translate-x-[65%] scale-80 opacity-20 z-10 pointer-events-none -rotate-6 blur-[2px] hidden sm:block border-white/5 bg-white/5';
                }
                // Next Card (Right Floating Peek)
                else if (idx === (activeIndex + 1) % juices.menu_items.length) {
                  cardTransformStyles = 'translate-x-[40%] md:translate-x-[65%] scale-80 opacity-20 z-10 pointer-events-none rotate-6 blur-[2px] hidden sm:block border-white/5 bg-white/5';
                }
                else {
                  return null; // Cull distant items safely from memory
                }

                return (
                  <div
                    key={juice.name}
                    className={`absolute w-[280px] md:w-[340px] rounded-3xl border backdrop-blur-2xl p-4 transition-all duration-700 ease-out select-none transform-gpu ${cardTransformStyles}`}
                  >
                    <div className="relative flex flex-col h-full justify-between">

                      {/* Image Frame Holder */}
                      <div className="relative overflow-hidden rounded-2xl bg-black/20 shadow-inner group">
                        <img
                          src={juice.image || 'https://images.unsplash.com/photo-1622597467836-f3085a26e7a1?auto=format&fit=crop&q=80&w=500'}
                          alt={juice.name}
                          className="w-full h-[220px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                        <span className="absolute top-3 right-3 px-2.5 py-0.5 text-[9px] font-black tracking-widest bg-emerald-500 text-black uppercase rounded-full shadow-lg">
                          FRESH
                        </span>
                      </div>

                      {/* Content & Details Meta Section */}
                      <div className="mt-5">
                        <h2 className="text-2xl font-black tracking-tight text-white drop-shadow-sm">
                          {juice.name}
                        </h2>
                        <p className="mt-1.5 text-xs text-white/60 font-medium leading-relaxed min-h-[36px] line-clamp-2">
                          {juice.recipe}
                        </p>

                        <div className="my-4 border-t border-white/10" />

                        {/* CORRECTED REQUIREMENT: Clean, Vertically Aligned Pricing Tiers */}
                        <div className="flex flex-col gap-2">
                          <p className="text-[10px] font-black tracking-wider text-white/30 uppercase">Pricing Tier</p>

                          {juice.prices.small && (
                            <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                              <span className="text-xs font-bold text-white/50">Small (S)</span>
                              <span className="text-sm font-extrabold text-emerald-400">AED {juice.prices.small}</span>
                            </div>
                          )}

                          <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                            <span className="text-xs font-bold text-white/50">Medium (M)</span>
                            <span className="text-sm font-extrabold text-emerald-400">AED {juice.prices.medium}</span>
                          </div>

                          <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                            <span className="text-xs font-bold text-white/50">Large (L)</span>
                            <span className="text-sm font-extrabold text-emerald-400">AED {juice.prices.large}</span>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Controller Right */}
            <button
              onClick={next}
              className="group absolute right-2 md:right-6 z-30 w-14 h-14 rounded-full bg-black/40 hover:bg-white text-white hover:text-black border border-white/10 hover:border-white shadow-2xl flex items-center justify-center transition-all duration-300 backdrop-blur-md"
              aria-label="Next Flavor"
            >
              <span className="text-xl font-medium transition-transform group-hover:translate-x-0.5">→</span>
            </button>

          </div>
        </div>

        {/* BOTTOM QUICK-SELECT MATRIX PANEL */}
        <section className="px-6 md:px-16 pb-8">
          <div className="max-w-7xl mx-auto">

            {/* Title */}
            <h2 className="text-lg md:text-2xl font-bold mb-3 text-white/90">
              Explore Juices
            </h2>

            {/* Horizontal Row */}
            <div className="flex gap-4 overflow-x-auto pb-4 pt-1 no-scrollbar snap-x snap-mandatory">

              {juices.menu_items.map((juice, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative flex-none snap-start w-[170px] md:w-[200px] rounded-2xl overflow-hidden transition-all duration-300 group
          
          ${activeIndex === idx
                      ? 'scale-105 ring-2 ring-emerald-400 shadow-[0_10px_40px_rgba(16,185,129,0.25)]'
                      : 'hover:scale-105 opacity-80 hover:opacity-100'
                    }
        `}
                >

                  {/* Image Card */}
                  <div className="relative h-[120px] md:h-[140px] overflow-hidden">

                    <img
                      src={
                        juice.image ||
                        'https://images.unsplash.com/photo-1622597467836-f3085a26e7a1?auto=format&fit=crop&q=80&w=300'
                      }
                      alt={juice.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Gradient Overlay (Netflix style) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                    {/* Active badge */}
                    {activeIndex === idx && (
                      <div className="absolute top-2 left-2 px-2 py-1 text-[10px] bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 rounded-full backdrop-blur-xl">
                        Selected
                      </div>
                    )}

                  </div>

                  {/* Text */}
                  <div className="p-2 text-left">
                    <p className="text-sm font-bold text-white truncate">
                      {juice.name}
                    </p>

                    <p className="text-[11px] text-white/50 truncate">
                      AED {juice.prices.medium}
                    </p>
                  </div>

                </button>
              ))}

            </div>
          </div>
        </section>
        {/* MINIMALIST HUD SYSTEM FOOTER */}
        <footer className="px-6 md:px-16 pb-6 border-t border-white/5 bg-black/10 backdrop-blur-sm mix-blend-screen">
          <div className="max-w-7xl mx-auto pt-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-semibold tracking-wider text-white/40">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <span className="hover:text-white transition-colors duration-200 cursor-pointer">📞 {juices.contact_info.phone_1}</span>
              <span className="hover:text-white transition-colors duration-200 cursor-pointer">📱 {juices.contact_info.phone_2}</span>
              <span className="hover:text-white transition-colors duration-200 cursor-pointer">🌐 {juices.contact_info.website}</span>
            </div>
            <div className="px-3 py-1 rounded-md bg-white/5 border border-white/5 text-emerald-400/80 font-bold uppercase text-[9px] tracking-[0.15em]">
              ⚡ {juices.contact_info.services[0]}
            </div>
          </div>
        </footer>

      </div>
    </section>
  );
};

export default JuiceMenu;