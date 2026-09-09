"use client";

import { useState } from "react";
import { Search, MapPin, Briefcase, PlusCircle, MessageSquare, ThumbsUp, Share2 } from "lucide-react";
import Link from "next/link";

type Post = {
  id: string;
  author: string;
  authorInitials: string;
  category: string;
  location: string;
  time: string;
  content: string;
  intent: "buying" | "selling" | "partnership" | "investment";
  relevanceScore?: number;
  relevanceReason?: string;
};

export default function OpportunitiesFeed() {
  const [posts] = useState<Post[]>([
    {
      id: "1",
      author: "Sri Venkateshwara Timbers",
      authorInitials: "SV",
      category: "Wood & Timber",
      location: "Tamil Nadu",
      time: "2 hours ago",
      content: "We are a wholesale supplier of premium teak wood in Tamil Nadu looking for manufacturing partners. We can supply up to 10 tons per month at competitive B2B rates.",
      intent: "selling",
      relevanceScore: 92,
      relevanceReason: "Recommended because you are starting a furniture manufacturing business in Tamil Nadu and may need raw materials."
    },
    {
      id: "2",
      author: "EcoFurniture Co.",
      authorInitials: "EF",
      category: "Furniture Assembly",
      location: "Karnataka",
      time: "1 day ago",
      content: "Looking for B2B contract manufacturers for small wooden chairs. Volume: 500 units/month. Must have good finishing capabilities.",
      intent: "buying",
      relevanceScore: 88,
      relevanceReason: "Recommended because you indicated furniture manufacturing as your primary business category."
    },
    {
      id: "3",
      author: "TechLogistics Solutions",
      authorInitials: "TL",
      category: "Logistics",
      location: "Pan India",
      time: "3 days ago",
      content: "We provide end-to-end B2B logistics for heavy manufactured goods. Offering 15% discount for new MSME partners this month.",
      intent: "selling"
    }
  ]);

  return (
    <div className="container mx-auto p-6 max-w-4xl min-h-screen">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Business Opportunities</h1>
          <p className="text-muted-foreground">Discover buyers, suppliers, and partners tailored for your business.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90">
          <PlusCircle className="h-4 w-4" /> Create Post
        </button>
      </div>

      <div className="flex gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search for suppliers, buyers, or materials..." 
            className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background"
          />
        </div>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="border border-border rounded-xl bg-background shadow-sm overflow-hidden">
            {post.relevanceScore && (
              <div className="bg-muted px-6 py-2 border-b border-border text-xs flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-primary">✨ AI Match</span>
                  <span className="text-muted-foreground hidden md:inline">{post.relevanceReason}</span>
                </div>
                <span className="font-bold text-primary">{post.relevanceScore}% Match</span>
              </div>
            )}
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center font-bold text-lg text-primary">
                    {post.authorInitials}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{post.author}</h3>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                      <span className="flex items-center gap-1"><Briefcase className="h-3 w-3" /> {post.category}</span>
                      <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {post.location}</span>
                      <span>• {post.time}</span>
                    </div>
                  </div>
                </div>
                <div className="text-xs font-medium uppercase tracking-wider bg-primary/10 text-primary px-2 py-1 rounded">
                  {post.intent}
                </div>
              </div>

              <p className="text-foreground leading-relaxed mb-6">
                {post.content}
              </p>

              <div className="flex gap-4 border-t border-border pt-4">
                <button className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                  <ThumbsUp className="h-4 w-4" /> Interested
                </button>
                <button className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                  <MessageSquare className="h-4 w-4" /> Message
                </button>
                <button className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                  <Share2 className="h-4 w-4" /> Share
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
