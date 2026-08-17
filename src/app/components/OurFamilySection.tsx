"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function DecorativeCircles() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
      <div className="relative h-[420px] w-[420px] sm:h-[540px] sm:w-[540px]">
        <div className="absolute inset-0 rounded-full border border-dashed border-white/15" />
        <div className="absolute inset-[15%] rounded-full border border-dashed border-white/10" />
        <span className="absolute left-[8%] top-[26%] h-3 w-3 rounded-full bg-[#f46e35]" />
        <span className="absolute right-[4%] top-[32%] h-3 w-3 rounded-full bg-[#f46e35]" />
        <span className="absolute bottom-[24%] left-[16%] h-3 w-3 rounded-full bg-[#f46e35]" />
      </div>
    </div>
  );
}

export default function OurFamilySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const placeholderRef = useRef<HTMLSpanElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);
  const playButtonRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("0:00");

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current || !placeholderRef.current || !mediaRef.current || !textContainerRef.current) return;

      function setInitialRect() {
        const sectionRect = sectionRef.current!.getBoundingClientRect();
        const rect = placeholderRef.current!.getBoundingClientRect();
        
        gsap.set(mediaRef.current, {
          position: "absolute",
          top: rect.top - sectionRect.top,
          left: rect.left - sectionRect.left,
          width: rect.width,
          height: rect.height,
          borderRadius: 16,
        });
      }

      setInitialRect();

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=150%", 
          scrub: 1, 
          pin: true,
          onRefreshInit: setInitialRect,
        },
      });

      tl.to({}, { duration: 0.15 })
      
      .to(
        mediaRef.current,
        {
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderRadius: 0,
          ease: "power2.inOut",
        },
        0.15
      )
      .to(
        textContainerRef.current,
        {
          y: -300, 
          opacity: 0.2, 
          ease: "power2.inOut",
        },
        0.15 
      )
      .to(
        playButtonRef.current,
        { opacity: 1, scale: 1, ease: "back.out(1.5)" },
        0.6 
      )
      .to(
        controlsRef.current,
        { opacity: 1, y: 0, ease: "power2.out" },
        0.8 
      );

      const raf = requestAnimationFrame(() => ScrollTrigger.refresh());
      return () => cancelAnimationFrame(raf);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  function togglePlay() {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }

  function toggleMute(e: React.MouseEvent) {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  }

  function handleTimeUpdate() {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    
    if (duration > 0) {
      setProgress((current / duration) * 100);
    }

    const mins = Math.floor(current / 60);
    const secs = Math.floor(current % 60);
    setCurrentTime(`${mins}:${secs < 10 ? "0" : ""}${secs}`);
  }

  return (
    <section
      ref={sectionRef}
      id="our-family"
      data-nav-label="Our Family"
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >
      <DecorativeCircles />

      <motion.div 
        ref={textContainerRef}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-auto flex h-screen max-w-3xl flex-col items-center justify-center px-6 text-center"
      >
        <span className="rounded-full border border-white/20 px-5 py-2 text-xs font-medium text-white">
          Where The Magic Begins
        </span>

        <h2 className="mt-6 flex flex-col items-center gap-2 text-5xl font-extrabold leading-none text-white sm:text-[80px]">
          <span>Our Kitchen</span>
          <span className="flex items-center gap-4">
            In
            <span
              ref={placeholderRef}
              className="inline-block h-14 w-24 shrink-0 opacity-0 sm:h-20 sm:w-[150px]"
            />
            <span className="text-[#f46e35]">Action</span>
          </span>
        </h2>

        <p className="mt-8 max-w-md text-[13px] font-medium leading-relaxed text-white/50">
          Passionate culinary chefs and skilled dietitians—blending expertise
          with heart. We bring together decades of experience, a shared love
          for nourishing others, and a deep commitment to our community.
        </p>
      </motion.div>

      <div
        ref={mediaRef}
        className="z-30 overflow-hidden bg-black shadow-2xl"
      >
        <video
          ref={videoRef}
          src="/assets/videos/kitchen-in-action.mp4"
          playsInline
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
          className={`h-full w-full object-cover transition-opacity duration-500 ${isPlaying ? 'opacity-100' : 'opacity-80'}`}
        />

        {!isPlaying && (
           <div className="pointer-events-none absolute inset-0 bg-black/20 transition-opacity" />
        )}

        <button
          ref={playButtonRef}
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 scale-50 items-center justify-center rounded-full bg-white/10 opacity-0 backdrop-blur-sm transition-transform hover:scale-110"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/30 backdrop-blur-md">
            {isPlaying ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <rect x="6" y="5" width="4" height="14" />
                <rect x="14" y="5" width="4" height="14" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="ml-1">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </div>
        </button>

        <div 
          ref={controlsRef}
          className="absolute bottom-8 left-0 z-40 flex w-full translate-y-4 items-center gap-4 px-8 opacity-0 sm:px-12"
        >
          <span className="w-10 text-sm font-medium text-white">{currentTime}</span>
          
          <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-white/20">
            <div 
              className="absolute left-0 top-0 h-full bg-[#f46e35] transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

          <button 
            onClick={toggleMute}
            className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
          >
            {isMuted ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 5L6 9H2v6h4l5 4V5z" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="23" y1="9" x2="17" y2="15" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="17" y1="9" x2="23" y2="15" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 0 1 0 7.07" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}