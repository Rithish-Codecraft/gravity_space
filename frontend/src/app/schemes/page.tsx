"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Filter } from "lucide-react";

type Scheme = {
  id: str;
  name: str;
  department: str;
  description: str;
};

export default function SchemesExplorer() {
  const [schemes, setSchemes] = useState<Scheme[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would fetch from our FastAPI backend
    // fetch("http://localhost:8000/api/schemes")
    setTimeout(() => {
      setSchemes([
        {
          id: "PMEGP",
          name: "Prime Minister's Employment Generation Programme",
          department: "Ministry of MSME",
          description: "Financial assistance for setting up new micro-enterprises in non-farm sector.",
        },
        {
          id: "MUDRA",
          name: "Pradhan Mantri Mudra Yojana",
          department: "Ministry of Finance",
          description: "Loans up to 10 lakh to non-corporate, non-farm small/micro enterprises.",
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Scheme Explorer</h1>
        <p className="text-muted-foreground">Discover government schemes and financial assistance for your business.</p>
      </div>

      <div className="flex gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search schemes by name, keyword, or requirement..." 
            className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-3 border border-border rounded-lg bg-background hover:bg-muted">
          <Filter className="h-5 w-5" />
          <span>Filters</span>
        </button>
      </div>

      {loading ? (
        <div className="text-center py-20">Loading schemes...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schemes.map((scheme) => (
            <div key={scheme.id} className="border border-border rounded-xl p-6 bg-background shadow-sm hover:shadow-md transition-shadow">
              <div className="text-xs font-medium text-primary mb-2 bg-muted inline-block px-2 py-1 rounded">
                {scheme.department}
              </div>
              <h3 className="text-xl font-semibold mb-3">{scheme.name}</h3>
              <p className="text-muted-foreground mb-6 line-clamp-3">
                {scheme.description}
              </p>
              <Link href={`/schemes/${scheme.id}`} className="text-primary font-medium hover:underline">
                View Details &rarr;
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
