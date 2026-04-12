import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";
import testimonialsImage from '../assets/mapQr.png';

const Testimonials = () => {
    const writeReviewUrl = "https://g.page/r/CVFqcJBrhiZNEAE/review";
    const openOnMapsUrl = "https://www.google.com/maps/place/ZainTea/@25.2598343,55.252683,5999m/data=!3m1!1e3!4m10!1m2!2m1!1szaintea+review!3m6!1s0x3e5f43c9df572c4b:0x4d26866b90706a51!8m2!3d25.2598343!4d55.2907918!15sCg56YWludGVhIHJldmlldyICOAFaCSIHemFpbnRlYZIBBGNhZmXgAQA!16s%2Fg%2F11mlnypxwz?entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D";
    const featurableWidgetId = import.meta.env.VITE_FEATURABLE_WIDGET_ID;

    return (
        <section
            id="reviews"
            className="py-16 md:py-28 relative overflow-hidden border-t border-zain-brown/10 dark:border-zain-beige/10"
        >
            {/* Ambient Backgrounds - Scaled down for mobile */}
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[300px] md:w-[700px] h-[300px] md:h-[700px] bg-zain-red/10 dark:bg-zain-gold/10 blur-[80px] md:blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-8 md:mb-12 text-center lg:text-left"
                >
                    <p className="text-[10px] md:text-xs tracking-[0.35em] uppercase text-zain-red dark:text-zain-gold mb-3 md:mb-4">
                        ZainTea Feed
                    </p>
                    <h2 className="text-3xl md:text-7xl font-display font-bold text-zain-brown dark:text-zain-beige leading-tight">
                        WHAT OUR <br className="block md:hidden" /> CUSTOMERS SAY
                    </h2>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-start w-full">
                    {/* Sidebar: QR & CTA */}
                    <div className="w-full lg:w-1/3 xl:w-1/4 shrink-0">
                        <div className="rounded-2xl border border-zain-brown/10 dark:border-zain-beige/10 bg-white/40 dark:bg-zain-brown/10 backdrop-blur-lg p-5 md:p-6 lg:p-8 overflow-hidden relative shadow-lg">
                            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-zain-red/80 via-transparent to-zain-red/80 dark:from-zain-gold/80 dark:to-zain-gold/80" />

                            <div className="flex flex-col gap-5 md:gap-6">
                                <div className="flex flex-col sm:flex-row lg:flex-col items-center sm:items-start lg:items-center justify-between gap-3">
                                    <div className="text-sm md:text-base font-semibold text-zain-brown/80 dark:text-zain-beige/80 text-center sm:text-left lg:text-center leading-relaxed">
                                        Drop us a quick review — it means a lot 🙌
                                    </div>
                                    <div className="flex items-center gap-1 text-zain-red dark:text-zain-gold drop-shadow-sm">
                                        {[...Array(5)].map((_, idx) => (
                                            <Star key={idx} size={16} className="fill-current opacity-90" />
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-5 sm:gap-6 w-full">
                                    {/* Responsive Image sizing */}
                                    <div className="w-40 h-40 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-full lg:max-w-[220px] lg:h-auto aspect-square shrink-0 rounded-xl overflow-hidden shadow-md border border-white/10 dark:border-zain-beige/10 bg-white dark:bg-white/5 mx-auto">
                                        <img
                                            src={testimonialsImage}
                                            alt="Scan to review"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-3 w-full sm:flex-1 lg:flex-none">
                                        <a
                                            href={writeReviewUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex flex-1 items-center justify-center gap-2 py-3.5 px-4 bg-zain-red dark:bg-zain-gold text-white dark:text-black text-[13px] md:text-sm font-bold tracking-widest rounded-xl hover:opacity-90 hover:scale-[1.02] transition-all duration-300 active:scale-95 shadow-md flex-wrap text-center"
                                        >
                                            <span className="whitespace-nowrap">WRITE REVIEW</span>
                                            <ExternalLink size={16} className="shrink-0" />
                                        </a>

                                        <a
                                            href={openOnMapsUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex flex-1 items-center justify-center gap-2 py-3.5 px-4 border-2 border-zain-red/40 dark:border-zain-gold/40 text-zain-red dark:text-zain-gold text-[13px] md:text-sm font-bold tracking-widest rounded-xl hover:bg-zain-red/5 dark:hover:bg-zain-gold/10 hover:border-zain-red/60 dark:hover:border-zain-gold/60 hover:scale-[1.02] transition-all duration-300 active:scale-95 flex-wrap text-center"
                                        >
                                            <span className="whitespace-nowrap">VIEW MAPS</span>
                                            <ExternalLink size={16} className="shrink-0" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content: Reviews Carousel */}
                    <div className="lg:col-span-8 relative w-full">
                        <div className="absolute -inset-4 bg-gradient-to-br from-zain-gold/10 via-transparent to-zain-red/10 blur-2xl opacity-50" />

                        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl">
                            {/* Grid Pattern */}
                            <div
                                className="absolute inset-0 opacity-[0.05]"
                                style={{
                                    backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)`,
                                    backgroundSize: "20px 20px",
                                }}
                            />

                            <div className="relative z-10 p-4 md:p-10">
                                {featurableWidgetId ? (
                                    <ReactGoogleReviews
                                        layout="carousel"
                                        featurableId={featurableWidgetId}
                                        theme="dark"
                                        hideEmptyReviews
                                    />
                                ) : (
                                    <div className="flex flex-col items-center text-center py-12 md:py-16">
                                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center mb-6 animate-spin-slow">
                                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-zain-gold" />
                                        </div>
                                        <h4 className="text-zain-gold font-mono text-sm tracking-widest uppercase mb-3">
                                            CONFIG REQUIRED
                                        </h4>
                                        <p className="text-[10px] text-white/50 max-w-[200px] md:max-w-xs leading-relaxed">
                                            Initialize <span className="font-mono text-white/80">VITE_FEATURABLE_WIDGET_ID</span>
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                    @keyframes sweep {
                        0% { transform: translateX(-100%); }
                        100% { transform: translateX(100%); }
                    }
                    .animate-spin-slow {
                        animation: spin 10s linear infinite;
                    }
                `
            }} />
        </section>
    );
};

export default Testimonials;