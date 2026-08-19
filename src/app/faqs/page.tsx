"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FAQ_DATA = [
  {
    id: 1,
    question: "Is There A Delivery Charge?",
    answer: (
      <>
        <span className="text-white">Delivery pricing depends on your selected plan.</span>{" "}
        <span className="text-white/60">
          Standard members pay $20 per delivery, while Platinum members enjoy a preferred $10 delivery rate.
        </span>
      </>
    ),
  },
  {
    id: 2,
    question: "Does Someone Have To Be Home?",
    answer: (
      <>
        <span className="text-white">No, you don't need to be home.</span>{" "}
        <span className="text-white/60">
          Our meals are delivered in insulated cooler bags with ice packs to stay fresh until you return.
        </span>
      </>
    ),
  },
  {
    id: 3,
    question: "How Long Do Your Meals Last?",
    answer: (
      <>
        <span className="text-white">Our meals are fresh, never frozen.</span>{" "}
        <span className="text-white/60">
          They are designed to stay fresh in your refrigerator for up to 5 days after delivery.
        </span>
      </>
    ),
  },
  {
    id: 4,
    question: "How Long Until I Receive My Order?",
    answer: (
      <>
        <span className="text-white">Orders are processed quickly.</span>{" "}
        <span className="text-white/60">
          Typically, you will receive your meals within 48-72 hours of placing your order, depending on your assigned delivery day.
        </span>
      </>
    ),
  },
  {
    id: 5,
    question: "How Does Your Company Handle Food Allergies?",
    answer: (
      <>
        <span className="text-white">We take food allergies seriously.</span>{" "}
        <span className="text-white/60">
          While we accommodate many dietary restrictions, our kitchen processes nuts, dairy, and gluten. Please check individual meal ingredients on your dashboard.
        </span>
      </>
    ),
  },
];

export default function FAQsPage() {
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);

  return (
    <main className="relative min-h-screen w-full bg-[#080808] text-white">
      <Navbar />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-160px] h-[350px] w-[550px] -translate-x-1/2 rounded-full bg-[#c45d2d]/20 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-70"
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

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent_0%,rgba(0,0,0,0.15)_55%,rgba(0,0,0,0.65)_100%)]" />
      </div>

      <section className="relative z-10 flex w-full items-start px-6 pt-32 pb-12 lg:px-[6%] xl:pt-36">
        
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          
          <div className="flex h-fit w-full flex-col justify-center lg:sticky lg:top-32 lg:w-[45%] z-20">
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
          <div className="flex w-full flex-col gap-3.5 lg:w-[48%] pb-[30vh] lg:pb-[50vh]">
            {FAQ_DATA.map((faq) => {
              const isOpen = openFaqId === faq.id;

              return (
                <div
                  key={faq.id}
                  onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  className="group relative cursor-pointer overflow-hidden rounded-[22px] border border-white/[0.12] bg-[#141414]/90 backdrop-blur-sm transition-all duration-500 hover:border-white/30 hover:bg-[#1a1a1a]"
                >
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-[#d4703a]/5 to-[#d4703a]/20 transition-opacity duration-500 ${
                      isOpen ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  <div className="relative z-10 px-6 py-5 sm:py-6">
                    <div className="flex items-center justify-between gap-6">
                      <span className="text-[15px] font-normal tracking-[-0.01em] text-white sm:text-[17px]">
                        {faq.question}
                      </span>

                      <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className={`flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                          isOpen 
                            ? "bg-[#f46e35] text-white shadow-lg" 
                            : "bg-[#2a2a2a] text-white group-hover:bg-[#383838]"
                        }`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </motion.div>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <p className="pt-4 pr-10 text-[14px] leading-relaxed sm:pt-5 sm:pr-14">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}