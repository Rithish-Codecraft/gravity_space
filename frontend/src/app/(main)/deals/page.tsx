export default function Deals() {
  return (
    <div className="flex-1 flex flex-col gap-[var(--spacing-element-stack-md)] py-[var(--spacing-element-stack-sm)]">
      {/* Deal Pipeline Metric Header */}
      <section className="px-[var(--spacing-gutter-mobile)] pt-1">
        <div className="bg-[var(--color-primary)] text-white rounded-xl p-3.5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-[var(--font-label-caps)] text-[10px] text-white/70">TOTAL PIPELINE VALUE</span>
              <p className="font-[var(--font-display-xl-mobile)] text-[26px] font-bold font-[var(--font-mono-metric)] text-white leading-tight">₹4.82 Cr</p>
            </div>
            <div className="text-right">
              <span className="font-[var(--font-label-caps)] text-[10px] text-[var(--color-accent)] bg-[var(--color-accent)]/20 px-2 py-0.5 rounded font-[var(--font-mono-metric)]">4 Active Bids</span>
              <p className="font-[var(--font-body-sm)] text-[11px] text-white/80 mt-1">Win prob: 78%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deal Filter Tabs */}
      <section className="px-[var(--spacing-gutter-mobile)]">
        <div className="flex items-center gap-1.5 bg-[var(--color-card-bg)] p-1 rounded-xl border border-[var(--color-card-border)]">
          <button className="flex-1 py-1.5 rounded-lg bg-[var(--color-accent)] text-white font-[var(--font-label-caps)] text-[11px] font-semibold text-center shadow-sm">Active RFQs (4)</button>
          <button className="flex-1 py-1.5 rounded-lg text-[var(--color-secondary)] hover:text-[var(--color-ink)] font-[var(--font-label-caps)] text-[11px] text-center">Submitted (2)</button>
          <button className="flex-1 py-1.5 rounded-lg text-[var(--color-secondary)] hover:text-[var(--color-ink)] font-[var(--font-label-caps)] text-[11px] text-center">Won / Closed (9)</button>
        </div>
      </section>

      {/* Live Deals Stream */}
      <section className="px-[var(--spacing-gutter-mobile)] space-y-3">
        {/* Deal 1 */}
        <div className="bg-[var(--color-card-bg)] rounded-xl border border-[var(--color-card-border)] shadow-sm p-3.5">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-[var(--font-label-caps)] text-[10px] bg-[var(--color-accent)]/15 text-[var(--color-accent)] px-1.5 py-0.5 rounded font-bold">RFQ-2025-089</span>
                <span className="font-[var(--font-label-caps)] text-[10px] text-[var(--color-error)] font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-error)] animate-ping"></span> 18 hrs left
                </span>
              </div>
              <h3 className="font-[var(--font-title-md)] text-[14px] text-[var(--color-ink)] font-bold mt-1.5">Ather Energy: Gen-3 Tray Tooling</h3>
              <p className="font-[var(--font-body-sm)] text-[12px] text-[var(--color-ink-muted)]">Target Qty: 6,000 units / quarter • Deliver to Hosur</p>
            </div>
            <span className="font-[var(--font-mono-metric)] text-[14px] font-bold text-[var(--color-accent)]">₹1.85 Cr</span>
          </div>
          <div className="mt-3 p-2 bg-[var(--color-canvas)] rounded-lg flex items-center justify-between text-[11px] font-[var(--font-mono-metric)] text-[var(--color-ink)]">
            <span>Spec: ISO Die-Cast 6061-T6</span>
            <span className="text-[var(--color-accent)] font-semibold">Pre-qualified Tier-1</span>
          </div>
          <div className="mt-3 flex gap-2">
            <button className="flex-1 py-2 bg-[var(--color-accent)] text-white rounded-lg text-[12px] font-[var(--font-title-md)] font-semibold flex items-center justify-center gap-1">
              <span className="material-symbols-outlined text-[16px]">upload_file</span>
              Submit Commercial Bid
            </button>
            <button className="px-3 py-2 border border-[var(--color-card-border)] rounded-lg text-[var(--color-ink)] hover:bg-[var(--color-canvas)] text-[12px] font-medium">
              Dossier
            </button>
          </div>
        </div>

        {/* Deal 2 */}
        <div className="bg-[var(--color-card-bg)] rounded-xl border border-[var(--color-card-border)] shadow-sm p-3.5">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-[var(--font-label-caps)] text-[10px] bg-[var(--color-card-border)] text-[var(--color-secondary)] px-1.5 py-0.5 rounded font-bold">RFQ-2025-042</span>
                <span className="font-[var(--font-label-caps)] text-[10px] text-[var(--color-secondary)] font-semibold">Closing in 3 days</span>
              </div>
              <h3 className="font-[var(--font-title-md)] text-[14px] text-[var(--color-ink)] font-bold mt-1.5">Sundaram: High Tensile Extrusions</h3>
              <p className="font-[var(--font-body-sm)] text-[12px] text-[var(--color-ink-muted)]">Target Qty: 5,000 kg / month • Deliver to Chennai</p>
            </div>
            <span className="font-[var(--font-mono-metric)] text-[14px] font-bold text-[var(--color-ink)]">₹1.15 Cr</span>
          </div>
          <div className="mt-3 flex gap-2">
            <button className="flex-1 py-2 bg-[var(--color-primary)] text-white rounded-lg text-[12px] font-[var(--font-title-md)] font-semibold flex items-center justify-center gap-1">
              <span className="material-symbols-outlined text-[16px]">chat</span>
              Continue Negotiation
            </button>
          </div>
        </div>
      </section>
      
      <div className="h-6"></div>
    </div>
  );
}
