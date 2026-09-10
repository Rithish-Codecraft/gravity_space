"use client";

import Link from "next/link";
import { useState } from "next/form"; // Wait, React state
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !company.trim()) return;
    
    // Save to localStorage
    localStorage.setItem("nexora_user_name", name.trim());
    localStorage.setItem("nexora_company_name", company.trim());
    
    // Redirect to home
    router.push("/");
  };
    <div className="flex-1 flex flex-col gap-4">
      {/* Top Bar: Deep Charcoal Header */}
      <header className="bg-[var(--color-primary)] flex items-center justify-between px-4 h-14 w-full sticky top-0 z-30 shadow-md text-white">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[var(--color-accent)] flex items-center justify-center text-white active:scale-[0.98] transition-transform shadow-sm">
            <span className="text-[18px]">🌌</span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-[19px] font-semibold tracking-tight text-white">Nexora</span>
            <span className="px-1.5 py-0.5 rounded text-[9px] font-[var(--font-mono-metric)] font-semibold bg-white/10 text-emerald-100 border border-white/20 uppercase tracking-wider">B2B</span>
          </div>
        </div>
        {/* Right utility actions: Language & Help */}
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/15 transition-colors text-[13px] text-white/90 border border-white/15 font-medium" type="button">
            <span className="material-symbols-outlined text-[16px] text-[var(--color-accent)]">language</span>
            <span>EN</span>
            <span className="material-symbols-outlined text-[14px] text-white/70">expand_more</span>
          </button>
          <button aria-label="Support & Grievance desk" className="w-8 h-8 rounded-lg flex items-center justify-center text-white/80 hover:bg-white/10 transition-colors" type="button">
            <span className="material-symbols-outlined text-[20px]">help_outline</span>
          </button>
        </div>
      </header>

      {/* Content Scrollable Body */}
      <div className="flex-1 px-4 pt-4 flex flex-col gap-4 pb-8">
        {/* Institutional Brand Banner & Welcome */}
        <section className="flex flex-col gap-1.5">
          <div className="inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded-full bg-emerald-50 border border-[var(--color-accent)]/30 text-[var(--color-accent)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse"></span>
            <span className="font-[var(--font-mono-metric)] text-[11px] font-semibold tracking-wide uppercase">Institutional Grade Enterprise Nexus</span>
          </div>
          <h1 className="text-[26px] leading-tight text-[var(--color-ink)] tracking-tight font-bold pt-1">
            Welcome to Nexora
          </h1>
          <p className="text-[14px] text-[var(--color-secondary)] leading-relaxed">
            The AI-powered opportunity network for verified businesses, entrepreneurs, and manufacturers.
          </p>
        </section>

        {/* Authentication Method Switcher Tabs */}
        <nav aria-label="Login Methods" className="flex p-1 bg-[var(--color-card-border)]/70 rounded-xl border border-[var(--color-card-border)] gap-1">
          <button className="flex-1 py-2 px-1 text-center rounded-lg bg-white text-[var(--color-ink)] font-semibold text-[13px] shadow-sm flex items-center justify-center gap-1 border border-[var(--color-card-border)]/50" type="button">
            <span className="material-symbols-outlined text-[16px] text-[var(--color-accent)]">verified_user</span>
            <span>GSTIN / CIN</span>
          </button>
          <button className="flex-1 py-2 px-1 text-center rounded-lg text-[var(--color-secondary)] hover:text-[var(--color-ink)] font-medium text-[13px] transition-colors flex items-center justify-center gap-1" type="button">
            <span className="material-symbols-outlined text-[16px] text-[var(--color-secondary)]">smartphone</span>
            <span>Direct OTP</span>
          </button>
          <button className="flex-1 py-2 px-1 text-center rounded-lg text-[var(--color-secondary)] hover:text-[var(--color-ink)] font-medium text-[13px] transition-colors flex items-center justify-center gap-1" type="button">
            <span className="material-symbols-outlined text-[16px] text-[var(--color-secondary)]">mail</span>
            <span>Work Email</span>
          </button>
        </nav>

        {/* Primary Form Container */}
        <div className="bg-white rounded-xl border border-[var(--color-card-border)] p-5 shadow-sm flex flex-col gap-4">
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            {/* Your Name Field */}
            <div className="flex flex-col gap-1.5">
              <label className="font-[var(--font-mono-metric)] text-[11px] font-semibold text-[var(--color-secondary)] uppercase tracking-wider" htmlFor="user-name">Your Full Name</label>
              <div className="flex rounded-lg border border-[var(--color-card-border)] focus-within:border-[var(--color-accent)] focus-within:ring-2 focus-within:ring-[var(--color-accent)]/15 bg-white overflow-hidden transition-all h-11">
                <input 
                  className="flex-1 px-3 py-2 text-[var(--color-ink)] font-[var(--font-mono-metric)] text-[14px] border-0 focus:ring-0 focus:outline-none placeholder:text-[var(--color-secondary)]/60 bg-transparent font-medium" 
                  id="user-name" 
                  placeholder="e.g. Rithish Kumar" 
                  required 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            {/* Company Name Field */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <label className="font-[var(--font-mono-metric)] text-[11px] font-semibold text-[var(--color-secondary)] uppercase tracking-wider" htmlFor="company-name">Company Name</label>
                <span className="font-[var(--font-mono-metric)] text-[11px] text-[var(--color-accent)] font-semibold flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-[13px]">verified</span>Live Registry
                </span>
              </div>
              <div className="flex rounded-lg border border-[var(--color-card-border)] focus-within:border-[var(--color-accent)] focus-within:ring-2 focus-within:ring-[var(--color-accent)]/15 bg-white overflow-hidden transition-all h-11">
                <input 
                  className="flex-1 px-3 py-2 text-[var(--color-ink)] font-[var(--font-mono-metric)] text-[14px] border-0 focus:ring-0 focus:outline-none placeholder:text-[var(--color-secondary)]/60 bg-transparent font-medium" 
                  id="company-name" 
                  placeholder="e.g. ABC EV Components" 
                  required 
                  type="text" 
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
            </div>

            {/* Advisory Notice */}
            <p className="text-[12px] text-[var(--color-secondary)] leading-relaxed bg-[var(--color-canvas)] p-3 rounded-lg border border-[var(--color-card-border)]">
              Build your profile to join Nexora's verified opportunity network.
            </p>

            {/* Options Row */}
            <div className="flex items-center justify-between pt-0.5">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input defaultChecked className="w-4 h-4 rounded border-[var(--color-card-border)] text-[var(--color-accent)] focus:ring-[var(--color-accent)]/25" type="checkbox"/>
                <span className="text-[13px] text-[var(--color-secondary)]">Remember corporate device</span>
              </label>
            </div>

            {/* Primary Action CTA Button */}
            <button type="submit" className="w-full mt-1 h-11 rounded-lg bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-semibold text-[15px] flex items-center justify-center gap-2 active:scale-[0.98] transition-all shadow-sm disabled:opacity-50">
              <span>Build Profile & Continue</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </form>

          {/* Bank-Grade Trust & Compliance Footnote */}
          <div className="pt-3 border-t border-[var(--color-card-border)] flex items-start gap-2.5 text-[var(--color-secondary)]">
            <span className="material-symbols-outlined text-[18px] text-[var(--color-accent)] mt-0.5 shrink-0">lock</span>
            <p className="text-[12px] leading-relaxed text-[var(--color-secondary)]">
              Bank-grade 256-bit encryption. We verify businesses via GSTIN, Udyam MSME, or MCA corporate CIN for institutional safety.
            </p>
          </div>
        </div>

        {/* Divider Scaffolding */}
        <div className="flex items-center gap-3 py-1">
          <div className="flex-1 h-[1px] bg-[var(--color-card-border)]"></div>
          <span className="font-[var(--font-mono-metric)] text-[10px] text-[var(--color-secondary)] uppercase tracking-wider font-medium">Instant 1-Tap Government & Corporate KYC</span>
          <div className="flex-1 h-[1px] bg-[var(--color-card-border)]"></div>
        </div>

        {/* Fast Enterprise SSO Actions */}
        <div className="grid grid-cols-2 gap-2.5">
          <button className="h-11 px-3 rounded-lg border border-[var(--color-accent)]/40 bg-white hover:bg-emerald-50 transition-all flex items-center justify-center gap-2 shadow-sm active:scale-[0.98]" type="button">
            <span className="material-symbols-outlined text-[18px] text-[var(--color-accent)]">verified</span>
            <span className="text-[13px] font-semibold text-[var(--color-accent)]">DigiLocker Business</span>
          </button>
          <button className="h-11 px-3 rounded-lg border border-[var(--color-card-border)] bg-white hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm active:scale-[0.98]" type="button">
            <span className="material-symbols-outlined text-[18px] text-[var(--color-primary)]">corporate_fare</span>
            <span className="text-[13px] font-semibold text-[var(--color-primary)]">Corporate SSO</span>
          </button>
        </div>

        {/* Value Proposition Proof Micro-Card */}
        <div className="p-3.5 rounded-xl bg-white border border-[var(--color-card-border)] flex items-center gap-3 shadow-sm">
          <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] shrink-0">
            <span className="material-symbols-outlined text-[20px]">trending_up</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-[var(--font-mono-metric)] text-[10px] text-[var(--color-accent)] font-bold tracking-wider uppercase">LIVE PIPELINE</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"></span>
            </div>
            <p className="text-[13px] text-[var(--color-ink)] font-medium leading-snug pt-0.5">
              14,000+ verified MSMEs & OEMs sourcing ₹420Cr+ in deals & credit this month.
            </p>
          </div>
        </div>

        {/* Registration Hook */}
        <div className="text-center pt-1">
          <p className="text-[14px] text-[var(--color-secondary)]">
            New to Nexora? 
            <Link className="font-semibold text-[var(--color-primary)] underline underline-offset-4 decoration-[var(--color-accent)] decoration-2 hover:text-[var(--color-accent)] transition-colors ml-1" href="#">
              Register your business
            </Link>
          </p>
        </div>

        {/* Regulatory & Trust Footer Disclosures */}
        <footer className="mt-auto pt-6 flex flex-col items-center gap-2 border-t border-[var(--color-card-border)]">
          <div className="flex items-center gap-3 text-[var(--color-secondary)] font-[var(--font-mono-metric)] text-[11px]">
            <Link className="hover:text-[var(--color-ink)] transition-colors" href="#">Terms of Service</Link>
            <span className="text-[var(--color-card-border)]">•</span>
            <Link className="hover:text-[var(--color-ink)] transition-colors" href="#">Privacy Policy</Link>
            <span className="text-[var(--color-card-border)]">•</span>
            <Link className="hover:text-[var(--color-ink)] transition-colors" href="#">Grievance Desk</Link>
          </div>
          <p className="font-[var(--font-mono-metric)] text-[10px] text-[var(--color-secondary)]/80 text-center tracking-tight">
            Nexora Nexus Technologies Pvt Ltd © 2025. MCA Reg: U72900DL2023PTC89104
          </p>
        </footer>
      </div>
    </div>
  );
}
