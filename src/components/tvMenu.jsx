import React from "react";
import { Zap, Coffee, Clock, Utensils, Instagram, Globe, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Cart from "./Cart";
import zainteaSlideshow from '../assets/zainteaSlideshow.mp4';

const ZainTeaMenu = () => {

  const specials = [
    { id: 1, name: "BAZOOKA", desc: "Chicken Chilli, Cheetos, cheese, hot sauce", price: "7" },
    { id: 2, name: "FRANCISCO", desc: "Chicken Chilli, Amwaj, cheese, mayo", price: "7" },
    { id: 3, name: "RAYYAN", desc: "Zinger, Amwaj chips, fries, cheese", price: "7" },
    { id: 4, name: "ZAROONI", desc: "Zinger, Amwaj chips, cheese, hot suace", price: "7" },
    { id: 5, name: "MAZMI", desc: "Zinger, Tikka, Oman chips, fries, cheese", price: "8" },
    { id: 6, name: "ROYAL MIX", desc: "Popcorn chicken, Tikka, fries, Oman chips, cheese", price: "8" },
    { id: 7, name: "ZAIN SPECIAL", desc: "Chicken Chilli, Sheesh Tawook, Oman chips, cheese", price: "8" },
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

  const menuSections = [
    {
      id: "hot-drinks",
      title: "Hot Drinks",
      Icon: Coffee,
      items: [
        { name: "Zaintea Sp.", price: "2.00" },
        { name: "Fresh Milk Tea", price: "2.00" },
        { name: "Karak Tea", price: "1.00" },
        { name: "Black Tea", price: "1.00" },
        { name: "Lemon Tea", price: "1.00" },
        { name: "Mint Sulaimani", price: "1.00" },
        { name: "Ginger Tea", price: "1.00" },
        { name: "Lemon Mint", price: "1.50" },
        { name: "Lemon Mint Ginger", price: "1.50" },
        { name: "Black Coffee", price: "1.50" },
        { name: "Chukkapi", price: "2.00" },
        { name: "Coffee", price: "2 / 4" },
        { name: "Fresh Milk Coffee", price: "3 / 6" },
        { name: "Boost", price: "3 / 6" },
        { name: "Horlicks", price: "3 / 6" },
        { name: "Cornflakes Normal", price: "5.00" },
        { name: "Cornflakes Chocolate", price: "6.00" },
        { name: "Cappuccino with Vanilla", price: "6.00" },
        { name: "Hot Chocolate", price: "6.00" },
        { name: "Muhabbath Sulaimani", price: "2.00" },
      ],
    },
    {
      id: "snacks",
      title: "Snacks",
      Icon: Utensils,
      items: [
        { name: "Chicken Samosa (s)", price: "0.50" },
        { name: "Veg Samosa", price: "1.00" },
        { name: "Chicken Samosa", price: "1.50" },
        { name: "Boiled Egg", price: "1.50" },
        { name: "Chicken Roll", price: "2.00" },
        { name: "Aloo Samosa", price: "2.00" },
        { name: "Vada", price: "2.00" },
        { name: "Upma", price: "3.00" },
        { name: "Egg/Veg Pups", price: "3.00" },
        { name: "Unnakayi", price: "3.00" },
        { name: "Kadala Fry", price: "3.00" },
      ],
    },
  ];


  return (
    <div className="min-h-screen w-full overflow-x-hidden overflow-y-auto font-sans text-slate-900 flex flex-col px-4 pt-2 pb-8 relative">

      {/* Video Background Container */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-700"
        >
          <source src={zainteaSlideshow} type="video/mp4" />
          Your browser does not support the video tag.
        </video>


        {/* Animated mesh gradients */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-0 right-0 w-full h-full bg-red-400/10 blur-[120px] rounded-full"
        />
      </div>


      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[80%] h-[70%] bg-red-200/40 blur-[120px] rounded-full"
        />
        <motion.div animate={{ scale: [1, 1.3, 1], x: [0, -80, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] bg-blue-100/30 blur-[100px] rounded-full"
        />
        <motion.div
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-0 left-[20%] w-[70%] h-[40%] bg-orange-100/20 blur-[110px] rounded-full"
        />
      </div>
      <div className="absolute inset-0 bg-black/50 backdrop-grayscale-0" />

      {/* --- CONTENT WRAPPER --- */}
      <div className="relative z-10 flex flex-col w-full px-5 md:px-1 mx-auto space-y-3">
        <Cart />

        <div className="bg-white/50 backdrop-blur-5xl backdrop-saturate-150 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] rounded-[2.5rem]  px-6  py-5 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h1 className="text-4xl font-black italic tracking-tighter uppercase leading-none">
              <a href="/" className="hover:opacity-80 transition-opacity">
                ZAIN <span className="text-red-600">TEA</span>
              </a>
            </h1>
            <div className="hidden sm:block bg-red-500/10 border border-white px-3 py-1 rounded-full text-white text-[10px] font-black tracking-widest uppercase italic">
              anytime Tea
            </div>
          </div>

          <div className="flex flex-col items-end">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-black uppercase tracking-widest text-scale-700">Open 24/7</span>
            </div>
            <p className="text-[10px] font-bold text-slate-800 uppercase tracking-widest">Bur Dubai</p>
          </div>
        </div>



        {/* SLIM FEATURED: GRILL CHICKEN BOX */}
        <div className="col-span-1 sm:col-span-2 group bg-white/50 backdrop-blur-xl border border-white/70 rounded-[1.5rem] flex items-stretch overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 max-h-[80px]">

          {/* Left Side: Info - Tightened padding and font */}
          <div className="flex-1 py-3 px-5 flex flex-col justify-center">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-black italic uppercase text-black leading-none">Grill Chicken</h3>
              <span className="bg-red-600 text-white text-[7px] font-black px-1.5 py-0.5 rounded-full uppercase tracking-tighter">Best Seller</span>
            </div>
            <p className="text-[9px] text-slate-800 uppercase font-bold tracking-tight opacity-70 leading-tight mt-0.5">
              Grilled chicken with garlic sauce, soup, hammus and fries
            </p>
          </div>

          {/* Right Side: Pricing - Horizontal layout for all screens to save height */}
          <div className="bg-slate-900/90 backdrop-blur-md px-6 flex flex-row items-center gap-6 border-l border-white/20">

            {/* Half Option */}
            <div className="flex items-center gap-2">
              <p className="text-[8px] font-black text-red-500 uppercase tracking-widest">Half</p>
              <div className="flex items-baseline gap-0.5">
                <span className="text-xl font-black text-white italic">20</span>
                <span className="text-[8px] font-bold text-white/50 uppercase">AED</span>
              </div>
            </div>

            {/* Thin Vertical Divider */}
            <div className="h-6 w-[1px] bg-white/10"></div>

            {/* Full Option */}
            <div className="flex items-center gap-2">
              <p className="text-[8px] font-black text-red-500 uppercase tracking-widest">Full</p>
              <div className="flex items-baseline gap-0.5">
                <span className="text-xl font-black text-white italic">33</span>
                <span className="text-[8px] font-bold text-white/50 uppercase">AED</span>
              </div>
            </div>
          </div>
        </div>
        {/* 2. MAIN CONTENT GRID */}
        <div className="grid grid-cols-12 gap-4">

          {/* LEFT COLUMN: SIGNATURES */}
          <div className="col-span-12 lg:col-span-7 space-y-2">
            <div className="flex items-center gap-3 px-2">
              <Zap className="text-red-600 fill-red-600/10" size={24} />
              <h2 className="text-xl font-black italic uppercase tracking-tight text-white">Signatures</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {specials.map((s) => (
                <div key={s.id} className="group bg-white/50 backdrop-blur-xl border border-white/70 p-4 rounded-[2rem] flex justify-between items-center relative overflow-hidden shadow-sm hover:shadow-xl hover:bg-white/60 transition-all duration-300">
                  <div className="relative z-10">
                    <h3 className="text-xl font-black italic uppercase text-red-800">{s.name}</h3>
                    <p className="text-[10px] text-black uppercase font-bold tracking-tight ">{s.desc}</p>
                  </div>
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="text-right flex gap-2 items-center">
                      <span className="text-2xl font-black text-scale-900">{s.price}</span>
                      <span className="block text-[8px] font-bold text-scale-900 uppercase">AED</span>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* PROMO BANNER - Glass Card */}
            <div className="bg-white/50 backdrop-blur-2xl border border-white/80 rounded-[2.5rem] px-6 py-4 shadow-lg flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-4 text-[10px] font-black text-slate-900 uppercase tracking-widest">
                  <span className="flex items-center gap-2"> <Phone size={14} />+971 50 122 9617</span>
                  <span className="opacity-20">|</span>                    <span className="flex items-center gap-2"><Instagram size={14} /> zaintea_cafe</span>
                  <span className="opacity-20">|</span>                    <span className="flex items-center gap-2"> <Globe size={14} /> zainteacafe.com </span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-500">
                  <a href="https://maps.app.goo.gl/Pa7NeR7QMewpG7Le8"
                    className="px-4 py-2 rounded-xl bg-slate-100 text-black text-sm font-bold hover:bg-slate-900  hover:text-white transition-colors shadow-lg shadow-slate-200">📍 Visit Us</a>
                  <a href="https://g.page/r/CVFqcJBrhiZNEAE/review" className="px-4 py-2 rounded-xl bg-red-50 border border-slate-200 text-slate-700 text-sm font-bold hover:bg-red-100 transition-colors">⭐ Review</a>
                  <a href="https://drive.google.com/file/d/1kA5NZ79UB6Amx6bbVbJk7rsHXpLXD_We/view?usp=sharing" target="_blank"
                    rel="noopener noreferrer" className="px-4 py-2 rounded-xl bg-blue-50 border border-slate-200 text-slate-700 text-sm font-bold hover:bg-blue-100 transition-colors"> 📖 Menu</a>
                  <a href="https://wa.me/971501229617"
                    className="px-4 py-2 rounded-xl bg-green-50 border border-green-100 text-green-700 text-sm font-bold hover:bg-green-100 transition-colors">💬 WhatsApp</a>
                </div>
              </div>

              <div className=" bg-slate-50/80 px-6 py-2 rounded-2xl border border-slate-100 flex flex-col items-center">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">OPEN NOW</span>
                </div>
                <span className="text-5xl font-black text-slate-900 tracking-tight">24/7</span>
                <span className="text-[10px] text-slate-400 tracking-widest uppercase">Always Serving</span>

              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CLASSICS */}
          <div className="col-span-12 lg:col-span-5">
            <div className="flex items-center gap-3 mb-4 px-2">
              <Clock className="text-white" size={20} />
              <h2 className="text-xl font-black italic uppercase tracking-tight text-white">Classics</h2>
            </div>

            <div className="bg-white/50 backdrop-blur-2xl border border-white/60 rounded-[2.5rem] shadow-sm overflow-hidden">
              <div className="grid grid-cols-4 bg-white/30 p-5 text-[10px] font-black uppercase text-slate-500 border-b border-white/20">
                <div className="col-span-1">Variety</div>
                <div className="text-center">Poratta</div>
                <div className="text-center">Slice</div>
                <div className="text-center">Samoon</div>
              </div>

              <div className="max-h-[500px] overflow-y-auto custom-scrollbar">
                {classics.map((c, i) => (
                  <div key={i} className="grid grid-cols-[1.5fr_repeat(3,_1fr)] px-4 py-2 items-center border-b border-white/10 hover:bg-white/50 transition-colors">
                    <div className="text-sm font-black text-slate-700 uppercase truncate">{c.name}</div>
                    <div className="text-center text-lg font-black text-slate-800">{c.p}</div>
                    <div className="text-center text-lg font-black text-slate-800">{c.sl}</div>
                    <div className="text-center text-lg font-black text-slate-800">{c.sm}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FULL MENU SECTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {menuSections.map(({ id, title, Icon, items }) => (
            <div key={id} className="bg-white/50 backdrop-blur-4xl border border-white/60 rounded-[2.5rem] overflow-hidden flex flex-col shadow-sm">
              <div className="flex items-center gap-3 px-6 py-5 bg-white/30 border-b border-white/20">
                <Icon className="text-red-600 shrink-0" size={20} />
                <h2 className="text-sm font-black italic uppercase tracking-widest text-slate-800">{title}</h2>
              </div>

              <div className="divide-y divide-white/10 max-h-[30rem] overflow-y-auto">
                {items.map((item, i) => (
                  <div key={i} className="group flex justify-between items-center px-6 py-3 hover:bg-white/50 transition-colors">
                    <span className="text-[11px] sm:text-xs font-bold text-slate-700 uppercase">{item.name}</span>
                    <div className="flex items-center gap-2">
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm font-black text-white">{item.price}</span>
                        <span className="text-[8px] font-bold text-white uppercase">AED</span>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div >
    </div >
  );
};

export default ZainTeaMenu;
