"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { createClient } from "@/utils/supabase/client";

export default function Login() {
  const router = useRouter();
  const [bizId, setBizId] = useState("33AABCU9603R1ZM");
  const [phone, setPhone] = useState("98765 43210");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Fallback to local storage for testing if Supabase is not configured yet
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
      alert("⚠️ Supabase Backend is not configured yet! Please provide NEXT_PUBLIC_SUPABASE_URL in .env.local to enable real database authentication. Falling back to local session...");
      localStorage.setItem("nexora_user_name", bizId);
      localStorage.setItem("nexora_company_name", "Verified Company");
      router.push("/home");
      return;
    }

    const supabase = createClient();
    
    // Attempt Supabase Authentication
    // Using dummy email for demo purposes since we are taking GSTIN/Phone right now
    const dummyEmail = `${bizId.toLowerCase()}@nexora.b2b`;
    const { data, error } = await supabase.auth.signInWithPassword({
      email: dummyEmail,
      password: phone, // Using phone as password for demo mapping
    });

    if (error) {
      // If user doesn't exist, sign them up automatically for demo purposes
      if (error.message.includes("Invalid login")) {
        const { error: signUpError } = await supabase.auth.signUp({
          email: dummyEmail,
          password: phone,
        });
        if (signUpError) {
          alert("Authentication Failed: " + signUpError.message);
          return;
        }
      } else {
        alert("Authentication Error: " + error.message);
        return;
      }
    }

    // Set local storage as fallback for legacy components during transition
    localStorage.setItem("nexora_user_name", bizId);
    router.push("/home");
  };

  return (
    <main className="w-full h-[100dvh] bg-[var(--color-canvas)] flex flex-col relative pb-8 overflow-y-auto no-scrollbar">
      <header className="bg-[var(--color-card-bg)] flex items-center justify-between px-[var(--spacing-gutter-mobile)] h-14 w-full sticky top-0 z-30 shadow-sm border-b border-[var(--color-card-border)]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)] flex items-center justify-center text-white active:scale-[0.98] transition-transform">
            <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-[var(--font-headline-sm)] text-[20px] font-semibold tracking-tight text-[var(--color-ink)]">Nexora</span>
            <span className="px-1.5 py-0.5 rounded text-[9px] font-[var(--font-mono-metric)] font-semibold bg-[var(--color-canvas)] text-[var(--color-ink)] border border-[var(--color-card-border)] uppercase tracking-wider">B2B</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 px-2 py-1 rounded-lg bg-[var(--color-canvas)] hover:bg-[var(--color-card-border)] transition-colors text-[13px] font-medium text-[var(--color-ink-muted)] border border-[var(--color-card-border)]" type="button">
            <span className="material-symbols-outlined text-[16px] text-[var(--color-ink)]">language</span>
            <span className="font-medium text-[var(--color-ink)]">EN</span>
            <span className="material-symbols-outlined text-[14px]">expand_more</span>
          </button>
          <button aria-label="Support" className="w-8 h-8 rounded-lg flex items-center justify-center text-[var(--color-ink-muted)] hover:bg-[var(--color-canvas)] transition-colors" type="button">
            <span className="material-symbols-outlined text-[20px]">help_outline</span>
          </button>
        </div>
      </header>

      <div className="flex-1 px-[var(--spacing-gutter-mobile)] pt-5 flex flex-col gap-5">
        <section className="flex flex-col gap-1.5">
          <div className="inline-flex items-center gap-1.5 self-start px-2 py-0.5 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 text-[var(--color-accent)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse"></span>
            <span className="font-[var(--font-label-caps)] text-[11px] font-semibold">Institutional Grade Enterprise Nexus</span>
          </div>
          <h1 className="font-[var(--font-headline-lg-mobile)] text-[24px] text-[var(--color-ink)] tracking-tight font-semibold pt-1">
            Welcome to Nexora
          </h1>
          <p className="font-[var(--font-body-md)] text-[14px] text-[var(--color-ink-muted)] leading-snug">
            The AI-powered opportunity network for verified businesses, entrepreneurs, and manufacturers.
          </p>
        </section>

        <nav aria-label="Login Methods" className="flex p-1 bg-[var(--color-canvas)] rounded-xl border border-[var(--color-card-border)] gap-1">
          <button className="flex-1 py-2 px-1 text-center rounded-lg bg-[var(--color-card-bg)] text-[var(--color-ink)] font-medium text-[13px] shadow-sm flex items-center justify-center gap-1 border border-[var(--color-card-border)]" type="button">
            <span className="material-symbols-outlined text-[16px] text-[var(--color-accent)]">verified_user</span>
            <span>GSTIN / CIN</span>
          </button>
          <button className="flex-1 py-2 px-1 text-center rounded-lg text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] font-normal text-[13px] transition-colors flex items-center justify-center gap-1" type="button">
            <span className="material-symbols-outlined text-[16px]">smartphone</span>
            <span>Direct OTP</span>
          </button>
          <button className="flex-1 py-2 px-1 text-center rounded-lg text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] font-normal text-[13px] transition-colors flex items-center justify-center gap-1" type="button">
            <span className="material-symbols-outlined text-[16px]">mail</span>
            <span>Work Email</span>
          </button>
        </nav>

        <div className="bg-[var(--color-card-bg)] rounded-xl border border-[var(--color-card-border)] p-5 shadow-sm flex flex-col gap-4">
          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <label className="font-[var(--font-label-caps)] text-[11px] text-[var(--color-ink-muted)] uppercase tracking-wider" htmlFor="biz-id">Registered Business Identifier</label>
                <span className="font-[var(--font-label-caps)] text-[11px] text-[var(--color-accent)] font-semibold flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-[12px]">verified</span>Live Registry
                </span>
              </div>
              <div className="flex rounded-lg border border-[var(--color-card-border)] focus-within:border-[var(--color-primary)] focus-within:ring-2 focus-within:ring-[var(--color-primary)]/10 bg-white overflow-hidden transition-all h-11">
                <button className="flex items-center gap-1 px-2.5 bg-[var(--color-canvas)] border-r border-[var(--color-card-border)] text-[var(--color-ink)] font-[var(--font-mono-metric)] text-[12px] font-semibold hover:bg-[var(--color-card-border)] transition-colors" type="button">
                  <span>GSTIN</span>
                  <span className="material-symbols-outlined text-[14px] text-[var(--color-ink-muted)]">arrow_drop_down</span>
                </button>
                <input 
                  className="flex-1 px-3 py-2 text-[var(--color-ink)] font-[var(--font-mono-metric)] text-[14px] border-0 focus:ring-0 focus:outline-none placeholder:text-[var(--color-ink-muted)] bg-transparent uppercase" 
                  id="biz-id" 
                  placeholder="33AABCU9603R1ZM" 
                  required 
                  type="text" 
                  value={bizId}
                  onChange={e => setBizId(e.target.value)}
                />
                <div className="px-2.5 flex items-center gap-1 text-[var(--color-accent)]">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                </div>
              </div>
              <div className="flex items-center justify-between px-0.5 text-[11px] font-[var(--font-mono-metric)] text-[var(--color-ink-muted)]">
                <span className="flex items-center gap-1 text-[var(--color-accent)] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"></span>GSTN & MCA Verified
                </span>
                <span>Supports Udyam / CIN</span>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <label className="font-[var(--font-label-caps)] text-[11px] text-[var(--color-ink-muted)] uppercase tracking-wider" htmlFor="biz-phone">Authorized Signatory Mobile</label>
                <span className="font-[var(--font-label-caps)] text-[11px] text-[var(--color-accent)] font-semibold flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-[12px]">lock_person</span>Govt-Linked OTP
                </span>
              </div>
              <div className="flex rounded-lg border border-[var(--color-card-border)] focus-within:border-[var(--color-primary)] focus-within:ring-2 focus-within:ring-[var(--color-primary)]/10 bg-white overflow-hidden transition-all h-11">
                <button className="flex items-center gap-1.5 px-2.5 bg-[var(--color-canvas)] border-r border-[var(--color-card-border)] text-[var(--color-ink)] font-[var(--font-mono-metric)] text-[13px] hover:bg-[var(--color-card-border)] transition-colors" type="button">
                  <span aria-hidden="true" className="inline-block w-4 text-[13px] leading-none">🇮🇳</span>
                  <span className="font-medium text-[var(--color-ink)]">+91</span>
                  <span className="material-symbols-outlined text-[14px] text-[var(--color-ink-muted)]">arrow_drop_down</span>
                </button>
                <input 
                  className="flex-1 px-3 py-2 text-[var(--color-ink)] font-[var(--font-mono-metric)] text-[14px] border-0 focus:ring-0 focus:outline-none placeholder:text-[var(--color-ink-muted)] bg-transparent" 
                  id="biz-phone" 
                  inputMode="numeric" 
                  placeholder="98765 43210" 
                  required 
                  type="tel" 
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                />
                <button className="px-2.5 text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors flex items-center" title="Clear field" type="button" onClick={() => setPhone('')}>
                  <span className="material-symbols-outlined text-[18px]">cancel</span>
                </button>
              </div>
            </div>

            <p className="font-[var(--font-body-sm)] text-[12px] text-[var(--color-ink-muted)] leading-relaxed bg-[var(--color-canvas)] p-2.5 rounded-lg border border-[var(--color-card-border)]">
              Only verified business directors, partners, or authorized representatives can access Nexora's opportunity network.
            </p>

            <div className="flex items-center justify-between pt-0.5">
              <label className="flex items-center gap-2 cursor-pointer">
                <input defaultChecked className="w-4 h-4 rounded border-[var(--color-card-border)] text-[var(--color-primary)] focus:ring-[var(--color-primary)]/20" type="checkbox" />
                <span className="font-[var(--font-body-sm)] text-[13px] text-[var(--color-ink-muted)]">Remember corporate device</span>
              </label>
              <a className="font-[var(--font-body-sm)] text-[13px] text-[var(--color-primary)] font-semibold hover:underline" href="#">Verify via DSC</a>
            </div>

            <button className="w-full mt-1 h-11 rounded-lg bg-[var(--color-primary)] hover:bg-black text-white font-[var(--font-title-md)] text-[16px] flex items-center justify-center gap-2 active:scale-[0.98] transition-all shadow-sm" type="submit">
              <span>Verify Business & Continue</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </form>

          <div className="pt-2 border-t border-[var(--color-card-border)] flex items-start gap-2 text-[var(--color-ink-muted)] mt-2">
            <span className="material-symbols-outlined text-[16px] text-[var(--color-accent)] mt-0.5">lock</span>
            <p className="font-[var(--font-body-sm)] text-[12px] leading-relaxed text-[var(--color-ink-muted)]">
              Bank-grade 256-bit encryption. We verify businesses via GSTIN, Udyam MSME, or MCA corporate CIN for institutional safety.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex-1 h-[1px] bg-[var(--color-card-border)]"></div>
          <span className="font-[var(--font-label-caps)] text-[10px] text-[var(--color-ink-muted)] uppercase tracking-wider">Instant 1-Tap Government & Corporate KYC</span>
          <div className="flex-1 h-[1px] bg-[var(--color-card-border)]"></div>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <button className="h-11 px-3 rounded-lg border border-[var(--color-accent)]/40 bg-[var(--color-card-bg)] hover:bg-[var(--color-canvas)] transition-colors flex items-center justify-center gap-1.5 shadow-sm active:scale-[0.98]" type="button">
            <span className="material-symbols-outlined text-[18px] text-[var(--color-accent)]">verified</span>
            <span className="font-[var(--font-body-md)] text-[13px] font-medium text-[var(--color-accent)]">DigiLocker Business</span>
          </button>
          <button className="h-11 px-3 rounded-lg border border-[var(--color-card-border)] bg-[var(--color-card-bg)] hover:bg-[var(--color-canvas)] transition-colors flex items-center justify-center gap-2 shadow-sm active:scale-[0.98]" type="button">
            <span className="material-symbols-outlined text-[18px] text-[var(--color-primary)]">corporate_fare</span>
            <span className="font-[var(--font-body-md)] text-[13px] font-medium text-[var(--color-primary)]">Corporate SSO</span>
          </button>
        </div>

        <div className="p-3 rounded-xl bg-[var(--color-canvas)] border border-[var(--color-card-border)] flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-[var(--color-card-bg)] border border-[var(--color-card-border)] flex items-center justify-center text-[var(--color-primary)] flex-shrink-0">
            <span className="material-symbols-outlined text-[20px] text-[var(--color-accent)]">trending_up</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="font-[var(--font-label-caps)] text-[11px] text-[var(--color-accent)] font-semibold">LIVE PIPELINE</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"></span>
            </div>
            <p className="font-[var(--font-body-sm)] text-[13px] text-[var(--color-ink)] font-medium leading-tight pt-0.5">
              14,000+ verified MSMEs & OEMs sourcing ₹420Cr+ in deals & credit this month.
            </p>
          </div>
        </div>

        <div className="text-center pt-1">
          <p className="font-[var(--font-body-md)] text-[14px] text-[var(--color-ink-muted)]">
            New to Nexora? 
            <a className="font-semibold text-[var(--color-primary)] underline underline-offset-4 decoration-[var(--color-primary)] decoration-2 hover:text-[var(--color-accent)] transition-colors ml-1" href="#">
              Register your business
            </a>
          </p>
        </div>
      </div>

      <footer className="mt-auto px-[var(--spacing-gutter-mobile)] pt-8 flex flex-col items-center gap-2 border-t border-[var(--color-card-border)]">
        <div className="flex items-center gap-3 text-[var(--color-ink-muted)] font-[var(--font-label-caps)] text-[11px]">
          <a className="hover:text-[var(--color-primary)] transition-colors" href="#">Terms of Service</a>
          <span>•</span>
          <a className="hover:text-[var(--color-primary)] transition-colors" href="#">Privacy Policy</a>
          <span>•</span>
          <a className="hover:text-[var(--color-primary)] transition-colors" href="#">Grievance Desk</a>
        </div>
        <p className="font-[var(--font-label-caps)] text-[10px] text-[var(--color-ink-muted)] text-center tracking-tight">
          Nexora Nexus Technologies Pvt Ltd © 2025. MCA Reg: U72900DL2023PTC89104
        </p>
      </footer>
    </main>
  );
}
