import React from 'react';
import BusinessIdentity from './BusinessIdentity';
import AITrustBadge from './AITrustBadge';
import { Zap, X, Bookmark } from 'lucide-react';

export interface OpportunityCardProps {
  id: string;
  businessName: string;
  businessLogo?: string | null;
  businessSector?: string | null;
  businessLocation?: string | null;
  isVerified?: boolean;
  
  title: string;
  budgetMin?: number;
  budgetMax?: number;
  currency?: string;
  duration?: string;
  
  matchScore: number;
  matchReasons: string[];
  
  postedAt?: string;
  
  onInterested?: (id: string) => void;
  onPass?: (id: string) => void;
}

export default function OpportunityCard({
  id,
  businessName,
  businessLogo,
  businessSector,
  businessLocation,
  isVerified = true,
  title,
  budgetMin,
  budgetMax,
  currency = 'INR',
  duration,
  matchScore,
  matchReasons,
  postedAt = 'Recently',
  onInterested,
  onPass
}: OpportunityCardProps) {

  const formatCurrency = (val?: number) => {
    if (!val) return null;
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(1)}Cr`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(1)}L`;
    return `₹${val.toLocaleString('en-IN')}`;
  };

  const budgetStr = budgetMin && budgetMax 
    ? `${formatCurrency(budgetMin)} - ${formatCurrency(budgetMax)}`
    : budgetMin ? `From ${formatCurrency(budgetMin)}` : null;

  return (
    <div className="bg-nexora-surface border border-nexora-border rounded-xl p-4 shadow-sm flex flex-col gap-4">
      {/* Tier 1: Business Identity Header */}
      <div className="flex items-start justify-between">
        <BusinessIdentity 
          name={businessName}
          logoUrl={businessLogo}
          sector={businessSector}
          location={businessLocation}
          isVerified={isVerified}
        />
        <div className="flex flex-col items-end gap-2">
          <button className="text-nexora-muted hover:text-nexora-primary transition-colors">
            <Bookmark className="w-5 h-5" />
          </button>
          <span className="text-[10px] text-nexora-muted font-medium">{postedAt}</span>
        </div>
      </div>

      {/* Tier 2: Intent / Commercial Need */}
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-bold text-nexora-text leading-tight">
          {title}
        </h2>
        
        {(budgetStr || duration) && (
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-sm font-medium text-nexora-text">
            {budgetStr && (
              <span className="bg-nexora-muted/10 px-2 py-0.5 rounded text-nexora-primary-dark">
                Est. Value: {budgetStr}
              </span>
            )}
            {duration && (
              <span className="text-nexora-muted">{duration}</span>
            )}
          </div>
        )}
      </div>

      {/* Tier 3: AI Bridge (Match & Reason) */}
      <AITrustBadge 
        matchScore={matchScore}
        reasons={matchReasons}
        theme={matchScore >= 90 ? 'success' : 'ai'}
      />

      {/* Tier 4: Actions */}
      <div className="flex items-center gap-3 pt-1">
        <button 
          onClick={() => onInterested?.(id)}
          className="flex-1 bg-nexora-primary hover:bg-nexora-primary-dark text-white font-medium py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors"
        >
          <Zap className="w-4 h-4 fill-current" />
          Interested
        </button>
        <button 
          onClick={() => onPass?.(id)}
          className="flex-1 border border-nexora-border hover:bg-nexora-background text-nexora-text font-medium py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors"
        >
          <X className="w-4 h-4" />
          Pass
        </button>
      </div>
    </div>
  );
}
