import React from 'react';
import pkg from '../../package.json';

const Footer = () => {
    const socials = [
        { label: "INSTAGRAM", href: "https://www.instagram.com/zaintea_cafe", },
        { label: "FACEBOOK", href: "https://www.facebook.com/zaintea_cafe", },
        { label: "WHATSAPP", href: "https://wa.me/971501229617?text=Hi%20Zaintea%2C%20I%20want%20to%20place%20an%20order", },
    ];
    return (
        <footer className="bg-transparent text-zain-brown dark:text-zain-beige py-20 border-t border-zain-red/20 transition-colors duration-500">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">

                <div className="text-center md:text-left">
                    <h2 className="text-[4rem] md:text-[5rem] font-kinetic font-bold leading-none text-zain-red dark:text-zain-gold">
                        ZAINTEA
                    </h2>
                    <p className="font-sans text-sm tracking-widest opacity-50 pl-2">
                        EST. 2022 • BUR DUBAI
                    </p>
                </div>


                <div className="flex gap-8">
                    {socials.map(({ label, href }) => (
                        <a key={label} href={href} target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-bold font-display tracking-widest border-b border-transparent pb-1 transition-all
                       hover:border-zain-red dark:hover:border-zain-gold hover:text-zain-red dark:hover:text-zain-gold"
                        >{label}                        </a>
                    ))}
                </div>

            </div>
            <div className="mt-16 border-t border-zain-brown/10 dark:border-white/10 pt-8 pb-10 text-center">
                <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-6">
                    {/* Copyright Section */}
                    <p className="text-xs font-sans tracking-[0.2em] uppercase opacity-40">
                        V{pkg.version} © {new Date().getFullYear()} Zaintea. All rights reserved.
                    </p>

                    {/* Divider (Visible only on desktop) */}
                    <span className="hidden h-4 w-px bg-white/20 md:block"></span>

                    {/* Development Credit Section */}
                    <p className="text-xs font-sans tracking-[0.2em] uppercase opacity-40">
                        Developed by{" "}
                        <a
                            href="https://www.bytrix.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zain-red transition-all duration-300 hover:opacity-100 hover:underline decoration-zain-red underline-offset-4"
                        >
                            Ashik CH | BytrixHub
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
