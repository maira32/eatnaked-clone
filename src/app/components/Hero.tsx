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
    className: "left-[8%] bottom-[15%] md:left-[22%] md:bottom-[20%]",
  },
  {
    label: "Proteins",
    imageSrc: "/assets/images/proteins-icon.png",
    className: "right-[10%] bottom-[8%] md:right-[22%] md:bottom-[15%]",
  },
  {
    label: "Grains",
    imageSrc: "/assets/images/grains-icon.png",
    className: "right-[8%] top-[15%] md:right-[20%] md:top-[25%]",
  },
];

function AnimatedHeadline() {
  return (
    <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
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
        <div className="relative z-20 flex flex-col items-center px-6 pt-20 text-center lg:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mb-4 flex items-center gap-2 text-sm text-white/80"
          >
            It&apos;s a Lifestyle <span aria-hidden="true">🌱</span>
          </motion.div>

          <AnimatedHeadline />
        </div>

        <div className="relative z-0 mx-auto -mt-16 w-full max-w-4xl px-4 sm:px-6 lg:-mt-24 lg:max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl bg-transparent lg:aspect-[21/9]"
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
                className={`absolute z-10 flex items-center gap-2 rounded-full bg-[#201C19]/60 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-md ${item.className}`}
              >
                <Image
                  src={item.imageSrc}
                  alt={`${item.label} icon`}
                  width={20}
                  height={20}
                  className="object-contain"
                  aria-hidden="true"
                />
                <span>{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-6 z-10 flex flex-col gap-6 lg:bottom-14 lg:left-16">
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                className="rounded-full border border-white/20 px-6 py-2.5 text-[15px] font-medium text-white"
              >
                {PILLS[0]}
              </motion.span>
            </div>
            <div className="flex gap-3">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.42 }}
                className="rounded-full border border-white/20 px-6 py-2.5 text-[15px] font-medium text-white"
              >
                {PILLS[1]}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.54 }}
                className="rounded-full border border-white/20 px-6 py-2.5 text-[15px] font-medium text-white"
              >
                {PILLS[2]}
              </motion.span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="max-w-xs"
          >
            <h2 className="text-[32px] font-semibold leading-tight tracking-tight text-white">
              From Our Kitchen
              <br />
              to Your Door
            </h2>
            <p className="mt-3 text-base text-white/60">
              Healthy eating made effortless. Fuel your body and free your time.
            </p>
          </motion.div>
        </div>

        <motion.a
          href="/customer-support"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="absolute bottom-0 right-0 z-10 flex items-center gap-2 rounded-tl-[2.5rem] bg-[#c16533] px-10 py-7 text-lg font-medium text-white transition-colors hover:bg-[#a8572b]"
        >
          <span aria-hidden="true" className="text-xl">↗</span> Contact Us
        </motion.a>
      </div>
    </section>
  );
}