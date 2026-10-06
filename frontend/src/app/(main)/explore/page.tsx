import React from "react";
import { createClient } from "@/utils/supabase/server";
import OpportunityCard from "@/components/OpportunityCard";

export default async function ExploreFeed() {
  const supabase = await createClient();
  
  // Fetch opportunities tailored to the current user
  // In a real scenario, this would filter by user_id from auth
  const { data: matches, error } = await supabase
    .from('opportunity_matches')
    .select(`
      id,
      match_score,
      match_reason,
      opportunity:opportunities(
        id,
        title,
        budget_min,
        budget_max,
        created_at,
        business:businesses(
          id,
          name,
          logo_url,
          sector,
          city,
          state,
          verification_status
        )
      )
    `)
    .order('match_score', { ascending: false })
    .limit(20);

  const categories = ["For You (14)", "Customers", "Suppliers", "Investors", "Dealers", "Funding"];

  return (
    <div className="w-full max-w-md mx-auto min-h-[100dvh] bg-nexora-background flex flex-col pt-4">
      {/* Header */}
      <header className="px-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-nexora-text">OPPORTUNITY FEED</h1>
            <p className="text-sm text-nexora-muted font-medium">24 Verified Matches Today</p>
          </div>
        </div>

        {/* Categories */}
        <div className="flex items-center gap-4 overflow-x-auto no-scrollbar pb-2">
          {categories.map((cat, idx) => (
            <button
              key={cat}
              className={`whitespace-nowrap px-1 py-1 text-sm font-semibold border-b-2 transition-colors ${
                idx === 0 
                  ? 'border-nexora-primary text-nexora-primary' 
                  : 'border-transparent text-nexora-muted hover:text-nexora-text'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      {/* Feed */}
      <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto pb-24">
        {error ? (
          <div className="text-center text-nexora-error py-10">Error loading feed.</div>
        ) : matches && matches.length > 0 ? (
          matches.map((match: any) => {
            const opp = match.opportunity;
            const biz = opp.business;
            const location = biz.city && biz.state ? `${biz.city}, ${biz.state}` : biz.city || biz.state || null;
            const isVerified = biz.verification_status === 'VERIFIED';
            // Parse reason into array for bullet points
            const reasons = match.match_reason ? match.match_reason.split('|').filter(Boolean) : ['High synergy with your sector'];
            
            return (
              <OpportunityCard 
                key={match.id}
                id={match.id}
                businessName={biz.name}
                businessLogo={biz.logo_url}
                businessSector={biz.sector}
                businessLocation={location}
                isVerified={isVerified}
                title={opp.title}
                budgetMin={opp.budget_min}
                budgetMax={opp.budget_max}
                matchScore={match.match_score || 85}
                matchReasons={reasons}
                postedAt="Today"
              />
            )
          })
        ) : (
          <div className="text-center text-nexora-muted py-20 flex flex-col items-center">
            <span className="material-symbols-outlined text-4xl mb-2 opacity-50">search_off</span>
            <p>No new opportunities found.</p>
            <p className="text-sm mt-1">Check back later or update your preferences.</p>
          </div>
        )}
      </div>
    </div>
  );
}
