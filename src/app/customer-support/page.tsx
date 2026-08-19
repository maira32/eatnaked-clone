"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactUsPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <Navbar />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-[3] h-40 bg-gradient-to-b from-black via-black/90 to-transparent" />

      <div className="pointer-events-none absolute inset-x-0 top-20 z-0 w-full">
        <img
          src="/assets/images/contact-collage.png"
          alt=""
          className="w-full object-cover"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 900px 700px at center 30%, rgba(0,0,0,0.95) 20%, rgba(0,0,0,0.6) 55%, transparent 85%)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 z-[2] opacity-100"
        style={{
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='104' height='128'%3E%3Cpath d='M44 64h16 M52 56v16' stroke='rgba(255,255,255,0.15)' stroke-width='1'/%3E%3C/svg%3E"),
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "104px 128px, 26px 32px, 26px 32px",
          backgroundPosition: "left top, left top, left top",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-[650px] flex-col items-center px-6 pt-40 pb-24 text-center">
        <span className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm">
          <span className="h-1 w-1 rounded-full bg-white/70" />
          Contact Us
        </span>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
          We Are Here To <br /> Help You
        </h1>

        <form onSubmit={(e) => e.preventDefault()} className="mt-10 flex w-full flex-col gap-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-full border border-transparent bg-[#1a1a1a] px-6 py-4 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-white/10 focus:bg-[#222]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-full border border-transparent bg-[#1a1a1a] px-6 py-4 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-white/10 focus:bg-[#222]"
            />
            <input
              type="text"
              placeholder="Address"
              className="w-full rounded-full border border-transparent bg-[#1a1a1a] px-6 py-4 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-white/10 focus:bg-[#222]"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full rounded-full border border-transparent bg-[#1a1a1a] px-6 py-4 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-white/10 focus:bg-[#222]"
            />
          </div>

          <textarea
            placeholder="Message"
            rows={5}
            className="w-full resize-none rounded-[2rem] border border-transparent bg-[#1a1a1a] px-6 py-5 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-white/10 focus:bg-[#222]"
          />

          <button
            type="submit"
            className="group mt-2 flex items-center justify-center gap-3 self-start rounded-full border border-white/10 bg-[#2a170f]/80 p-1.5 pr-6 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-[#3d1f14]"
          >
            <div className="relative flex h-9 w-9 items-center justify-center">
              <div className="absolute h-1.5 w-1.5 scale-0 rounded-full bg-white opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100" />

              <div className="absolute inset-0 flex items-center justify-center rounded-full bg-gradient-to-br from-[#d4703a] to-[#b55829] shadow-md transition-all duration-300 ease-out group-hover:scale-0 group-hover:opacity-0">
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
              Send
            </span>
          </button>
        </form>
      </div>
      
      <Footer />
    </main>
  );
}