"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  
  // State for all form fields
  const [formData, setFormData] = useState({
    // Personal Details
    name: "",
    age: "",
    gender: "Male",
    location: "",
    // Business Details
    businessType: "Manufacturing",
    businessStage: "Existing",
    businessLocation: "",
    annualIncome: "",
    // Eligibility Details
    socialCategory: "General",
    familyIncome: "",
    employmentStatus: "Self-Employed",
    disabilityStatus: "None",
    // Financial Requirements
    loanAmount: "",
    purpose: "",
    existingLoan: "None"
  });

  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedProfile = localStorage.getItem("nexora_full_profile");
    if (savedProfile) {
      setFormData(JSON.parse(savedProfile));
    } else {
      // Fallback to name/company from login
      const name = localStorage.getItem("nexora_user_name") || "";
      const company = localStorage.getItem("nexora_company_name") || "";
      setFormData(prev => ({ ...prev, name, businessName: company }));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setIsSaved(false);
  };

  const handleSave = () => {
    localStorage.setItem("nexora_full_profile", JSON.stringify(formData));
    localStorage.setItem("nexora_user_name", formData.name);
    // Refresh to apply name across app
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="flex-1 flex flex-col gap-4 py-4 px-4 pb-12">
      <div className="flex items-center justify-between mb-2">
        <h1 className="font-[var(--font-headline-lg-mobile)] text-[22px] font-bold text-[var(--color-ink)]">
          Master Profile
        </h1>
        <button 
          onClick={handleSave}
          className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-4 py-1.5 rounded-full text-[13px] font-semibold flex items-center gap-1.5 transition-colors shadow-sm active:scale-95"
        >
          {isSaved ? <><span className="material-symbols-outlined text-[16px]">check</span> Saved</> : "Save Profile"}
        </button>
      </div>

      <div className="space-y-5">
        {/* Section 1: Personal Details */}
        <section className="bg-white rounded-xl border border-[var(--color-card-border)] p-4 shadow-sm">
          <h2 className="text-[14px] font-bold text-[var(--color-primary)] mb-3 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px]">person</span> Personal Details
          </h2>
          <div className="space-y-3">
            <div>
              <label className="text-[11px] font-semibold text-[var(--color-secondary)] uppercase">Name</label>
              <input name="name" value={formData.name} onChange={handleChange} type="text" className="w-full mt-1 px-3 py-2 bg-[var(--color-canvas)] border border-[var(--color-card-border)] rounded-lg text-[13px] focus:ring-1 focus:ring-[var(--color-accent)] outline-none" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-semibold text-[var(--color-secondary)] uppercase">Age</label>
                <input name="age" value={formData.age} onChange={handleChange} type="number" className="w-full mt-1 px-3 py-2 bg-[var(--color-canvas)] border border-[var(--color-card-border)] rounded-lg text-[13px] focus:ring-1 focus:ring-[var(--color-accent)] outline-none" />
              </div>
              <div>
                <label className="text-[11px] font-semibold text-[var(--color-secondary)] uppercase">Gender</label>
                <select name="gender" value={formData.gender} onChange={handleChange} className="w-full mt-1 px-3 py-2 bg-[var(--color-canvas)] border border-[var(--color-card-border)] rounded-lg text-[13px] focus:ring-1 focus:ring-[var(--color-accent)] outline-none">
                  <option>Male</option><option>Female</option><option>Other</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-[11px] font-semibold text-[var(--color-secondary)] uppercase">Location / State</label>
              <input name="location" value={formData.location} onChange={handleChange} type="text" className="w-full mt-1 px-3 py-2 bg-[var(--color-canvas)] border border-[var(--color-card-border)] rounded-lg text-[13px] focus:ring-1 focus:ring-[var(--color-accent)] outline-none" />
            </div>
          </div>
        </section>

        {/* Section 2: Business Details */}
        <section className="bg-white rounded-xl border border-[var(--color-card-border)] p-4 shadow-sm">
          <h2 className="text-[14px] font-bold text-[var(--color-primary)] mb-3 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px]">storefront</span> Business Details
          </h2>
          <div className="space-y-3">
            <div>
              <label className="text-[11px] font-semibold text-[var(--color-secondary)] uppercase">Business Type/Category</label>
              <input name="businessType" value={formData.businessType} onChange={handleChange} placeholder="e.g. Manufacturing, Retail..." type="text" className="w-full mt-1 px-3 py-2 bg-[var(--color-canvas)] border border-[var(--color-card-border)] rounded-lg text-[13px] focus:ring-1 focus:ring-[var(--color-accent)] outline-none" />
            </div>
            <div>
              <label className="text-[11px] font-semibold text-[var(--color-secondary)] uppercase">Business Stage</label>
              <select name="businessStage" value={formData.businessStage} onChange={handleChange} className="w-full mt-1 px-3 py-2 bg-[var(--color-canvas)] border border-[var(--color-card-border)] rounded-lg text-[13px] focus:ring-1 focus:ring-[var(--color-accent)] outline-none">
                <option>Idea Stage</option><option>New / Just Started</option><option>Existing / Scaling</option>
              </select>
            </div>
            <div>
              <label className="text-[11px] font-semibold text-[var(--color-secondary)] uppercase">Annual Turnover</label>
              <input name="annualIncome" value={formData.annualIncome} onChange={handleChange} placeholder="e.g. ₹50,00,000" type="text" className="w-full mt-1 px-3 py-2 bg-[var(--color-canvas)] border border-[var(--color-card-border)] rounded-lg text-[13px] focus:ring-1 focus:ring-[var(--color-accent)] outline-none" />
            </div>
          </div>
        </section>

        {/* Section 3: Eligibility Details */}
        <section className="bg-white rounded-xl border border-[var(--color-card-border)] p-4 shadow-sm">
          <h2 className="text-[14px] font-bold text-[var(--color-primary)] mb-3 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px]">fact_check</span> Eligibility Metrics
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] font-semibold text-[var(--color-secondary)] uppercase">Social Category</label>
              <select name="socialCategory" value={formData.socialCategory} onChange={handleChange} className="w-full mt-1 px-3 py-2 bg-[var(--color-canvas)] border border-[var(--color-card-border)] rounded-lg text-[13px] focus:ring-1 focus:ring-[var(--color-accent)] outline-none">
                <option>General</option><option>SC</option><option>ST</option><option>OBC</option><option>Minority</option>
              </select>
            </div>
            <div>
              <label className="text-[11px] font-semibold text-[var(--color-secondary)] uppercase">Family Income</label>
              <input name="familyIncome" value={formData.familyIncome} onChange={handleChange} placeholder="e.g. ₹8,00,000" type="text" className="w-full mt-1 px-3 py-2 bg-[var(--color-canvas)] border border-[var(--color-card-border)] rounded-lg text-[13px] focus:ring-1 focus:ring-[var(--color-accent)] outline-none" />
            </div>
            <div>
              <label className="text-[11px] font-semibold text-[var(--color-secondary)] uppercase">Disability</label>
              <select name="disabilityStatus" value={formData.disabilityStatus} onChange={handleChange} className="w-full mt-1 px-3 py-2 bg-[var(--color-canvas)] border border-[var(--color-card-border)] rounded-lg text-[13px] focus:ring-1 focus:ring-[var(--color-accent)] outline-none">
                <option>None</option><option>Applicable</option>
              </select>
            </div>
          </div>
        </section>

        {/* Section 4: Financial Requirements */}
        <section className="bg-white rounded-xl border border-[var(--color-card-border)] p-4 shadow-sm">
          <h2 className="text-[14px] font-bold text-[var(--color-primary)] mb-3 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px]">account_balance</span> Financial Needs
          </h2>
          <div className="space-y-3">
            <div>
              <label className="text-[11px] font-semibold text-[var(--color-secondary)] uppercase">Required Loan/Funding</label>
              <input name="loanAmount" value={formData.loanAmount} onChange={handleChange} placeholder="e.g. ₹10,00,000" type="text" className="w-full mt-1 px-3 py-2 bg-[var(--color-canvas)] border border-[var(--color-card-border)] rounded-lg text-[13px] focus:ring-1 focus:ring-[var(--color-accent)] outline-none" />
            </div>
            <div>
              <label className="text-[11px] font-semibold text-[var(--color-secondary)] uppercase">Purpose of Funding</label>
              <textarea name="purpose" value={formData.purpose} onChange={handleChange} rows={2} placeholder="Working capital, machinery purchase..." className="w-full mt-1 px-3 py-2 bg-[var(--color-canvas)] border border-[var(--color-card-border)] rounded-lg text-[13px] focus:ring-1 focus:ring-[var(--color-accent)] outline-none"></textarea>
            </div>
          </div>
        </section>

        {/* Section 5: Documents Vault */}
        <section className="bg-white rounded-xl border border-[var(--color-card-border)] p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-[14px] font-bold text-[var(--color-primary)] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px]">description</span> KYC Documents
            </h2>
            <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-bold tracking-wider uppercase flex items-center gap-1">
              <span className="material-symbols-outlined text-[12px]">document_scanner</span> OCR Active
            </span>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <div className="border border-dashed border-[var(--color-card-border)] rounded-lg p-3 flex flex-col items-center justify-center gap-1 bg-slate-50 cursor-pointer hover:bg-slate-100 transition-colors">
              <span className="material-symbols-outlined text-[var(--color-secondary)]">id_card</span>
              <span className="text-[10px] font-semibold text-[var(--color-secondary)] text-center">Aadhaar / ID</span>
            </div>
            <div className="border border-dashed border-[var(--color-card-border)] rounded-lg p-3 flex flex-col items-center justify-center gap-1 bg-slate-50 cursor-pointer hover:bg-slate-100 transition-colors">
              <span className="material-symbols-outlined text-[var(--color-secondary)]">receipt_long</span>
              <span className="text-[10px] font-semibold text-[var(--color-secondary)] text-center">Income Cert</span>
            </div>
            <div className="border border-dashed border-[var(--color-card-border)] rounded-lg p-3 flex flex-col items-center justify-center gap-1 bg-slate-50 cursor-pointer hover:bg-slate-100 transition-colors">
              <span className="material-symbols-outlined text-[var(--color-secondary)]">assignment_ind</span>
              <span className="text-[10px] font-semibold text-[var(--color-secondary)] text-center">Caste Cert</span>
            </div>
            <div className="border border-dashed border-[var(--color-card-border)] rounded-lg p-3 flex flex-col items-center justify-center gap-1 bg-slate-50 cursor-pointer hover:bg-slate-100 transition-colors">
              <span className="material-symbols-outlined text-[var(--color-secondary)]">inventory_2</span>
              <span className="text-[10px] font-semibold text-[var(--color-secondary)] text-center">Business Docs</span>
            </div>
          </div>
        </section>

        {/* Section 6: Account Actions */}
        <section className="bg-white rounded-xl border border-[var(--color-card-border)] p-4 shadow-sm mt-4">
          <button 
            onClick={() => {
              localStorage.clear();
              router.push("/");
            }}
            className="w-full py-2.5 rounded-lg border border-[var(--color-error)] text-[var(--color-error)] font-semibold text-[13px] hover:bg-red-50 transition-colors flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">logout</span>
            Sign Out
          </button>
        </section>

      </div>
    </div>
  );
}
