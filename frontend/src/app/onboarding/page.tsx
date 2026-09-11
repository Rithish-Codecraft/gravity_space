"use client";

import { useState } from "react";
import { completeOnboarding } from "./actions";

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    personalRole: "",
    businessName: "",
    businessType: "",
    industry: "",
    location: "",
    offerings: [] as string[],
    requirements: [] as string[],
    goals: [] as string[],
  });

  const updateForm = (key: string, value: any) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const toggleArray = (key: 'offerings' | 'requirements' | 'goals', item: string) => {
    setFormData((prev) => {
      const arr = prev[key];
      if (arr.includes(item)) {
        return { ...prev, [key]: arr.filter((i) => i !== item) };
      }
      return { ...prev, [key]: [...arr, item] };
    });
  };

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  return (
    <div className="flex-1 overflow-y-auto bg-[#faf8ff] text-[#131b2e] flex flex-col p-6">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 rounded-lg bg-[#091e42] flex items-center justify-center text-white">
          <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
        </div>
        <span className="text-xl font-semibold tracking-tight text-[#000619]">Nexora</span>
      </div>

      <div className="flex-1">
        {/* Progress Bar */}
        <div className="flex gap-1 mb-8 h-1">
          {[1, 2, 3, 4, 5].map((s) => (
            <div key={s} className={`flex-1 rounded-full ${s <= step ? 'bg-[#006c49]' : 'bg-[#d2d9f4]'}`}></div>
          ))}
        </div>

        {step === 1 && (
          <div className="flex flex-col gap-6 animate-in slide-in-from-right-4 fade-in">
            <div>
              <h1 className="text-2xl font-bold text-[#000619] mb-2">Who are you?</h1>
              <p className="text-[#44474e] text-sm">Tell us your role in the business ecosystem.</p>
            </div>
            
            <div className="flex flex-col gap-3">
              <input 
                type="text" 
                placeholder="Your Full Name" 
                value={formData.fullName}
                onChange={(e) => updateForm('fullName', e.target.value)}
                className="w-full rounded-lg border border-[#c5c6cf] px-4 py-3 text-sm focus:border-[#091e42] focus:ring-1 focus:ring-[#091e42]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 mt-2">
              {['Individual', 'Entrepreneur', 'Business Owner', 'Employee', 'Investor', 'Professional'].map((role) => (
                <button
                  key={role}
                  onClick={() => updateForm('personalRole', role)}
                  className={`py-3 px-4 rounded-xl border text-sm font-medium text-left transition-all ${
                    formData.personalRole === role 
                      ? 'border-[#006c49] bg-[#6cf8bb]/10 text-[#006c49]' 
                      : 'border-[#c5c6cf] bg-white text-[#44474e] hover:border-[#091e42]'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col gap-6 animate-in slide-in-from-right-4 fade-in">
            <div>
              <h1 className="text-2xl font-bold text-[#000619] mb-2">Your Business</h1>
              <p className="text-[#44474e] text-sm">Let's set up your business profile.</p>
            </div>
            
            <div className="flex flex-col gap-4">
              <input 
                type="text" 
                placeholder="Business Name" 
                value={formData.businessName}
                onChange={(e) => updateForm('businessName', e.target.value)}
                className="w-full rounded-lg border border-[#c5c6cf] px-4 py-3 text-sm focus:border-[#091e42] focus:ring-1 focus:ring-[#091e42]"
              />
              <input 
                type="text" 
                placeholder="Industry (e.g. Textiles, EV)" 
                value={formData.industry}
                onChange={(e) => updateForm('industry', e.target.value)}
                className="w-full rounded-lg border border-[#c5c6cf] px-4 py-3 text-sm focus:border-[#091e42] focus:ring-1 focus:ring-[#091e42]"
              />
              <input 
                type="text" 
                placeholder="Location (e.g. Madurai, Tamil Nadu)" 
                value={formData.location}
                onChange={(e) => updateForm('location', e.target.value)}
                className="w-full rounded-lg border border-[#c5c6cf] px-4 py-3 text-sm focus:border-[#091e42] focus:ring-1 focus:ring-[#091e42]"
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="flex flex-col gap-6 animate-in slide-in-from-right-4 fade-in">
            <div>
              <h1 className="text-2xl font-bold text-[#000619] mb-2">What do you offer?</h1>
              <p className="text-[#44474e] text-sm">Select multiple if applicable.</p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {['Products', 'Services', 'Manufacturing', 'Distribution', 'Expertise', 'Raw Materials'].map((offer) => (
                <button
                  key={offer}
                  onClick={() => toggleArray('offerings', offer)}
                  className={`py-2 px-4 rounded-full border text-sm font-medium transition-all ${
                    formData.offerings.includes(offer)
                      ? 'border-[#006c49] bg-[#006c49] text-white' 
                      : 'border-[#c5c6cf] bg-white text-[#44474e]'
                  }`}
                >
                  {offer}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="flex flex-col gap-6 animate-in slide-in-from-right-4 fade-in">
            <div>
              <h1 className="text-2xl font-bold text-[#000619] mb-2">What do you need?</h1>
              <p className="text-[#44474e] text-sm">This helps Nexora AI find opportunities for you.</p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {['Customers', 'Suppliers', 'Investors', 'Distributors', 'Dealers', 'Employees', 'Machinery', 'Raw materials', 'Funding', 'Partners', 'Government schemes'].map((req) => (
                <button
                  key={req}
                  onClick={() => toggleArray('requirements', req)}
                  className={`py-2 px-4 rounded-full border text-sm font-medium transition-all ${
                    formData.requirements.includes(req)
                      ? 'border-[#091e42] bg-[#091e42] text-white' 
                      : 'border-[#c5c6cf] bg-white text-[#44474e]'
                  }`}
                >
                  {req}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="flex flex-col gap-6 animate-in slide-in-from-right-4 fade-in">
            <div>
              <h1 className="text-2xl font-bold text-[#000619] mb-2">Business Goals</h1>
              <p className="text-[#44474e] text-sm">What is your primary focus right now?</p>
            </div>
            
            <div className="flex flex-col gap-3">
              {['Increase sales', 'Expand geographically', 'Raise capital', 'Get government funding', 'Find suppliers', 'Hire employees'].map((goal) => (
                <button
                  key={goal}
                  onClick={() => toggleArray('goals', goal)}
                  className={`py-3 px-4 rounded-xl border text-sm font-medium text-left transition-all ${
                    formData.goals.includes(goal)
                      ? 'border-[#006c49] bg-[#6cf8bb]/10 text-[#006c49]' 
                      : 'border-[#c5c6cf] bg-white text-[#44474e]'
                  }`}
                >
                  {goal}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 flex items-center justify-between pt-4 border-t border-[#d2d9f4]">
        {step > 1 ? (
          <button 
            onClick={handleBack}
            className="px-4 py-2 text-[#44474e] font-medium text-sm hover:text-[#000619] transition-colors"
          >
            Back
          </button>
        ) : <div></div>}
        
        {step < 5 ? (
          <button 
            onClick={handleNext}
            className="px-6 py-2.5 bg-[#091e42] text-white rounded-lg font-semibold text-sm hover:bg-[#000619] transition-colors shadow-sm"
          >
            Next Step
          </button>
        ) : (
          <button 
            onClick={() => completeOnboarding(formData)}
            className="px-6 py-2.5 bg-[#006c49] text-white rounded-lg font-semibold text-sm hover:bg-[#004e33] transition-colors shadow-sm flex items-center gap-2"
          >
            <span>Complete Setup</span>
            <span className="material-symbols-outlined text-[18px]">check_circle</span>
          </button>
        )}
      </div>
    </div>
  );
}
