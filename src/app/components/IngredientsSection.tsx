"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const DISHES = [
  {
    title: "Lemon Herb Garlic Chicken W/ Organic Quinoa And Grilled Asparagus",
    image: "/assets/images/dish-lemon-herb-chicken.avif",
    left: [
      { label: "Veggies", icon: "/assets/images/ingredient-veggies.png" },
      { label: "Protein", icon: "/assets/images/bowl-proteins.png" },
      { label: "Grains", icon: "/assets/images/bowl-grains.png" },
    ],
    right: [
      { label: "Fruit", icon: "/assets/images/bowl-fruit.png" },
      { label: "Herbs", icon: "/assets/images/bowl-herbs.png" },
      { label: "Sauce", icon: "/assets/images/bowl-sauce.png" },
    ],
  },
  {
    title: "Southwest Bean & Quinoa Salad",
    image: "/assets/images/dish-southwest-bean-quinoa.avif",
    left: [
      { label: "Asparagus", icon: "/assets/images/bowl-asparagus.png" },
      { label: "Chicken", icon: "/assets/images/bowl-proteins.png" },
      { label: "Veggies", icon: "/assets/images/ingredient-veggies.png" },
    ],
    right: [
      { label: "Herbs", icon: "/assets/images/bowl-herbs.png" },
      { label: "CousCous", icon: "/assets/images/bowl-couscous.png" },
      { label: "Olives", icon: "/assets/images/bowl-olives.png" },
    ],
  },
];

const LEFT_POSITIONS = [
  "top-[130px] left-[295px]",
  "top-[215px] left-[240px]",
  "top-[300px] left-[185px]",
];

const RIGHT_POSITIONS = [
  "top-[130px] left-[905px]",
  "top-[215px] left-[960px]",
  "top-[300px] left-[1015px]",
];

function IngredientTag({
  icon,
  label,
  align,
}: {
  icon: string;
  label: string;
  align: "left" | "right";
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-xl border border-white/5 bg-[#262626] shadow-xl ${
        align === "left" ? "flex-row py-1 pl-1 pr-4" : "flex-row-reverse py-1 pl-4 pr-1"
      }`}
    >
      <span className="relative flex h-8 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#3d3d3d]">
        <Image src={icon} alt="" fill className="object-contain p-1.5" />
      </span>
      <span className="text-[13px] font-semibold tracking-wide text-white">
        {label}
      </span>
    </div>
  );
}

export default function IngredientsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const dish = DISHES[activeIndex];

  function goPrev() {
    setActiveIndex((i) => (i - 1 + DISHES.length) % DISHES.length);
  }

  function goNext() {
    setActiveIndex((i) => (i + 1) % DISHES.length);
  }

  return (
    <section
      id="ingredients"
      data-nav-label="Ingredients"
      className="relative flex min-h-[700px] w-full flex-col overflow-hidden bg-black pt-0"
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
        className="pointer-events-none absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-30 flex flex-col items-center px-6 pt-[72px] text-center">
        <span className="rounded-full border border-white/20 px-5 py-1.5 text-[9px] font-bold uppercase tracking-widest text-white">
          Ingredients That Matter
        </span>

        <div className="relative mt-4 flex min-h-[90px] w-full max-w-[520px] items-center justify-center">
          <AnimatePresence>
            <motion.h2
              key={dish.title}
              initial={{ opacity: 0, y: 15, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -15, filter: "blur(10px)" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute text-[28px] font-bold leading-[0.95] tracking-tight text-white sm:text-4xl lg:text-[40px]"
            >
              {dish.title}
            </motion.h2>
          </AnimatePresence>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-[-10px] hidden h-[620px] w-full max-w-[1200px] shrink-0 md:block">
        <svg
          viewBox="0 0 1200 700"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
        >
          <path
            d="M 330 80 Q 100 320 150 580"
            stroke="white"
            strokeOpacity="0.15"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M 870 80 Q 1080 320 1050 580"
            stroke="white"
            strokeOpacity="0.15"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>

        <AnimatePresence>
          {dish.left.map((item, idx) => (
            <motion.div
              key={`${dish.title}-left-${idx}`}
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={`absolute z-30 -translate-x-1/2 -translate-y-1/2 ${LEFT_POSITIONS[idx]}`}
            >
              <IngredientTag {...item} align="left" />
            </motion.div>
          ))}
          {dish.right.map((item, idx) => (
            <motion.div
              key={`${dish.title}-right-${idx}`}
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={`absolute z-30 -translate-x-1/2 -translate-y-1/2 ${RIGHT_POSITIONS[idx]}`}
            >
              <IngredientTag {...item} align="right" />
            </motion.div>
          ))}
        </AnimatePresence>

        <button
          onClick={goPrev}
          aria-label="Previous dish"
          className="absolute left-[205px] top-[445px] z-40 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[8px] border-[#181818] bg-[#333333] text-white/80 shadow-lg backdrop-blur-md transition-all hover:bg-[#444444] hover:text-white"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m0 0l6-6m-6 6l6 6" />
          </svg>
        </button>

        <button
          onClick={goNext}
          aria-label="Next dish"
          className="absolute left-[995px] top-[445px] z-40 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[8px] border-[#181818] bg-[#333333] text-white/80 shadow-lg backdrop-blur-md transition-all hover:bg-[#444444] hover:text-white"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
          </svg>
        </button>

        <div className="pointer-events-none absolute bottom-[-170px] left-1/2 z-20 h-[700px] w-[700px] -translate-x-1/2 perspective-[1000px]">
          <AnimatePresence>
            <motion.div
              key={dish.image}
              initial={{ opacity: 0, scale: 0.8, rotate: -45, filter: "blur(20px)" }}
              animate={{ opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.1, rotate: 45, filter: "blur(20px)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 h-full w-full origin-center"
            >
              <Image
                src={dish.image}
                alt={dish.title}
                fill
                className="object-contain object-top"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="relative z-10 mt-12 flex flex-col items-center gap-6 px-6 md:hidden">
        <AnimatePresence>
          <motion.div
            key={dish.title + "-mobile"}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {[...dish.left, ...dish.right].map((item, idx) => (
              <IngredientTag key={idx} {...item} align="left" />
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="relative h-[300px] w-[300px]">
          <AnimatePresence>
            <motion.div
               key={dish.image + "-mobile"}
               initial={{ opacity: 0, scale: 0.8, rotate: -45, filter: "blur(20px)" }}
               animate={{ opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }}
               exit={{ opacity: 0, scale: 1.1, rotate: 45, filter: "blur(20px)" }}
               transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
               className="absolute inset-0 h-full w-full origin-center"
            >
              <Image src={dish.image} alt={dish.title} fill className="object-contain" />
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="relative z-50 flex gap-4">
          <button onClick={goPrev} className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m0 0l6-6m-6 6l6 6" /></svg></button>
          <button onClick={goNext} className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white"><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" /></svg></button>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 z-40 h-48 w-full bg-gradient-to-t from-black via-black/90 to-transparent" />
    </section>
  );
}