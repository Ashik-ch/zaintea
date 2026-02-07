import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { categories, menuData } from '../data/menuData';
import { useCart } from '../context/CartContext';
import { Plus, Minus, ShoppingBag } from 'lucide-react';
import Cart from './Cart';

const MenuItem = ({ item }) => {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [selectedVariant, setSelectedVariant] = useState(item.variants ? item.variants[0] : null);
    const [isAdded, setIsAdded] = useState(false);

    const handleIncrement = () => setQuantity(q => q + 1);
    const handleDecrement = () => setQuantity(q => Math.max(1, q - 1));

    const handleAdd = () => {
        addToCart(item, quantity, selectedVariant);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
        setQuantity(1); // Reset quantity after adding
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="group border-b border-zain-beige/10 pb-6" >

            <div className="flex items-center flex-wrap gap-4">
                <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-display font-bold text-zain-beige truncate">
                        {item.name}
                    </h3>
                    <p className="text-[11px] text-zain-beige/50 truncate">
                        {item.desc}
                    </p>
                </div>

                {/* PRICE */}
                <span className="text-sm font-bold text-zain-gold whitespace-nowrap">
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
                            : "bg-zain-gold text-black hover:bg-white"
                        }`}
                >
                    <ShoppingBag size={14} />
                    {isAdded ? "ADDED" : "ADD"}
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
                                : 'border-zain-beige/30 text-zain-beige/60 hover:border-zain-gold hover:text-zain-gold'
                                }`}
                        >
                            {variant.name}
                        </button>
                    ))}
                </div>
            )}
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
                    <h2 className="text-6xl md:text-[12rem] font-kinetic font-bold text-zain-red opacity-10 leading-none select-none absolute top-10 left-0 w-full text-center md:text-left z-0">
                        YOUR TASTE IS BACK
                    </h2>
                    <h2 className="text-4xl md:text-7xl font-display font-bold text-zain-beige relative z-10">
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
                                    : 'text-zain-beige/30 hover:text-zain-beige'
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
