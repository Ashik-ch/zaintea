import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { MoveDown } from "lucide-react";

import bgVideo from "../assets/gril chicken.mp4";

gsap.registerPlugin(ScrollTrigger);

export default function RotisserieExperience() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    // 1. Smooth Scroll (Lenis)
    const lenis = new Lenis({
      duration: 1.5,
      smooth: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      // 2. 🎬 VIDEO SCROLL CONTROL (PLAY + REVERSE)
      const video = videoRef.current;

      if (video) {
        video.pause();
        video.currentTime = 0;

        const onLoaded = () => {
          if (video.dataset.scrollTriggered) return;
          video.dataset.scrollTriggered = "true";

          const duration = video.duration || 10;

          gsap.to(video, {
            currentTime: duration,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom bottom",
              scrub: 1.5, // smooth cinematic feel
            },
          });
        };

        // Check if metadata is already loaded (React often mounts after metadata is ready)
        if (video.readyState >= 1) {
          onLoaded();
        } else {
          video.addEventListener("loadedmetadata", onLoaded);
        }
      }

      // 3. Parallax background
      gsap.to(".parallax-bg", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      // 4. Pin machine container
      ScrollTrigger.create({
        trigger: ".machine-container",
        start: "top top",
        endTrigger: ".final-section",
        end: "center center",
        pin: true,
        pinSpacing: false,
      });

      // 5. Machine intro
      gsap.from(".machine", {
        scale: 1.5,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.5,
      });

      // 6. Chicken rotation
      gsap.to(".chicken-group", {
        rotateX: -1440,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      // Transition from Raw to Roasted (crossfade)
      gsap.fromTo(
        ".chicken-raw",
        { opacity: 1 },
        {
          opacity: 0,
          scrollTrigger: {
            trigger: ".marinate-section",
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".chicken-roasted",
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".marinate-section",
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );

      // 8. Heat glow
      gsap.to(".heat-glow", {
        opacity: 0.8,
        scale: 1.2,
        scrollTrigger: {
          trigger: ".roasting-section",
          start: "top bottom",
          end: "bottom center",
          scrub: true,
        },
      });

      // 9. Text animations
      const sections = gsap.utils.toArray(".text-section");

      sections.forEach((sec) => {
        gsap.fromTo(
          sec.querySelector(".content-box"),
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sec,
              start: "top 70%",
              end: "center center",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => {
      lenis.destroy();
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-black text-white overflow-hidden"
    >
      {/* 🎬 BACKGROUND */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={bgVideo}
          muted
          playsInline
          preload="auto"
        />

        <div className="parallax-bg absolute inset-0 w-full h-[130%] bg-[url('/images/smoke-texture.png')] bg-cover bg-center opacity-30 mix-blend-screen scale-110" />

        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,black_100%)] opacity-80" />
      </div>

      {/* 2. Pinned Rotisserie Machine */}
      <div className="machine-container absolute top-0 left-0 w-full h-screen z-10 flex items-center justify-center pointer-events-none">
        <div className="machine relative w-full max-w-[1000px] h-[500px] flex items-center justify-center -mt-20 md:mt-0">


        </div>
      </div>

      {/* 3. Scrolling Content Sections */}
      <div className="relative z-20 flex flex-col w-full pointer-events-none">

        {/* HERO SECTION */}
        <section className="text-section h-screen w-full flex flex-col items-center justify-center px-4">
          <div className="content-box flex flex-col items-center mt-64 md:mt-96">
            <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 drop-shadow-2xl text-center leading-none">
              The Art of <br />
              <span className="text-orange-500 from-orange-400 to-red-600 bg-gradient-to-br">
                Roasting
              </span>
            </h1>
            <p className="mt-8 text-lg sm:text-2xl text-neutral-400 tracking-widest uppercase flex items-center gap-2">
              Scroll down <MoveDown className="animate-bounce" size={20} />
            </p>
          </div>
        </section>

        {/* MARINATE SECTION */}
        <section className="text-section marinate-section h-[150vh] w-full flex items-center px-4 md:px-24">
          <div className="content-box bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-14 rounded-3xl max-w-2xl shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-semibold mb-6 flex items-center gap-4 text-orange-200">
              <span className="w-12 h-[2px] bg-orange-500 block" /> 24 Hour Marinade
            </h2>
            <p className="text-neutral-300 text-lg md:text-2xl leading-relaxed font-light">
              We begin with pristine cuts, submerged in a secret blend of Middle Eastern spices, fresh herbs, and gold-pressed olive oil. It is more than preparation—it's a ritual.
            </p>
          </div>
        </section>

        {/* SLOW ROASTING SECTION */}
        <section className="text-section roasting-section h-[150vh] w-full flex justify-end items-center px-4 md:px-24">
          <div className="content-box bg-black/40 backdrop-blur-2xl border border-orange-500/20 p-8 md:p-14 rounded-3xl max-w-2xl shadow-[0_0_50px_rgba(249,115,22,0.1)]">
            <h2 className="text-3xl md:text-5xl font-semibold mb-6 flex items-center gap-4 text-orange-400">
              Slow & Steady <span className="w-12 h-[2px] bg-orange-500 block" />
            </h2>
            <p className="text-neutral-300 text-lg md:text-2xl leading-relaxed font-light">
              Continuous rotation over an open flame ensures the skin caramelizes flawlessly while locking in an explosion of juices. Perfection takes time.
            </p>
          </div>
        </section>

        {/* FINAL HERO */}
        <section className="final-section h-screen w-full flex items-center justify-center px-4 pointer-events-auto pb-32">
          <div className="content-box flex flex-col items-center">
            <h2 className="text-6xl md:text-[8rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-yellow-500 mb-8 drop-shadow-[0_0_80px_rgba(249,115,22,0.8)] filter">
              Ready to Feast.
            </h2>
            <button className="group relative px-10 py-5 rounded-full bg-white text-black font-bold text-xl uppercase tracking-wider overflow-hidden hover:scale-105 transition-transform duration-300">
              <span className="relative z-10">Reserve Your Table</span>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-orange-500 to-red-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0" />
              <style jsx>{`.group:hover span { color: white; transition: color 0.3s; }`}</style>
            </button>
          </div>
        </section>
      </div>

      {/* Global override for specific CSS details if needed */}
      <style jsx>{`
        .bg-radial-gradient {
          background: radial-gradient(circle at center, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%);
        }
      `}</style>
    </div>
  );
}