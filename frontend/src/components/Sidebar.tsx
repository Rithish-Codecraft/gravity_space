"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Compass, Target, Users, Search, Settings } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { href: "/dashboard", label: "Dashboard", icon: Home },
    { href: "/schemes", label: "Explore Schemes", icon: Compass },
    { href: "/match", label: "AI Matches", icon: Target },
    { href: "/opportunities", label: "Opportunities", icon: Search },
    { href: "/connections", label: "Connections", icon: Users },
  ];

  return (
    <aside className="w-64 border-r border-border bg-background min-h-screen p-4 flex flex-col hidden md:flex">
      <div className="mb-8 px-4">
        <h2 className="text-xl font-bold text-primary tracking-tight">VyapaarAI</h2>
        <p className="text-xs text-muted-foreground mt-1">SIH Demo</p>
      </div>
      
      <nav className="flex-1 space-y-1">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href || pathname?.startsWith(link.href + "/");
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                isActive 
                  ? "bg-primary text-primary-foreground" 
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <Icon className="h-5 w-5" />
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-4 border-t border-border">
        <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
          <Settings className="h-5 w-5" />
          Settings
        </Link>
      </div>
    </aside>
  );
}
