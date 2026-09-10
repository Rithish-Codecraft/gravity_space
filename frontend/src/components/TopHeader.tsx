"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export function TopHeader() {
  const pathname = usePathname();
  const [companyAbbr, setCompanyAbbr] = useState("ABC");
  const [companyName, setCompanyName] = useState("ABC EV");

  useEffect(() => {
    const storedCompany = localStorage.getItem("nexora_company_name");
    if (storedCompany) {
      setCompanyName(storedCompany);
      // Create a 2-3 letter abbreviation
      const words = storedCompany.split(' ');
      let abbr = "";
      if (words.length >= 2) {
        abbr = (words[0][0] + words[1][0]).toUpperCase();
      } else {
        abbr = storedCompany.substring(0, 3).toUpperCase();
      }
      setCompanyAbbr(abbr);
    }
  }, []);

  const tabConfig: Record<string, { title: string, icon: string, badge: string, fillIcon: boolean }> = {
    "/": { title: "Nexora", icon: "🌌", badge: "B2B", fillIcon: true },
    "/explore": { title: "Radar & Search", icon: "travel_explore", badge: "SECTOR", fillIcon: false },
    "/deals": { title: "Deal Center", icon: "handshake", badge: "4 RFQS", fillIcon: true },
    "/messages": { title: "Deal Rooms", icon: "forum", badge: "COPILOT", fillIcon: false },
    "/profile": { title: `${companyAbbr} Dossier`, icon: "domain", badge: "TIER-1", fillIcon: true }
  };

  const currentConfig = tabConfig[pathname] || tabConfig["/"];

  return (
    <header className="sticky top-0 z-40 bg-[var(--color-primary)] text-white border-b border-[var(--color-primary)]/40 px-[var(--spacing-gutter-mobile)] h-14 w-full flex items-center justify-between shadow-md transition-colors duration-200">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1.5">
          {pathname === "/" ? (
            <span className="text-xl">🌌</span>
          ) : (
            <span 
              className="material-symbols-outlined text-white text-xl" 
              style={{ fontVariationSettings: currentConfig.fillIcon ? "'FILL' 1" : "'FILL' 0" }}
            >
              {currentConfig.icon}
            </span>
          )}
          <span className="font-[var(--font-headline-sm)] text-[20px] font-semibold tracking-tight text-white leading-[28px]">
            {currentConfig.title}
          </span>
        </div>
        <span className="font-[var(--font-label-caps)] bg-white/15 text-white px-1.5 py-0.5 rounded text-[10px] font-semibold">
          {currentConfig.badge}
        </span>
      </div>

      <div className="flex items-center gap-1">
        <Link href="/explore" aria-label="Search" className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-150 block">
          <span className="material-symbols-outlined text-[20px]">search</span>
        </Link>
        <Link href="/messages" aria-label="Nexora Copilot" className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors duration-150">
          <span className="material-symbols-outlined text-[var(--color-accent)] text-[17px]" style={{ fontVariationSettings: "'FILL' 1" }}>spark</span>
          <span className="font-[var(--font-label-caps)] text-[10px] text-white">AI</span>
        </Link>
        <button aria-label="Notifications" className="p-1.5 relative rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-150">
          <span className="material-symbols-outlined text-[20px]">notifications</span>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[var(--color-accent)] border border-[var(--color-primary)] rounded-full"></span>
        </button>
        <Link href="/profile" aria-label="Company Switcher" className="relative ml-0.5 ring-1 ring-white/30 rounded-full p-0.5 active:scale-95 transition-transform block">
          <div className="w-7 h-7 rounded-full bg-white/15 text-white flex items-center justify-center font-[var(--font-label-caps)] text-[11px] font-bold">
            {companyAbbr}
          </div>
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[var(--color-accent)] border-2 border-[var(--color-primary)] rounded-full"></span>
        </Link>
      </div>
    </header>
  );
}
