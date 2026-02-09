import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../assets/about-interior.png';

const About = () => {
    return (
        <section className="py-32 bg-transparent relative overflow-hidden text-zain-brown dark:text-zain-beige">
            <div className="container mx-auto px-6 relative z-10">

                {/* Large Typographic Header */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-5xl md:text-[10rem] font-display font-bold text-zain-red/10 dark:text-zain-gold dark:opacity-20 leading-none select-none absolute -top-10 left-0">
                        STORY
                    </h2>
                    <h2 className="text-4xl md:text-8xl font-kinetic font-bold relative z-10">
                        WHERE FLAVOR <br />
                        <span className="text-transparent stroke-text-dark dark:stroke-text-light opacity-50">MEETS TASTE</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-20 items-end">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <p className="text-2xl font-light leading-relaxed border-l-2 border-zain-red dark:border-zain-gold pl-6">
                            Zain Tea isn't just a cafe. It's a culinary checkpoint in Bur Dubai.
                            We've reimagined the grill chicken experience for the modern palate.
                        </p>
                        <p className="text-zain-brown/70 dark:text-zain-beige/60 text-lg">
                            Precision grilling. Curated brewing. A vibe that sits somewhere between
                            nostalgia and tomorrow.
                        </p>

                        <div className="flex gap-12 pt-10">
                            <div>
                                <h3 className="text-5xl font-display font-bold text-zain-red dark:text-zain-gold">2022</h3>
                                <span className="text-sm tracking-widest uppercase opacity-60">Since</span>
                            </div>
                            <div>
                                <h3 className="text-5xl font-display font-bold text-zain-red dark:text-zain-gold">24/7</h3>
                                <span className="text-sm tracking-widest uppercase opacity-60">Hours</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image with Glitch/Offset Effect */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-zain-gold translate-x-4 translate-y-4 rounded-none z-0"></div>
                        <img
                            src={aboutImage}
                            alt="Futuristic Interior"
                            className="relative z-10 w-full grayscale hover:grayscale-0 transition-all duration-700 object-cover h-[500px]"
                        />
                    </motion.div>

                </div>
            </div>

            <style jsx>{`
        .stroke-text-light {
          -webkit-text-stroke: 1px currentColor;
        }
        .stroke-text-dark {
           -webkit-text-stroke: 1px #2A1A10;
        }
      `}</style>
        </section>
    );
};

export default About;
