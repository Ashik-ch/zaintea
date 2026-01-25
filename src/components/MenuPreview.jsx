import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import menuBurger from '../assets/menu-burger.png';
import menuClub from '../assets/menu-club.png';
import menuPorota from '../assets/menu-porota.png';
import menuGrill from '../assets/grill-rice.jpg';
import teaImage from '../assets/karak-tea.png'; // Reusing as placeholder for beverages

const categories = [
    { id: 'grill', label: 'GRILL', image: menuGrill }, // Using Porota/Grill image
    { id: 'burgers', label: 'BURGERS', image: menuBurger },
    { id: 'sandwiches', label: 'SANDWICHES', image: menuClub },
    { id: 'club', label: 'CLUB', image: menuClub },
    { id: 'wraps', label: 'WRAPS', image: menuPorota },
    { id: 'porota', label: 'POROTA', image: menuPorota },
    { id: 'charcoal_grill', label: 'CHARCOAL GRILL', image: menuPorota },
    { id: 'rice_noodles', label: 'RICE & NOODLES', image: menuPorota },
    { id: 'beverages', label: 'BEVERAGES', image: teaImage },
    { id: 'juices', label: 'JUICES', image: teaImage },
];

const menuData = {
    grill: [
        { name: 'Grill Chicken (Full)', price: 'AED 30', desc: 'Secret spice blend, slow cooked' },
        { name: 'Grill Chicken (Half)', price: 'AED 19', desc: 'Served with Kubbus, hummus, garlic, frienh fries and Soups' },
        { name: 'Grill Chicken With Rice (Full)', price: 'AED 42', desc: 'Special Rice' },
        { name: 'Grill Chicken With Rice (Half)', price: 'AED 22', desc: 'Special Rice' },
    ],
    burgers: [
        { name: 'Zain Special Burger', price: 'AED 25', desc: 'Double patty, cheese overload' },
        { name: 'Classic Beef', price: 'AED 18', desc: 'Angus beef, fresh lettuce, tomato' },
        { name: "Chicken Burger", price: "AED 12" },
        { name: "Zinger Burger", price: "AED 16" },
        { name: "Veg Burger", price: "AED 13" },
        { name: "Grilled Beef Burger", price: "AED 22" },
        { name: "Grilled Chicken Burger", price: "AED 19" },
        { name: "Zinger Double Burger", price: "AED 24" }
    ],
    starters: [
        { name: "Chicken Lollipop", price: "AED 19/29" },
        { name: "Chicken 65", price: "AED 18/30" }
    ],
    soups: [
        { name: "Hot & Sour Soup Chicken", price: "AED 17" },
        { name: "Hot & Sour Soup Veg", price: "AED 15" },
        { name: "Manchow Soup Chicken", price: "AED 17" },
        { name: "Manchow Soup Veg", price: "AED 15" },
        { name: "Sweet Corn Soup Chicken", price: "AED 17" }
    ],

    salads: [
        { name: "Arabic Salad", price: "AED 16" },
        { name: "Fattoush", price: "AED 16" },
        { name: "Greek Salad", price: "AED 18" }
    ],

    charcoal_grill: [
        { name: "Mix Grill", price: "AED 46/82/140" },
        { name: "Grilled Chicken", price: "AED 23/35" }
    ],

    rice_noodles: [
        { name: "Chicken Fried Rice", price: "AED 25" },
        { name: "Egg Fried Rice", price: "AED 14" },
        { name: "Veg Noodles", price: "AED 15" },
        { name: "Chicken Noodles", price: "AED 16" },
    ],
    wraps: [
        { name: "Zinger Wrap", price: "AED 18" },
        { name: "Shish Tawook Wrap", price: "AED 17" },
        { name: "Tikka Wrap", price: "AED 17" },
        { name: "Vegetable Wrap", price: "AED 17" }
    ],

    snacks: [
        { name: "French Fries", price: "AED 10/15" },
        { name: "Chicken Popcorn", price: "AED 19" },
        { name: "Onion Rings", price: "AED 15/19" }
    ],

    juices: [
        { id: 1, name: "Avocado", price: "AED 08/10/12" },
        { id: 2, name: "Mango", price: "AED 08/10/12" },
        { id: 3, name: "Chikoo", price: "AED 08/10/12" },
        { id: 4, name: "Kiwi", price: "AED 08/10/12" },
        { id: 7, name: "Watermelon", price: "AED 06/08/10" },
        { id: 10, name: "Banana", price: "AED 07/10" },
        { id: 14, name: "Orange", price: "AED 08/10/12" },
        { id: 17, name: "Carrot", price: "AED 08/10/12" },
        { id: 32, name: "Zain Special Juice", price: "AED 13" },
    ],

    desserts: [
        { id: 45, name: "Strawberry Sundae", price: "AED 10" },
        { id: 46, name: "Choco Nut Sundae", price: "AED 10" },
        { id: 47, name: "Falooda", price: "AED 12/14" },
        { id: 52, name: "Fruit Salad", price: "AED 120" },
    ],

    mojitos: [
        { id: 67, name: "Passion Mojito", price: "AED 12" },
        { id: 70, name: "Blue Lagoon Mojito", price: "AED 12" },
        { id: 73, name: "Strawberry Mojito", price: "AED 12" }
    ],
    sandwiches: [
        { id: 147, name: 'Egg Slice Sandwich', price: 'AED 5', desc: 'Fresh egg slices with soft bread' },
        { id: 148, name: 'Chicken Slice Sandwich', price: 'AED 5', desc: 'Chicken slices with classic seasoning' },
        { id: 149, name: 'Hotdog Sandwich', price: 'AED 5', desc: 'Juicy hotdog with sauce' },
        { id: 150, name: 'Veg Slice Sandwich', price: 'AED 6', desc: 'Mixed vegetable slices with light spread' },

        { id: 151, name: 'Chicken Sandwich', price: 'AED 6', desc: 'Signature chicken sandwich' },
        { id: 152, name: 'Francisco Sandwich', price: 'AED 8', desc: 'Special Francisco-style filling' },
        { id: 153, name: 'Vegetable Sandwich', price: 'AED 5', desc: 'Fresh vegetables with mild seasoning' },
        { id: 154, name: 'Egg Sandwich', price: 'AED 5', desc: 'Classic egg sandwich' },
        { id: 155, name: 'Beef Sandwich', price: 'AED 6', desc: 'Tender beef with rich flavor' },
        { id: 156, name: 'Hotdog Sandwich', price: 'AED 5', desc: 'Hotdog with soft bun and sauce' }
    ],

    club: [
        { id: 111, name: 'Zain Special Club', price: 'AED 15', desc: 'House special club sandwich' },
        { id: 112, name: 'Lulu Club', price: 'AED 15', desc: 'Classic club-style sandwich' },
        { id: 113, name: 'Fantasia Club', price: 'AED 16', desc: 'Premium fantasia-style club sandwich' },
        { id: 114, name: 'Kabab Tikka Club', price: 'AED 14', desc: 'Spicy kabab tikka filling' },

        { id: 115, name: 'Zinger Club', price: 'AED 14', desc: 'Crispy zinger chicken club' },
        { id: 116, name: 'Zinger Classic', price: 'AED 12', desc: 'Classic crispy zinger sandwich' },
        { id: 117, name: 'Egg Club', price: 'AED 10', desc: 'Egg-based club sandwich' },
        { id: 118, name: 'Vegetable Club', price: 'AED 12', desc: 'Fresh mixed vegetable club sandwich' },
        { id: 119, name: 'Chicken Club', price: 'AED 12', desc: 'Classic chicken club sandwich' }
    ],

    porota: [
        { id: 122, name: 'Zain Special Poratta', price: 'AED 10', desc: 'Special poratta with signature filling' },
        { id: 123, name: 'Zinger Poratta', price: 'AED 10', desc: 'Crispy zinger wrapped in poratta' },
        { id: 124, name: 'Chicken Fillet Poratta', price: 'AED 10', desc: 'Juicy chicken fillet with soft poratta' },
        { id: 125, name: 'Chicken Nuggets Poratta', price: 'AED 10', desc: 'Crunchy nuggets wrapped in poratta' },
        { id: 126, name: 'Kabab Poratta', price: 'AED 10', desc: 'Spiced kabab with layered poratta' },

        { id: 127, name: 'Egg Poratta', price: 'AED 4', desc: 'Simple egg poratta' },
        { id: 128, name: 'Hotdog Poratta', price: 'AED 5', desc: 'Hotdog wrapped in poratta' },
        { id: 129, name: 'Omelette Poratta', price: 'AED 4', desc: 'Classic omelette poratta' },
        { id: 130, name: 'Veg Poratta', price: 'AED 6', desc: 'Mixed vegetable poratta' },
        { id: 131, name: 'Falafel Poratta', price: 'AED 5', desc: 'Falafel wrap in poratta' },
        { id: 132, name: 'Chicken Chilli Poratta', price: 'AED 5', desc: 'Spicy chicken chilli filling' },
        { id: 133, name: 'Onion Chips Poratta', price: 'AED 4', desc: 'Crispy onion chips inside poratta' },
        { id: 134, name: 'Beef Poratta', price: 'AED 7', desc: 'Tender beef wrapped in poratta' }
    ],

};

const MenuPreview = () => {
    const [activeTab, setActiveTab] = useState('burgers');

    return (
        <section id="menu" className="py-20 bg-transparent relative min-h-screen">
            <div className="container mx-auto px-6">

                <div className="mb-16 text-center md:text-left">
                    <h2 className="text-8xl md:text-[12rem] font-kinetic font-bold text-zain-red opacity-10 leading-none select-none absolute top-10 left-0 w-full text-center md:text-left z-0">
                        CRAVINGS
                    </h2>
                    <h2 className="text-5xl md:text-7xl font-display font-bold text-zain-beige relative z-10">
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
                                className={`text-xl md:text-3xl font-kinetic font-bold whitespace-nowrap px-6 py-2 md:px-0 md:py-2 text-left transition-all duration-300 ${activeTab === cat.id
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
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.05 }}
                                            className="group border-b border-zain-beige/10 pb-4 hover:border-zain-red transition-colors cursor-pointer"
                                        >
                                            <div className="flex justify-between items-baseline mb-1">
                                                <h3 className="text-2xl font-display font-bold text-zain-beige group-hover:text-zain-red transition-colors">{item.name}</h3>
                                                <span className="text-xl font-bold text-zain-gold">{item.price}</span>
                                            </div>
                                            <p className="text-sm text-zain-beige/50 font-sans">{item.desc}</p>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Dynamic Image Display */}
                        <div className="relative h-[400px] md:h-auto rounded-2xl overflow-hidden hidden md:block">
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
