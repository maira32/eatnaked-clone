"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ITEMS = [
  "Fresh",
  "Source",
  "Goals",
  "Lifestyle",
  "Ingredients",
  "Our Family",
];

const HIDDEN_WHEN = ["Ready", "Footer"];
const ALL_SECTIONS = [...ITEMS, ...HIDDEN_WHEN];
function toId(label: string) {
  return label.toLowerCase().replace(/\s+/g, "-");
}

export default function SideProgressNav() {
  const [active, setActive] = useState("Fresh");
  const tickingRef = useRef(false);

  useEffect(() => {
    function computeActive() {
      const triggerY = window.innerHeight * 0.4;

      let current: string | null = null;
      for (const label of ALL_SECTIONS) {
        const el = document.getElementById(toId(label));
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= triggerY) {
          current = label;
        } else {
          break;
        }
      }

      if (current) {
        setActive((prev) => (prev !== current ? current : prev));
      }
    }

    function onScroll() {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(() => {
        computeActive();
        tickingRef.current = false;
      });
    }

    computeActive(); 
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scrollToSection = (itemName: string) => {
    const el = document.getElementById(toId(itemName));
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const isVisible = !HIDDEN_WHEN.includes(active);

  return (
    <motion.nav
      initial={{ opacity: 0, x: 16 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        x: isVisible ? 0 : 20,
        pointerEvents: isVisible ? "auto" : "none",
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      aria-label="Page sections"
      className="flex fixed right-2 md:right-5 top-1/2 -translate-y-1/2 z-50 flex-col items-end gap-2 scale-90 md:scale-100 origin-right"
    >
      {ITEMS.map((item) => {
        const isActive = item === active;
        return (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className="group flex items-center gap-3 cursor-pointer transition-opacity hover:opacity-80"
            aria-label={`Scroll to ${item} section`}
          >
            <span
              className={`text-[10px] uppercase font-medium tracking-wider transition-colors duration-300 ${
                isActive ? "text-[#c16533]" : "text-white/30 group-hover:text-white/50"
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
              <span className="h-[1px] w-5 bg-white/30 transition-colors duration-300 group-hover:bg-white/50" />
            )}
          </button>
        );
      })}
    </motion.nav>
  );
}