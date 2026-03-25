import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";
import testimonialsImage from '../assets/mapQr.png';

const Testimonials = () => {
    const writeReviewUrl = "https://g.page/r/CVFqcJBrhiZNEAE/review";
    const openOnMapsUrl =
        "https://www.google.com/maps/place/ZainTea/@25.2598343,55.252683,5999m/data=!3m1!1e3!4m10!1m2!2m1!1szaintea+review!3m6!1s0x3e5f43c9df572c4b:0x4d26866b90706a51!8m2!3d25.2598343!4d55.2907918!15sCg56YWludGVhIHJldmlldyICOAFaCSIHemFpbnRlYZIBBGNhZmXgAQA!16s%2Fg%2F11mlnypxwz?entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D";

    // For real customer review text, we use react-google-reviews which can fetch from Google Places
    // via the Featurable API (recommended) or Places API (requires server-side key).
    // This repo currently uses the Featurable flow via Vite env var.
    const featurableWidgetId = import.meta.env.VITE_FEATURABLE_WIDGET_ID;

    return (
        <section
            id="reviews"
            className="py-28 relative overflow-hidden border-t border-zain-brown/10 dark:border-zain-beige/10"
        >

            <div id="featurable-9e7d07f6-45ec-4803-b43b-6c80ba150b84" data-featurable-async ></div><script src="https://featurable.com/assets/bundle.js" defer charset="UTF-8"></script>

            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-zain-red/10 dark:bg-zain-gold/10 blur-[150px] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(208,0,0,0.05),transparent_60%)] dark:bg-[radial-gradient(circle_at_center,rgba(244,196,48,0.06),transparent_60%)] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <p className="text-xs tracking-[0.35em] uppercase text-zain-red dark:text-zain-gold mb-4">
                        ZainTea Feed
                    </p>
                    <h2 className="text-4xl md:text-7xl font-display font-bold text-zain-brown dark:text-zain-beige">
                        WHAT OUR CUSTOMERS SAY
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-4 relative">
                        <div className="rounded-2xl border border-zain-brown/10 dark:border-zain-beige/10 bg-white/40 dark:bg-zain-brown/10 backdrop-blur-lg p-6 overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-zain-red/60 via-transparent to-zain-red/60 dark:from-zain-gold/60 dark:to-zain-gold/60" />
                            <div className="relative">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="flex items-center gap-1 text-zain-red dark:text-zain-gold">
                                        {Array.from({ length: 5 }).map((_, idx) => (
                                            <Star key={idx} size={16} className="fill-current opacity-80" />
                                        ))}
                                    </div>
                                    <span className="text-sm font-semibold text-zain-brown/70 dark:text-zain-beige/60">
                                        Real visitor feedback
                                    </span>
                                </div>
                                <div className="flex justify-center items-center">
                                    <img src={testimonialsImage} alt="Testimonials" className="w-1/2 h-1/2 object-cover rounded-2xl" />

                                    <div className="flex flex-col gap-2">
                                        <a
                                            href={writeReviewUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center justify-center ms-2 gap-2 p-3 bg-zain-red dark:bg-zain-gold text-white dark:text-black font-semibold tracking-widest rounded-md hover:opacity-90 transition-opacity"
                                        >
                                            Write a review
                                            <ExternalLink size={16} />
                                        </a>

                                        <a
                                            href={openOnMapsUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center justify-center ms-2 gap-2 p-3 border border-zain-red/40 dark:border-zain-gold/40 text-zain-red dark:text-zain-gold font-semibold tracking-widest rounded-md hover:bg-zain-red/10 dark:hover:bg-zain-gold/10 transition-colors"
                                        >
                                            Google Maps
                                            <ExternalLink size={16} />
                                        </a>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-8 ">
                        <div className="relative rounded-2xl overflow-hidden border border-zain-brown/90 dark:border-zain-beige/90 bg-black/10">
                            {/* Futuristic scanline + glow */}
                            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgb(208, 194, 0)_1px,transparent_1px)] bg-[length:6px_6px] opacity-20" />
                            <div className="absolute -bottom-20 -left-24 w-[420px] h-[420px] bg-zain-gold/40 blur-[60px] pointer-events-none" />

                            <div className="relative z-10">
                                {featurableWidgetId ? (
                                    <ReactGoogleReviews
                                        layout="carousel"
                                        featurableId={featurableWidgetId}
                                        theme="dark"
                                        // Hide empty reviews to avoid blank slides if the widget returns them.
                                        hideEmptyReviews
                                    />
                                ) : (
                                    <div className="p-8">
                                        <div className="text-zain-red dark:text-zain-gold font-bold mb-2">
                                            Configure live reviews
                                        </div>
                                        <div className="text-sm text-zain-brown/70 dark:text-zain-beige/70 leading-relaxed">
                                            Set <span className="font-mono">VITE_FEATURABLE_WIDGET_ID</span> in your Vite env
                                            so we can fetch real Google customer reviews (no dummy data).
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
