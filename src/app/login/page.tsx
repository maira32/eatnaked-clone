"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';


const FLOATERS = [
  { src: "/assets/images/floating-tomato.png", className: "left-[10%] top-[12%]", size: 100, initialX: -80, initialY: -60 },
  { src: "/assets/images/floating-egg.png", className: "right-[4%] top-[3%]", size: 170, initialX: 90, initialY: -80 },
  { src: "/assets/images/floating-herb.png", className: "right-[40%] top-[4%]", size: 70, initialX: 0, initialY: -60 },
  { src: "/assets/images/floating-leaf.png", className: "left-[8%] top-[36%]", size: 130, initialX: -90, initialY: 40 },
  { src: "/assets/images/floating-basil.png", className: "right-[12%] top-[35%]", size: 120, initialX: 80, initialY: 50 },
  { src: "/assets/images/blur1.png", className: "left-[3%] top-[25%]", size: 100, initialX: -60, initialY: 0, blur: true },
  { src: "/assets/images/blur2.png", className: "left-[20%] top-[25%]", size: 50, initialX: -40, initialY: -30, blur: true },
  { src: "/assets/images/blur3.png", className: "left-[40%] top-[0%]", size: 180, initialX: 0, initialY: -100, blur: true },
  { src: "/assets/images/blur4.png", className: "left-[70%] top-[10%]", size: 50, initialX: 40, initialY: -40, blur: true },
  { src: "/assets/images/blur5.png", className: "right-[8%] top-[28%]", size: 50, initialX: 60, initialY: 20, blur: true },
  { src: "/assets/images/blur6.png", className: "left-[30%] top-[15%]", size: 70, initialX: -30, initialY: -50, blur: true },
];

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      <Navbar />

      <div
        className="absolute inset-0 z-0 opacity-80"
        style={{
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='104' height='128'%3E%3Cpath d='M44 64h16 M52 56v16' stroke='rgba(255,255,255,0.1)' stroke-width='1'/%3E%3C/svg%3E"),
            linear-gradient(to right, rgba(255, 255, 255, 0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.07) 1px, transparent 1px)
          `,
          backgroundSize: "104px 128px, 26px 32px, 26px 32px",
          backgroundPosition: "left top, left top, left top",
        }}
      />

      {FLOATERS.map((item, i) => (
        <motion.div
          key={i}
          aria-hidden="true"
          initial={{ opacity: 0, x: item.initialX, y: item.initialY, scale: 0.8 }}
          animate={{ opacity: item.blur ? 0.5 : 1, x: 0, y: 0, scale: 1 }}
          transition={{
            duration: 1,
            delay: i * 0.06, 
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`pointer-events-none absolute select-none ${item.className} ${
            item.blur ? "blur-[2px]" : ""
          }`}
          style={{ width: item.size, height: item.size }}
        >
          <Image src={item.src} alt="" fill className="object-contain" />
        </motion.div>
      ))}

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-16">
        <span className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm">
          <span className="h-1 w-1 rounded-full bg-white/70" />
          Login
        </span>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          Welcome Back!
        </h1>

        <form className="mt-10 flex w-full max-w-[380px] flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-full border border-transparent bg-[#1a1a1a] px-6 py-4 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-white/10 focus:bg-[#222]"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full rounded-full border border-transparent bg-[#1a1a1a] px-6 py-4 pr-12 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-white/10 focus:bg-[#222]"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-white/40 transition-colors hover:text-white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z"
                  stroke="currentColor"
                  strokeWidth={1.5}
                />
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth={1.5} />
                {showPassword && (
                  <line
                    x1="4"
                    y1="20"
                    x2="20"
                    y2="4"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  />
                )}
              </svg>
            </button>
          </div>

          <a
            href="/forgot-password"
            className="mt-1 self-center text-[13px] font-medium text-[#d4703a] transition-colors hover:text-[#e67332]"
          >
            Forgot Password?
          </a>

          <button
            type="submit"
            className="group mt-6 flex items-center justify-center gap-3 self-center rounded-full border border-white/10 bg-[#2a170f]/80 p-1.5 pr-6 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-[#3d1f14]"
          >
            <div className="relative flex h-9 w-9 items-center justify-center">
              <div className="absolute h-1.5 w-1.5 scale-0 rounded-full bg-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
              <div className="absolute inset-0 flex items-center justify-center rounded-full bg-gradient-to-br from-[#d4703a] to-[#b55829] shadow-md transition-all duration-300 group-hover:scale-0 group-hover:opacity-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <span className="transition-all duration-300 group-hover:ml-1">
              Login
            </span>
          </button>
        </form>

        <p className="mt-8 text-[13px] font-medium text-white/70">
          No account?{" "}
          <a href="/register" className="text-[#d4703a] transition-colors hover:text-[#e67332]">
            Register
          </a>
        </p>
      </div>
                  <Footer/>
      
    </main>
  );
}