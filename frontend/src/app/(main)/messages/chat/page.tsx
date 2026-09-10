"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ChatPage() {
  const router = useRouter();
  const [messages, setMessages] = useState<{role: string, content: string}[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const profileDataRaw = localStorage.getItem("nexora_full_profile");
      const profileData = profileDataRaw ? JSON.parse(profileDataRaw) : {};

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages, profileData }),
      });

      if (!response.ok) throw new Error("Failed to fetch response");

      const data = await response.json();
      const botResponse = data.choices[0].message.content;

      setMessages([...newMessages, { role: "assistant", content: botResponse }]);
    } catch (error) {
      console.error(error);
      setMessages([...newMessages, { role: "assistant", content: "Sorry, I am having trouble connecting right now." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-[var(--color-canvas)]">
      <div className="px-4 py-3 bg-[var(--color-card-bg)] border-b border-[var(--color-card-border)] flex items-center gap-3">
        <button onClick={() => router.back()} className="text-[var(--color-secondary)] p-1 rounded-full hover:bg-[var(--color-canvas)]">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center">
            <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>spark</span>
          </div>
          <div>
            <h2 className="font-[var(--font-title-md)] text-[14px] font-bold text-[var(--color-ink)]">Nexora Copilot</h2>
            <p className="text-[10px] text-[var(--color-ink-muted)]">Context-Aware AI Assistant</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar pb-24">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center opacity-60 px-6">
            <span className="material-symbols-outlined text-4xl mb-2 text-[var(--color-accent)]">auto_awesome</span>
            <p className="text-[13px] font-medium text-[var(--color-ink)]">Hi! I am Nexora Copilot.</p>
            <p className="text-[11px] text-[var(--color-ink-muted)] mt-1">I have access to your profile. Ask me about government schemes or business opportunities.</p>
          </div>
        )}
        
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-[13px] ${msg.role === 'user' ? 'bg-[var(--color-accent)] text-white rounded-br-none' : 'bg-white border border-[var(--color-card-border)] text-[var(--color-ink)] rounded-bl-none shadow-sm'}`}>
              <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white border border-[var(--color-card-border)] rounded-2xl rounded-bl-none px-4 py-3 shadow-sm flex gap-1">
              <span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
              <span className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Fixed at Bottom */}
      <div className="absolute bottom-0 left-0 w-full bg-[var(--color-canvas)] border-t border-[var(--color-card-border)] p-3 pb-safe">
        <div className="flex items-end gap-2 bg-white rounded-2xl border border-[var(--color-card-border)] shadow-sm px-3 py-2">
          <textarea 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
            placeholder="En business-ku government-la enna schemes available?"
            className="flex-1 max-h-24 min-h-[40px] resize-none outline-none text-[13px] bg-transparent py-2.5"
          />
          <div className="flex items-center gap-1 pb-1">
            <button className="p-1.5 text-[var(--color-secondary)] hover:bg-[var(--color-canvas)] rounded-full transition-colors">
              <span className="material-symbols-outlined text-[18px]">mic</span>
            </button>
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="p-1.5 bg-[var(--color-accent)] text-white rounded-full disabled:opacity-50 transition-colors shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
