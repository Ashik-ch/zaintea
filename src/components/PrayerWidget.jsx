import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Clock } from "lucide-react";

const PrayerWidget = () => {
    const [nextPrayer, setNextPrayer] = useState(null);
    const [countdown, setCountdown] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPrayerTimes = async () => {
            try {
                const res = await axios.get(
                    "https://api.aladhan.com/v1/timingsByCity?city=Dubai&country=United%20Arab%20Emirates&method=8"
                );
                calculateNextPrayer(res.data.data.timings);
            } catch (err) {
                console.error("Error fetching prayer times:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchPrayerTimes();

        // Refresh every minute to keep countdown accurate even if interval drifts
        const refreshInterval = setInterval(fetchPrayerTimes, 60000);
        return () => clearInterval(refreshInterval);
    }, []);

    const calculateNextPrayer = (times) => {
        const now = new Date();
        const prayerKeys = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

        let foundNext = false;
        let nextPrayerName = "Fajr";
        let nextPrayerTimeStr = times["Fajr"]; // Default to next day fajr if all passed

        for (let key of prayerKeys) {
            const [h, m] = times[key].split(":");
            const prayerTime = new Date();
            prayerTime.setHours(parseInt(h), parseInt(m), 0);

            if (prayerTime > now) {
                nextPrayerName = key;
                nextPrayerTimeStr = times[key];
                foundNext = true;
                break;
            }
        }

        // If we didn't find a next prayer for *today*, it means it's Fajr tomorrow
        // But for simplicity in this widget we'll just show Fajr and let logic handle negative diff until refresh
        // Or strictly we should look at tomorrow's Fajr, but standard API usually returns it.
        // Let's stick to the simple logic found in existing PrayerTimes.jsx for consistency

        setNextPrayer({ name: nextPrayerName, time: nextPrayerTimeStr });

        // Start detailed countdown
        // startCountdown removed, using useEffect instead
    };

    // Refined countdown effect
    useEffect(() => {
        if (!nextPrayer) return;

        const interval = setInterval(() => {
            const now = new Date();
            const [h, m] = nextPrayer.time.split(":");
            const target = new Date();
            target.setHours(parseInt(h), parseInt(m), 0);

            // Handle next day wraps implicitly or explicitly
            if (target < now) {
                target.setDate(target.getDate() + 1);
            }

            const diff = target - now;
            if (diff > 0) {
                const hours = Math.floor(diff / (1000 * 60 * 60));
                const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const secs = Math.floor((diff % (1000 * 60)) / 1000);
                setCountdown(`${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`);
            } else {
                setCountdown("Now");
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [nextPrayer]);


    if (loading) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute top-28 right-6 md:right-12 z-30 hidden md:flex items-center gap-3
                       bg-white/10 backdrop-blur-md border border-white/20 
                       px-5 py-3 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
                       hover:bg-white/15 transition-all duration-300"
        >
            <div className="bg-yellow-400/20 p-2 rounded-full">
                <Moon className="w-5 h-5 text-yellow-300 fill-yellow-300" />
            </div>

            <div className="flex flex-col">
                <span className="text-yellow-200 text-xs uppercase tracking-widest font-medium">
                    Next Prayer: {nextPrayer?.name}
                </span>
                <span className="text-white font-mono text-lg font-bold tracking-wider leading-none mt-1">
                    {countdown}
                </span>
            </div>

            {/* Pulsing Dot */}
            <div className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
            </div>
        </motion.div>
    );
};

export default PrayerWidget;
