"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, FileText, AlertCircle } from "lucide-react";

export default function SchemeDetails({ params }: { params: { id: string } }) {
  // In a real app, fetch based on params.id
  const scheme = {
    id: "PMEGP",
    name: "Prime Minister's Employment Generation Programme",
    department: "Ministry of Micro, Small and Medium Enterprises",
    description: "PMEGP is a credit-linked subsidy program aimed at generating employment opportunities through establishment of micro-enterprises in non-farm sector by helping traditional artisans and unemployed youth.",
    eligibility: [
      "Any individual above 18 years of age",
      "Passed at least VIII standard for project above Rs.10 lakh in manufacturing sector",
      "Only new projects are considered for sanction under PMEGP",
      "Self Help Groups (including those belonging to BPL provided that they have not availed benefits under any other Scheme)"
    ],
    benefits: "The maximum cost of the project/unit admissible under manufacturing sector is Rs. 50 lakh and under business/service sector is Rs. 20 lakh. Subsidy ranges from 15% to 35% depending on category and location.",
    documents: [
      "Project Report",
      "Aadhaar Card",
      "PAN Card",
      "Educational Qualification Certificate",
      "Special Category Certificate (if applicable)"
    ],
    last_updated: "2024-01-15"
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <Link href="/schemes" className="flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Schemes
      </Link>
      
      <div className="bg-background border border-border rounded-2xl p-8 mb-8 shadow-sm">
        <div className="inline-block bg-muted text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
          {scheme.department}
        </div>
        <h1 className="text-4xl font-bold mb-4">{scheme.name}</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          {scheme.description}
        </p>

        <div className="flex gap-4">
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5" />
            Check My Eligibility
          </button>
          <button className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted">
            Save Scheme
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <AlertCircle className="h-6 w-6 text-primary" />
              Eligibility Criteria
            </h2>
            <ul className="space-y-3">
              {scheme.eligibility.map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Financial Benefits</h2>
            <div className="bg-muted p-6 rounded-xl text-foreground">
              {scheme.benefits}
            </div>
          </section>
        </div>

        <div>
          <section className="bg-background border border-border rounded-xl p-6 sticky top-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Required Documents
            </h2>
            <ul className="space-y-2 mb-6">
              {scheme.documents.map((doc, idx) => (
                <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  {doc}
                </li>
              ))}
            </ul>
            <div className="text-xs text-muted-foreground pt-4 border-t border-border">
              Last updated: {scheme.last_updated}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
