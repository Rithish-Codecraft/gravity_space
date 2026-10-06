'use client'

import { useState } from 'react'
import { PackageSearch, Store, Banknote, Handshake, Sparkles, Paperclip, MapPin, Calendar, ShieldCheck, Lock, Send } from 'lucide-react'
import { createOpportunity } from '@/app/(main)/post/actions'

export default function OpportunityForm() {
  const [intent, setIntent] = useState('SUPPLIER')
  const [useAI, setUseAI] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)

  return (
    <form action={async (formData) => {
      setIsSubmitting(true)
      try {
        formData.append('type', intent)
        await createOpportunity(formData)
      } catch (e) {
        console.error(e)
        setIsSubmitting(false)
      }
    }} className="max-w-md mx-auto px-4 pt-3.5 space-y-4 mb-32">
      {/* 1. INTENT SELECTOR */}
      <section>
        <div className="flex items-center justify-between mb-2">
          <label className="text-[12px] font-semibold uppercase tracking-wider text-[#64748b]">Intent Type</label>
          <span className="text-[11px] text-[#94a3b8]">Select one category</span>
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          {/* Supplier */}
          <div 
            onClick={() => setIntent('SUPPLIER')}
            className={`relative flex flex-col p-3 rounded-xl border-2 transition-all cursor-pointer ${intent === 'SUPPLIER' ? 'border-[#2563EB] bg-[#2563EB]/5 shadow-sm' : 'border-[#e2e8f0] bg-white hover:border-[#cbd5e1]'}`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className={`p-1.5 rounded-lg ${intent === 'SUPPLIER' ? 'bg-[#2563EB] text-white' : 'bg-[#f1f5f9] text-[#64748b]'}`}>
                <PackageSearch className="w-[18px] h-[18px]" />
              </span>
            </div>
            <span className={`text-[13px] font-bold ${intent === 'SUPPLIER' ? 'text-[#2563EB]' : 'text-[#0f172a]'}`}>Need a Supplier</span>
            <span className="text-[11px] text-[#64748b] leading-tight mt-0.5">Procurement / Purchase RFP</span>
          </div>
          
          {/* Buyer */}
          <div 
            onClick={() => setIntent('CUSTOMER')}
            className={`relative flex flex-col p-3 rounded-xl border transition-all cursor-pointer ${intent === 'CUSTOMER' ? 'border-[#2563EB] bg-[#2563EB]/5 shadow-sm border-2' : 'border-[#e2e8f0] bg-white hover:border-[#cbd5e1]'}`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className={`p-1.5 rounded-lg ${intent === 'CUSTOMER' ? 'bg-[#2563EB] text-white' : 'bg-[#f1f5f9] text-[#64748b]'}`}>
                <Store className="w-[18px] h-[18px]" />
              </span>
            </div>
            <span className={`text-[13px] font-semibold ${intent === 'CUSTOMER' ? 'text-[#2563EB]' : 'text-[#0f172a]'}`}>Need a Buyer</span>
            <span className="text-[11px] text-[#64748b] leading-tight mt-0.5">Direct Sales / Product Catalog</span>
          </div>

          {/* Capital */}
          <div 
            onClick={() => setIntent('FUNDING')}
            className={`relative flex flex-col p-3 rounded-xl border transition-all cursor-pointer ${intent === 'FUNDING' ? 'border-[#2563EB] bg-[#2563EB]/5 shadow-sm border-2' : 'border-[#e2e8f0] bg-white hover:border-[#cbd5e1]'}`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className={`p-1.5 rounded-lg ${intent === 'FUNDING' ? 'bg-[#2563EB] text-white' : 'bg-[#f1f5f9] text-[#64748b]'}`}>
                <Banknote className="w-[18px] h-[18px]" />
              </span>
            </div>
            <span className={`text-[13px] font-semibold ${intent === 'FUNDING' ? 'text-[#2563EB]' : 'text-[#0f172a]'}`}>Capital & Credit</span>
            <span className="text-[11px] text-[#64748b] leading-tight mt-0.5">Invoice Factoring / Capex</span>
          </div>

          {/* Partner */}
          <div 
            onClick={() => setIntent('PARTNER')}
            className={`relative flex flex-col p-3 rounded-xl border transition-all cursor-pointer ${intent === 'PARTNER' ? 'border-[#2563EB] bg-[#2563EB]/5 shadow-sm border-2' : 'border-[#e2e8f0] bg-white hover:border-[#cbd5e1]'}`}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className={`p-1.5 rounded-lg ${intent === 'PARTNER' ? 'bg-[#2563EB] text-white' : 'bg-[#f1f5f9] text-[#64748b]'}`}>
                <Handshake className="w-[18px] h-[18px]" />
              </span>
            </div>
            <span className={`text-[13px] font-semibold ${intent === 'PARTNER' ? 'text-[#2563EB]' : 'text-[#0f172a]'}`}>Dealer / Partner</span>
            <span className="text-[11px] text-[#64748b] leading-tight mt-0.5">State Distribution Channel</span>
          </div>
        </div>
      </section>

      {/* 2. AI ENRICHMENT BANNER */}
      <section className="rounded-xl border border-[#7C3AED]/30 bg-gradient-to-br from-[#7C3AED]/5 to-transparent p-3.5 space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#7C3AED]/15 text-[#7C3AED]">
              <Sparkles className="w-[16px] h-[16px]" />
            </span>
            <div>
              <div className="text-[12px] font-bold text-[#0f172a]">AI-assisted enrichment</div>
              <div className="text-[10.5px] text-[#7C3AED] font-semibold">Nexora AI match optimizer</div>
            </div>
          </div>
          {/* Toggle Switch */}
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" checked={useAI} onChange={() => setUseAI(!useAI)} />
            <div className="w-9 h-5 bg-[#cbd5e1] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#7C3AED]"></div>
          </label>
        </div>
        <p className="text-[11.5px] text-[#64748b] leading-relaxed">
          AI suggests technical keywords, relevant business attributes, and HSN candidates to help improve discovery and match accuracy. (Suggestions should be manually reviewed).
        </p>
        <button type="button" className="w-full flex items-center justify-center gap-1.5 py-1.5 px-3 bg-white border border-[#7C3AED]/30 rounded-lg text-[#7C3AED] text-[11px] font-semibold shadow-sm hover:bg-[#7C3AED]/5 transition-colors">
          <Paperclip className="w-[14px] h-[14px]" />
          Auto-fill from recent PO / RFP document
        </button>
      </section>

      {/* 3. CORE REQUIREMENT FORM FIELDS */}
      <div className="space-y-3.5">
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <label className="text-xs font-semibold text-[#0f172a] flex items-center gap-1">
              Requirement Title <span className="text-red-500">*</span>
            </label>
            <span className="text-[10px] text-[#94a3b8]">48 / 90 chars</span>
          </div>
          <input 
            type="text" 
            name="title"
            required
            defaultValue="Seeking 25 MT Combed Cotton Yarn (30s Ne count)"
            className="w-full bg-white border border-[#e2e8f0] rounded-lg px-3 py-2 text-[13px] font-medium text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] shadow-sm" 
          />
        </div>

        {/* Quantity + Unit */}
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-[#0f172a]">Required Quantity</label>
            <input 
              type="number" 
              name="quantity"
              defaultValue="25"
              className="w-full bg-white border border-[#e2e8f0] rounded-lg px-3 py-2 text-[13px] font-medium text-[#0f172a] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] shadow-sm" 
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-[#0f172a]">Unit of Measure</label>
            <select name="quantity_unit" className="w-full bg-white border border-[#e2e8f0] rounded-lg px-3 py-2 text-[13px] font-medium text-[#0f172a] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] shadow-sm">
              <option>MT (Metric Ton)</option>
              <option>Bales (170 kg)</option>
              <option>Kilograms (Kg)</option>
              <option>Units / Pcs</option>
            </select>
          </div>
        </div>

        {/* Estimated Commercial Budget & Payment Terms */}
        <div className="p-3 bg-white rounded-xl border border-[#e2e8f0] space-y-2.5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#0f172a] flex items-center gap-1">
              Commercial Budget Range
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="relative">
              <span className="absolute left-2.5 top-2 text-[10px] font-semibold text-[#64748b]">Min ₹</span>
              <input 
                type="text" 
                name="budget_min"
                defaultValue="6500000"
                className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-lg pl-9 pr-2 py-1.5 text-xs font-medium text-[#0f172a] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]" 
              />
            </div>
            <div className="relative">
              <span className="absolute left-2.5 top-2 text-[10px] font-semibold text-[#64748b]">Max ₹</span>
              <input 
                type="text" 
                name="budget_max"
                defaultValue="8000000"
                className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-lg pl-9 pr-2 py-1.5 text-xs font-medium text-[#0f172a] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]" 
              />
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <label className="text-xs font-semibold text-[#0f172a]">Description & Details</label>
            <span className="text-[11px] text-[#2563EB] font-medium hover:underline cursor-pointer">+ Insert Standard Spec</span>
          </div>
          <textarea 
            rows={3}
            name="description"
            required
            defaultValue="NABL accredited lab testing certificate required with dispatch. CSP > 3100, single yarn strength 280+ RKM. Packaged in moisture-proof corrugated export cartons."
            className="w-full bg-white border border-[#e2e8f0] rounded-lg p-2.5 text-xs text-[#0f172a] font-medium placeholder:text-[#94a3b8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] shadow-sm leading-relaxed" 
          />
        </div>

        {/* 4. TRUST & VERIFICATION */}
        <section className="rounded-xl border border-[#e2e8f0] p-3 bg-white space-y-2 shadow-sm">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#0f172a]">
            <ShieldCheck className="w-[16px] h-[16px] text-[#16A34A]" />
            Trust & Verification (Filters)
          </div>
          <div className="space-y-2 pt-1">
            <label className="flex items-start justify-between gap-2 p-2 rounded-lg bg-[#f8fafc] border border-[#e2e8f0] cursor-pointer">
              <div className="flex items-start gap-2">
                <input type="checkbox" defaultChecked className="mt-0.5 w-4 h-4 rounded text-[#2563EB] focus:ring-[#2563EB] border-[#cbd5e1]" />
                <div>
                  <div className="text-[12px] font-semibold text-[#0f172a]">Verified MSME / GSTIN Only</div>
                  <div className="text-[10.5px] text-[#64748b]">Filter responses to require active Udyam or GSTIN badge.</div>
                </div>
              </div>
            </label>

            <label className="flex items-start justify-between gap-2 p-2 rounded-lg bg-[#f8fafc] border border-[#e2e8f0] cursor-pointer">
              <div className="flex items-start gap-2">
                <input type="checkbox" defaultChecked className="mt-0.5 w-4 h-4 rounded text-[#2563EB] focus:ring-[#2563EB] border-[#cbd5e1]" />
                <div>
                  <div className="text-[12px] font-semibold text-[#0f172a]">Nexora Trade Escrow Eligible</div>
                  <div className="text-[10.5px] text-[#64748b]">Enable zero-default payment hold with partner Banks.</div>
                </div>
              </div>
              <Lock className="w-[16px] h-[16px] text-[#2563EB]" />
            </label>
          </div>
        </section>
      </div>

      {/* 5. STICKY BOTTOM ACTION BAR */}
      <div className="fixed bottom-[60px] left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#e2e8f0] px-4 py-2.5 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <div className="max-w-md mx-auto space-y-2">
          <div className="flex items-center justify-between text-[11px] px-1 font-medium text-[#64748b]">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#16A34A]"></span>
              Matching engine online
            </span>
            <span className="text-[#2563EB] font-bold">Ready to match</span>
          </div>
          <div className="flex items-center gap-2.5">
            <button 
              type="button" 
              className="w-1/3 py-2.5 px-3 bg-white border border-[#e2e8f0] hover:bg-[#f1f5f9] text-[#0f172a] text-xs font-semibold rounded-lg transition-all active:scale-95 text-center shadow-sm"
            >
              Save Draft
            </button>
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-2/3 py-2.5 px-4 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold rounded-lg shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <span>{isSubmitting ? 'Publishing...' : 'Publish Requirement'}</span>
              <Send className="w-[16px] h-[16px]" />
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}
