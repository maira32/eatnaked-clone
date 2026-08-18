"use client";

import Navbar from "../components/Navbar";
import Footer from '../components/Footer';


export default function AboutUsPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
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
      <Navbar />

      <div className="flex min-h-screen w-full flex-col lg:flex-row items-center pt-28 lg:pt-0">
        <div className="relative flex w-full flex-col justify-center px-6 py-12 lg:w-[55%] lg:px-20 lg:py-0">
          

          <div className="relative z-10 max-w-xl">
            <span className="flex w-fit items-center gap-2 rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm">
              <span className="h-1 w-1 rounded-full bg-white/70" />
              About Us
            </span>

            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-[35px] lg:leading-[1.1]">
              Prepared With The Highest Quality Ingredients. Meals Delivered Daily Directly To You.
            </h1>

            <p className="mt-3 text-[12px]  leading-relaxed text-white/50">
              <span className="font-medium text-white">Established to</span>{" "}
              accommodate fitness enthusiasts, busy professionals, and
              everyday families. We believe in delicious, attainable, and
              affordable meals for all.
            </p>

            <a
              href="/menu"
              className="group mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#2a170f]/80 p-1.5 pr-6 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-[#3d1f14]"
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
                See Our Menu
              </span>
            </a>
          </div>
        </div>

        <div className="relative flex w-full justify-center px-6 pb-20 lg:w-[60%] lg:px-12 lg:pt-20 lg:pb-0">
  <div className="relative h-[320px] w-full max-w-[900px] overflow-hidden rounded-[2.5rem] border border-white/15 shadow-[0_0_50px_-15px_rgba(212,112,58,0.25)] lg:h-[440px]">
            <img
              src="/assets/images/ab-1.avif"
              alt="Chef plating a freshly prepared meal"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
            <Footer/>

    </main>
  );
}