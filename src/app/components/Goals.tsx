"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const GOALS_DATA = [
  {
    id: "Gain Muscle",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43 1.43-1.43z" />
      </svg>
    ),
    tag: "Enhance Performance",
    progress: 100,
    kcalNow: "2,400",
    kcalIdeal: "3,000",
    meals: {
      Breakfast: "Quiche & Protein Pa...",
      Lunch: "Grilled Mango-Lime...",
      Dinner: "Miso Glazed Salmon",
    },
    images: [
      "/assets/images/meals/muscle-1.avif",
      "/assets/images/meals/muscle-2.avif",
    ],
  },
  {
    id: "Maintain",
    icon: (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    tag: "Healthy Habits",
    progress: 25,
    kcalNow: "2,150",
    kcalIdeal: "2,200",
    meals: {
      Breakfast: "Egg Skillet & Roasted Potatoes",
      Lunch: "Chimichurri Steak Salad",
      Dinner: "Peruvian Chicken",
    },
    images: [
      "/assets/images/meals/maintain-1.avif",
      "/assets/images/meals/maintain-2.avif",
    ],
  },
  {
    id: "Lose Weight",
    icon: (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    tag: "Clean Eating",
    progress: 78,
    kcalNow: "2,200",
    kcalIdeal: "1,900",
    meals: {
      Breakfast: "Overnight Oats",
      Lunch: "Cranberry Walnut Spinach Salad",
      Dinner: "Lemon & Herb Garlic Chicken",
    },
    images: [
      "/assets/images/meals/weight-1.avif",
      "/assets/images/meals/weight-2.avif",
    ],
  },
];

export default function Goals() {
  const [activeGoal, setActiveGoal] = useState<string | null>("Gain Muscle");

  return (
    <section
      id="goals"
      data-nav-label="Goals"
      className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-black py-24 lg:py-40"
    >
      <div 
        className="absolute inset-0 z-0 opacity-80"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[100rem] flex-col px-6 md:flex-row md:items-end md:justify-between md:px-12 xl:px-20">
        
        <div className="mb-12 w-full self-end md:mb-0 md:w-[25%] xl:w-[30%]">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            Whatever
            <br />
            Your Goal
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-[13px] text-white/50"
          >
            High quality meals for ANY lifestyle
          </motion.p>
        </div>

        <div className="flex w-full max-w-md flex-col gap-4 md:w-[50%] xl:w-[40%]">
          {GOALS_DATA.map((goal) => {
            const isActive = activeGoal === goal.id;

            return (
              <motion.div
                layout
                key={goal.id}
                onClick={() => setActiveGoal(isActive ? null : goal.id)}
                className={`relative cursor-pointer overflow-hidden rounded-[2rem] border transition-all duration-500 ${
                  isActive 
                    ? "border-white/10 bg-[#16110f]" 
                    : "border-[#36190a]/40 bg-gradient-to-r from-[#080504] via-[#36190a] to-[#080504] hover:border-[#4a240f]/60 hover:via-[#4a240f]"
                }`}
              >
                {isActive && (
                  <div className="absolute -top-24 left-1/2 h-48 w-[120%] -translate-x-1/2 rounded-full bg-[#c16533] opacity-20 blur-[60px]" />
                )}

                <motion.div layout className="relative z-10 px-6 py-5 sm:px-8">
                  
                  <div className="flex items-center justify-between">
                    <motion.div layout className="flex items-center gap-4 text-[15px] font-medium text-white/90">
                      <span className={isActive ? "text-[#c16533]" : "text-white/40"}>
                        {goal.icon}
                      </span>
                      {goal.id}
                    </motion.div>
                    
                    <AnimatePresence>
                      {isActive && (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="absolute left-1/2 top-4 hidden -translate-x-1/2 items-center justify-center sm:flex"
                        >
                          <svg className="h-11 w-11 -rotate-90 transform" viewBox="0 0 36 36">
                            <path
                              className="text-white/10"
                              strokeDasharray="100, 100"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none" stroke="currentColor" strokeWidth="2"
                            />
                            <path
                              className="text-white"
                              strokeDasharray={`${goal.progress}, 100`}
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none" stroke="currentColor" strokeWidth="2"
                            />
                          </svg>
                          <span className="absolute text-[10px] font-medium text-white">{goal.progress}%</span>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <motion.span layout className="rounded-full border border-white/20 px-3.5 py-1.5 text-[11px] font-medium text-white/80">
                      • {goal.tag}
                    </motion.span>
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="mt-6"
                      >
                        <div className="flex items-end justify-between">
                          <div>
                            <p className="mb-1 text-[11px] text-white/50">Your Kcal now</p>
                            <p className="text-3xl font-semibold tracking-tight text-white">{goal.kcalNow}</p>
                          </div>
                          <div className="text-right">
                            <p className="mb-1 text-[11px] text-white/50">Your ideal Kcal</p>
                            <p className="text-3xl font-semibold tracking-tight text-white">{goal.kcalIdeal}</p>
                          </div>
                        </div>

                        <div className="relative mt-5 h-3 w-full rounded-full bg-white/10">
                          <div className="absolute inset-y-0 left-0 w-[70%] rounded-full bg-gradient-to-r from-[#c16533] to-[#e48351]" />
                          <div className="absolute left-[70%] top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-[#e48351] bg-white shadow-lg" />
                        </div>

                        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-between">
                          <div className="relative flex flex-col gap-2 border-l-2 border-[#c16533] pl-4 text-[13px]">
                            <div className="flex gap-4">
                              <span className="w-14 text-white/50">Breakfast</span>
                              <span className="text-white/90">{goal.meals.Breakfast}</span>
                            </div>
                            <div className="flex gap-4">
                              <span className="w-14 text-white/50">Lunch</span>
                              <span className="text-white/90">{goal.meals.Lunch}</span>
                            </div>
                            <div className="flex gap-4">
                              <span className="w-14 text-white/50">Dinner</span>
                              <span className="text-white/90">{goal.meals.Dinner}</span>
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <div className="relative h-16 w-16 overflow-hidden rounded-lg bg-black/50">
                              <Image 
                                src={goal.images[0]} 
                                alt={`${goal.id} meal 1`} 
                                fill 
                                className="object-cover opacity-80"
                              />
                            </div>
                            <div className="relative h-16 w-16 overflow-hidden rounded-lg bg-black/50">
                              <Image 
                                src={goal.images[1]} 
                                alt={`${goal.id} meal 2`} 
                                fill 
                                className="object-cover opacity-80"
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <div className="hidden md:block md:w-[25%] xl:w-[30%]"></div>
      </div>
    </section>
  );
}