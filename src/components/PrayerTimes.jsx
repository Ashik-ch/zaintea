import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import ramadanBg from "../assets/ramadan2.jpg"; // adjust path relative to this component

export default function PrayerTimes() {
  const [prayerTimes, setPrayerTimes] = useState(null);
  const [nextPrayer, setNextPrayer] = useState("");
  const [countdown, setCountdown] = useState("");
  const athanPlayedRef = useRef(false); // prevent multiple plays

  const athanAudio = useRef(new Audio("/azan.mp3"));

  useEffect(() => {
    fetchPrayerTimes();
  }, []);

  useEffect(() => {
    if (prayerTimes) {
      const interval = setInterval(() => {
        checkNextPrayer(prayerTimes);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [prayerTimes]);

  const fetchPrayerTimes = async () => {
    try {
      const res = await axios.get(
        "https://api.aladhan.com/v1/timingsByCity?city=Dubai&country=United%20Arab%20Emirates&method=8"
      );
      setPrayerTimes(res.data.data.timings);
      calculateNextPrayer(res.data.data.timings);
    } catch (err) {
      console.error(err);
    }
  };

  const calculateNextPrayer = (times) => {
    const now = new Date();
    const keys = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];
    let next = "";

    for (let key of keys) {
      const [h, m] = times[key].split(":");
      const time = new Date();
      time.setHours(parseInt(h), parseInt(m), 0);

      if (time > now) {
        next = key;
        break;
      }
    }

    if (!next) next = "Fajr";
    setNextPrayer(next);
    startCountdown(times[next]);
  };

  const startCountdown = (timeStr) => {
    const interval = setInterval(() => {
      const now = new Date();
      const [h, m] = timeStr.split(":");
      const target = new Date();
      target.setHours(parseInt(h), parseInt(m), 0);

      const diff = target - now;
      if (diff > 0) {
        const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, "0");
        const mins = String(Math.floor((diff % (1000 * 60 * 60) / (1000 * 60)))).padStart(2, "0");
        const secs = String(Math.floor((diff % (1000 * 60) / 1000))).padStart(2, "0");
        setCountdown(`${hours}:${mins}:${secs}`);
      } else {
        clearInterval(interval);
        fetchPrayerTimes(); // refresh next day
      }
    }, 1000);
  };

  const checkNextPrayer = (times) => {
    const now = new Date();
    const [h, m] = times["Maghrib"].split(":");
    if (now.getHours() === parseInt(h) && now.getMinutes() === parseInt(m) && !athanPlayedRef.current) {
      athanAudio.current.play();
      athanPlayedRef.current = true;

      // reset after 1 minute to allow next day play
      setTimeout(() => (athanPlayedRef.current = false), 60 * 1000);
    }
  };

  return (
    <section className="relative min-h-screen bg-cover bg-center text-white p-8 overflow-hidden font-sans" style={{ backgroundImage: `url(${ramadanBg})` }}>

      {/* Glowing Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-yellow-500/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-[200px] animate-pulse-slower"></div>
        <div className="absolute top-0 right-0 w-60 h-60 bg-amber-300/10 rounded-full blur-[100px] animate-pulse-slow"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-12 space-y-4">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent 
                   text-white drop-shadow-lg"
        >
          🕌 Prayer Times – Bur Dubai
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl font-light tracking-wide text-zain-beige/80 drop-shadow-md"
        >
          رمضان كريم ✨ Ramadan Kareem
        </motion.p>

        <motion.div
          className="mt-6 text-lg md:text-xl p-4 bg-black/40 rounded-3xl inline-block backdrop-blur-md border border-yellow-400/20 shadow-[0_0_40px_rgba(255,215,0,0.2)]"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Next: <span className="font-semibold text-yellow-400">{nextPrayer}</span> – {countdown}
        </motion.div>
      </div>

      {/* Prayer Times Grid */}
      {prayerTimes && (
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"].map((p) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * Math.random() }}
              className={`p-6 rounded-3xl text-center shadow-lg
              ${nextPrayer === p
                  ? "bg-gradient-to-br from-yellow-400 via-amber-300 to-yellow-500 text-red-700 scale-105 border-2 border-yellow-300 shadow-[0_0_60px_rgba(255,215,0,0.4)]"
                  : "bg-black/30 border border-yellow-500/10 shadow-[0_0_20px_rgba(255,215,0,0.1)]"}
            `}
            >
              <p className="text-xl font-bold mb-2">{p}</p>
              <p className="text-3xl md:text-4xl font-extrabold text-red-700">{prayerTimes[p]}</p>
            </motion.div>
          ))}
        </div>
      )}

      {/* Floating Particles */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-yellow-400 rounded-full opacity-60"
          initial={{ y: "100vh", x: Math.random() * window.innerWidth }}
          animate={{ y: "-10vh" }}
          transition={{
            duration: 12 + Math.random() * 8,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

    </section>
  );
}
