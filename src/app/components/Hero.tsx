"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const HEADLINE_LINES = ["EAT Local, EAT", "Healthy, EATnaked."];

const PILLS = ["Bold", "Fresh", "Tailored"];

const BOWL_LABELS = [
  {
    label: "Vegetables",
    imageSrc: "/assets/images/vegetables-icon.png",
    className: "left-[5%] bottom-[12%] sm:left-[15%] sm:bottom-[15%] lg:left-[31%] lg:bottom-[22%]",
  },
  {
    label: "Proteins",
    imageSrc: "/assets/images/proteins-icon.png",
    className: "right-[5%] bottom-[6%] sm:right-[15%] sm:bottom-[8%] lg:right-[37%] lg:bottom-[17%]",
  },
  {
    label: "Grains",
    imageSrc: "/assets/images/grains-icon.png",
    className: "right-[8%] bottom-[28%] sm:right-[20%] sm:bottom-[32%] lg:right-[32%] lg:bottom-[28%]",
  },
];

function AnimatedHeadline() {
  return (
    <h1 className="max-w-3xl text-43l font-bold leading-[1.05] text-white sm:text-4xl md:text-5xl lg:text-[60px]">
      {HEADLINE_LINES.map((line, lineIdx) => (
        <span key={line} className="block overflow-hidden">
          {line.split(" ").map((word, wordIdx) => (
            <motion.span
              key={word + wordIdx}
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.15 + (lineIdx * line.split(" ").length + wordIdx) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mr-[0.28em] inline-block"
            >
              {word}
            </motion.span>
          ))}
        </span>
      ))}
    </h1>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current || !contentRef.current) return;

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
          gsap.to(contentRef.current, {
            opacity: 1 - self.progress * 0.9,
            scale: 1 - self.progress * 0.08,
            duration: 0.1,
            overwrite: "auto",
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="fresh"
      data-nav-label="Fresh"
      className="relative h-[100dvh] w-full overflow-hidden bg-black"
    >
      <div ref={contentRef} className="relative h-full w-full">
        
        <div className="absolute left-0 right-0 top-[12%] z-30 flex flex-col items-center px-4 text-center sm:top-[16%]">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mb-4 flex items-center gap-2 text-xs text-white/80 sm:text-sm"
          >
            It&apos;s a Lifestyle <span aria-hidden="true">🌱</span>
          </motion.div>

          <AnimatedHeadline />
        </div>

        <div className="absolute inset-0 z-0 mx-auto w-full max-w-[1600px]">
          <video
            src="/assets/videos/hero-showreel.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-contain object-bottom"
          />
    
          {BOWL_LABELS.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 + i * 0.15 }}
              className={`absolute z-10 flex items-center gap-1 sm:gap-1 sm:rounded-[10px] bg-white/20 p-0.5 pr-1.5 sm:p-1 sm:pr-1 text-[9px] sm:text-[px] font-semibold tracking-wide text-white shadow-xl backdrop-blur-md ${item.className}`}
            >
              <span className="flex h-4 w-5 shrink-0 items-center justify-center rounded-lg bg-white/25 shadow-inner sm:h-6 sm:w-7 sm:rounded-[10px]">
                <Image
                  src={item.imageSrc}
                  alt={`${item.label} icon`}
                  width={20}
                  height={20}
                  className="h-8 w-8 object-contain sm:h-8 sm:w-8"
                  aria-hidden="true"
                />
              </span>
              <span>{item.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="absolute bottom-7 left-4 z-20 flex flex-col gap-4 sm:bottom-8 sm:left-8 lg:left10 lg:gap-3">
          <div className="flex flex-col gap-2 sm:gap-3">
            <div className="flex gap-2 sm:gap-3">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                className="rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-white sm:px-4 sm:py-2 sm:text-[10px]"
              >
                {PILLS[0]}
              </motion.span>
            </div>
            <div className="flex gap-2 sm:gap-3">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.42 }}
                className="rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-white sm:px-4 sm:py-2 sm:text-[10px]"
              >
                {PILLS[1]}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.54 }}
                className="rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-white sm:px-4 sm:py-2 sm:text-[10px]"
              >
                {PILLS[2]}
              </motion.span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="max-w-[200px] sm:max-w-xs"
          >
            <h2 className="text-xl font-semibold leading-tight tracking-tight text-white sm:text-[20px]">
              From Our Kitchen
              <br />
              to Your Door
            </h2>
            <p className="text-xs f leading-tight tracking-tight text-white/60 sm:text-[13px]" >
              Healthy eating made effortless. Fuel your body and free your time.
            </p>
          </motion.div>
        </div>

        <motion.a
          href="/customer-support"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="group absolute bottom-0 right-0 z-50 flex items-center gap-2 rounded-tl-[1.5rem] bg-gradient-to-br from-[#d4703a] to-[#b55829] px-6 py-5 text-sm font-semibold text-white shadow-[0_0_40px_rgba(212,112,58,0.3)] transition-all duration-300 hover:from-[#df763d] hover:to-[#bd5b2a] hover:shadow-[0_0_60px_rgba(212,112,58,0.5)] sm:rounded-tl-[2rem] sm:px-10 sm:py-7 sm:text-lg"
        >
          <div className="relative flex h-5 w-5 items-center justify-center overflow-hidden sm:h-6 sm:w-6">
            <span
              aria-hidden="true"
              className="absolute text-base transition-transform duration-300 ease-out group-hover:-translate-y-full sm:text-xl"
            >
              ↗
            </span>
            <span
              aria-hidden="true"
              className="absolute translate-y-full text-base transition-transform duration-300 ease-out group-hover:translate-y-0 sm:text-xl"
            >
              ↗
            </span>
          </div>
          Contact Us
        </motion.a>

      </div>
    </section>
  );
}