"use client";

import Link from "next/link";

export default function Messages() {
  return (
    <div className="flex-1 flex flex-col gap-[var(--spacing-element-stack-md)] py-[var(--spacing-element-stack-sm)]">
      {/* Deal Rooms & Copilot AI Top Filter */}
      <section className="px-[var(--spacing-gutter-mobile)] pt-1">
        <div className="flex items-center gap-2">
          <button onClick={() => alert("Procurement Rooms coming in Phase 3")} className="flex-1 py-2 px-3 rounded-xl bg-[var(--color-accent)] text-white font-[var(--font-title-md)] text-[12px] font-semibold flex items-center justify-center gap-1.5 shadow-sm">
            <span className="material-symbols-outlined text-[16px]">handshake</span>
            Procurement Rooms
          </button>
          <Link href="/messages/chat" className="flex-1 py-2 px-3 rounded-xl bg-[var(--color-primary)] text-white font-[var(--font-title-md)] text-[12px] font-semibold flex items-center justify-center gap-1.5 shadow-sm hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined text-[var(--color-accent)] text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>spark</span>
            Nexora Copilot AI
          </Link>
        </div>
      </section>

      {/* Active Deal Conversations */}
      <section className="px-[var(--spacing-gutter-mobile)] space-y-2">
        {/* Conversation 1: Ather Deal Room */}
        <div onClick={() => alert("Real-time messaging coming in Phase 3")} className="bg-[var(--color-card-bg)] rounded-xl border border-[var(--color-card-border)] p-3.5 shadow-sm hover:border-[var(--color-accent)]/40 transition-colors cursor-pointer">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-xs font-[var(--font-label-caps)]">
                  ATH
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[var(--color-accent)] border-2 border-white"></span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="font-[var(--font-title-md)] text-[13px] text-[var(--color-ink)] font-bold">Ather Strategic Sourcing</h4>
                  <span className="font-[var(--font-label-caps)] text-[10px] bg-[var(--color-accent)]/15 text-[var(--color-accent)] px-1.5 rounded font-[var(--font-mono-metric)] font-semibold">RFQ #089</span>
                </div>
                <p className="font-[var(--font-body-sm)] text-[12px] text-[var(--color-ink)] truncate max-w-[210px] font-medium mt-0.5">
                  Vikram: "We reviewed the IP67 thermal leak test. Could you clarify dispatch timeline?"
                </p>
              </div>
            </div>
            <span className="font-[var(--font-mono-metric)] text-[10px] text-[var(--color-ink-muted)]">14:20</span>
          </div>
          <div className="mt-2.5 flex items-center justify-between border-t border-[var(--color-card-border)] pt-2 text-[11px]">
            <span className="font-[var(--font-label-caps)] text-[var(--color-accent)] font-semibold flex items-center gap-1">
              <span className="material-symbols-outlined text-[13px]">task_alt</span> NDA Signed
            </span>
            <button className="text-[var(--color-accent)] font-[var(--font-label-caps)] font-semibold flex items-center">
              Open Room <span className="material-symbols-outlined text-[13px]">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Conversation 2: Sundaram Fasteners Procurement */}
        <div className="bg-[var(--color-card-bg)] rounded-xl border border-[var(--color-card-border)] p-3.5 shadow-sm hover:border-[var(--color-accent)]/40 transition-colors cursor-pointer">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[var(--color-canvas)] border border-[var(--color-card-border)] text-[var(--color-ink)] flex items-center justify-center font-bold text-xs font-[var(--font-label-caps)]">
                  SFL
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[var(--color-accent)] border-2 border-white"></span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="font-[var(--font-title-md)] text-[13px] text-[var(--color-ink)] font-bold">Sundaram Procurement Lead</h4>
                  <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></span>
                </div>
                <p className="font-[var(--font-body-sm)] text-[12px] text-[var(--color-ink)] truncate max-w-[210px] mt-0.5">
                  Karthik: "Quote of ₹318/kg accepted conditionally on 45 days credit cycle."
                </p>
              </div>
            </div>
            <span className="font-[var(--font-mono-metric)] text-[10px] text-[var(--color-ink-muted)]">Yesterday</span>
          </div>
        </div>

        {/* Conversation 3: Nexora AI Opportunity Matcher */}
        <div className="bg-[var(--color-card-bg)] rounded-xl border border-[var(--color-card-border)] p-3.5 shadow-sm bg-gradient-to-r from-[var(--color-card-bg)] to-emerald-50/40">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="font-[var(--font-title-md)] text-[13px] text-[var(--color-ink)] font-bold">Nexora Autonomous Agent</h4>
                  <span className="font-[var(--font-label-caps)] text-[9px] bg-[var(--color-accent)] text-white px-1.5 rounded font-bold">BOT</span>
                </div>
                <p className="font-[var(--font-body-sm)] text-[12px] text-[var(--color-ink-muted)] truncate max-w-[210px] mt-0.5">
                  Discovered 2 new extrusion tenders matching ISO 9001 code.
                </p>
              </div>
            </div>
            <span className="font-[var(--font-mono-metric)] text-[10px] text-[var(--color-accent)] font-bold">New</span>
          </div>
        </div>
      </section>

      <div className="h-6"></div>
    </div>
  );
}
