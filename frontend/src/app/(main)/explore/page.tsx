"use client";

import React from "react";
import Image from "next/image";

export default function ExploreFeed() {
  return (
    <div className="relative w-full max-w-md mx-auto h-[100dvh] bg-[#080c12] overflow-hidden flex flex-col justify-between">
      {/* Vertical Video Backdrop Mockup with Scrim Gradients */}
      <div className="absolute inset-0 z-0 bg-black">
        <img
          className="w-full h-full object-cover object-center transform scale-105 filter brightness-90 contrast-105"
          alt="Cinematic high-angle view of a state-of-the-art precision CNC factory floor"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD27K7uaU-PsuYCujPxH8p9rfJkidPouP3savOgUnlydP1rB7pH_CspmT3euuryAp1wsznjR9IjFyEMq06qaDY2tUs9WIbXRdzfdf_MuMck5qs_V5Xj53JmdIaYVt7BKNCVo-Kvm9Ohm-PI3goE14MAJcznEDZ7Gr6I7tMnCyryM0-O6vLhmHgJYdMiiJ6wa26Xx7Z4ScTllzXcGfp8AhhMQ2VMk3wAb2CsyNKNZw2hb-88gyQzDb7gCQ"
        />
        {/* Top Scrim Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080c12]/90 via-[#080c12]/20 to-transparent h-44 pointer-events-none"></div>
        {/* Bottom Scrim Gradient */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#080c12] via-[#080c12]/80 to-transparent h-96 pointer-events-none"></div>
      </div>

      {/* Top Transparent Header Overlay */}
      <header className="relative z-20 pt-3 px-4 flex flex-col gap-2">
        {/* Status Bar / Primary Controls */}
        <div className="flex items-center justify-between h-11 w-full">
          {/* Live Dispatch Indicator */}
          <div className="flex items-center gap-2 bg-[#1e2229]/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#76777c]/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#479a4c] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#479a4c]"></span>
            </span>
            <span className="text-[#479a4c] font-mono text-[10px] uppercase tracking-wider font-semibold">
              LIVE DISPATCH
            </span>
          </div>
          {/* Right Tool Controls */}
          <div className="flex items-center gap-2">
            <button
              aria-label="Audio Feed"
              className="w-9 h-9 rounded-full bg-[#1e2229]/80 backdrop-blur-md flex items-center justify-center text-white border border-[#76777c]/30 hover:bg-white/10 transition-colors duration-150 active:scale-95"
            >
              <span className="material-symbols-outlined text-[18px]">volume_up</span>
            </button>
            <button
              aria-label="Search Feed"
              className="w-9 h-9 rounded-full bg-[#1e2229]/80 backdrop-blur-md flex items-center justify-center text-white border border-[#76777c]/30 hover:bg-white/10 transition-colors duration-150 active:scale-95"
            >
              <span className="material-symbols-outlined text-[18px]">search</span>
            </button>
          </div>
        </div>
        {/* Segment Tabs Selector */}
        <nav className="flex items-center justify-center gap-6 py-1">
          <button className="relative py-1 text-white/70 text-sm font-medium hover:text-white transition-colors duration-150">
            Near Me
          </button>
          <button className="relative py-1 text-white text-sm font-semibold">
            Trending
            <span className="absolute bottom-0 inset-x-1/4 h-0.5 bg-[#479a4c] rounded-full"></span>
          </button>
          <button className="relative py-1 text-white/70 text-sm font-medium hover:text-white transition-colors duration-150 flex items-center gap-1">
            Verified OEMs
            <span
              className="material-symbols-outlined text-[14px] text-[#479a4c]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified
            </span>
          </button>
        </nav>
      </header>

      {/* Mid-Right Vertical Action Rail (Reels Interaction Stack) */}
      <div className="absolute right-3 bottom-[120px] z-20 flex flex-col items-center gap-4">
        {/* Company Profile Avatar + Quick Follow */}
        <div className="relative flex flex-col items-center">
          <div className="w-11 h-11 rounded-full p-0.5 bg-gradient-to-tr from-[#479a4c] via-white to-[#d0e1fb]">
            <img
              className="w-full h-full rounded-full object-cover bg-[#1e2229]"
              alt="Company Logo"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6lztnBgvo-icwfvUKY5Aggj7R9IGlBE5HcWs-3g6GbkmH9jbSd_bYYx_tR_5tkuyTwe-WTe9kdY2K2k44RYVlbHR1wB3v__aU7Aj99qU03XSQ8ypGx8RIXykvVWLmkohkC2iACaVZ_ZfjVJ9pnKrm9IHn5fMiYz5vdBbB7eMYzuA_2-CC2oFdfRjj9_kFnSYYKs3oS5G49x1TPLSm_2XfjRm4FIJp1EHQLVDf_6_N9YCh8NKQUHzsQg"
            />
          </div>
          <button onClick={() => alert("Follow action coming soon")} className="absolute -bottom-2 bg-[#479a4c] hover:bg-[#84da83] text-[#000f01] w-5 h-5 rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform">
            <span className="material-symbols-outlined text-[14px] font-bold">add</span>
          </button>
        </div>
        {/* Like / Upvote Button */}
        <div className="flex flex-col items-center gap-0.5 pt-2">
          <button onClick={() => alert("Like action coming soon")} className="w-10 h-10 rounded-full bg-[#1e2229]/60 backdrop-blur-md flex items-center justify-center text-white hover:text-[#479a4c] active:scale-90 transition-transform border border-[#76777c]/20">
            <span
              className="material-symbols-outlined text-[22px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              favorite
            </span>
          </button>
          <span className="font-mono text-xs text-white">1.4k</span>
        </div>
        {/* Commercial RFQ Comments Button */}
        <div className="flex flex-col items-center gap-0.5">
          <button onClick={() => alert("Comments coming soon")} className="w-10 h-10 rounded-full bg-[#1e2229]/60 backdrop-blur-md flex items-center justify-center text-white hover:text-[#d3e4fe] active:scale-90 transition-transform border border-[#76777c]/20">
            <span className="material-symbols-outlined text-[22px]">chat</span>
          </button>
          <span className="font-mono text-xs text-white">84</span>
        </div>
        {/* Save to Deal Room / Pin RFQ */}
        <div className="flex flex-col items-center gap-0.5">
          <button onClick={() => alert("Bookmarks coming soon")} className="w-10 h-10 rounded-full bg-[#1e2229]/60 backdrop-blur-md flex items-center justify-center text-white hover:text-[#479a4c] active:scale-90 transition-transform border border-[#76777c]/20">
            <span className="material-symbols-outlined text-[22px]">bookmark</span>
          </button>
          <span className="font-mono text-xs text-white">312</span>
        </div>
        {/* Forward / Share to Sourcing Desk */}
        <div className="flex flex-col items-center gap-0.5">
          <button onClick={() => alert("Forward coming soon")} className="w-10 h-10 rounded-full bg-[#1e2229]/60 backdrop-blur-md flex items-center justify-center text-white hover:text-[#479a4c] active:scale-90 transition-transform border border-[#76777c]/20">
            <span className="material-symbols-outlined text-[22px]">repeat</span>
          </button>
          <span className="font-mono text-xs text-white">148</span>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <button onClick={() => alert("Share coming soon")} className="w-10 h-10 rounded-full bg-[#1e2229]/60 backdrop-blur-md flex items-center justify-center text-white hover:text-[#faf8ff] active:scale-90 transition-transform border border-[#76777c]/20">
            <span className="material-symbols-outlined text-[22px]">share</span>
          </button>
          <span className="font-mono text-xs text-white">Send</span>
        </div>
        {/* Plant Audit Badge */}
        <div className="flex flex-col items-center gap-1 pt-1">
          <div className="w-10 h-10 rounded-full bg-[#002906]/90 border border-[#479a4c]/40 flex flex-col items-center justify-center p-1 text-center">
            <span className="font-mono text-[10px] leading-tight text-[#a0f79d] font-bold">98%</span>
            <span className="text-[8px] tracking-tight uppercase text-[#479a4c] font-semibold">
              AUDIT
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Left Metadata & Interaction Overlay */}
      <div className="relative z-20 px-4 pb-[72px] flex flex-col gap-2.5 max-w-[82%] mb-4">
        {/* Supplier Credentials Pill Row */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-base font-semibold text-white flex items-center gap-1">
            ABC EV Components
            <span
              className="material-symbols-outlined text-[16px] text-[#479a4c]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified
            </span>
          </span>
          <span className="bg-[#1e2229]/80 text-[#f2f3ff] border border-[#76777c]/40 px-2 py-0.5 rounded text-[11px] font-medium font-mono">
            Tier-1 Supplier
          </span>
        </div>
        {/* Compliance & Geo Micro-Tags */}
        <div className="flex items-center gap-2 text-[#e2e7ff] text-xs">
          <span className="flex items-center gap-0.5">
            <span className="material-symbols-outlined text-[14px] text-[#479a4c]">
              workspace_premium
            </span>
            ISO 9001:2015
          </span>
          <span className="">•</span>
          <span className="flex items-center gap-0.5">
            <span className="material-symbols-outlined text-[14px] text-[#c6c6cb]">
              location_on
            </span>
            Hosur Plant 04
          </span>
        </div>
        {/* Video Description & Industrial Scope */}
        <p className="text-xs text-[#faf8ff]/90 line-clamp-2 leading-relaxed">
          Batch #402 of IP67 High-Tensile Aluminium Battery Enclosures rolling off 5-axis CNC. Ready
          for immediate OEM dispatch (5,000 units/mo).
        </p>
        {/* Precision Ambient Audio Track Indicator */}
        <div className="flex items-center gap-2 bg-[#1e2229]/70 border border-[#76777c]/30 px-2.5 py-1 rounded-full w-fit max-w-full">
          <div className="flex items-end gap-0.5 h-3">
            <span className="w-0.5 bg-[#479a4c] rounded-full h-[4px]"></span>
            <span className="w-0.5 bg-[#479a4c] rounded-full h-[8px]"></span>
            <span className="w-0.5 bg-[#479a4c] rounded-full h-[6px]"></span>
            <span className="w-0.5 bg-[#479a4c] rounded-full h-[12px]"></span>
          </div>
          <span className="font-mono text-[11px] text-[#f2f3ff] truncate">
            Factory Audio • 1,200 RPM Precision Spindle
          </span>
        </div>

        {/* Segmented Video Progress Bar */}
        <div className="w-full bg-[#76777c]/30 h-1 rounded-full overflow-hidden flex gap-1 mt-2">
          <div className="bg-[#479a4c] h-full w-2/5 rounded-full"></div>
          <div className="bg-[#76777c]/40 h-full w-1/5 rounded-full"></div>
          <div className="bg-[#76777c]/20 h-full w-2/5 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
