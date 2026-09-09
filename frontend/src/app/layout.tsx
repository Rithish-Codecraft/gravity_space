import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VyapaarAI | Build. Connect. Finance. Grow.",
  description: "AI-powered assistance to discover relevant government schemes, check eligibility and connect with meaningful business opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased text-foreground bg-background">
        {children}
      </body>
    </html>
  );
}
