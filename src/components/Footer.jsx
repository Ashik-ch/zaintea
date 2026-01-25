import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-transparent text-zain-beige py-20 border-t border-zain-red/20">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">

                <div className="text-center md:text-left">
                    <h2 className="text-[5rem] md:text-[8rem] font-kinetic font-bold leading-none text-zain-gold">
                        ZAIN
                    </h2>
                    <p className="font-sans text-sm tracking-widest opacity-50 pl-2">
                        EST. 2024 • BUR DUBAI
                    </p>
                </div>

                <div className="flex gap-8">
                    {['INSTAGRAM', 'FACEBOOK', 'WHATSAPP'].map(social => (
                        <a key={social} href="#" className="text-sm font-bold font-display tracking-widest border-b border-transparent hover:border-zain-gold hover:text-zain-gold transition-all pb-1">
                            {social}
                        </a>
                    ))}
                </div>

            </div>
        </footer>
    );
};

export default Footer;
