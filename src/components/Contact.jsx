import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-32 bg-transparent relative overflow-hidden border-t border-zain-beige/10">

            {/* Background Decor */}
            <div className="absolute right-0 top-0 w-1/3 h-full bg-zain-red/5 skew-x-12 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="mb-20">
                    <h2 className="text-8xl md:text-[10rem] font-kinetic font-bold text-zain-beige leading-none mix-blend-difference">
                        CONNECT
                    </h2>
                    <div className="h-2 w-32 bg-zain-red mt-4" />
                </div>

                <div className="grid md:grid-cols-2 gap-20">

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-zain-brown/20 p-10 backdrop-blur-sm border border-zain-beige/10"
                    >
                        <h3 className="text-3xl font-display font-bold text-zain-gold mb-8">SEND A MESSAGE</h3>
                        <form className="space-y-8">
                            <div className="relative group">
                                <input
                                    type="text"
                                    placeholder="NAME"
                                    className="w-full bg-transparent border-b border-zain-beige/20 py-4 text-zain-beige font-sans focus:outline-none focus:border-zain-red transition-colors placeholder:text-zain-beige/20"
                                />
                            </div>
                            <div className="relative group">
                                <input
                                    type="email"
                                    placeholder="EMAIL"
                                    className="w-full bg-transparent border-b border-zain-beige/20 py-4 text-zain-beige font-sans focus:outline-none focus:border-zain-red transition-colors placeholder:text-zain-beige/20"
                                />
                            </div>
                            <div className="relative group">
                                <textarea
                                    rows="4"
                                    placeholder="YOUR MESSAGE"
                                    className="w-full bg-transparent border-b border-zain-beige/20 py-4 text-zain-beige font-sans focus:outline-none focus:border-zain-red transition-colors placeholder:text-zain-beige/20 resize-none"
                                />
                            </div>

                            <button className="group flex items-center gap-4 px-8 py-4 bg-zain-red text-white font-bold tracking-widest hover:bg-white hover:text-zain-red transition-colors">
                                <span>TRANSMIT</span>
                                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>

                    {/* Info Side */}
                    <div className="flex flex-col justify-between space-y-12">
                        <div>
                            <p className="text-xl font-light text-zain-beige/80 leading-relaxed mb-10">
                                Visit our flagship location in Bur Dubai for the full sensory experience.
                                Authentic taste, modern vibe.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-6 group cursor-pointer">
                                    <div className="p-4 border border-zain-red/30 rounded-full group-hover:bg-zain-red group-hover:text-white text-zain-red transition-colors">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-zain-gold font-display font-bold text-xl mb-1">LOCATION</h4>
                                        <p className="text-zain-beige/60">Al Mankhool Road, Bur Dubai<br />United Arab Emirates</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group cursor-pointer">
                                    <div className="p-4 border border-zain-red/30 rounded-full group-hover:bg-zain-red group-hover:text-white text-zain-red transition-colors">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-zain-gold font-display font-bold text-xl mb-1">CALL US</h4>
                                        <p className="text-zain-beige/60 font-mono">+971 50 123 4567</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group cursor-pointer">
                                    <div className="p-4 border border-zain-red/30 rounded-full group-hover:bg-zain-red group-hover:text-white text-zain-red transition-colors">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-zain-gold font-display font-bold text-xl mb-1">EMAIL</h4>
                                        <p className="text-zain-beige/60">hello@zaintea.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder Graphic */}
                        <div className="w-full h-48 bg-zain-brown/10 border border-zain-beige/5 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(208,0,0,0.05)_50%,transparent_75%)] bg-[length:20px_20px]" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-zain-beige/20 font-kinetic text-4xl group-hover:text-zain-red group-hover:scale-110 transition-all">
                                    MAP VIEW
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
