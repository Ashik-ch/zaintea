import React from 'react';
import { motion } from 'framer-motion';
import heroChicken from '../assets/hero-chicken.png';
import aboutImage from '../assets/about-interior.png';
import teaImage from '../assets/karak-tea.png';

const visuals = [
    { src: teaImage, title: 'BREW', size: 'col-span-1 row-span-1' },
    { src: heroChicken, title: 'FIRE', size: 'col-span-1 row-span-2' },
    { src: aboutImage, title: 'SPACE', size: 'col-span-2 row-span-1' },
];

const Gallery = () => {
    return (
        <section className="py-32 bg-transparent relative overflow-hidden">

            {/* Moving Background Text */}
            <div className="absolute top-0 left-0 w-full overflow-hidden opacity-5 pointer-events-none">
                <h1 className="text-[15rem] whitespace-nowrap font-kinetic font-bold text-zain-beige">
                    VISUALS VISUALS VISUALS
                </h1>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px]">
                    {visuals.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`relative group overflow-hidden border border-zain-beige/10 hover:border-zain-gold transition-colors ${item.size}`}
                        >
                            <img
                                src={item.src}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-colors duration-500" />

                            <div className="absolute bottom-4 left-4 z-20 overflow-hidden">
                                <h3 className="text-4xl font-display font-bold text-zain-gold translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                                    {item.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                    {/* Filler for grid */}
                    <div className="hidden md:block col-span-1 row-span-1 bg-zain-gold flex items-center justify-center group overflow-hidden cursor-pointer">
                        <span className="text-black font-kinetic text-5xl font-bold group-hover:scale-125 transition-transform">
                            MORE
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
