"use client";

import { useState } from "react";
import { Search, MapPin, Briefcase, MessageSquare, UserPlus } from "lucide-react";

export default function Connections() {
  const [connections] = useState([
    {
      id: "1",
      name: "Ramesh Kumar",
      business: "RK Furnishings",
      category: "Retail",
      location: "Chennai, Tamil Nadu",
      description: "Retailer of premium wooden furniture. Looking for reliable local manufacturers to source dining tables and chairs.",
      matchReason: "Matches your business category (Furniture Manufacturing) and location.",
      isMatch: true
    },
    {
      id: "2",
      name: "Priya Sharma",
      business: "GreenWood Designs",
      category: "Interior Design",
      location: "Bangalore, Karnataka",
      description: "Interior design firm executing commercial office projects. Always looking for custom furniture manufacturers.",
      matchReason: "Potential B2B buyer for your manufactured goods.",
      isMatch: true
    },
    {
      id: "3",
      name: "Abdul Rahman",
      business: "Rahman Timbers",
      category: "Raw Material Supplier",
      location: "Coimbatore, Tamil Nadu",
      description: "Wholesale supplier of teak, rosewood, and engineered wood.",
      isMatch: false
    }
  ]);

  return (
    <div className="container mx-auto p-6 max-w-4xl min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Network Connections</h1>
        <p className="text-muted-foreground">Discover relevant entrepreneurs, businesses, suppliers, and potential buyers.</p>
      </div>

      <div className="flex gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search by name, business, or category..." 
            className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {connections.map((person) => (
          <div key={person.id} className="border border-border rounded-xl p-6 bg-background shadow-sm flex flex-col h-full">
            {person.isMatch && (
              <div className="text-xs font-medium text-primary mb-4 bg-primary/10 inline-block px-2 py-1 rounded w-fit">
                ✨ Recommended Connection
              </div>
            )}
            
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center font-bold text-xl text-primary shrink-0">
                {person.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <h3 className="font-bold text-lg">{person.name}</h3>
                <p className="font-medium text-foreground">{person.business}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
              <span className="flex items-center gap-1"><Briefcase className="h-3 w-3" /> {person.category}</span>
              <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {person.location}</span>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
              {person.description}
            </p>

            {person.isMatch && (
              <div className="text-xs bg-muted p-3 rounded-lg mb-6 text-foreground">
                <span className="font-medium">Why matched:</span> {person.matchReason}
              </div>
            )}

            <div className="flex gap-3 mt-auto">
              <button className="flex-1 flex justify-center items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
                <UserPlus className="h-4 w-4" /> Connect
              </button>
              <button className="flex-1 flex justify-center items-center gap-2 px-4 py-2 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors">
                <MessageSquare className="h-4 w-4" /> Message
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
