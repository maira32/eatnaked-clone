"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "About", href: "/about-us" },
  { label: "FAQs", href: "/faqs" },
  { label: "Community", href: "/community" },
  { label: "Contact", href: "/customer-support" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 lg:px-16 lg:py-8"
    >
      <Link href="/" className="flex items-center gap-2 shrink-0">
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
        className="hidden md:flex flex-col gap-1.5 mx-6"
      >
        <span className="block h-px w-8 bg-white/70" />
        <span className="block h-px w-8 bg-white/70" />
      </button>

      <nav className="hidden lg:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="group flex items-center gap-2 text-sm text-white/90 transition-colors hover:text-white"
          >
            <span className="h-1 w-1 rounded-full bg-white/60 transition-colors group-hover:bg-orange-400" />
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4 lg:gap-6">
        <Link
          href="/login"
          className="hidden sm:block text-sm font-medium text-orange-400 hover:text-orange-300 transition-colors"
        >
          Current Customer?
        </Link>
        <Link
          href="/bowl-builder/meals"
          className="flex items-center gap-3 rounded-full bg-white/10 py-2 pl-4 pr-2 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
        >
         
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500">
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
           Order Now
        </Link>
      </div>
    </motion.header>
  );
}