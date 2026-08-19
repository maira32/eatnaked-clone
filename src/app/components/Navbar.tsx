"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "About", href: "/about-us" },
  { label: "FAQs", href: "/faqs" },
  { label: "Community", href: "/community" },
  { label: "Contact", href: "/customer-support" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-6 lg:px-16 lg:py-8"
    >
      <div className="flex items-center gap-6 lg:gap-10">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 transition-transform duration-300 hover:scale-90"
        >
          <Image
            src="/assets/images/eatnaked-logo.png"
            alt="EATnaked logo"
            width={40}
            height={40}
            className="h-9 w-auto"
          />
        </Link>

        <button
          aria-label="Open menu"
          className="group hidden w-8 flex-col gap-1.5 md:flex"
        >
          <span className="block h-px w-6 bg-white/70 transition-all duration-300 group-hover:w-8" />
          <span className="block h-px w-6 self-end bg-white/70 transition-all duration-300 group-hover:w-8" />
        </button>
      </div>

      <nav className="hidden items-center gap-8 lg:flex">
        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.label}
              href={link.href}
              className="group flex items-center gap-2 text-[14px] font-medium"
            >
              <span
                className={`h-1 w-1 rounded-full transition-colors duration-300 ${
                  isActive ? "bg-orange-500" : "bg-white/60 group-hover:bg-orange-500"
                }`}
              />

              <span className="relative h-5 overflow-hidden">
                <span
                  className={`flex h-5 items-center text-white transition-transform duration-250 ease-out ${
                    isActive ? "translate-y-5" : "group-hover:translate-y-5"
                  }`}
                >
                  {link.label}
                </span>
                <span
                  className={`absolute bottom-full left-0 flex h-5 items-center text-orange-500 transition-transform duration-250 ease-out ${
                    isActive ? "translate-y-5" : "group-hover:translate-y-5"
                  }`}
                >
                  {link.label}
                </span>
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center gap-4 lg:gap-8">
        <Link
          href="/login"
          className="group relative hidden text-sm font-medium text-orange-500 transition-colors sm:block"
        >
          Current Customer?
          <span className="absolute -bottom-1 left-0 h-[1px] w-full origin-left scale-x-0 bg-orange-500 transition-transform duration-300 ease-out group-hover:scale-x-100" />
        </Link>

        <Link
          href="/login"
          className="group flex items-center gap-3 rounded-full bg-white/10 py-1.5 pl-1.5 pr-5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-[#1a1a1a]"
        >
          <div className="relative flex h-8 w-8 items-center justify-center">
            <span className="absolute inset-0 flex items-center justify-center rounded-full bg-orange-500 transition-all duration-300 ease-out group-hover:scale-0 group-hover:opacity-0">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                className="text-white"
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <span className="absolute h-1.5 w-1.5 scale-0 rounded-full bg-white opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100" />
          </div>
          Order Now
        </Link>
      </div>
    </motion.header>
  );
}