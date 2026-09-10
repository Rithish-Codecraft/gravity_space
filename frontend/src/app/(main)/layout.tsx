import { TopHeader } from "@/components/TopHeader";
import { BottomNav } from "@/components/BottomNav";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TopHeader />
      {children}
      <BottomNav />
    </>
  );
}
