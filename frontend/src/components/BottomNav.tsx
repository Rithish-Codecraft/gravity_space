"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { id: "home", path: "/home", icon: "home", label: "Home", badge: null },
    { id: "explore", path: "/explore", icon: "travel_explore", label: "Explore", badge: null },
    { id: "deals", path: "/deals", icon: "handshake", label: "Deals", badge: "4" },
    { id: "messages", path: "/messages", icon: "chat_bubble", label: "Messages", badge: "dot" },
    { id: "profile", path: "/profile", icon: "domain", label: "Profile", badge: null },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex items-center justify-around px-gutter-mobile py-2 bg-[var(--color-card-bg)] shadow-[0_-4px_16px_rgba(15,23,42,0.06)] border-t border-[var(--color-card-border)]">
      {navItems.map((item) => {
        const isActive = pathname === item.path;
        return (
          <Link
            key={item.id}
            href={item.path}
            className={`nav-btn flex flex-col items-center justify-center transition-colors duration-150 py-1 px-2.5 rounded-lg active:scale-95 relative group ${
              isActive ? "text-[var(--color-accent)] font-semibold" : "text-[var(--color-secondary)] font-normal hover:text-[var(--color-ink)]"
            }`}
          >
            <div className="relative">
              <span
                className="material-symbols-outlined text-[22px]"
                style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
              >
                {item.icon}
              </span>
              {item.badge === "dot" && (
                <span className="absolute -top-0.5 -right-1 w-2 h-2 bg-[var(--color-accent)] rounded-full"></span>
              )}
              {item.badge && item.badge !== "dot" && (
                <span className="absolute -top-1 -right-2 bg-[var(--color-accent)] text-white font-[var(--font-mono-metric)] text-[9px] font-bold px-1 rounded-full h-3.5 min-w-[14px] flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </div>
            <span className="font-[var(--font-label-caps)] text-[10px] mt-0.5">
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
