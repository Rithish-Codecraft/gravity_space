"use client";

import { Sparkles, Send, Mic, Search, Briefcase, Handshake, Info } from "lucide-react";

export default function Copilot() {
  return (
    <div className="flex-1 flex flex-col bg-nexora-background h-[100dvh] max-w-md mx-auto w-full pb-16 relative">
      {/* Header */}
      <header className="px-4 py-3 bg-nexora-surface border-b border-nexora-border flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-2 text-nexora-ai">
          <div className="w-8 h-8 rounded-full bg-nexora-ai/10 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-nexora-ai" />
          </div>
          <div>
            <h1 className="text-base font-bold text-nexora-text leading-tight">Nexora Copilot</h1>
            <p className="text-[10px] uppercase font-bold tracking-wider text-nexora-ai">Always Active</p>
          </div>
        </div>
        <button className="w-8 h-8 rounded-full bg-nexora-background border border-nexora-border flex items-center justify-center text-nexora-muted hover:text-nexora-text">
          <Info className="w-4 h-4" />
        </button>
      </header>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 pb-32">
        {/* Welcome message */}
        <div className="flex flex-col gap-1 items-start max-w-[85%]">
          <div className="bg-nexora-surface border border-nexora-border rounded-2xl rounded-tl-sm p-3 shadow-sm">
            <p className="text-sm text-nexora-text">
              Hi! I'm your Nexora AI Copilot. I can help you find new business opportunities, analyze suppliers, or discover relevant government schemes.
            </p>
          </div>
          <div className="bg-nexora-surface border border-nexora-border rounded-2xl rounded-tl-sm p-3 shadow-sm">
            <p className="text-sm text-nexora-text font-medium">
              What would you like to do today?
            </p>
          </div>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-2 gap-2 mt-2">
          <button className="bg-nexora-ai/5 border border-nexora-ai/20 hover:bg-nexora-ai/10 transition-colors p-3 rounded-xl flex flex-col gap-2 text-left">
            <Search className="w-5 h-5 text-nexora-ai" />
            <span className="text-xs font-bold text-nexora-text">Find new buyers in my region</span>
          </button>
          <button className="bg-nexora-primary/5 border border-nexora-primary/20 hover:bg-nexora-primary/10 transition-colors p-3 rounded-xl flex flex-col gap-2 text-left">
            <Briefcase className="w-5 h-5 text-nexora-primary" />
            <span className="text-xs font-bold text-nexora-text">Check scheme eligibility</span>
          </button>
          <button className="bg-nexora-success/5 border border-nexora-success/20 hover:bg-nexora-success/10 transition-colors p-3 rounded-xl flex flex-col gap-2 text-left">
            <Handshake className="w-5 h-5 text-nexora-success" />
            <span className="text-xs font-bold text-nexora-text">Draft a requirement post</span>
          </button>
        </div>
      </div>

      {/* Input Dock */}
      <div className="absolute bottom-16 left-0 right-0 p-4 bg-gradient-to-t from-nexora-background via-nexora-background to-transparent pt-10">
        <div className="bg-nexora-surface border-2 border-nexora-ai/20 rounded-full p-1.5 shadow-lg flex items-center gap-2 focus-within:border-nexora-ai transition-colors relative">
          <button className="w-9 h-9 shrink-0 rounded-full bg-nexora-ai/10 flex items-center justify-center text-nexora-ai hover:bg-nexora-ai/20">
            <Mic className="w-4 h-4" />
          </button>
          <input 
            type="text" 
            placeholder="Ask Copilot anything..." 
            className="flex-1 bg-transparent text-sm text-nexora-text outline-none placeholder:text-nexora-muted"
          />
          <button className="w-9 h-9 shrink-0 rounded-full bg-nexora-ai flex items-center justify-center text-white hover:bg-purple-700 shadow-sm">
            <Send className="w-4 h-4 ml-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
