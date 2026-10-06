import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import OpportunityCard from "@/components/OpportunityCard";
import BusinessIdentity from "@/components/BusinessIdentity";
import { Sparkles, ChevronRight, ArrowRight } from "lucide-react";

export default async function Home() {
  const supabase = await createClient();

  // Get current user
  const { data: { user } } = await supabase.auth.getUser();
  
  let userName = "User";
  let companyName = "Your Business";
  
  if (user) {
    const { data: profile } = await supabase.from('profiles').select('name').eq('id', user.id).single();
    if (profile?.name) userName = profile.name.split(' ')[0];

    const { data: member } = await supabase.from('business_members')
      .select('businesses(name)')
      .eq('user_id', user.id)
      .limit(1)
      .single();
    
    const biz = member?.businesses as any;
    if (biz?.name) {
      companyName = biz.name;
    }
  }

  // Fetch top 1 opportunity match
  const { data: topMatch } = await supabase
    .from('opportunity_matches')
    .select(`
      id, match_score, match_reason,
      opportunity:opportunities(
        id, title, budget_min, budget_max,
        business:businesses(name, logo_url, sector, city, state, verification_status)
      )
    `)
    .order('match_score', { ascending: false })
    .limit(1)
    .single();

  // Fetch recommended businesses (mock recommendation logic by getting recent verified ones)
  const { data: recommendedBiz } = await supabase
    .from('businesses')
    .select('id, name, logo_url, sector, city, state, verification_status')
    .eq('verification_status', 'VERIFIED')
    .limit(3);

  return (
    <div className="flex-1 flex flex-col gap-6 py-4 pb-24 bg-nexora-background min-h-[100dvh] max-w-md mx-auto w-full">
      {/* Hero Greeting */}
      <section className="px-4 pt-2">
        <div className="flex items-center gap-2 text-nexora-ai mb-1">
          <Sparkles className="w-4 h-4" />
          <span className="text-xs font-bold uppercase tracking-wider">Nexora AI Summary</span>
        </div>
        <h1 className="text-2xl font-bold text-nexora-text leading-tight">
          Good morning, {userName}
        </h1>
        <p className="text-nexora-muted mt-1 text-sm">
          You have <strong>3</strong> high-priority matches and <strong>1</strong> new message regarding your recent posting.
        </p>
      </section>

      {/* Top Match */}
      <section className="px-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-bold text-nexora-text">Top Opportunity Match</h2>
          <Link href="/explore" className="text-sm font-semibold text-nexora-primary hover:underline">
            View All
          </Link>
        </div>
        
        {topMatch ? (
          (() => {
            const opp = topMatch.opportunity as any;
            const biz = opp.business;
            const location = biz.city ? `${biz.city}, ${biz.state || ''}` : null;
            const reasons = topMatch.match_reason ? topMatch.match_reason.split('|').filter(Boolean) : ['High intent match'];
            
            return (
              <OpportunityCard 
                id={topMatch.id}
                businessName={biz.name}
                businessLogo={biz.logo_url}
                businessSector={biz.sector}
                businessLocation={location}
                isVerified={biz.verification_status === 'VERIFIED'}
                title={opp.title}
                budgetMin={opp.budget_min}
                budgetMax={opp.budget_max}
                matchScore={topMatch.match_score || 95}
                matchReasons={reasons}
              />
            )
          })()
        ) : (
          <div className="bg-nexora-surface border border-nexora-border rounded-xl p-4 text-center text-sm text-nexora-muted">
            No matches found right now.
          </div>
        )}
      </section>

      {/* Recommended Businesses */}
      <section className="px-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-bold text-nexora-text">Discover Businesses</h2>
          <button className="text-sm font-semibold text-nexora-primary hover:underline">
            Search
          </button>
        </div>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4">
          {recommendedBiz?.map(biz => (
            <div key={biz.id} className="min-w-[240px] bg-nexora-surface border border-nexora-border rounded-xl p-3 shadow-sm shrink-0 flex flex-col justify-between">
              <BusinessIdentity 
                name={biz.name}
                logoUrl={biz.logo_url}
                sector={biz.sector}
                location={biz.city}
                isVerified={biz.verification_status === 'VERIFIED'}
              />
              <Link href={`/profile/${biz.id}`} className="mt-3 text-sm text-nexora-primary font-medium flex items-center gap-1 hover:underline">
                View Profile <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
