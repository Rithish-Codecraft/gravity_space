import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexora - B2B Opportunity Command Center",
  description: "AI-powered assistance to discover relevant government schemes, check eligibility and connect with meaningful business opportunities.",
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🌌</text></svg>',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
        <style>
          {`
            .material-symbols-outlined {
              font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
              display: inline-block;
              vertical-align: middle;
              line-height: 1;
            }
          `}
        </style>
      </head>
      <body className="bg-slate-950 text-[var(--color-ink)] antialiased h-[100dvh] w-full flex items-center justify-center selection:bg-[var(--color-accent)]/20 overflow-hidden">
        <main className="w-full h-full max-w-[430px] sm:h-[92vh] sm:aspect-[9/16] bg-[var(--color-canvas)] relative shadow-2xl flex flex-col overflow-hidden sm:rounded-[2.5rem] sm:border-[12px] border-slate-800 ring-1 ring-white/10">
          {children}
        </main>
      </body>
    </html>
  );
}
