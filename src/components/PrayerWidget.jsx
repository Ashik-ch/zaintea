import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Moon } from "lucide-react";

const PRAYER_KEYS = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

const PrayerWidget = () => {
    const [timings, setTimings] = useState(null);
    const [nextPrayer, setNextPrayer] = useState(null);
    const [countdown, setCountdown] = useState("");
    const intervalRef = useRef(null);

    // -----------------------------------
    // FETCH PRAYER TIMES (ONCE)
    // -----------------------------------
    useEffect(() => {
        const fetchTimings = async () => {
            try {
                const res = await axios.get(
                    "https://api.aladhan.com/v1/timingsByCity",
                    {
                        params: {
                            city: "Dubai",
                            country: "United Arab Emirates",
                            method: 4,
                        },
                    }
                );

                const t = res.data.data.timings;

                const adjusted = {
                    Fajr: adjustTime(t.Fajr, 1),
                    Dhuhr: adjustTime(t.Dhuhr, 2),
                    Asr: adjustTime(t.Asr, 2),
                    Maghrib: adjustTime(t.Maghrib, 3),
                    Isha: adjustTime(t.Isha, -43),
                };

                setTimings(adjusted);
            } catch (err) {
                console.error("Error fetching prayer times:", err);
            }
        };

        fetchTimings();
    }, []);

    // -----------------------------------
    // MAIN TIMER LOGIC
    // -----------------------------------
    const adjustTime = (timeString, minutesToAdd) => {
        const [h, m] = timeString.split(":").map(Number);

        const date = new Date();
        date.setHours(h, m + minutesToAdd, 0);

        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");

        return `${hours}:${minutes}`;
    };
    useEffect(() => {
        if (!timings) return;

        const updateTimer = () => {
            const now = new Date();
            let upcoming = null;
            let upcomingTime = null;

            for (let key of PRAYER_KEYS) {
                console.log("timings", timings);

                const [h, m] = timings[key].split(":");
                const prayerDate = new Date();
                prayerDate.setHours(parseInt(h), parseInt(m), 0);

                if (prayerDate > now) {
                    upcoming = key;
                    upcomingTime = timings[key];
                    break;
                }
            }

            // If all passed → Fajr tomorrow
            if (!upcoming) {
                upcoming = "Fajr";
                upcomingTime = timings["Fajr"];
            }

            setNextPrayer({ name: upcoming, time: upcomingTime });

            // Countdown calculation
            const [h, m] = upcomingTime.split(":");
            const target = new Date();
            target.setHours(parseInt(h), parseInt(m), 0);

            if (target < now) target.setDate(target.getDate() + 1);

            const diff = target - now;

            const hours = String(
                Math.floor(diff / (1000 * 60 * 60))
            ).padStart(2, "0");
            const mins = String(
                Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
            ).padStart(2, "0");
            const secs = String(
                Math.floor((diff % (1000 * 60)) / 1000)
            ).padStart(2, "0");

            setCountdown(`${hours}:${mins}:${secs}`);
        };

        updateTimer();
        intervalRef.current = setInterval(updateTimer, 1000);

        return () => clearInterval(intervalRef.current);
    }, [timings]);

    if (!nextPrayer) return null;

    // -----------------------------------
    // UI
    // -----------------------------------
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute top-28 right-6 md:right-12 z-40 hidden md:flex items-center gap-4
                 px-6 py-4 rounded-3xl
                 bg-white/10 backdrop-blur-xl
                 border border-white/20
                 shadow-[0_20px_60px_rgba(0,0,0,0.4)]
                 hover:scale-[1.03] transition-all duration-500"
        >
            {/* Glow Ring */}
            <div className="relative">
                <div className="absolute inset-0 rounded-full bg-yellow-400 blur-lg opacity-30"></div>
                <div className="relative bg-yellow-400/20 p-3 rounded-full border border-yellow-300/30">
                    <Moon className="w-6 h-6 text-yellow-300" />
                </div>
            </div>

            {/* Text Content */}
            <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-yellow-200/80 font-semibold">
                    Next Prayer: {nextPrayer.name}
                </span>

                <span className="text-xl font-bold text-white tracking-wide mt-1">
                    {nextPrayer.time}
                </span>

                <span className="font-mono text-lg text-yellow-300 mt-1 border border-white/20 p-1  rounded-md text-center">
                    {countdown}
                </span>

            </div>

            {/* Pulsing Status Dot */}
            <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-70"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
            </div>
        </motion.div>
    );
};

export default PrayerWidget;
