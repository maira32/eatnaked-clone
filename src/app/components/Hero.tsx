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
    className: "left-[2%] bottom-[12%] sm:left-[8%] sm:bottom-[15%] md:left-[22%] md:bottom-[20%]",
  },
  {
    label: "Proteins",
    imageSrc: "/assets/images/proteins-icon.png",
    className: "right-[2%] bottom-[6%] sm:right-[10%] sm:bottom-[8%] md:right-[22%] md:bottom-[15%]",
  },
  {
    label: "Grains",
    imageSrc: "/assets/images/grains-icon.png",
    className: "right-[4%] top-[10%] sm:right-[8%] sm:top-[15%] md:right-[20%] md:top-[25%]",
  },
];

function AnimatedHeadline() {
  return (
    <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">
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
              className="inline-block mr-[0.28em]"
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
        <div className="relative z-20 flex flex-col items-center px-4 pt-16 text-center sm:px-6 sm:pt-20 lg:pt-24">
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

        <div className="relative z-0 mx-auto -mt-4 w-full max-w-6xl px-4 sm:-mt-6 sm:px-6 lg:-mt-8 lg:max-w-[1600px]">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[55vh] w-full overflow-hidden rounded-3xl bg-transparent sm:h-[68vh] lg:h-[80vh]"
          >
            <video
              src="/assets/videos/hero-showreel.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full rounded-3xl object-cover"
            />
            {BOWL_LABELS.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: [0, -6, 0] }}
                transition={{
                  opacity: { duration: 0.5, delay: 1.1 + i * 0.15 },
                  y: {
                    duration: 3 + i * 0.4,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    delay: 1.1 + i * 0.15,
                  },
                }}
                className={`absolute z-10 flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#201C19]/60 px-3 py-1.5 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-medium text-white backdrop-blur-md ${item.className}`}
              >
                <Image
                  src={item.imageSrc}
                  alt={`${item.label} icon`}
                  width={20}
                  height={20}
                  className="h-4 w-4 sm:h-5 sm:w-5 object-contain"
                  aria-hidden="true"
                />
                <span>{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-24 left-4 z-10 flex flex-col gap-4 sm:bottom-10 sm:left-6 sm:gap-6 lg:bottom-14 lg:left-16">
          <div className="flex flex-col gap-2 sm:gap-3">
            <div className="flex gap-2 sm:gap-3">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                className="rounded-full border border-white/20 px-4 py-1.5 sm:px-6 sm:py-2.5 text-xs sm:text-[15px] font-medium text-white"
              >
                {PILLS[0]}
              </motion.span>
            </div>
            <div className="flex gap-2 sm:gap-3">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.42 }}
                className="rounded-full border border-white/20 px-4 py-1.5 sm:px-6 sm:py-2.5 text-xs sm:text-[15px] font-medium text-white"
              >
                {PILLS[1]}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.54 }}
                className="rounded-full border border-white/20 px-4 py-1.5 sm:px-6 sm:py-2.5 text-xs sm:text-[15px] font-medium text-white"
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
            <h2 className="text-xl sm:text-[32px] font-semibold leading-tight tracking-tight text-white">
              From Our Kitchen
              <br />
              to Your Door
            </h2>
            <p className="mt-2 sm:mt-3 text-xs sm:text-base text-white/60">
              Healthy eating made effortless. Fuel your body and free your time.
            </p>
          </motion.div>
        </div>

        <motion.a
          href="/customer-support"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="absolute bottom-0 right-0 z-10 flex items-center gap-1.5 sm:gap-2 rounded-tl-[1.5rem] sm:rounded-tl-[2.5rem] bg-[#c16533] px-5 py-4 sm:px-10 sm:py-7 text-sm sm:text-lg font-medium text-white transition-colors hover:bg-[#a8572b]"
        >
          <span aria-hidden="true" className="text-base sm:text-xl">↗</span> Contact Us
        </motion.a>
      </div>
    </section>
  );
}