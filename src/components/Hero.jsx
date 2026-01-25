import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroChicken from '../assets/chicken.mp4';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative h-[120vh] w-full bg-transparent overflow-hidden flex flex-col items-center pt-32">

            {/* Red Glow Gradient */}
            <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-zain-red/10 blur-[120px] rounded-full pointer-events-none" />

            {/* Background Kinetic Text - Marquee style or fixed huge text */}
            <div className="absolute inset-0 z-0 flex flex-col justify-center select-none pointer-events-none opacity-20">
                <motion.div style={{ x: y1 }} className="whitespace-nowrap">
                    <h1 className="text-[20vw] font-kinetic font-bold text-transparent stroke-text leading-none text-zain-red/10">
                        GRILL GRILL CHICKEN
                    </h1>
                </motion.div>
                <motion.div style={{ x: y2 }} className="whitespace-nowrap">
                    <h1 className="text-[20vw] font-kinetic font-bold text-transparent stroke-text leading-none text-zain-gold/20 ml-[-50vw]">
                        AUTHENTIC TASTE
                    </h1>
                </motion.div>
            </div>

            {/* Main Content Layer */}
            <div className="relative z-10 container mx-auto px-6 h-full flex flex-col items-center justify-start mt-10">

                {/* Central visual composition */}
                <div className="relative w-full max-w-5xl aspect-square md:aspect-video flex items-center justify-center">

                    {/* Big Center Text */}
                    <motion.h1
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                        className="absolute z-20 text-8xl md:text-[12rem] font-kinetic font-bold text-zain-beige mix-blend-difference text-center leading-[0.85]"
                    >
                        ZAIN<br />TEA
                    </motion.h1>

                    {/* Chicken Image Interacting with Text */}
                    <motion.div
                        style={{ scale, opacity }}
                        className="relative z-10 w-[80%] md:w-[60%]"
                    >
                        <motion.video
                            initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
                            animate={{ scale: 1, rotate: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            src={heroChicken}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="rounded-lg w-full object-contain drop-shadow-[0_0_50px_rgba(255,215,0,0.2)]"
                        />

                        {/* Steam/Smoke particles could go here */}
                    </motion.div>

                    {/* Floating details */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                        className="absolute right-0 md:right-10 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-4 text-right"
                    >
                        <div className="flex flex-col">
                            <span className="text-zain-gold font-display text-xl tracking-widest">EST. 2024</span>
                            <span className="text-zain-beige font-sans text-sm opacity-60">DUBAI, UAE</span>
                        </div>
                        <div className="w-1 h-32 bg-zain-gold/30 self-end"></div>
                    </motion.div>
                </div>

                {/* Action Button */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="mt-10 md:mt-0 z-40"
                >
                    <button className="group relative px-12 py-6 bg-transparent border border-zain-gold overflow-hidden transition-all hover:border-zain-gold">
                        <div className="absolute inset-0 w-0 bg-zain-gold transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
                        <span className="relative text-zain-gold font-display text-2xl tracking-[0.2em] font-bold group-hover:text-white transition-colors">
                            ORDER NOW
                        </span>
                    </button>
                </motion.div>

            </div>

            <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 2px currentColor;
        }
      `}</style>
        </section>
    );
};

export default Hero;
