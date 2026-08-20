"use client";
import { motion} from "framer-motion";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function DecorativeCircle() {
  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 z-[-1] -translate-x-1/2 -translate-y-1/2 w-[240%] max-w-none flex justify-center items-center">
      <img
        src="/assets/images/image-points-about.webp"
        alt="Decorative background rings"
        className="w-full h-auto opacity-100"
      />
    </div>
  );
}

const BOWL_TAGS = [
  {
    label: "Grains",
    icon: "/assets/images/grains.png",
    className: "right-[-15%] top-[10%] lg:right-[-5%] lg:top-[0%]",
  },
  {
    label: "Vegetables",
    icon: "/assets/images/vegetables-icon.png",
    className: "left-[-20%] top-[48%] lg:left-[-20%] lg:top-[50%]",
  },
  {
    label: "Proteins",
    icon: "/assets/images/proteins-icon.png",
    className: "right-[-10%] bottom-[12%] lg:right-[-20%] lg:bottom-[15%]",
  },
];

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
              Prepared With The Highest Quality Ingredients. Meals Delivered
              Daily Directly To You.
            </h1>

            <p className="mt-3 text-[12px]  leading-relaxed text-white/50">
              <span className="font-medium text-white">Established to</span>{" "}
              accommodate fitness enthusiasts, busy professionals, and
              everyday families. We believe in delicious, attainable, and
              affordable meals for all.
            </p>

            <a
              href=""
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

     <section className="relative z-10 px-6 py-32">
  
 
  <motion.div 
    initial={{ opacity: 0.2, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: false, amount: 0.6, margin: "2000px 0px 0px 0px" }}
    transition={{ 
      duration: 2, 
      ease: [0, 0.71, 0.2, 1.01] 
    }}
    className="mx-auto max-w-7xl text-center"
  >
    <h2 className="text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
      <span className="text-[#F4783E]">Our Menu</span> Is Designed With Balance And Variety In
      <br className="hidden md:block" />
      Mind And Making Nutrition Easy To{" "}
      <span aria-hidden="true" className="inline-block text-[#F4783E]">
        ✦
      </span>{" "}
      Fit Into <span className="text-[#F4783E]">Your</span>
      <br className="hidden md:block" />
      <span className="text-[#F4783E]">Lifestyle.</span>
    </h2>
    
    <p className="mx-auto mt-6 max-w-3xl text-sm text-white/70 sm:text-base">
      Every meal is portioned for optimal health, delivered fresh, and ready to eat - so you can spend
      <br className="hidden md:block" />
      less time in the kitchen and more time doing what you love.
    </p>
  </motion.div>

  <div className="mx-auto mt-16 grid w-full grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
  
  <motion.div 
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: false, amount: 0.7, margin: "2000px 0px 0px 0px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="flex flex-col items-center justify-center gap-8 text-center rounded-[2.5rem] border-8 border-white/10 bg-[#0f0c0c] p-10"
  >
    <div className="flex w-fit items-center gap-3">
      <span className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white">
        <span className="h-1 w-1 rounded-full bg-white/70" />
        Stay Healthy
      </span>
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2c-4 4-6 8-6 12a6 6 0 0 0 12 0c0-4-2-8-6-12Z"
            stroke="currentColor"
            strokeWidth={1.6}
          />
        </svg>
      </span>
    </div>

    <h3 className="text-2xl font-semibold leading-snug text-white sm:text-3xl">
      With{" "}
      <span className="text-[#F4783E]">
        School, Work, Family, Etc.
      </span>{" "}
      All Packed Into Your Daily Schedule, It&apos;s Easy To Allow
      Healthy Eating To Fall By The Wayside
    </h3>
  </motion.div>

  <motion.div 
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false, amount: 0.7, margin: "2000px 0px 0px 0px" }}
    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
    className="relative flex w-full flex-col gap-4 lg:gap-6"
  >
    <div className="relative h-48 w-full overflow-hidden rounded-2xl sm:h-56">
      <img
        src="/assets/images/ab-2.avif"
        alt="Spread of prepared meals and cold-pressed juices"
        className="h-full w-full object-cover"
      />
    </div>

    <div className="grid grid-cols-3 gap-4">
      <div className="relative col-span-2 h-40 overflow-hidden rounded-2xl">
        <img
          src="/assets/images/ab-3.avif"
          alt="Yogurt parfait and hummus veggie platter"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative col-span-1 h-40 overflow-hidden rounded-2xl">
        <img
          src="/assets/images/ab-4.avif"
          alt="Salmon with mashed potatoes and broccoli"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  </motion.div>
  
</div>
      </section>

      <section className="relative z-10 flex flex-col items-center justify-center overflow-hidden px-6 py-32 lg:py-52">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3, margin: "2000px 0px 0px 0px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 mx-auto aspect-square w-full max-w-[280px] sm:max-w-md lg:max-w-xl"
        >
          <DecorativeCircle />

          <img
            src="/assets/images/ab-5.webp"
            alt="Bowl with grains, vegetables, and grilled chicken"
            className="relative z-10 h-full w-full rounded-full object-cover drop-shadow-[0_0_60px_rgba(0,0,0,0.8)]"
          />

          {BOWL_TAGS.map((tag) => (
            <div
              key={tag.label}
              className={`absolute z-20 flex items-center gap-3 sm:gap-4 rounded-[2.5rem] border border-white/10 bg-[#2a2a2a] px-4 py-2.5 sm:px-6 sm:py-3.5 text-sm sm:text-base font-medium text-white/90 shadow-2xl transition-transform hover:scale-105 ${tag.className}`}
            >
              <Image
                src={tag.icon}
                alt=""
                width={32}
                height={32}
                className="object-contain w-6 h-6 sm:h-8 sm:w-8"
              />
              {tag.label}
            </div>
          ))}
        </motion.div>

        <div 
          className="relative z-10 mx-auto mt-20 max-w-4xl text-center lg:mt-30"
        >
          <h2 className="text-3xl  leading-tight text-white sm:text-4xl lg:text-5xl">
            We Believe That Eating Healthy{" "}
            <span className="text-[#F4783E]">Does Not Have</span> To Be
            Bland, Boring Or Restrictive.
          </h2>
        </div>
      </section>

<section className="relative z-10 overflow-hidden px-6 py-24">
  <div className="mx-auto grid w-full items-stretch gap-6 lg:grid-cols-2">
    
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: false, amount: 0.2, margin: "2000px 0px 0px 0px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative flex w-full overflow-hidden rounded-3xl h-[320px] lg:h-[380px]"
    >
      <img
        src="/assets/images/ab-6.avif"
        alt="Spices and seasonings laid out in bowls"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </motion.div>

    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: false, amount: 0.2, margin: "2000px 0px 0px 0px" }}   
   transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      className="relative w-full h-[320px] lg:h-[380px]"
    >
    
      <div className="relative flex h-full w-full flex-col justify-center rounded-3xl border-8 border-white/10 bg-[#111] p-8 sm:p-10 lg:p-12">
        <span className="flex w-fit items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 text-xs text-white">
          <span className="h-1 w-1 rounded-full bg-white/70" />
          Always Fresh
        </span>

        <p className="mt-6 text-xs text-white/70 sm:text-sm">
          Our ever-evolving menu celebrates the best of each season
        </p>

        <h3 className="mt-3 text-2xl font-medium leading-tight text-white sm:text-3xl lg:text-4xl">
          Blending Culinary Creativity With <br className="hidden xl:block" />
          <span className="text-[#F4783E]">
            Fresh, Vibrant Ingredients.
          </span>
        </h3>

        <p className="mt-4 text-xs leading-relaxed text-white/50 sm:text-sm pr-4">
          From everyday dining to holidays and special occasions, every
          dish is crafted to elevate your table and fit seamlessly into
          your lifestyle.
        </p>
      </div>
    </motion.div>
    
  </div>
</section>

      <Footer />
    </main>
  );
}