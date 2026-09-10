export default function Profile() {
  return (
    <div className="flex-1 flex flex-col gap-[var(--spacing-element-stack-md)] py-[var(--spacing-element-stack-sm)]">
      {/* Company Dossier Hero Header */}
      <section className="px-[var(--spacing-gutter-mobile)] pt-1">
        <div className="bg-[var(--color-card-bg)] rounded-xl border border-[var(--color-card-border)] p-4 shadow-sm relative overflow-hidden">
          <div className="flex items-start gap-3.5">
            <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary)] text-white flex items-center justify-center font-[var(--font-headline-sm)] font-bold text-lg border-2 border-[var(--color-accent)] shadow-sm">
              ABC
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1.5">
                <h2 className="font-[var(--font-headline-sm)] text-[16px] text-[var(--color-ink)] font-bold leading-tight">ABC EV Components Ltd</h2>
                <span className="material-symbols-outlined text-[var(--color-accent)] text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
              <p className="font-[var(--font-body-sm)] text-[12px] text-[var(--color-ink-muted)] mt-0.5">Automotive Die-Cast & Thermal Enclosures</p>
              <div className="flex items-center gap-2 mt-1.5">
                <span className="font-[var(--font-label-caps)] text-[10px] bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/25 px-2 py-0.5 rounded font-semibold">Tier-1 Verified OEM Supplier</span>
              </div>
            </div>
          </div>
          {/* Trust Badges Strip */}
          <div className="mt-3.5 pt-3 border-t border-[var(--color-card-border)] grid grid-cols-3 gap-2 text-center">
            <div className="p-1.5 bg-[var(--color-canvas)] rounded-lg">
              <span className="font-[var(--font-label-caps)] text-[10px] text-[var(--color-ink-muted)] block">GST Status</span>
              <span className="font-[var(--font-label-caps)] text-[11px] font-bold text-[var(--color-accent)]">Active / Clean</span>
            </div>
            <div className="p-1.5 bg-[var(--color-canvas)] rounded-lg">
              <span className="font-[var(--font-label-caps)] text-[10px] text-[var(--color-ink-muted)] block">Certifications</span>
              <span className="font-[var(--font-label-caps)] text-[11px] font-bold text-[var(--color-ink)]">ISO 9001 / IATF</span>
            </div>
            <div className="p-1.5 bg-[var(--color-canvas)] rounded-lg">
              <span className="font-[var(--font-label-caps)] text-[10px] text-[var(--color-ink-muted)] block">Fulfillment</span>
              <span className="font-[var(--font-label-caps)] text-[11px] font-bold text-[var(--color-ink)]">99.4% On-Time</span>
            </div>
          </div>
        </div>
      </section>

      {/* Production Capabilities & Specs */}
      <section className="px-[var(--spacing-gutter-mobile)] space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="font-[var(--font-label-caps)] text-[var(--color-ink-muted)] text-[11px]">REGISTERED CAPACITIES</span>
          <button className="font-[var(--font-label-caps)] text-[var(--color-accent)] text-[11px] font-semibold hover:underline">Edit Specs</button>
        </div>
        <div className="bg-[var(--color-card-bg)] rounded-xl border border-[var(--color-card-border)] p-3.5 shadow-sm space-y-2">
          <div className="flex justify-between items-center text-[12px]">
            <span className="text-[var(--color-ink-muted)]">Monthly Stamping Capacity:</span>
            <span className="font-[var(--font-mono-metric)] font-bold text-[var(--color-ink)]">5,000 Units / Month</span>
          </div>
          <div className="flex justify-between items-center text-[12px]">
            <span className="text-[var(--color-ink-muted)]">Machine Fleet:</span>
            <span className="font-[var(--font-title-md)] font-semibold text-[var(--color-ink)]">4x 800-Ton High Pressure Die Cast</span>
          </div>
          <div className="flex justify-between items-center text-[12px]">
            <span className="text-[var(--color-ink-muted)]">Testing Facility:</span>
            <span className="font-[var(--font-title-md)] font-semibold text-[var(--color-ink)]">IP67 Submersion & CMM Optical</span>
          </div>
          <div className="flex justify-between items-center text-[12px]">
            <span className="text-[var(--color-ink-muted)]">Primary Facility:</span>
            <span className="font-[var(--font-title-md)] font-semibold text-[var(--color-ink)]">Peenya Industrial Area, Bengaluru</span>
          </div>
        </div>

        {/* Actions & Settings */}
        <div className="bg-[var(--color-card-bg)] rounded-xl border border-[var(--color-card-border)] divide-y divide-[var(--color-card-border)] shadow-sm flex flex-col">
          <button className="w-full p-3 flex items-center justify-between hover:bg-[var(--color-canvas)] text-left transition-colors">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[var(--color-secondary)] text-[20px]">badge</span>
              <span className="font-[var(--font-title-md)] text-[13px] text-[var(--color-ink)] font-medium">Digital Product Catalog (8 items)</span>
            </div>
            <span className="material-symbols-outlined text-[var(--color-secondary)] text-[16px]">chevron_right</span>
          </button>
          <button className="w-full p-3 flex items-center justify-between hover:bg-[var(--color-canvas)] text-left transition-colors">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[var(--color-secondary)] text-[20px]">verified_user</span>
              <span className="font-[var(--font-title-md)] text-[13px] text-[var(--color-ink)] font-medium">Compliance & MSME ZED Gold Certificate</span>
            </div>
            <span className="material-symbols-outlined text-[var(--color-secondary)] text-[16px]">chevron_right</span>
          </button>
          <button className="w-full p-3 flex items-center justify-between hover:bg-[var(--color-canvas)] text-left transition-colors">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[var(--color-secondary)] text-[20px]">settings</span>
              <span className="font-[var(--font-title-md)] text-[13px] text-[var(--color-ink)] font-medium">Account & Sub-User Permissions</span>
            </div>
            <span className="material-symbols-outlined text-[var(--color-secondary)] text-[16px]">chevron_right</span>
          </button>
        </div>
      </section>

      <div className="h-6"></div>
    </div>
  );
}
