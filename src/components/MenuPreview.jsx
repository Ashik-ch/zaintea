import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { categories, menuData } from '../data/menuData';
import { useCart } from '../context/CartContext';
import { Plus, Minus, ShoppingBag } from 'lucide-react';
import Cart from './Cart';
import grillChickenImg from '../assets/Grillchicken.jpg';

const MenuItem = ({ item }) => {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [selectedVariant, setSelectedVariant] = useState(item.variants ? item.variants[0] : null);
    const [isAdded, setIsAdded] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [popupKey, setPopupKey] = useState(0);
    const addedTimeoutRef = useRef(null);
    const popupTimeoutRef = useRef(null);

    const handleIncrement = () => setQuantity(q => q + 1);
    const handleDecrement = () => setQuantity(q => Math.max(1, q - 1));

    const handleAdd = () => {
        addToCart(item, quantity, selectedVariant);
        setIsAdded(true);
        setPopupKey(k => k + 1); // retrigger animation for rapid clicks
        setShowPopup(true);

        if (addedTimeoutRef.current) window.clearTimeout(addedTimeoutRef.current);
        if (popupTimeoutRef.current) window.clearTimeout(popupTimeoutRef.current);

        addedTimeoutRef.current = window.setTimeout(() => setIsAdded(false), 2000);
        popupTimeoutRef.current = window.setTimeout(() => setShowPopup(false), 2000);
        setQuantity(1); // Reset quantity after adding
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="group border-b border-zain-brown/10 dark:border-zain-beige/10 pb-6" >

            <div className="flex items-center flex-wrap gap-4">
                <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-display font-bold text-zain-brown dark:text-zain-beige truncate">
                        {item.name}
                    </h3>
                    <p className="text-[11px] text-zain-brown/50 dark:text-zain-beige/50 truncate">
                        {item.desc}
                    </p>
                </div>

                {/* PRICE */}
                <span className="text-sm font-bold text-zain-red dark:text-zain-gold whitespace-nowrap">
                    {selectedVariant ? `AED ${selectedVariant.price}` : item.price}
                </span>

                {/* QUANTITY */}
                <div className="flex items-center bg-white/5 rounded-md px-1 shrink-0">
                    <button
                        onClick={handleDecrement}
                        className="w-7 h-7 flex items-center justify-center text-zain-beige hover:bg-white/10 rounded"
                    >
                        <Minus size={14} />
                    </button>

                    <span className="w-5 text-center text-xs font-bold text-white">
                        {quantity}
                    </span>

                    <button
                        onClick={handleIncrement}
                        className="w-7 h-7 flex items-center justify-center text-zain-beige hover:bg-white/10 rounded"
                    >
                        <Plus size={14} />
                    </button>
                </div>

                {/* ADD BUTTON */}
                <button
                    onClick={handleAdd}
                    className={`flex items-center gap-1 px-3 py-2 rounded-md text-xs font-bold tracking-widest shrink-0 transition
      ${isAdded
                            ? "bg-green-600 text-white"
                            : "bg-zain-red dark:bg-zain-gold text-white dark:text-black hover:bg-black/10 dark:hover:bg-white"
                        }`}
                >
                    <ShoppingBag size={14} />
                    {isAdded ? "ADDED" : "Order Now"}
                </button>

            </div>



            {/* Variant Selector */}
            {item.variants && (
                <div className="flex gap-2 mt-3 mb-3">
                    {item.variants.map((variant) => (
                        <button
                            key={variant.name}
                            onClick={() => setSelectedVariant(variant)}
                            className={`px-3 py-1 text-sm rounded-full border transition-all ${selectedVariant?.name === variant.name
                                ? 'bg-zain-red border-zain-red text-white'
                                : 'border-zain-brown/30 dark:border-zain-beige/30 text-zain-brown/60 dark:text-zain-beige/60 hover:border-zain-red dark:hover:border-zain-gold hover:text-zain-red dark:hover:text-zain-gold'
                                }`}
                        >
                            {variant.name}
                        </button>
                    ))}
                </div>
            )}

            <AnimatePresence>
                {showPopup && (
                    <motion.div
                        key={popupKey}
                        className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 backdrop-blur-md p-4 md:p-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 5 } }}
                        onClick={() => setShowPopup(false)}
                    >
                        {/* Subtle Cinematic Vignette Overlay */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] pointer-events-none opacity-60" />

                        <motion.div
                            className="relative max-w-[800px] w-full h-[70vh] md:h-[80vh] flex flex-col items-center justify-center"
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 15 }}
                            transition={{
                                type: 'spring',
                                stiffness: 260,
                                damping: 26, // Smooth, no aggressive bouncy jitter
                                mass: 0.8
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Full-Screen Image Container */}
                            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)] group">
                                <img
                                    src={grillChickenImg}
                                    alt="Grill chicken"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                />

                                {/* Gentle dark gradient over the bottom of image so text pops */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                            </div>

                            {/* Cinematic Toaster Notification */}
                            <motion.div
                                className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full py-3 px-8 text-white tracking-wide text-sm font-semibold shadow-2xl flex items-center gap-2 whitespace-nowrap"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.02, duration: 0.4 }}
                            >
                                <span className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse" />
                                Added to cart
                            </motion.div>

                            {/* Cinematic Close Button (Top Right) */}
                            <button
                                onClick={() => setShowPopup(false)}
                                className="absolute top-4 right-4 text-white/70 hover:text-white bg-black/40 hover:bg-black/60 backdrop-blur-md h-10 w-10 flex items-center justify-center rounded-full transition-all duration-200 border border-white/10"
                            >
                                ✕
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const MenuPreview = () => {
    const [activeTab, setActiveTab] = useState('grill');

    return (
        <section id="menu" className="py-20 bg-transparent relative min-h-screen">
            <Cart /> {/* Floating Cart Integration */}

            <div className="container mx-auto px-6">

                <div className="mb-16 text-center md:text-left">
                    <h2 className="text-6xl md:text-[12rem] font-kinetic font-bold text-zain-red/10 dark:text-zain-red dark:opacity-10 leading-none select-none absolute top-10 left-0 w-full text-center md:text-left z-0">
                        YOUR TASTE IS BACK
                    </h2>
                    <h2 className="text-4xl md:text-7xl font-display font-bold text-zain-brown dark:text-zain-beige relative z-10">
                        OUR MENU
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 relative z-10">

                    {/* Category Sidebar */}
                    <div className="lg:w-1/4 overflow-x-auto lg:overflow-visible flex lg:flex-col gap-4 pb-4 lg:pb-0 scrollbar-hide">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveTab(cat.id)}
                                className={`text-xl md:text-3xl font-kinetic font-bold whitespace-nowrap px-6 py-1 md:px-0 md:py-1 text-left transition-all duration-300 ${activeTab === cat.id
                                    ? 'text-zain-red scale-110 md:translate-x-4 pl-4 border-l-4 border-zain-red'
                                    : 'text-zain-brown/30 dark:text-zain-beige/30 hover:text-zain-brown dark:hover:text-zain-beige'
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Menu Items & Visual Display */}
                    <div className="lg:w-3/4 grid md:grid-cols-2 gap-12">

                        {/* Items List */}
                        <div className="space-y-6">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex flex-col gap-6"
                                >
                                    {menuData[activeTab]?.map((item, idx) => (
                                        <MenuItem key={idx} item={item} />
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Dynamic Image Display */}
                        <div className="relative h-[400px] md:h-auto rounded-2xl overflow-hidden hidden md:block sticky top-24">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={activeTab}
                                    src={categories.find(c => c.id === activeTab)?.image}
                                    alt={activeTab}
                                    initial={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0, scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </AnimatePresence>
                            <div className="absolute inset-0 bg-gradient-to-t from-zain-dark to-transparent opacity-80" />
                            <div className="absolute bottom-6 left-6 z-10">
                                <span className="text-zain-gold font-kinetic text-6xl">{activeTab.toUpperCase()}</span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default MenuPreview;
