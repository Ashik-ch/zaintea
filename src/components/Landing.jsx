import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import eidZain1 from "../assets/1.jpg";
import eidZain2 from "../assets/2.jpg";

// Add all your images here
const images = [eidZain1, eidZain2];

export default function Landing() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Slower transition for a more relaxed TV viewing experience (8 seconds)
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 8000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={index}
          src={images[index]}
          alt="Display"
          // Ken Burns Effect: Starts slightly zoomed in and slowly zooms out
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ 
            opacity: { duration: 2, ease: "easeInOut" },
            scale: { duration: 10, ease: "linear" } // Slow continuous zoom
          }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Subtle vignette to make it look more professional on TV */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20" />
    </div>
  );
}