import React from 'react';
import { Flame, Zap, Coffee, Clock, Plus, Utensils, Star, CupSoda } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import Cart from './Cart';

const ZainTeaMenu = () => {
  const { addToCart } = useCart();

  const specials = [
    { id: 1, name: "BAZOOKA", desc: "Chicken Chilli, Cheetos, cheese, hot sauce", price: "7", },
    { id: 2, name: "FRANCISCO", desc: "Chicken Chilli, Amwaj, cheese, mayo", price: "7", },
    { id: 3, name: "RAYYAN", desc: "Zinger, Amwaj chips, fries, cheese", price: "7", },
    { id: 4, name: "ZAROONI", desc: "Zinger, Amwaj chips, cheese, hot suace", price: "7", },
    { id: 5, name: "MAZMI", desc: "Zinger, Tikka, Oman chips, fries, cheese", price: "8", },
    { id: 6, name: "ROYAL MIX", desc: "Popcorn chicken, Tikka, fries, Oman chips, cheese", price: "8", },
    { id: 7, name: "ZAIN SPECIAL", desc: "Chicken Chilli, Sheesh Tawook, Oman chips, cheese", price: "8", },
  ];

  const classics = [
    { name: "Omelette", p: "5", sl: "6", sm: "6" },
    { name: "Vegetable", p: "6", sl: "6", sm: "6" },
    { name: "Falafel", p: "6", sl: "6", sm: "6" },
    { name: "Chicken Chilli", p: "6", sl: "6", sm: "6" },
    { name: "Hotdog", p: "6", sl: "6", sm: "6" },
    { name: "Zinger", p: "7", sl: "7", sm: "7" },
    { name: "Tikka", p: "7", sl: "7", sm: "7" },
    { name: "Nuggets", p: "7", sl: "7", sm: "7" },
    { name: "Kebab (C/B)", p: "7", sl: "7", sm: "7" },
  ];

  /** Drinks, boost, snacks & coffee — same pricing as printed menu */
  const menuSections = [
    {
      id: 'hot-drinks',
      title: 'Hot Drinks',
      Icon: Coffee,
      items: [
      { name: 'Zaintea Sp.', price: '2.00' },
        { name: 'Fresh Milk Tea', price: '2.00' },
        { name: 'Karak Tea', price: '1.00' },
        { name: 'Black Tea', price: '1.00' },
        { name: 'Lemon Tea', price: '1.00' },
        { name: 'Mint Sulaimani', price: '1.00' },
        { name: 'Ginger Tea', price: '1.00' },
        { name: 'Lemon Mint', price: '1.50' },
        { name: 'Lemon Mint Ginger', price: '1.50' },
        { name: 'Black Coffee', price: '1.50' },
        { name: 'Chukkapi', price: '2.00' },
        { name: 'Coffee', price: '2 / 4' },
        { name: 'Fresh Milk Coffee', price: '3 / 6' },
        { name: 'Boost', price: '3 / 6' },
        { name: 'Horlicks', price: '3 / 6' },
        { name: 'Cornflakes Normal', price: '5.00' },
        { name: 'Cornflakes Chocolate', price: '6.00' },
        { name: 'Cappuccino with Vanilla', price: '6.00' },
        { name: 'Hot Chocolate', price: '6.00' },
        { name: 'Muhabbath Sulaimani', price: '2.00' },
      ],
    }, 
    {
      id: 'snacks',
      title: 'Snacks',
      Icon: Utensils,
      items: [
        { name: 'Chicken Samosa (s)', price: '0.50' },
        { name: 'Veg Samosa', price: '1.00' },
        { name: 'Chicken Samosa', price: '1.50' },
        { name: 'Boiled Egg', price: '1.50' },
        { name: 'Chicken Roll', price: '2.00' },
        { name: 'Aloo Samosa', price: '2.00' },
        { name: 'Vada', price: '2.00' },
        { name: 'Upma', price: '3.00' },
        { name: 'Egg/Veg Pups', price: '3.00' },
        { name: 'Unnakayi', price: '3.00' },
        { name: 'Kadala Fry', price: '3.00' },
      ],
    }, 
  ];

  const addMenuItem = (sectionId, sectionTitle, item, index) => {
    addToCart(
      {
        id: `${sectionId}-${index}`,
        name: item.name,
        desc: sectionTitle,
        price: `AED ${item.price}`,
      },
      1,
      null
    );
  };

  return (
    <div className="min-h-screen w-full bg-[#050505] overflow-x-hidden overflow-y-auto font-sans text-white flex flex-col px-5 pt-2 pb-8 relative">
      <Cart />
      
      {/* 1. TOP HEADER BAR */}
      <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-4">
        <div className="flex items-center gap-6">
          <h1 className="text-4xl font-black italic tracking-tighter uppercase leading-none">
            <a href="/">
            ZAIN <span className="text-red-600 drop-shadow-[0_0_10px_rgba(220,38,38,0.4)]">TEA</span></a>
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
      <div className="flex-1 min-h-0 grid grid-cols-12 gap-6 lg:gap-8">
        
        {/* LEFT COLUMN: POWER SIGNATURES (Static) */}
        <div className="col-span-7 space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="text-red-600" size={24} />
            <h2 className="text-2xl font-black italic uppercase tracking-tight">Power Signatures</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {specials.map((s) => (
              <div
                key={s.id}
                className="bg-[#111] border border-white/5 p-4 rounded-3xl flex justify-between items-center relative overflow-hidden group"
              >
                <div className="relative z-10">
                  <h3 className="text-xl font-black italic uppercase text-red-500">{s.name}</h3>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-tight">{s.desc}</p>
                </div>
                <div className="flex items-center gap-3 relative z-10">
                  <div className="text-right">
                    <span className="text-2xl font-black">{s.price}</span>
                    <span className="block text-[8px] font-bold text-gray-600 uppercase">AED</span>
                  </div>
                  <button
                    onClick={() =>
                      addToCart(
                        {
                          id: s.id,
                          name: s.name,
                          desc: s.desc,
                          price: `AED ${s.price}`,
                        },
                        1,
                        null
                      )
                    }
                    className="opacity-0 group-hover:opacity-100 bg-white/10 hover:bg-red-600 p-1.5 rounded-lg transition-all"
                    aria-label={`Add ${s.name} to cart`}
                  >
                    <Plus size={16} />
                  </button>
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
      <div className="relative z-10 bg-gradient-to-br from-[#0a0a0a] to-[#111] 
rounded-3xl p-4 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center 
border border-white/10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden">

  {/* 🔥 Subtle Glow Background */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-red-600/10 blur-[120px] rounded-full" />
  <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-yellow-500/10 blur-[120px] rounded-full" />

  {/* LEFT CONTENT */}
  <div className="flex flex-col gap-4 z-10">

   {/* 🌐 Quick Info Strip */}
    <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-300 mt-2">

      <span className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
        +971 50 122 9617
      </span>

      <span className="opacity-30">|</span>

      <span className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-pink-400" />
        @zaintea_cafe
      </span>

      <span className="opacity-30">|</span>

      <span className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-blue-400" />
        zainteacafe.com
      </span>

    </div>

    {/* 🚀 CTA */}
    <div className="mt-6 flex flex-wrap gap-3">

{/* 🌐 PRIMARY CTA - WEBSITE / MAP */}
<a
  href="https://maps.app.goo.gl/Pa7NeR7QMewpG7Le8"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-3 py-2 rounded-xl 
    bg-white/10 backdrop-blur-md border border-white/20 
  text-white text-sm font-bold tracking-wide 
  hover:scale-105 hover:shadow-lg transition-all"
>
  📍 Visit Us
</a>

{/* ⭐ REVIEW CTA */}
<a
  href="https://g.page/r/CVFqcJBrhiZNEAE/review"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-3 py-2 rounded-xl 
  bg-white/10 backdrop-blur-md border border-white/20 
  text-gray-200 text-sm font-semibold 
  hover:bg-white/20 transition"
>
  ⭐ Leave Review
</a>

{/* 📖 MENU CTA */}
<a
  href="https://drive.google.com/file/d/1kA5NZ79UB6Amx6bbVbJk7rsHXpLXD_We/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-3 py-2 rounded-xl 
  bg-white/5 border border-white/10 
  text-gray-300 text-sm font-semibold 
  hover:bg-white/10 transition"
>
  📖 View Menu
</a>

{/* 💬 WHATSAPP CTA (STRONG ACTION) */}
<a
  href="https://wa.me/971501229617"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-3 py-2 rounded-xl 
 bg-white/10 backdrop-blur-md border border-white/20   hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] 
  transition-all"
>
  💬 WhatsApp
</a>

</div>
  </div>

  {/* RIGHT SIDE STATUS CARD */}
  <motion.div 
    animate={{ 
      boxShadow: [
        "0 0 0px rgba(255,140,0,0)", 
        "0 0 40px rgba(255,140,0,0.25)", 
        "0 0 0px rgba(255,140,0,0)"
      ] 
    }}
    transition={{ duration: 2, repeat: Infinity }}
    className="mt-6 md:mt-0 bg-white/5 backdrop-blur-xl px-8 py-5 rounded-2xl 
    border border-white/10 flex flex-col items-center justify-center min-w-[150px]"
  >

    {/* STATUS */}
    <div className="flex items-center gap-2 mb-2">
      <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_#22c55e]" />
      <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">
        OPEN NOW
      </span>
    </div>
 
    <span className="text-5xl font-black italic text-white tracking-tight">
      24/7
    </span>
 
    <span className="text-[10px] text-gray-500 mt-1 tracking-widest uppercase">
      Always Serving
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
            <div className="max-h-[min(52vh,28rem)] lg:max-h-[min(60vh,32rem)] overflow-y-auto relative">
              <motion.div  
                className="flex flex-col p-2"
              >
                {classics.map((c, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-[1.5fr_repeat(3,_1fr)_auto] p-3 items-center border-b border-white/[0.03] gap-2"
                  >
                    <div className="text-sm font-black text-gray-200 uppercase truncate">{c.name}</div>
                    <div className="text-center text-lg font-black text-red-600">{c.p}</div>
                    <div className="text-center text-lg font-black text-gray-500">{c.sl}</div>
                    <div className="text-center text-lg font-black text-gray-500">{c.sm}</div>
                    {/* <button
                      onClick={() =>
                        addToCart(
                          {
                            name: c.name,
                            desc: 'Classic sandwich',
                            price: `AED ${c.p}`,
                          },
                          1,
                          null
                        )
                      }
                      className="ml-2 w-7 h-7 flex items-center justify-center rounded-full bg-red-600 text-white hover:bg-red-500 transition-colors text-[10px] font-black"
                      aria-label={`Add ${c.name} to cart`}
                    >
                      <Plus size={14} />
                    </button> */}
                  </div>
                ))}
              </motion.div>
              {/* Fade out effect at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. FULL MENU — drinks, snacks, */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
        {menuSections.map(({ id, title, Icon, items }) => (
          <div
            key={id}
            className="bg-[#0a0a0a] rounded-[2rem] border border-white/5 overflow-hidden flex flex-col shadow-lg"
          >
            <div className="flex items-center gap-3 px-4 py-3 bg-white/5 border-b border-white/10">
              <Icon className="text-red-600 shrink-0" size={20} />
              <h2 className="text-sm font-black italic uppercase tracking-tight text-white">{title}</h2>
            </div>
            <div className="divide-y divide-white/[0.06] max-h-[min(50vh,22rem)] overflow-y-auto">
              {items.map((item, i) => (
                <div
                  key={`${id}-${i}`}
                  className="grid grid-cols-[1fr_auto_auto] gap-2 items-center px-3 py-2.5 hover:bg-white/[0.03]"
                >
                  <span className="text-[11px] sm:text-xs font-bold text-gray-200 uppercase tracking-tight leading-snug">
                    {item.name}
                  </span>
                  <div className="text-right flex content-center gap-1">
                    <span className="text-sm font-black text-red-500 tabular-nums">{item.price}</span>
                    <span className="text-[8px] text-center content-center font-bold text-gray-600 uppercase">AED</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => addMenuItem(id, title, item, i)}
                    className="opacity-0 group-hover:opacity-100 bg-white/10 hover:bg-red-600 p-1.5 rounded-lg transition-all"
                    aria-label={`Add ${item.name} to cart`}
                  >
                    <Plus size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
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