"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const CARDS = [
  {
    id: "family",
    title: "Family",
    subtitle: "Nourish Who Matters Most.",
    image: "/assets/images/lf1.avif",
    href: "/menu",
  },
  {
    id: "professional",
    title: "Professional",
    subtitle: "Fuel Your Hustle.",
    image: "/assets/images/lf2.avif",
    href: "/menu",
  },
  {
    id: "athlete",
    title: "Athlete",
    subtitle: "Enhance Your Performance",
    image: "/assets/images/lf3.avif",
    href: "/menu",
  },
];

export default function LifestyleSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDragEnd = (_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
    const { offset, velocity } = info;
    const swipePower = Math.abs(offset.x) * velocity.x;

    if (offset.x < -50 || swipePower < -10000) {
      setActiveIndex((prev) => (prev + 1) % CARDS.length);
    } else if (offset.x > 50 || swipePower > 10000) {
      setActiveIndex((prev) => (prev - 1 + CARDS.length) % CARDS.length);
    }
  };

  return (
    <section
      id="lifestyle"
      data-nav-label="Lifestyle"
className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-black pt-10 pb-12 lg:pt-20 lg:pb-16 xl:pt-50 xl:pb-45"
    >
     <div 
        className="absolute inset-0 z-0 opacity-80"
        style={{
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='104' height='128'%3E%3Cpath d='M44 64h16 M52 56v16' stroke='rgba(255,255,255,0.1)' stroke-width='1'/%3E%3C/svg%3E"),
            linear-gradient(to right, rgba(255, 255, 255, 0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.07) 1px, transparent 1px)
          `,
          backgroundSize: "104px 128px, 26px 32px, 26px 32px",
          backgroundPosition: "left top, left top, left top"
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

<div className="relative z-10 mx-auto flex h-[300px] w-full max-w-[1200px] items-center justify-center perspective-[700px]">    
      <AnimatePresence initial={false}>
          {CARDS.map((card, i) => {
            const offsetIndex = (i - activeIndex + CARDS.length) % CARDS.length;
            
            let state = "center";
            if (offsetIndex === 1) state = "right";
            if (offsetIndex === CARDS.length - 1) state = "left";

            const isActive = state === "center";

            return (
              <motion.div
                key={card.id}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                onClick={() => !isActive && setActiveIndex(i)}
                initial={false}
                animate={state}
                variants={{
                  center: { 
                    x: "0%", 
                    scale: 1, 
                    zIndex: 20, 
                    opacity: 1, 
                    filter: "blur(0px) brightness(1)" 
                  },
                  right: { 
                    x: "75%", 
                    scale: 0.85, 
                    zIndex: 10, 
                    opacity: 1, 
                    filter: "blur(4px) brightness(0.4) " 
                  },
                  left: { 
                    x: "-75%", 
                    scale: 0.85, 
                    zIndex: 10, 
                    opacity: 1, 
                    filter: "blur(4px) brightness(0.4)" 
                  },
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
               className={`absolute flex h-[250px] w-[50vw] max-w-[500px] cursor-grab flex-col overflow-hidden rounded-[2rem] active:cursor-grabbing border-8 ${
                  isActive
                    ? "border-white/20 shadow-[0_0_50px_-15px_rgba(244,110,53,0.3)]"
                    : "border-white/40" 
                }`}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  draggable={false}
                  className="pointer-events-none select-none object-cover"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute bottom-10 left-10 flex flex-col items-start">
                  <div>
                    <h3 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-base font-medium text-white/70 sm:text-lg">
                      {card.subtitle}
                    </p>
                  </div>

                  <a
                    href={card.href}
                    onClick={(e) => {
                      if (!isActive) e.preventDefault();
                    }}
                    className="group mt-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 py-1.5 pl-1.5 pr-6 backdrop-blur-md transition-all duration-300 hover:bg-white/20"
                  >
                    <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#f46e35] transition-all duration-300 group-hover:ml-2 group-hover:h-3 group-hover:w-3 group-hover:bg-transparent">
                      <svg
                        className="h-4 w-4 text-white transition-all duration-300 group-hover:scale-0 group-hover:opacity-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                      <div className="absolute h-1.5 w-1.5 scale-0 rounded-full bg-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
                    </div>
                    <span className="ml-3 text-sm font-semibold text-white transition-all duration-300 group-hover:ml-2">
                      View Meals
                    </span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

<h2 className="relative z-10 mx-auto mt-3 max-w-4xl px-6 text-center text-4xl  leading-tight tracking-tight text-white sm:text-5xl">
          Designed For Your Taste,
        <br /> Built For Your Day.
      </h2>
    </section>
  );
}