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
      <body className="bg-[var(--color-canvas)] text-[var(--color-ink)] antialiased min-h-screen pb-20 flex justify-center selection:bg-[var(--color-accent)]/20">
        <main className="w-full max-w-[420px] bg-[var(--color-canvas)] min-h-screen relative shadow-2xl flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
