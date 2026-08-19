"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
   <footer
  id="footer"
  data-nav-label="Footer"
  className="relative flex w-full flex-col overflow-hidden bg-black pb-8 pt-24 lg:pt-32"
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

      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-[350px] w-[60%] -translate-x-1/2 rounded-full bg-[#f46e35]/15 blur-[120px]" />

      <div className="relative z-10 flex w-full flex-col px-6 md:px-12 xl:px-20">
        
        <div className="flex flex-col justify-between gap-16 md:flex-row md:gap-8">
          
          <div className="flex gap-20 sm:gap-28 lg:gap-36">
            <ul className="flex flex-col gap-2.5 text-xs">
              <li><a href="#" className="font-semibold text-white hover:text-[#f46e35] transition-colors">Home</a></li>
              <li><a href="#" className="font-medium text-white/50 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="font-medium text-white/50 hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="font-medium text-white/50 hover:text-white transition-colors">Menu</a></li>
              <li><a href="#" className="font-medium text-white/50 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
            <ul className="flex flex-col gap-2.5 text-xs">
              <li><a href="#" className="font-medium text-white/50 hover:text-white transition-colors">Login</a></li>
              <li><a href="#" className="font-medium text-white/50 hover:text-white transition-colors">Register</a></li>
            </ul>
          </div>

          <div className="flex gap-16 sm:gap-24 lg:gap-32">
            <ul className="flex flex-col gap-2.5 text-xs">
              <li><a href="mailto:connect@eatnaked.co" className="font-semibold text-white hover:text-[#f46e35] transition-colors">connect@eatnaked.co</a></li>
              <li><a href="tel:+19092765351" className="font-semibold text-white hover:text-[#f46e35] transition-colors">+1 909-276-5351</a></li>
              <li className="font-semibold text-white">2032 Lincoln Ave., Pasadena, CA 91001</li>
            </ul>
            <ul className="flex flex-col gap-2.5 text-xs">
              <li><a href="#" className="font-semibold text-white hover:text-[#f46e35] transition-colors">Facebook</a></li>
              <li><a href="#" className="font-semibold text-white hover:text-[#f46e35] transition-colors">Instagram</a></li>
              <li><a href="#" className="font-semibold text-white hover:text-[#f46e35] transition-colors">Tiktok</a></li>
            </ul>
          </div>

        </div>

        <div className="mt-24 mb-6 flex items-end justify-between sm:mt-32">
          <h2 className="text-[17vw] font-bold leading-[0.75] tracking-tight text-white xl:text-[230px]">
            EATnaked
          </h2>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mb-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f46e35] text-white shadow-xl sm:mb-2 sm:h-20 sm:w-20 lg:h-24 lg:w-24"
            aria-label="Scroll to top"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 sm:h-10 sm:w-10"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </motion.button>
        </div>

        <div className="flex flex-col-reverse items-center justify-between gap-6 pt-2 pb-2 text-[11px] font-medium text-white/50 sm:flex-row">
          <p className="font-semibold text-white">© All rights reserved 2026</p>
          <div className="flex gap-8 sm:gap-10">
            <a href="#" className="hover:text-white transition-colors">Terms and Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}