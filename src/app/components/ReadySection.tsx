"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";

const TESTIMONIALS = [
  {
    name: "Jenn Flanders",
    role: "UCLA Campus Life/Recreation",
    quote:
      "EATnaked provides a wide variety of healthy food options that are both delicious and nutritious. They offer catering services for meetings or events; the staff is friendly and professional. I recommend EATnaked to anyone looking for great healthy food option and a no hassle catering experience!",
  },
  {
    name: "Alexis Cantley",
    role: "UCLA Men's Volleyball Operations",
    quote:
      "As a D1 athletics program, finding a company that is flexible with our schedule and accommodating to dietary needs is essential, and EATnaked has done just that. They continue to provide our players with good tasting meals that meet their protein and other macro needs.",
  },
  {
    name: "Sharon Kwak",
    role: "Equinox Group | Senior Recruiter, People Services - West Region",
    quote:
      "EatNaked is an amazing and highly reputable business! From the high-quality food to the level of professionalism, they never disappoint. They have partnered with us for multiple employee events, as well as smaller team meetings. Personally, I am also a huge fan of the delicious and fresh foods. I have used them as a meal prep service myself, and consistently encourage friends/family looking for a healthy, fresh, and great meal prep that EatNaked is the best option.",
  },
  {
    name: "Mauricio Ramos",
    role: "Chapare | Marketing and Outreach Director",
    quote:
      "We love collaborating with EatNaked because of what they believe and stand for: fresh, organic and locally sourced food and businesses. Healthy nutrition is very important for us and supporting a place like EatNaked means a lot to us!",
  },
  {
    name: "Dr. Luis Felipe Restrepo",
    role: "UCalifornia State University, Chico | Head Men's Soccer Coach Founder, Vision Navigator",
    quote:
      "We have enjoyed our partnership with eatnaked. Our focus is always the health and well being of our student athletes as well as providing that winning edge on and off the field.",
  },
  {
    name: "Corey Calliet",
    role: "Celebrity Trainer | Actor | Motivational Speaker",
    quote: "EATnaked is my go to meal company for me and my clients.",
  },
  {
    name: "Andres Ochoa Baeza",
    role: "Men's Soccer Coach",
    quote:
      "Eat Naked provides a great product through and through. Great meals, great variety, great service, great juices, and great leadership. Simply put, EAT Naked is great! In addition to the product, every interaction with the EAT Naked folks is always positive. You know it is a great product when everyone involved is bought into the process.",
  },
  {
    name: "Casey Thomas",
    role: "Registered Dietitian",
    quote:
      "I've been leaning on EatNaked for years for both meal preps and catering events with the athletes I work with. They understand the flexibility and reliability required in athletics and have never given me a reason to switch away. My headaches are removed, the players love the food, and I can adjust the meals to hit my athletes' nutritional needs. I frequently find myself recommending them to other colleagues and clients.",
  },
];

const FLOATERS = [
  { src: "/assets/images/floating-tomato.png", className: "left-[10%] top-[12%]", size: 100, duration: 5 },
  { src: "/assets/images/floating-egg.png", className: "right-[4%] top-[3%]", size: 170, duration: 6 },
  { src: "/assets/images/floating-herb.png", className: "right-[40%] top-[4%]", size: 70, duration: 4.5 },
  { src: "/assets/images/floating-leaf.png", className: "left-[8%] top-[36%]", size: 130, duration: 4 },
  { src: "/assets/images/floating-basil.png", className: "right-[12%] top-[35%]", size: 120, duration: 6.5 },

   { src: "/assets/images/blur1.png", className: "left-[3%] top-[25%]", size: 100, duration: 5, blur: true },
   { src: "/assets/images/blur2.png", className: "left-[20%] top-[25%]", size: 50, duration: 5, blur: true },
   { src: "/assets/images/blur3.png", className: "left-[40%] top-[0%]", size: 180, duration: 5, blur: true },
    { src: "/assets/images/blur4.png", className: "left-[70%] top-[10%]", size: 50, duration: 5, blur: true },
    { src: "/assets/images/blur5.png", className: "right-[8%] top-[28%]", size: 50, duration: 5, blur: true },
    { src: "/assets/images/blur6.png", className: "left-[30%] top-[15%]", size: 70, duration: 5, blur: true },
  
];

const BLOBS = [
  { className: "left-[6%] top-[20%] bg-pink-500/20", size: 140 },
  { className: "right-[4%] top-[28%] bg-pink-500/10", size: 180 },
  { className: "left-[2%] bottom-[30%] bg-pink-400/10", size: 160 },
  { className: "left-[30%] top-[6%] bg-emerald-500/10", size: 120 },
];

function TestimonialCard({ testimonial }: { testimonial: (typeof TESTIMONIALS)[number] }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}

      className="relative w-[340px] shrink-0 rounded-[1.25rem] bg-gradient-to-br from-white/20 via-transparent to-[#f46e35] p-[5px] sm:w-[450px]"
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-[1.15rem] bg-[#0c0c0c] px-7 py-7 shadow-2xl">
        
        <p className="relative text-[13px] font-semibold tracking-wide text-white">
          {testimonial.name}
        </p>
        
        <p className="relative mt-1 text-[9px] font-medium text-[#f46e35]">
          {testimonial.role}
        </p>
        
        <p className="relative mt-4 text-[11px] leading-relaxed text-white/60">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
        
      </div>
    </motion.div>
  );
}

export default function ReadySection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [dragRange, setDragRange] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const controls = useAnimation();

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springX = useSpring(cursorX, { stiffness: 300, damping: 30, mass: 0.5 });
  const springY = useSpring(cursorY, { stiffness: 300, damping: 30, mass: 0.5 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = viewportRef.current?.getBoundingClientRect();
    if (!rect) return;
    cursorX.set(e.clientX - rect.left);
    cursorY.set(e.clientY - rect.top);
  }

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current || !viewportRef.current) return;
      const overflow =
        trackRef.current.scrollWidth - viewportRef.current.offsetWidth;
      setDragRange(Math.max(0, overflow));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
<section 
      id="ready" 
      data-nav-label="Ready"
      className="relative w-full overflow-hidden bg-black py-28"
    >      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-80"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {BLOBS.map((blob, i) => (
        <div
          key={i}
          className={`pointer-events-none absolute rounded-full blur-3xl ${blob.className}`}
          style={{ width: blob.size, height: blob.size }}
        />
      ))}

      {FLOATERS.map((item, i) => (
        <div
          key={i}
          aria-hidden="true"
          className={`pointer-events-none absolute select-none ${item.className} ${
            item.blur ? "opacity-50 blur-[2px]" : ""
          }`}
          style={{ width: item.size, height: item.size }}
        >
          <Image src={item.src} alt="" fill className="object-contain" />
        </div>
      ))}

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <p className="text-sm text-white">It&apos;s a Lifestyle</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
          Are You Ready To EATnaked?
        </h2>
        <p className="mt-4 text-sm text-white/50">
          Customize Your Plan, or Let Us Choose For You.
        </p>

        <motion.a
          href="/bowl-builder/meals"
          initial="rest"
          whileHover="hover"
          whileTap="hover"
          className="mt-8 flex items-center gap-3 rounded-full bg-[#36190a] py-1.5 pl-1.5 pr-6 text-[15px] font-medium text-white transition-colors hover:bg-[#2c1307]"
        >
          <div className="relative flex h-9 w-9 items-center justify-center">
            <motion.div
              variants={{
                rest: { opacity: 0, scale: 0.5 },
                hover: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute h-1.5 w-1.5 rounded-full bg-white"
            />

            <motion.div
              variants={{
                rest: { opacity: 1, scale: 1 },
                hover: { opacity: 0, scale: 0.5 },
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center rounded-full bg-[#f46e35]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </div>
          Get Started
        </motion.a>
      </div>

      <div
        ref={viewportRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="relative z-10 mt-20 w-full cursor-grab overflow-hidden px-6 active:cursor-grabbing lg:px-12"
      >
        <motion.div
          ref={trackRef}
          drag="x"
          dragConstraints={{ left: -dragRange, right: 0 }}
          dragElastic={0.08}
          animate={controls}
          className="flex gap-6"
        >
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </motion.div>

        <motion.div
          style={{ left: springX, top: springY }}
          animate={{ opacity: isHovering ? 1 : 0, scale: isHovering ? 1 : 0.8 }}
          transition={{ opacity: { duration: 0.2 }, scale: { duration: 0.2 } }}
          className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-1/2"
        >
          <span className="flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-[#2a2a2a]/80 px-5 py-2 text-[15px] font-medium text-white shadow-xl backdrop-blur-md">
  Drag <span aria-hidden="true" className="text-lg leading-none">↔</span>
</span>
        </motion.div>
      </div>
    </section>
  );
}