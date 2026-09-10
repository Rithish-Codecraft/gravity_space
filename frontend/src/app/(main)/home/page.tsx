"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [userName, setUserName] = useState("User");
  const [companyName, setCompanyName] = useState("Company Name");

  useEffect(() => {
    const storedName = localStorage.getItem("nexora_user_name");
    const storedCompany = localStorage.getItem("nexora_company_name");
    
    if (storedName) {
      // Get the first name
      setUserName(storedName.split(' ')[0]);
    }
    if (storedCompany) {
      setCompanyName(storedCompany);
    }
  }, []);

  return (
    <div className="flex-1 flex flex-col gap-[var(--spacing-element-stack-md)] py-[var(--spacing-element-stack-sm)]">
      {/* Greeting & Market Engine Status */}
      <section className="px-[var(--spacing-gutter-mobile)] pt-1">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-[var(--font-headline-lg-mobile)] text-[24px] leading-[32px] font-bold tracking-tight text-[var(--color-ink)]">
              Good morning, {userName} 👋
            </h1>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] inline-block animate-pulse"></span>
              <span className="font-[var(--font-label-caps)] text-[11px] text-[var(--color-accent)] font-semibold">
                Market Engine Active
              </span>
            </div>
          </div>
          <span className="font-[var(--font-label-caps)] text-[11px] text-[var(--color-ink-muted)] bg-[var(--color-card-bg)] px-2 py-1 rounded border border-[var(--color-card-border)] shadow-sm">
            IND-KA
          </span>
        </div>

        {/* Collapsible Business Health Micro-Card */}
        <div className="mt-2.5 bg-[var(--color-card-bg)] rounded-xl border border-[var(--color-card-border)] p-3 shadow-sm">
          <div className="flex items-center justify-between pb-2 border-b border-[var(--color-card-border)]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></div>
              <span className="font-[var(--font-title-md)] text-[13px] text-[var(--color-ink)] font-semibold">
                {companyName}
              </span>
              <span className="font-[var(--font-label-caps)] text-[10px] bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-medium px-1.5 py-0.5 rounded border border-[var(--color-accent)]/25">
                Tier-1 Verified
              </span>
            </div>
            <button className="font-[var(--font-label-caps)] text-[11px] text-[var(--color-accent)] font-semibold hover:underline flex items-center">
              Improve Profile
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            </button>
          </div>
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2">
              <div className="flex flex-col">
                <span className="font-[var(--font-label-caps)] text-[10px] text-[var(--color-ink-muted)]">Profile Strength</span>
                <span className="font-[var(--font-mono-metric)] text-[var(--color-ink)] font-bold">87%</span>
              </div>
            </div>
            <div className="h-6 w-[1px] bg-[var(--color-card-border)]"></div>
            <div className="flex flex-col items-center">
              <span className="font-[var(--font-label-caps)] text-[10px] text-[var(--color-ink-muted)]">Network</span>
              <span className="font-[var(--font-mono-metric)] text-[var(--color-ink)] font-bold">143</span>
            </div>
            <div className="h-6 w-[1px] bg-[var(--color-card-border)]"></div>
            <div className="flex flex-col items-center cursor-pointer">
              <span className="font-[var(--font-label-caps)] text-[10px] text-[var(--color-ink-muted)]">Active Opps</span>
              <span className="font-[var(--font-mono-metric)] text-[var(--color-accent)] font-bold">12</span>
            </div>
            <div className="h-6 w-[1px] bg-[var(--color-card-border)]"></div>
            <div className="flex flex-col items-end">
              <span className="font-[var(--font-label-caps)] text-[10px] text-[var(--color-ink-muted)]">Profile Views</span>
              <span className="font-[var(--font-mono-metric)] text-[var(--color-ink)] font-bold">83</span>
            </div>
          </div>
        </div>
      </section>

      {/* Live Data Sources Engine */}
      <section className="px-[var(--spacing-gutter-mobile)] mt-0">
        <div className="bg-[var(--color-card-bg)] rounded-xl border border-[var(--color-card-border)] p-3 shadow-sm">
          <div className="flex items-center justify-between mb-2.5">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[var(--color-ink)] text-[16px]">account_tree</span>
              <h3 className="font-[var(--font-title-md)] text-[13px] text-[var(--color-ink)] font-bold">Scheme Aggregation Engine</h3>
            </div>
            <span className="flex items-center gap-1 font-[var(--font-label-caps)] text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-sm border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              LIVE SYNC
            </span>
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col items-center justify-center p-2 rounded border border-[var(--color-card-border)] bg-[var(--color-canvas)]">
              <span className="text-[14px] mb-1">🇮🇳</span>
              <span className="font-[var(--font-label-caps)] text-[9px] font-bold text-[var(--color-ink)] text-center">API Setu</span>
              <span className="text-[8px] text-[var(--color-ink-muted)] mt-0.5">Connected</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 rounded border border-[var(--color-card-border)] bg-[var(--color-canvas)]">
              <span className="text-[14px] mb-1">🏛️</span>
              <span className="font-[var(--font-label-caps)] text-[9px] font-bold text-[var(--color-ink)] text-center">myScheme</span>
              <span className="text-[8px] text-[var(--color-ink-muted)] mt-0.5">Synced 1m ago</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 rounded border border-[var(--color-card-border)] bg-[var(--color-canvas)]">
              <span className="text-[14px] mb-1">🚀</span>
              <span className="font-[var(--font-label-caps)] text-[9px] font-bold text-[var(--color-ink)] text-center">Startup India</span>
              <span className="text-[8px] text-[var(--color-ink-muted)] mt-0.5">Connected</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 rounded border border-[var(--color-card-border)] bg-[var(--color-canvas)]">
              <span className="text-[14px] mb-1">🏦</span>
              <span className="font-[var(--font-label-caps)] text-[9px] font-bold text-[var(--color-ink)] text-center">JanSamarth</span>
              <span className="text-[8px] text-[var(--color-ink-muted)] mt-0.5">Credit APIs</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 rounded border border-[var(--color-card-border)] bg-[var(--color-canvas)]">
              <span className="text-[14px] mb-1">🤝</span>
              <span className="font-[var(--font-label-caps)] text-[9px] font-bold text-[var(--color-ink)] text-center">NGO-DARPAN</span>
              <span className="text-[8px] text-[var(--color-ink-muted)] mt-0.5">Verified Base</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 rounded border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5">
              <span className="material-symbols-outlined text-[var(--color-accent)] text-[16px] mb-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
              <span className="font-[var(--font-label-caps)] text-[9px] font-bold text-[var(--color-accent)] text-center">Rule Engine</span>
              <span className="text-[8px] text-[var(--color-accent)] mt-0.5 font-bold">RAG Active</span>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunity Pulse Carousel */}
      <section className="pt-1">
        <div className="flex items-center justify-between px-[var(--spacing-gutter-mobile)] mb-2">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[var(--color-ink)] text-[18px]">bolt</span>
            <h2 className="font-[var(--font-title-md)] text-[14px] text-[var(--color-ink)] font-semibold">Opportunity Pulse</h2>
          </div>
          <span className="font-[var(--font-label-caps)] text-[11px] text-[var(--color-ink-muted)]">Real-time Match</span>
        </div>
        <div className="flex gap-2.5 overflow-x-auto no-scrollbar px-[var(--spacing-gutter-mobile)] pb-1">
          {/* Card 1 */}
          <div className="min-w-[170px] bg-[var(--color-primary)] text-white rounded-xl p-3 border border-[var(--color-primary)]/20 flex flex-col justify-between shrink-0 shadow-sm relative overflow-hidden cursor-pointer hover:border-[var(--color-accent)]/40 transition-all">
            <div className="absolute -right-2 -bottom-2 opacity-10">
              <span className="material-symbols-outlined text-6xl text-white">trending_up</span>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <span className="font-[var(--font-label-caps)] text-[10px] text-white bg-[var(--color-accent)]/30 px-1.5 py-0.5 rounded border border-[var(--color-accent)]/40 font-medium">+2 new today</span>
                <span className="material-symbols-outlined text-[16px] text-[var(--color-accent)]" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
              </div>
              <p className="font-[var(--font-headline-sm)] text-white mt-2 leading-none font-[var(--font-mono-metric)] font-bold text-[20px]">4</p>
              <p className="font-[var(--font-body-sm)] text-white/80 text-[12px] mt-1 font-medium">High-Potential Opps</p>
            </div>
            <div className="mt-3 flex items-center text-[11px] font-[var(--font-label-caps)] text-[var(--color-accent)] font-semibold">
              Explore Deals <span className="material-symbols-outlined text-[13px] ml-0.5">arrow_forward</span>
            </div>
          </div>
          {/* Card 2 */}
          <div className="min-w-[170px] bg-[var(--color-card-bg)] text-[var(--color-ink)] rounded-xl p-3 border border-[var(--color-card-border)] flex flex-col justify-between shrink-0 shadow-sm cursor-pointer hover:border-[var(--color-accent)]/40 transition-all">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-[var(--font-label-caps)] text-[10px] text-[var(--color-ink-muted)] bg-[var(--color-canvas)] px-1.5 py-0.5 rounded border border-[var(--color-card-border)]">Capital</span>
                <span className="material-symbols-outlined text-[16px] text-[var(--color-accent)]">payments</span>
              </div>
              <p className="font-[var(--font-headline-sm)] text-[var(--color-ink)] mt-2 leading-none font-[var(--font-mono-metric)] font-bold text-[20px]">2 Matches</p>
              <p className="font-[var(--font-body-sm)] text-[var(--color-ink-muted)] text-[12px] mt-1 font-[var(--font-mono-metric)]">₹50L & ₹1.4Cr identified</p>
            </div>
            <div className="mt-3 flex items-center text-[11px] font-[var(--font-label-caps)] text-[var(--color-ink)] font-semibold">
              Review Term <span className="material-symbols-outlined text-[13px] ml-0.5 text-[var(--color-secondary)]">arrow_forward</span>
            </div>
          </div>
          {/* Card 3 */}
          <div className="min-w-[170px] bg-[var(--color-card-bg)] text-[var(--color-ink)] rounded-xl p-3 border border-[var(--color-card-border)] flex flex-col justify-between shrink-0 shadow-sm cursor-pointer hover:border-[var(--color-accent)]/40 transition-all">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-[var(--font-label-caps)] text-[10px] text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-1.5 py-0.5 rounded border border-[var(--color-accent)]/25 font-medium">90%+ match</span>
                <span className="material-symbols-outlined text-[16px] text-[var(--color-secondary)]">handshake</span>
              </div>
              <p className="font-[var(--font-headline-sm)] text-[var(--color-ink)] mt-2 leading-none font-[var(--font-mono-metric)] font-bold text-[20px]">7</p>
              <p className="font-[var(--font-body-sm)] text-[var(--color-ink-muted)] text-[12px] mt-1">Businesses to Meet</p>
            </div>
            <div className="mt-3 flex items-center text-[11px] font-[var(--font-label-caps)] text-[var(--color-ink)] font-semibold">
              Connect Pipeline <span className="material-symbols-outlined text-[13px] ml-0.5 text-[var(--color-secondary)]">arrow_forward</span>
            </div>
          </div>
          {/* Card 4 */}
          <div className="min-w-[170px] bg-[var(--color-card-bg)] text-[var(--color-ink)] rounded-xl p-3 border border-[var(--color-card-border)] flex flex-col justify-between shrink-0 shadow-sm cursor-pointer hover:border-[var(--color-accent)]/40 transition-all">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-[var(--font-label-caps)] text-[10px] text-[var(--color-ink-muted)] bg-[var(--color-canvas)] px-1.5 py-0.5 rounded border border-[var(--color-card-border)]">Procurement</span>
                <span className="material-symbols-outlined text-[16px] text-[var(--color-secondary)]">storefront</span>
              </div>
              <p className="font-[var(--font-headline-sm)] text-[var(--color-ink)] mt-2 leading-none font-[var(--font-mono-metric)] font-bold text-[20px]">5</p>
              <p className="font-[var(--font-body-sm)] text-[var(--color-ink-muted)] text-[12px] mt-1">Potential Customers</p>
            </div>
            <div className="mt-3 flex items-center text-[11px] font-[var(--font-label-caps)] text-[var(--color-ink)] font-semibold">
              View RFQs <span className="material-symbols-outlined text-[13px] ml-0.5 text-[var(--color-secondary)]">arrow_forward</span>
            </div>
          </div>
        </div>
      </section>

      {/* High-Priority Pinned Opportunity Card (Ather Energy) */}
      <section className="px-[var(--spacing-gutter-mobile)]">
        <div className="bg-[var(--color-card-bg)] rounded-xl border border-[var(--color-card-border)] shadow-sm overflow-hidden">
          <div className="bg-[var(--color-canvas)] px-3.5 py-2.5 border-b border-[var(--color-card-border)] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></span>
              <span className="font-[var(--font-label-caps)] text-[11px] text-[var(--color-ink)] font-bold tracking-wider">PINNED HIGH-PRIORITY</span>
            </div>
            <span className="font-[var(--font-label-caps)] text-[11px] bg-[var(--color-accent)]/15 text-[var(--color-accent)] px-2 py-0.5 rounded font-[var(--font-mono-metric)] font-semibold border border-[var(--color-accent)]/25">92% Match</span>
          </div>
          <div className="p-3.5">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-[var(--font-title-md)] text-[var(--color-ink)] font-bold text-[16px]">Ather Energy Sourcing</h3>
                  <span className="material-symbols-outlined text-[var(--color-primary)] text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                </div>
                <p className="font-[var(--font-body-sm)] text-[var(--color-ink-muted)] text-[13px] mt-0.5">Sourcing 500 EV Battery Enclosures / month</p>
              </div>
              <span className="font-[var(--font-label-caps)] text-[10px] text-amber-800 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded font-medium">Immediate</span>
            </div>
            <div className="mt-3 space-y-1.5 bg-[var(--color-canvas)] p-2.5 rounded-lg border border-[var(--color-card-border)]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[var(--color-accent)] text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="font-[var(--font-body-sm)] text-[12px] text-[var(--color-ink)]">Same industry: EV Powertrain & Chassis</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[var(--color-accent)] text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="font-[var(--font-body-sm)] text-[12px] text-[var(--color-ink)]">Matches your 5,000/mo rated output capacity</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[var(--color-accent)] text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="font-[var(--font-body-sm)] text-[12px] text-[var(--color-ink)]">Regional logistics viable (&lt;350 km Hosur line)</span>
              </div>
            </div>
            <div className="mt-3.5 grid grid-cols-2 gap-2">
              <button className="w-full py-2 px-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-[var(--font-title-md)] text-[13px] rounded-lg transition-colors duration-150 flex items-center justify-center gap-1.5 shadow-sm active:scale-[0.98]">
                <span className="material-symbols-outlined text-[16px]">send</span>
                Direct Contact
              </button>
              <button className="w-full py-2 px-3 bg-[var(--color-card-bg)] border border-[var(--color-accent)] text-[var(--color-accent)] font-[var(--font-title-md)] text-[13px] rounded-lg hover:bg-[var(--color-accent)]/5 transition-colors duration-150 flex items-center justify-center gap-1 font-semibold">
                Review Deal
                <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stories / Factory Reels Horizontal Avatars */}
      <section className="pt-1">
        <div className="flex items-center justify-between px-[var(--spacing-gutter-mobile)] mb-2">
          <span className="font-[var(--font-label-caps)] text-[11px] text-[var(--color-ink-muted)]">FACTORY REELS & UPDATES</span>
          <span className="font-[var(--font-label-caps)] text-[10px] text-[var(--color-ink)] font-semibold">Live Dispatches</span>
        </div>
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar px-[var(--spacing-gutter-mobile)]">
          <div className="flex flex-col items-center gap-1 shrink-0">
            <button className="w-14 h-14 rounded-full border border-dashed border-[var(--color-secondary)]/50 flex items-center justify-center bg-[var(--color-card-bg)] hover:bg-[var(--color-canvas)] transition-colors duration-150 shadow-sm">
              <span className="material-symbols-outlined text-[var(--color-ink)] text-[22px]">add</span>
            </button>
            <span className="font-[var(--font-label-caps)] text-[10px] text-[var(--color-ink)] text-center font-medium">Add Reel</span>
          </div>
          <div className="flex flex-col items-center gap-1 shrink-0">
            <div className="p-0.5 rounded-full ring-2 ring-[var(--color-accent)] bg-[var(--color-card-bg)]">
              <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-xs p-3 font-[var(--font-label-caps)]">TATA</div>
            </div>
            <span className="font-[var(--font-body-sm)] text-[11px] text-[var(--color-ink)] truncate max-w-[64px] text-center">Tata EV Div</span>
          </div>
          <div className="flex flex-col items-center gap-1 shrink-0">
            <div className="p-0.5 rounded-full ring-2 ring-[var(--color-card-border)] bg-[var(--color-card-bg)]">
              <div className="w-12 h-12 rounded-full bg-[var(--color-canvas)] text-[var(--color-ink)] flex items-center justify-center font-bold text-xs p-3 font-[var(--font-label-caps)] border border-[var(--color-card-border)]">APEX</div>
            </div>
            <span className="font-[var(--font-body-sm)] text-[11px] text-[var(--color-ink)] truncate max-w-[64px] text-center">Apex Prec.</span>
          </div>
          <div className="flex flex-col items-center gap-1 shrink-0">
            <div className="p-0.5 rounded-full ring-2 ring-[var(--color-accent)] bg-[var(--color-card-bg)]">
              <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-xs p-3 font-[var(--font-label-caps)]">M&M</div>
            </div>
            <span className="font-[var(--font-body-sm)] text-[11px] text-[var(--color-ink)] truncate max-w-[64px] text-center">Mahindra EV</span>
          </div>
          <div className="flex flex-col items-center gap-1 shrink-0">
            <div className="p-0.5 rounded-full ring-1 ring-[var(--color-card-border)] bg-[var(--color-card-bg)]">
              <div className="w-12 h-12 rounded-full bg-[var(--color-canvas)] text-[var(--color-ink)] flex items-center justify-center font-bold text-xs p-3 font-[var(--font-label-caps)] border border-[var(--color-card-border)]">BOSCH</div>
            </div>
            <span className="font-[var(--font-body-sm)] text-[11px] text-[var(--color-ink)] truncate max-w-[64px] text-center">Bosch IN</span>
          </div>
        </div>
      </section>

      {/* Quick Intent Composer Bar */}
      <section className="px-[var(--spacing-gutter-mobile)]">
        <div className="bg-[var(--color-card-bg)] rounded-xl border border-[var(--color-card-border)] p-3 shadow-sm">
          <div className="flex items-center gap-2.5 pb-2.5 border-b border-[var(--color-card-border)]">
            <div className="w-8 h-8 shrink-0 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-[var(--font-label-caps)] text-xs font-bold">ABC</div>
            <input className="w-full bg-[var(--color-canvas)] rounded-lg text-[13px] font-[var(--font-body-sm)] text-[var(--color-ink)] placeholder:text-[var(--color-secondary)] border border-[var(--color-card-border)] px-3 py-1.5 focus:ring-1 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] cursor-pointer outline-none" placeholder="Share an update, RFQ, or funding need..." readOnly type="text"/>
          </div>
          <div className="flex items-center justify-between pt-2.5 overflow-x-auto no-scrollbar gap-1.5">
            <button className="flex shrink-0 items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--color-canvas)] border border-[var(--color-card-border)] text-[var(--color-ink-muted)] text-[11px] font-[var(--font-body-sm)] hover:bg-[var(--color-card-border)]/40 hover:text-[var(--color-ink)] transition-colors">
              <span className="material-symbols-outlined text-[var(--color-secondary)] text-[15px]">inventory</span>
              Product
            </button>
            <button className="flex shrink-0 items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--color-canvas)] border border-[var(--color-card-border)] text-[var(--color-ink-muted)] text-[11px] font-[var(--font-body-sm)] hover:bg-[var(--color-card-border)]/40 hover:text-[var(--color-ink)] transition-colors">
              <span className="material-symbols-outlined text-[var(--color-secondary)] text-[15px]">request_quote</span>
              Requirement (RFQ)
            </button>
            <button className="flex shrink-0 items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--color-canvas)] border border-[var(--color-card-border)] text-[var(--color-ink-muted)] text-[11px] font-[var(--font-body-sm)] hover:bg-[var(--color-card-border)]/40 hover:text-[var(--color-ink)] transition-colors">
              <span className="material-symbols-outlined text-[var(--color-secondary)] text-[15px]">account_balance</span>
              Funding
            </button>
            <button className="flex shrink-0 items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--color-primary)] text-white text-[11px] font-[var(--font-body-sm)] font-semibold shadow-sm active:scale-95 transition-transform">
              <span className="material-symbols-outlined text-[var(--color-accent)] text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>spark</span>
              AI Assist
            </button>
          </div>
        </div>
      </section>

      {/* Feed Segmented Filter Control */}
      <section className="px-[var(--spacing-gutter-mobile)] pt-1">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-0.5">
          <button className="px-3 py-1 rounded-full bg-[var(--color-accent)] text-white font-[var(--font-title-md)] text-[12px] shrink-0 font-semibold shadow-sm">For You</button>
          <button className="px-3 py-1 rounded-full bg-[var(--color-card-bg)] border border-[var(--color-card-border)] text-[var(--color-secondary)] font-[var(--font-body-sm)] text-[12px] hover:bg-[var(--color-canvas)] shrink-0">Following</button>
          <button className="px-3 py-1 rounded-full bg-[var(--color-card-bg)] border border-[var(--color-card-border)] text-[var(--color-ink)] font-[var(--font-body-sm)] text-[12px] flex items-center gap-1 shrink-0">
            Opportunities
            <span className="w-4 h-4 rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)] text-[10px] font-[var(--font-mono-metric)] font-bold flex items-center justify-center">4</span>
          </button>
          <button className="px-3 py-1 rounded-full bg-[var(--color-card-bg)] border border-[var(--color-card-border)] text-[var(--color-secondary)] font-[var(--font-body-sm)] text-[12px] hover:bg-[var(--color-canvas)] shrink-0">Industry (EV & Auto)</button>
        </div>
      </section>

      {/* Main Feed Stream */}
      <section className="px-[var(--spacing-gutter-mobile)] space-y-3">
        {/* Feed Card 1: ABC EV Components */}
        <article className="bg-[var(--color-card-bg)] rounded-xl border border-[var(--color-card-border)] shadow-sm overflow-hidden">
          <div className="p-3.5 pb-2.5 flex items-start justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[var(--color-primary)] text-white flex items-center justify-center font-[var(--font-label-caps)] text-xs font-bold">ABC</div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-[var(--font-title-md)] text-[14px] text-[var(--color-ink)] font-bold">{companyName}</span>
                  <span className="material-symbols-outlined text-[var(--color-accent)] text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                </div>
                <div className="flex items-center gap-2 text-[var(--color-ink-muted)] font-[var(--font-label-caps)] text-[10px]">
                  <span>Tier-1 Supplier</span>
                  <span>•</span>
                  <span>ISO 9001:2015</span>
                  <span>•</span>
                  <span>2h ago</span>
                </div>
              </div>
            </div>
            <button aria-label="Post Options" className="text-[var(--color-secondary)] hover:text-[var(--color-ink)]">
              <span className="material-symbols-outlined text-[20px]">more_vert</span>
            </button>
          </div>
          <div className="px-3.5 pb-2.5">
            <p className="font-[var(--font-body-md)] text-[13px] text-[var(--color-ink)] leading-snug">
              We are looking for OEM buyers across South India for our next-generation IP67 Aluminium EV Battery Enclosures. Ready for commercial dispatch with 5,000 units/mo capacity.
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              <span className="font-[var(--font-label-caps)] text-[10px] text-[var(--color-ink)] bg-[var(--color-canvas)] border border-[var(--color-card-border)] px-2 py-0.5 rounded">#EVManufacturing</span>
              <span className="font-[var(--font-label-caps)] text-[10px] text-[var(--color-ink)] bg-[var(--color-canvas)] border border-[var(--color-card-border)] px-2 py-0.5 rounded">#BatteryEnclosures</span>
              <span className="font-[var(--font-label-caps)] text-[10px] text-[var(--color-ink)] bg-[var(--color-canvas)] border border-[var(--color-card-border)] px-2 py-0.5 rounded">#Tier1Supplier</span>
            </div>
          </div>
          <div className="mx-3.5 rounded-lg border border-[var(--color-card-border)] overflow-hidden relative bg-[var(--color-canvas)]">
            <img className="w-full h-44 object-cover" alt="Technical engineering CAD blueprint diagram of an automotive-grade lightweight aluminium electric vehicle battery enclosure pack" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB23bZ3JnLlV_rmGOgElbo-dqfH_yx-6IovecLrU_jFRHQTX4n9Fle4fiAz2Iof9qA3qJf7rFZYbnnbkLjKyDY3YWA8GraToDAZfQwsZcd7cg53ecWkF1LxBFgmgzq5EaZzeoLz0cIJODN9cI-AJveLbScVwgtXTpqN0wQJWXHC_bceOx-1XvXJDTwE0vKGeYYCUCg592V7zTOBuM7HNUdzwQBB5-tpElzvpqPWMkFArHhd0TZvyS1jpg"/>
            <div className="absolute bottom-2 left-2 bg-[var(--color-primary)]/90 backdrop-blur-md px-2 py-1 rounded text-white flex items-center gap-1.5 border border-white/10 shadow-sm">
              <span className="material-symbols-outlined text-[var(--color-accent)] text-[14px]">verified_user</span>
              <span className="font-[var(--font-label-caps)] text-[10px] font-medium">Verified Spec Sheet: IP67 Certified</span>
            </div>
          </div>
          <div className="mx-3.5 mt-2.5 bg-[var(--color-canvas)] border border-[var(--color-accent)]/30 rounded-lg p-2.5">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="material-symbols-outlined text-[var(--color-accent)] text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              <span className="font-[var(--font-label-caps)] text-[10px] text-[var(--color-accent)] font-bold">AI MATCH RATIONALE</span>
            </div>
            <p className="font-[var(--font-body-sm)] text-[11px] text-[var(--color-ink)] leading-tight">
              You manufacture automotive components. {companyName} is actively sourcing Tier-1 integration partners within Tamil Nadu & Karnataka.
            </p>
          </div>
          <div className="p-3.5 pt-3 space-y-2 border-t border-[var(--color-card-border)] mt-2.5">
            <div className="grid grid-cols-3 gap-2">
              <button className="col-span-2 py-2 px-3 bg-[var(--color-primary)] text-white font-[var(--font-title-md)] text-[12px] rounded-lg hover:bg-black transition-colors flex items-center justify-center gap-1.5 active:scale-[0.98] font-semibold">
                <span className="material-symbols-outlined text-[15px]">assignment</span>
                Request Quote / RFQ
              </button>
              <button className="col-span-1 py-2 px-2 bg-[var(--color-card-bg)] border border-[var(--color-card-border)] text-[var(--color-ink)] font-[var(--font-title-md)] text-[12px] rounded-lg hover:bg-[var(--color-canvas)] transition-colors text-center truncate font-medium">
                View Specs
              </button>
            </div>
            <div className="flex items-center justify-between pt-2 text-[var(--color-ink-muted)] font-[var(--font-mono-metric)] text-[12px]">
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-1 hover:text-[var(--color-error)] transition-colors">
                  <span className="material-symbols-outlined text-[17px]">favorite</span>
                  <span>43</span>
                </button>
                <button className="flex items-center gap-1 hover:text-[var(--color-ink)] transition-colors">
                  <span className="material-symbols-outlined text-[17px]">chat_bubble</span>
                  <span>12</span>
                </button>
                <button className="flex items-center gap-1 hover:text-[var(--color-ink)] transition-colors">
                  <span className="material-symbols-outlined text-[17px]">share</span>
                  <span>8</span>
                </button>
              </div>
              <button className="hover:text-[var(--color-ink)] text-[var(--color-secondary)]">
                <span className="material-symbols-outlined text-[18px]">bookmark</span>
              </button>
            </div>
          </div>
        </article>
      </section>
      
      <div className="h-6"></div>
    </div>
  );
}
