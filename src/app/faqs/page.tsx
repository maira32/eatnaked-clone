"use client";

import Navbar from "../components/Navbar";
import Footer from '../components/Footer';


const FAQS = [
  "Is There A Delivery Charge?",
  "Does Someone Have To Be Home?",
  "How Long Do Your Meals Last?",
  "How Long Until I Receive My Order?",
  "How Does Your Company Handle Food Allergies?",
];

export default function FAQsPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#080808] text-white">
      <Navbar />

      <div className="pointer-events-none absolute left-1/2 top-[-160px] h-[350px] w-[550px] -translate-x-1/2 rounded-full bg-[#c45d2d]/20 blur-[120px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='104' height='128'%3E%3Cpath d='M44 64h16 M52 56v16' stroke='rgba(255,255,255,0.09)' stroke-width='1'/%3E%3C/svg%3E"),
            linear-gradient(to right, rgba(255,255,255,0.055) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.055) 1px, transparent 1px)
          `,
          backgroundSize: "104px 128px, 26px 32px, 26px 32px",
          backgroundPosition: "left top, left top, left top",
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent_0%,rgba(0,0,0,0.15)_55%,rgba(0,0,0,0.65)_100%)]" />

      <section className="relative z-10 flex min-h-screen w-full items-center px-6 pb-12 pt-24 lg:px-[6%] lg:pt-20">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          
          <div className="flex w-full flex-col justify-center lg:w-[45%]">
            <div className="max-w-[550px]">
              <h1 className="text-[44px] font-normal leading-[1.02] tracking-[-0.03em] sm:text-[54px] lg:text-[60px]">
                Frequently
                <br />
                <span className="text-[#f4773b]">Asked</span>{" "}
                <span>Questions</span>
              </h1>

              <p className="mt-4 text-[13px] font-normal text-white/60">
                If you can&apos;t find your answers, live chat with us!
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col gap-3.5 lg:w-[48%]">
            {FAQS.map((question, index) => (
              <button
                key={index}
                type="button"
                className="group flex h-[72px] w-full items-center justify-between rounded-[22px] border border-white/[0.12] bg-[#141414]/90 px-6 text-left backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-[#1a1a1a]"
              >
                <span className="pr-4 text-[15px] font-normal tracking-[-0.01em] text-white sm:text-[17px]">
                  {question}
                </span>

                <span className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#2a2a2a] text-white transition-all duration-300 group-hover:bg-[#383838] group-hover:translate-x-1">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <path
                      d="M14 7L19 12L14 17"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
                  <Footer/>
      
    </main>
  );
}