"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ITEMS = [
  "Fresh",
  "Source",
  "Goals",
  "Trusted",
  "Lifestyle",
  "Ingredients",
  "Our Family",
  "Table",
];

export default function SideProgressNav() {
  const [active, setActive] = useState("Fresh");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const label = entry.target.getAttribute("data-nav-label");
            if (label) setActive(label);
          }
        });
      },
      { rootMargin: "-20% 0px -20% 0px", threshold: 0 }
    );

    ITEMS.forEach((item) => {
      const el = document.getElementById(
        item.toLowerCase().replace(/\s+/g, "-")
      );
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const isVisible = active !== "Trusted";

  return (
    <motion.nav
      initial={{ opacity: 0, x: 16 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        x: isVisible ? 0 : 20,
        pointerEvents: isVisible ? "auto" : "none" 
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      aria-hidden="true"
      className="hidden xl:flex fixed right-4 top-1/2 -translate-y-1/2 z-50 flex-col items-end gap-1.5"
    >
      {ITEMS.map((item) => {
        const isActive = item === active;
        return (
          <div key={item} className="flex items-center gap-1.5">
            <span
              className={`text-[9px] uppercase font-medium tracking-wider transition-colors duration-300 ${
                isActive ? "text-[#c16533]" : "text-white/30 hover:text-white/50"
              }`}
            >
              {item}
            </span>

            {isActive ? (
              <motion.svg
                key="squiggle"
                width="18"
                height="6"
                viewBox="0 0 28 10"
                fill="none"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.path
                  d="M1 5 Q4.5 0 8 5 T15 5 T22 5 T27 5"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="text-[#c16533]"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </motion.svg>
            ) : (
              <span className="h-[1px] w-2.5 bg-white/30 transition-colors duration-300" />
            )}
          </div>
        );
      })}
    </motion.nav>
  );
}