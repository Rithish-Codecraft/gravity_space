"use client";

import { TopHeader } from "@/components/TopHeader";
import { BottomNav } from "@/components/BottomNav";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full overflow-hidden relative">
      {pathname !== "/explore" && <TopHeader />}
      <div className={`flex-1 overflow-y-auto no-scrollbar ${pathname !== '/explore' ? 'pb-[72px]' : ''}`}>
        {children}
      </div>
      <BottomNav />
    </div>
  );
}
