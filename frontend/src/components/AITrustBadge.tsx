import React from 'react';
import { Target, CheckCircle2 } from 'lucide-react';

interface AITrustBadgeProps {
  matchScore: number;
  reasons: string[];
  className?: string;
  theme?: 'success' | 'ai'; // 'success' is Green, 'ai' is Purple
}

export default function AITrustBadge({
  matchScore,
  reasons,
  className = '',
  theme = 'success',
}: AITrustBadgeProps) {
  const isSuccess = theme === 'success';
  const badgeColor = isSuccess ? 'bg-nexora-success' : 'bg-nexora-ai';
  const containerBg = isSuccess ? 'bg-nexora-success/5' : 'bg-nexora-ai/5';
  const containerBorder = isSuccess ? 'border-nexora-success/20' : 'border-nexora-ai/20';
  const iconColor = isSuccess ? 'text-nexora-success' : 'text-nexora-ai';

  return (
    <div className={`rounded-lg border ${containerBorder} ${containerBg} p-3 ${className}`}>
      {/* Badge Header */}
      <div className="flex items-center gap-2 mb-2">
        <div className={`px-2 py-0.5 rounded-full ${badgeColor} text-white text-xs font-bold flex items-center gap-1`}>
          <Target className="w-3.5 h-3.5" />
          {matchScore}% AI MATCH
        </div>
      </div>

      {/* Match Reasons */}
      <ul className="space-y-1.5">
        {reasons.map((reason, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-nexora-text">
            <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${iconColor}`} />
            <span>{reason}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
