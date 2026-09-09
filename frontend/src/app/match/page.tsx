"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CheckCircle2, AlertCircle, ArrowRight, Loader2 } from "lucide-react";

type MatchResult = {
  id: string;
  name: string;
  department: string;
  matchScore: number;
  eligibilityStatus: "ELIGIBLE" | "POSSIBLY ELIGIBLE" | "NOT ELIGIBLE";
  reasons: string[];
};

export default function SchemeMatch() {
  const [loading, setLoading] = useState(true);
  const [matches, setMatches] = useState<MatchResult[]>([]);

  useEffect(() => {
    // Simulate AI processing and Semantic matching
    const timer = setTimeout(() => {
      setMatches([
        {
          id: "PMEGP",
          name: "Prime Minister's Employment Generation Programme",
          department: "Ministry of MSME",
          matchScore: 94,
          eligibilityStatus: "ELIGIBLE",
          reasons: [
            "Your business category (Manufacturing) is supported",
            "Your business stage (Starting) is ideal for this scheme",
            "Your funding requirement matches the scheme limits",
            "Your location is supported"
          ]
        },
        {
          id: "MUDRA",
          name: "Pradhan Mantri Mudra Yojana (Tarun)",
          department: "Ministry of Finance",
          matchScore: 82,
          eligibilityStatus: "POSSIBLY ELIGIBLE",
          reasons: [
            "Matches your requirement for machinery assistance",
            "Cannot determine exact eligibility because annual turnover history is limited"
          ]
        }
      ]);
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <Loader2 className="h-12 w-12 text-primary animate-spin mb-6" />
        <h2 className="text-2xl font-bold mb-2">Analyzing your requirement...</h2>
        <p className="text-muted-foreground max-w-md">
          Our AI is scanning government databases and matching your business profile with available schemes using semantic search.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Your AI Scheme Matches</h1>
        <p className="text-muted-foreground">We found these schemes based on your profile and requirements.</p>
      </div>

      <div className="space-y-6">
        {matches.map((match) => (
          <div key={match.id} className="border border-border rounded-xl p-6 bg-background shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="text-xs font-medium text-primary mb-2 bg-muted inline-block px-2 py-1 rounded">
                  {match.department}
                </div>
                <h2 className="text-2xl font-bold">{match.name}</h2>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-primary mb-1">{match.matchScore}%</div>
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">AI Match Score</div>
              </div>
            </div>

            <div className={`p-4 rounded-lg mb-6 border ${
              match.eligibilityStatus === "ELIGIBLE" ? "bg-green-50 border-green-200 text-green-900" :
              match.eligibilityStatus === "POSSIBLY ELIGIBLE" ? "bg-amber-50 border-amber-200 text-amber-900" :
              "bg-red-50 border-red-200 text-red-900"
            }`}>
              <h3 className="font-bold flex items-center gap-2 mb-2">
                {match.eligibilityStatus === "ELIGIBLE" ? <CheckCircle2 className="h-5 w-5 text-green-600" /> : <AlertCircle className="h-5 w-5 text-amber-600" />}
                {match.eligibilityStatus}
              </h3>
              <ul className="space-y-1">
                {match.reasons.map((reason, idx) => (
                  <li key={idx} className="text-sm flex gap-2">
                    <span className="opacity-70 mt-1">•</span>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end">
              <Link href={`/schemes/${match.id}`} className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90">
                View Scheme Details <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
