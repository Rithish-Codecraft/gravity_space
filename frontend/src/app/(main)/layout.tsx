"use client";

import { TopHeader } from "@/components/TopHeader";
import { BottomNav } from "@/components/BottomNav";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const name = localStorage.getItem("nexora_user_name");
    if (!name) {
      router.push("/login");
    } else {
      setIsAuthorized(true);
    }
  }, [pathname, router]);

  if (!isAuthorized) {
    return <div className="min-h-screen bg-[var(--color-canvas)] flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-[var(--color-accent)] border-t-transparent rounded-full animate-spin"></div>
    </div>;
  }

  return (
    <div className="flex flex-col h-full overflow-hidden relative">
      <TopHeader />
      <div className="flex-1 overflow-y-auto no-scrollbar pb-[72px]">
        {children}
      </div>
      <BottomNav />
    </div>
  );
}
