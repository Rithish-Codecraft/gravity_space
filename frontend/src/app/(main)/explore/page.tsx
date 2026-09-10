export default function Explore() {
  return (
    <div className="flex-1 flex flex-col gap-[var(--spacing-element-stack-md)] py-[var(--spacing-element-stack-sm)]">
      {/* Search & Sector Filter Bar */}
      <section className="px-[var(--spacing-gutter-mobile)] pt-1">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-2.5 text-[var(--color-secondary)] text-[20px]">search</span>
          <input className="w-full pl-9 pr-10 py-2.5 rounded-xl border border-[var(--color-card-border)] bg-[var(--color-card-bg)] text-[13px] font-[var(--font-body-sm)] text-[var(--color-ink)] placeholder:text-[var(--color-secondary)] focus:ring-1 focus:ring-[var(--color-accent)] focus:border-[var(--color-accent)] shadow-sm outline-none" placeholder="Search suppliers, buyers, HSN codes, clusters..." type="text"/>
          <button className="absolute right-2.5 top-2 p-1 rounded-md text-[var(--color-secondary)] hover:text-[var(--color-ink)]">
            <span className="material-symbols-outlined text-[18px]">tune</span>
          </button>
        </div>
        {/* Sector Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-2.5 pb-0.5">
          <button className="px-3 py-1 rounded-full bg-[var(--color-accent)] text-white text-[11px] font-[var(--font-label-caps)] font-semibold whitespace-nowrap shadow-sm">All Hubs</button>
          <button className="px-3 py-1 rounded-full bg-[var(--color-card-bg)] border border-[var(--color-card-border)] text-[var(--color-secondary)] text-[11px] font-[var(--font-label-caps)] whitespace-nowrap hover:bg-[var(--color-canvas)]">EV Powertrain</button>
          <button className="px-3 py-1 rounded-full bg-[var(--color-card-bg)] border border-[var(--color-card-border)] text-[var(--color-secondary)] text-[11px] font-[var(--font-label-caps)] whitespace-nowrap hover:bg-[var(--color-canvas)]">Precision Die Casting</button>
          <button className="px-3 py-1 rounded-full bg-[var(--color-card-bg)] border border-[var(--color-card-border)] text-[var(--color-secondary)] text-[11px] font-[var(--font-label-caps)] whitespace-nowrap hover:bg-[var(--color-canvas)]">Battery BMS</button>
          <button className="px-3 py-1 rounded-full bg-[var(--color-card-bg)] border border-[var(--color-card-border)] text-[var(--color-secondary)] text-[11px] font-[var(--font-label-caps)] whitespace-nowrap hover:bg-[var(--color-canvas)]">Fasteners</button>
        </div>
      </section>

      {/* Industrial Clusters Radar */}
      <section className="px-[var(--spacing-gutter-mobile)]">
        <div className="bg-[var(--color-card-bg)] rounded-xl border border-[var(--color-card-border)] p-3.5 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[var(--color-accent)] text-[20px]">hub</span>
              <h2 className="font-[var(--font-title-md)] text-[14px] text-[var(--color-ink)] font-bold">Corridor Match Radar</h2>
            </div>
            <span className="font-[var(--font-label-caps)] text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-0.5 rounded text-[10px] font-semibold">Live GIS</span>
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            <div className="p-2.5 bg-[var(--color-canvas)] rounded-lg border border-[var(--color-card-border)]">
              <div className="flex items-center justify-between">
                <span className="font-[var(--font-label-caps)] text-[10px] text-[var(--color-ink-muted)]">Hosur-Bengaluru</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse"></span>
              </div>
              <p className="font-[var(--font-headline-sm)] text-[var(--color-ink)] font-[var(--font-mono-metric)] font-bold text-[18px] mt-1">28 OEM</p>
              <span className="font-[var(--font-body-sm)] text-[11px] text-[var(--color-accent)]">Active Procurement</span>
            </div>
            <div className="p-2.5 bg-[var(--color-canvas)] rounded-lg border border-[var(--color-card-border)]">
              <div className="flex items-center justify-between">
                <span className="font-[var(--font-label-caps)] text-[10px] text-[var(--color-ink-muted)]">Coimbatore-Auto</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"></span>
              </div>
              <p className="font-[var(--font-headline-sm)] text-[var(--color-ink)] font-[var(--font-mono-metric)] font-bold text-[18px] mt-1">42 T1/T2</p>
              <span className="font-[var(--font-body-sm)] text-[11px] text-[var(--color-ink-muted)]">High capacity match</span>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Enterprise Directory List */}
      <section className="px-[var(--spacing-gutter-mobile)] space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="font-[var(--font-label-caps)] text-[var(--color-ink-muted)] text-[11px]">VERIFIED OEM BUYERS NEAR YOU</span>
          <span className="font-[var(--font-label-caps)] text-[var(--color-accent)] text-[11px] font-semibold">Radius &lt; 250km</span>
        </div>
        {/* Company 1 */}
        <div className="bg-[var(--color-card-bg)] rounded-xl border border-[var(--color-card-border)] p-3 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-xs font-[var(--font-label-caps)]">
              OLA
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h4 className="font-[var(--font-title-md)] text-[13px] text-[var(--color-ink)] font-semibold">Ola Electric Megafactory</h4>
                <span className="material-symbols-outlined text-[var(--color-accent)] text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
              <p className="font-[var(--font-body-sm)] text-[11px] text-[var(--color-ink-muted)]">Pochampalli • 2-Wheeler Powertrain</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="font-[var(--font-label-caps)] text-[10px] bg-[var(--color-accent)]/15 text-[var(--color-accent)] px-1.5 py-0.2 rounded font-[var(--font-mono-metric)]">96% Capability Fit</span>
              </div>
            </div>
          </div>
          <button className="p-2 rounded-lg bg-[var(--color-canvas)] text-[var(--color-ink)] hover:bg-[var(--color-accent)] hover:text-white transition-colors">
            <span className="material-symbols-outlined text-[18px]">forum</span>
          </button>
        </div>
        {/* Company 2 */}
        <div className="bg-[var(--color-card-bg)] rounded-xl border border-[var(--color-card-border)] p-3 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[var(--color-canvas)] border border-[var(--color-card-border)] text-[var(--color-ink)] flex items-center justify-center font-bold text-xs font-[var(--font-label-caps)]">
              TVS
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h4 className="font-[var(--font-title-md)] text-[13px] text-[var(--color-ink)] font-semibold">TVS Motor EV Division</h4>
                <span className="material-symbols-outlined text-[var(--color-accent)] text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
              <p className="font-[var(--font-body-sm)] text-[11px] text-[var(--color-ink-muted)]">Hosur Plant 2 • High Voltage Packs</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="font-[var(--font-label-caps)] text-[10px] bg-[var(--color-accent)]/15 text-[var(--color-accent)] px-1.5 py-0.2 rounded font-[var(--font-mono-metric)]">91% Capability Fit</span>
              </div>
            </div>
          </div>
          <button className="p-2 rounded-lg bg-[var(--color-canvas)] text-[var(--color-ink)] hover:bg-[var(--color-accent)] hover:text-white transition-colors">
            <span className="material-symbols-outlined text-[18px]">forum</span>
          </button>
        </div>
        {/* Company 3 */}
        <div className="bg-[var(--color-card-bg)] rounded-xl border border-[var(--color-card-border)] p-3 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-xs font-[var(--font-label-caps)]">
              SIM
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h4 className="font-[var(--font-title-md)] text-[13px] text-[var(--color-ink)] font-semibold">Simple Energy Systems</h4>
                <span className="material-symbols-outlined text-[var(--color-accent)] text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
              <p className="font-[var(--font-body-sm)] text-[11px] text-[var(--color-ink-muted)]">Dharmapuri • Chassis & Structural</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="font-[var(--font-label-caps)] text-[10px] bg-[var(--color-accent)]/15 text-[var(--color-accent)] px-1.5 py-0.2 rounded font-[var(--font-mono-metric)]">88% Match</span>
              </div>
            </div>
          </div>
          <button className="p-2 rounded-lg bg-[var(--color-canvas)] text-[var(--color-ink)] hover:bg-[var(--color-accent)] hover:text-white transition-colors">
            <span className="material-symbols-outlined text-[18px]">forum</span>
          </button>
        </div>
      </section>

      <div className="h-6"></div>
    </div>
  );
}
