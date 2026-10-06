import React from 'react';
import { Building2, MapPin, CheckCircle2 } from 'lucide-react';

interface BusinessIdentityProps {
  name: string;
  legalName?: string;
  logoUrl?: string | null;
  location?: string | null;
  sector?: string | null;
  isVerified?: boolean;
  className?: string;
}

export default function BusinessIdentity({
  name,
  legalName,
  logoUrl,
  location,
  sector,
  isVerified = false,
  className = '',
}: BusinessIdentityProps) {
  return (
    <div className={`flex items-start gap-3 ${className}`}>
      {/* Avatar / Logo */}
      <div className="relative shrink-0">
        {logoUrl ? (
          <img
            src={logoUrl}
            alt={`${name} logo`}
            className="w-12 h-12 rounded-full border border-nexora-border object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-nexora-muted/10 flex items-center justify-center border border-nexora-border text-nexora-muted">
            <Building2 className="w-6 h-6" />
          </div>
        )}
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <h3 className="font-semibold text-nexora-text truncate text-base">
            {name}
          </h3>
          {isVerified && (
            <CheckCircle2 className="w-4 h-4 text-nexora-success shrink-0" fill="currentColor" stroke="white" />
          )}
        </div>
        
        {sector && (
          <p className="text-sm text-nexora-muted truncate mt-0.5">
            {sector}
          </p>
        )}
        
        {location && (
          <div className="flex items-center gap-1 text-xs text-nexora-muted mt-1">
            <MapPin className="w-3.5 h-3.5" />
            <span className="truncate">{location}</span>
          </div>
        )}
      </div>
    </div>
  );
}
