"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

export default function CommunityPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const scrollSectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: scrollSectionRef,
    offset: ["start 90%", "start 20%"], 
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [0.1, 1]);

  const yCol1 = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const yCol2 = useTransform(scrollYProgress, [0, 1], [160, 0]);
  const yCol3 = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const yCol4 = useTransform(scrollYProgress, [0, 1], [130, 0]);
  const yCol5 = useTransform(scrollYProgress, [0, 1], [100, 0]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#080808] text-white">
      <Navbar />

      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='104' height='128'%3E%3Cpath d='M44 64h16 M52 56v16' stroke='rgba(255,255,255,0.09)' stroke-width='1'/%3E%3C/svg%3E"),
            linear-gradient(to right, rgba(255,255,255,0.055) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.055) 1px, transparent 1px)
          `,
          backgroundSize: "104px 128px, 26px 32px, 26px 32px",
          backgroundPosition: "left top, left top, left top",
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent_0%,rgba(0,0,0,0.2)_60%,rgba(0,0,0,0.8)_100%)]" />

      <section className="relative z-10 flex w-full flex-col items-center px-6 pt-32 pb-12 lg:px-12 lg:pt-36">
        <div className="flex max-w-3xl flex-col items-center text-center">
          <h1 className="text-[48px] font-normal leading-[1.05] tracking-[-0.03em] sm:text-[64px] lg:text-[60px]">
            Our Community
          </h1>

          <p className="mt-4 max-w-xl text-[14px] font-normal leading-relaxed text-white/70 sm:text-[15px]">
            We&apos;re proud to nourish not just our customers, but our community—supporting local causes, partnering with neighborhood organizations, and sharing good food where it&apos;s needed most.
          </p>

          <a
            href="/login"
            className="group mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#2a170f]/80 p-1.5 pr-6 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-[#3d1f14]"
          >
            <div className="relative flex h-9 w-9 items-center justify-center">
              <div className="absolute h-1.5 w-1.5 scale-0 rounded-full bg-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
              <div className="absolute inset-0 flex items-center justify-center rounded-full bg-gradient-to-br from-[#d4703a] to-[#b55829] shadow-md transition-all duration-300 group-hover:scale-0 group-hover:opacity-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <span className="transition-all duration-300 group-hover:ml-1">
              Join Us
            </span>
          </a>
        </div>

        <div 
          onClick={togglePlay}
          className="group relative mt-16 w-full max-w-[1200px] cursor-pointer overflow-hidden rounded-[2.5rem] border border-white/15 bg-[#141414] shadow-[0_0_60px_-15px_rgba(212,112,58,0.3)]"
        >
          <div className="relative aspect-[16/9] w-full">
            <video
              ref={videoRef}
              src="/assets/videos/kitchen-in-action.mp4"
              loop
              muted={isMuted}
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              className="h-full w-full object-cover border-6"
            />

            <div className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}>
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white transition-transform duration-300 hover:scale-110">
                {isPlaying ? (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                ) : (
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" className="translate-x-0.5">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                )}
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 flex items-center gap-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-6 py-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-xs font-medium text-white/90 min-w-[35px]">
                {formatTime(currentTime)}
              </span>

              <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-white/20">
                <div 
                  className="absolute inset-y-0 left-0 bg-[#f46e35] rounded-full"
                  style={{ width: `${(currentTime / (duration || 1)) * 100}%` }}
                />
              </div>

              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-black/80"
              >
                {isMuted ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="1" y1="1" x2="23" y2="23" />
                    <path d="M9 9v6h4l5 5V4L13 9H9z" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section ref={scrollSectionRef} className="relative z-10 w-full px-4 pb-48 pt-16 lg:px-8 flex flex-col items-center">
        
        <motion.h2
          style={{ opacity: textOpacity }}
          className="max-w-[1000px] text-center text-2xl font-medium leading-[1.3] text-white sm:text-3xl lg:text-[42px]"
        >
          <span className="text-[#f46e35]">EatNaked ✨</span> Donates Healthy Meals To Local Communities, Reducing Food Waste And Promoting Mindful Nutrition.
        </motion.h2>

        <div className="mt-20 grid w-full max-w-[1400px] grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-5">
          
          <motion.div style={{ y: yCol1 }} className="flex flex-col gap-4 md:gap-6">
            <img src="/assets/images/community/pic1.webp" alt="" className="h-[220px] w-full rounded-[1.5rem] object-cover" />
            <img src="/assets/images/community/pic2.webp" alt="" className="h-[260px] w-full rounded-[1.5rem] object-cover" />
            <img src="/assets/images/community/pic3.webp" alt="" className="hidden h-[240px] w-full rounded-[1.5rem] object-cover sm:block" />
          </motion.div>

          <motion.div style={{ y: yCol2 }} className="flex flex-col gap-4 md:gap-6">
            <img src="/assets/images/community/img4.png" alt="" className="h-[280px] w-full rounded-[1.5rem] object-cover" />
            <img src="/assets/images/community/pic5.jpg" alt="" className="h-[180px] w-full rounded-[1.5rem] object-cover" />
            <img src="/assets/images/community/pic6.jpg" alt="" className="hidden h-[260px] w-full rounded-[1.5rem] object-cover lg:block" />
          </motion.div>

          <motion.div style={{ y: yCol3 }} className="flex flex-col gap-4 md:gap-6">
            <img src="/assets/images/community/pic7.jpg" alt="" className="h-[350px] w-full rounded-[1.5rem] object-cover" />
            <img src="/assets/images/community/pic8.jpg" alt="" className="h-[370px] w-full rounded-[1.5rem] object-cover" />
          </motion.div>

          <motion.div style={{ y: yCol4 }} className="flex flex-col gap-4 md:gap-6 hidden sm:flex">
            <img src="/assets/images/community/pic9.jpg" alt="" className="h-[250px] w-full rounded-[1.5rem] object-cover" />
            <img src="/assets/images/community/pic10.jpg" alt="" className="h-[210px] w-full rounded-[1.5rem] object-cover" />
            <img src="/assets/images/community/pic11.jpg" alt="" className="hidden h-[260px] w-full rounded-[1.5rem] object-cover lg:block" />
          </motion.div>

          <motion.div style={{ y: yCol5 }} className="flex flex-col gap-4 md:gap-6 hidden lg:flex">
            <img src="/assets/images/community/pic12.png" alt="" className="h-[320px] w-full rounded-[1.5rem] object-cover" />
            <img src="/assets/images/community/pic13.png" alt="" className="h-[400px] w-full rounded-[1.5rem] object-cover" />
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}