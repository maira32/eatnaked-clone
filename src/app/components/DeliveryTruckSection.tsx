"use client";

import React from "react";

export default function DeliveryTruckSection() {
  return (
    <section className="relative h-screen isolate"  id="source" data-nav-label="Source">
      <video
        className="absolute inset-0 -z-10 h-full w-full object-cover pointer-events-none select-none"
        muted
        playsInline
        preload="metadata"
        autoPlay
        loop
      >
        <source
          src="/assets/videos/delivered-showreel-portrait.mp4"
          media="(orientation: portrait)"
          type="video/mp4"
        />
        <source
          src="/assets/videos/delivered-showreel-landscape.mp4"
          media="(orientation: landscape)"
          type="video/mp4"
        />
      </video>

<div className="flex h-full flex-col justify-between px-12 pt-32 pb-12 text-white">
  <div className="mx-auto w-[60rem] max-w-full text-center">
    <h2 className="text-[5.2rem] leading-tight font-medium">
      Homemade Meals, Delivered Daily
    </h2>
  </div>


<div className="max-w-[17.3rem] rounded-[2rem] border border-[#363535] bg-white/[0.11] p-8 backdrop-blur-[28.7px]">
  <div className="grid gap-[1.4rem] [@media(orientation:portrait)]:gap-8">
    <svg
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[31px]"
    >
      <g clipPath="url(#clip0_3255_1640)">
        <path
          d="M18.9245 15.5711C18.2455 16.2209 17.5294 17.1007 16.8786 18.2805C16.2356 15.9589 15.4251 14.2569 14.6058 13.0108C18.3653 0.450094 0.0429688 0 0.0429688 0C0.0429688 0 0.577822 15.6987 10.1467 15.3383C10.1272 14.2871 9.96453 13.2242 9.73656 12.2276C9.5875 11.5777 9.41019 10.9581 9.22704 10.3863C8.61522 8.48944 7.92449 7.14305 7.92449 7.14305C8.62204 8.08026 9.2397 8.97461 9.78527 9.81537C11.6626 12.704 12.6875 14.9505 13.1639 16.1371C14.3398 18.6633 15.3959 22.8184 15.3959 29.6088C15.3959 30.3775 16.0203 31 16.7861 31C17.5538 31 18.1773 30.3775 18.1773 29.6088C18.1773 27.408 18.0711 25.4498 17.8792 23.703C18.3224 21.5714 18.9917 20.0584 19.6844 18.9868C20.1394 18.1187 20.9782 16.6321 22.1083 15.1142C23.1147 13.7639 24.3559 12.3883 25.7597 11.4063C25.7597 11.4063 22.8809 14.593 22.6948 17.7125C30.6465 18.1275 30.9553 5.61741 30.9553 5.61741C30.9553 5.61741 16.4032 6.11427 18.9245 15.5711Z"
          fill="white"
          fillOpacity="0.51"
        />
      </g>
      <defs>
        <clipPath id="clip0_3255_1640">
          <rect width="31" height="31" fill="white" />
        </clipPath>
      </defs>
    </svg>

    <h3 className="w-[70%] text-[1.4rem] font-medium leading-none">
      Fresh, Never Frozen
    </h3>

    <p className="text-[1.2rem] leading-none opacity-50">
      Streamlined deliveries that accommodate YOUR lifestyle.
    </p>
  </div>
</div>
      </div>
    </section>
  );
}
