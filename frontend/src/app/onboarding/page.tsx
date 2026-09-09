"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Onboarding() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    state: "",
    businessCategory: "",
    businessStage: "",
    businessType: "",
    annualTurnover: "",
    businessGoal: "",
    fundingRequirement: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate saving profile to backend
    // fetch("/api/profile", { method: "POST", body: JSON.stringify(formData) })
    router.push("/dashboard");
  };

  return (
    <div className="container mx-auto p-6 max-w-2xl min-h-screen flex flex-col justify-center">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Complete Your Profile</h1>
        <p className="text-muted-foreground">We need a few details to recommend the best schemes and opportunities.</p>
      </div>

      <div className="bg-background border border-border p-8 rounded-2xl shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Business Name / Your Name</label>
            <input required type="text" className="w-full p-3 border border-border rounded-lg bg-background" placeholder="e.g. Arun Manufacturing" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">State / Location</label>
              <select required className="w-full p-3 border border-border rounded-lg bg-background">
                <option value="">Select State</option>
                <option value="tamil_nadu">Tamil Nadu</option>
                <option value="karnataka">Karnataka</option>
                <option value="maharashtra">Maharashtra</option>
                <option value="kerala">Kerala</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Business Category</label>
              <select required className="w-full p-3 border border-border rounded-lg bg-background">
                <option value="">Select Category</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="services">Services</option>
                <option value="trading">Trading</option>
                <option value="agriculture">Agriculture/Food Processing</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Business Stage</label>
              <select required className="w-full p-3 border border-border rounded-lg bg-background">
                <option value="">Select Stage</option>
                <option value="idea">Idea / Planning</option>
                <option value="starting">Just Starting</option>
                <option value="operating">Operating (1-3 yrs)</option>
                <option value="scaling">Scaling (3+ yrs)</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Annual Turnover</label>
              <select required className="w-full p-3 border border-border rounded-lg bg-background">
                <option value="">Select Turnover</option>
                <option value="0_5l">0 - 5 Lakhs</option>
                <option value="5_25l">5 - 25 Lakhs</option>
                <option value="25_100l">25 Lakhs - 1 Crore</option>
                <option value="1cr_plus">1 Crore +</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">What is your primary requirement?</label>
            <textarea 
              required
              className="w-full p-3 border border-border rounded-lg bg-background min-h-[100px]" 
              placeholder="e.g. I need financial support and machinery assistance for starting a furniture manufacturing business."
            />
          </div>

          <button type="submit" className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90">
            Find My Matches
          </button>
        </form>
      </div>
    </div>
  );
}
