import { createClient } from "@/utils/supabase/server";
import { CheckCircle2, MapPin, Building2, ExternalLink, Mail, Phone, Calendar, Users, Briefcase } from "lucide-react";
import BusinessIdentity from "@/components/BusinessIdentity";
import Link from "next/link";

export default async function Profile() {
  const supabase = await createClient();

  // Get current user
  const { data: { user } } = await supabase.auth.getUser();

  let business = null;
  if (user) {
    // Fetch the business associated with the user
    const { data: member } = await supabase.from('business_members')
      .select('business_id')
      .eq('user_id', user.id)
      .limit(1)
      .single();
    
    if (member?.business_id) {
      const { data } = await supabase.from('businesses').select('*').eq('id', member.business_id).single();
      business = data;
    }
  }

  // If no business, show empty state
  if (!business) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center min-h-[100dvh] max-w-md mx-auto w-full bg-nexora-background p-6 text-center">
        <Building2 className="w-16 h-16 text-nexora-muted opacity-50 mb-4" />
        <h1 className="text-xl font-bold text-nexora-text mb-2">No Business Profile</h1>
        <p className="text-nexora-muted text-sm mb-6">You haven't set up a business profile yet.</p>
        <button className="bg-nexora-primary text-white font-medium py-2 px-6 rounded-lg">
          Create Profile
        </button>
      </div>
    );
  }

  const isVerified = business.verification_status === 'VERIFIED';
  const location = business.city ? `${business.city}, ${business.state || ''}` : null;

  return (
    <div className="flex-1 flex flex-col bg-nexora-background min-h-[100dvh] max-w-md mx-auto w-full pb-20">
      {/* Cover Photo */}
      <div className="h-32 w-full bg-gradient-to-r from-nexora-primary-dark to-nexora-ai relative">
        {business.cover_url && (
          <img src={business.cover_url} alt="Cover" className="w-full h-full object-cover opacity-80" />
        )}
      </div>

      {/* Profile Header section */}
      <div className="px-4 relative pb-4 border-b border-nexora-border bg-nexora-surface">
        <div className="flex justify-between items-end -mt-10 mb-3">
          <div className="w-20 h-20 rounded-xl bg-white p-1 border border-nexora-border shadow-sm z-10">
            {business.logo_url ? (
              <img src={business.logo_url} alt="Logo" className="w-full h-full rounded-lg object-cover" />
            ) : (
              <div className="w-full h-full rounded-lg bg-nexora-muted/10 flex items-center justify-center text-nexora-muted">
                <Building2 className="w-8 h-8" />
              </div>
            )}
          </div>
          <button className="bg-nexora-background border border-nexora-border text-nexora-text text-sm font-semibold px-4 py-1.5 rounded-lg">
            Edit Profile
          </button>
        </div>

        <div className="flex items-center gap-1.5">
          <h1 className="text-2xl font-bold text-nexora-text">{business.name}</h1>
          {isVerified && <CheckCircle2 className="w-5 h-5 text-nexora-success" fill="currentColor" stroke="white" />}
        </div>
        
        {business.legal_name && (
          <p className="text-sm text-nexora-muted font-medium mb-2">{business.legal_name}</p>
        )}

        <div className="flex flex-wrap gap-2 text-xs font-medium text-nexora-text mt-3">
          {business.sector && (
            <span className="bg-nexora-background border border-nexora-border px-2 py-1 rounded-md flex items-center gap-1">
              <Briefcase className="w-3 h-3 text-nexora-muted" /> {business.sector}
            </span>
          )}
          {location && (
            <span className="bg-nexora-background border border-nexora-border px-2 py-1 rounded-md flex items-center gap-1">
              <MapPin className="w-3 h-3 text-nexora-muted" /> {location}
            </span>
          )}
        </div>
      </div>

      {/* Trust Credentials */}
      {isVerified && (
        <div className="bg-nexora-success/5 border-b border-nexora-success/20 px-4 py-3 flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-nexora-success shrink-0" />
          <div>
            <p className="text-sm font-bold text-nexora-success">Verified Business Entity</p>
            <p className="text-xs text-nexora-success/80">GSTIN and Udyam credentials verified.</p>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="flex border-b border-nexora-border bg-nexora-surface sticky top-0 z-20">
        <button className="flex-1 py-3 text-sm font-bold text-nexora-primary border-b-2 border-nexora-primary">Overview</button>
        <button className="flex-1 py-3 text-sm font-bold text-nexora-muted hover:text-nexora-text">Products</button>
        <button className="flex-1 py-3 text-sm font-bold text-nexora-muted hover:text-nexora-text">Services</button>
      </div>

      {/* Tab Content: Overview */}
      <div className="p-4 flex flex-col gap-6">
        
        {/* Description */}
        <section>
          <h2 className="text-sm font-bold text-nexora-text mb-2 uppercase tracking-wide">About</h2>
          <p className="text-sm text-nexora-muted leading-relaxed">
            {business.description || "No description provided."}
          </p>
        </section>

        {/* What we offer / What we need */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-nexora-surface border border-nexora-border p-3 rounded-xl shadow-sm">
            <h3 className="text-xs font-bold text-nexora-primary mb-2 uppercase tracking-wide flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">output</span> What we offer
            </h3>
            <ul className="text-sm text-nexora-text space-y-1">
              <li>• Precision CNC Machining</li>
              <li>• Auto components</li>
              <li>• Contract Manufacturing</li>
            </ul>
          </div>
          <div className="bg-nexora-surface border border-nexora-border p-3 rounded-xl shadow-sm">
            <h3 className="text-xs font-bold text-nexora-warning mb-2 uppercase tracking-wide flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">input</span> What we need
            </h3>
            <ul className="text-sm text-nexora-text space-y-1">
              <li>• Aluminium Suppliers</li>
              <li>• Logistics Partners</li>
              <li>• Working Capital</li>
            </ul>
          </div>
        </div>

        {/* Quick Facts */}
        <section>
          <h2 className="text-sm font-bold text-nexora-text mb-3 uppercase tracking-wide">Quick Facts</h2>
          <div className="space-y-3 bg-nexora-surface p-4 rounded-xl border border-nexora-border shadow-sm">
            {business.founded_year && (
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-nexora-muted" />
                <span className="text-sm text-nexora-text">Founded in {business.founded_year}</span>
              </div>
            )}
            {business.employee_count && (
              <div className="flex items-center gap-3">
                <Users className="w-4 h-4 text-nexora-muted" />
                <span className="text-sm text-nexora-text">{business.employee_count} Employees</span>
              </div>
            )}
            {business.website && (
              <div className="flex items-center gap-3">
                <ExternalLink className="w-4 h-4 text-nexora-muted" />
                <a href={business.website} target="_blank" className="text-sm text-nexora-primary hover:underline truncate">
                  {business.website}
                </a>
              </div>
            )}
          </div>
        </section>

        {/* Sign Out Button (Ported from old profile) */}
        <section className="pt-4 border-t border-nexora-border mt-2">
          <form action={async () => {
            "use server";
            const { createClient } = await import('@/utils/supabase/server');
            const supabase = await createClient();
            await supabase.auth.signOut();
          }}>
            <button type="submit" className="w-full py-2.5 rounded-lg border border-red-500 text-red-500 font-semibold text-sm hover:bg-red-50 transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[18px]">logout</span>
              Sign Out
            </button>
          </form>
        </section>

      </div>
    </div>
  );
}
