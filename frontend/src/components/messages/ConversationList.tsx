'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { 
  ArrowLeft, Search, Edit, SlidersHorizontal, Flame, ArrowRight,
  ShieldCheck, CheckCheck, Sparkles, MessageSquarePlus
} from 'lucide-react'

// Map time to readable string
function timeAgo(dateString: string) {
  const diff = Date.now() - new Date(dateString).getTime()
  const mins = Math.floor(diff / 60000)
  if (mins < 60) return `${mins}m ago`
  const hrs = Math.floor(mins / 60)
  if (hrs < 24) return `${hrs}h ago`
  return `${Math.floor(hrs / 24)}d ago`
}

export default function ConversationList({ initialConversations }: { initialConversations: any[] }) {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('all')

  const filteredConversations = initialConversations // Mock filtering logic for now

  return (
    <div className="bg-[#f8fafc] text-[#0f172a] min-h-screen pb-32 font-sans">
      {/* TOP APP BAR */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#e2e8f0]">
        <div className="px-4 pt-3 pb-2.5 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <button onClick={() => router.back()} className="p-1.5 -ml-1.5 text-[#64748b] hover:bg-[#f1f5f9] rounded-lg transition-colors">
              <ArrowLeft className="w-[22px] h-[22px]" />
            </button>
            <div className="flex items-center space-x-2">
              <h1 className="font-bold text-base tracking-tight text-[#0f172a] leading-tight">Messages</h1>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <button className="p-2 text-[#64748b] hover:bg-[#f1f5f9] rounded-lg transition-colors">
              <Search className="w-[20px] h-[20px]" />
            </button>
            <button className="p-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-lg transition-colors flex items-center justify-center shadow-sm">
              <Edit className="w-[19px] h-[19px]" />
            </button>
          </div>
        </div>

        {/* Quick Search */}
        <div className="px-4 pb-3">
          <div className="relative flex items-center">
            <Search className="absolute left-3 text-[#94a3b8] w-[18px] h-[18px]" />
            <input 
              type="text" 
              placeholder="Search conversations, companies, RFPs..." 
              className="w-full bg-[#f1f5f9] text-xs text-[#0f172a] placeholder-[#94a3b8] pl-9 pr-9 py-2 rounded-lg border border-transparent focus:border-[#2563EB] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2563EB] transition-all" 
            />
            <button className="absolute right-2.5 p-1 text-[#94a3b8] hover:text-[#64748b]">
              <SlidersHorizontal className="w-[16px] h-[16px]" />
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center space-x-2 px-4 pb-2.5 overflow-x-auto no-scrollbar border-t border-[#f8fafc] pt-2">
          <button 
            onClick={() => setActiveTab('all')}
            className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold ${activeTab === 'all' ? 'bg-[#2563EB] text-white shadow-sm' : 'bg-[#f1f5f9] text-[#475569] hover:bg-[#e2e8f0]'}`}
          >
            <span>All</span>
            <span className={`${activeTab === 'all' ? 'bg-[#1D4ED8]/60 text-white' : 'bg-[#e2e8f0] text-[#475569]'} px-1.5 rounded-full text-[10px]`}>{initialConversations.length}</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('unread')}
            className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-medium ${activeTab === 'unread' ? 'bg-[#2563EB] text-white shadow-sm' : 'bg-[#f1f5f9] text-[#475569] hover:bg-[#e2e8f0]'}`}
          >
            <span>Unread</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('matches')}
            className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-medium ${activeTab === 'matches' ? 'bg-[#7C3AED] text-white' : 'bg-[#f3e8ff] text-[#7C3AED] border border-[#d8b4fe]/80 hover:bg-[#f3e8ff]/70'} transition-colors`}
          >
            <Sparkles className="w-[13px] h-[13px]" />
            <span>Matches</span>
          </button>
        </div>
      </header>

      <main className="flex-1 bg-[#f8fafc]">
        {/* Section Header */}
        <div className="px-4 py-2 flex items-center justify-between text-[11px] font-semibold text-[#64748b] uppercase tracking-wider">
          <span>Active B2B Inquiries ({filteredConversations.length})</span>
        </div>

        {/* THREADS LIST */}
        <div className="divide-y divide-[#e2e8f0] bg-white border-y border-[#e2e8f0]">
          {filteredConversations.length === 0 && (
            <div className="p-8 text-center text-[#64748b] text-sm">
              No conversations found.
            </div>
          )}
          
          {filteredConversations.map((conv) => {
            const ob = conv.otherBusiness || { name: 'Unknown' }
            const isVerified = ob.verified || ob.verification_status === 'VERIFIED'
            
            return (
              <article key={conv.id} className="p-4 hover:bg-[#f8fafc]/80 transition-colors relative cursor-pointer">
                <div className="flex items-start space-x-3">
                  <div className="relative shrink-0">
                    {ob.logo_url ? (
                      <img src={ob.logo_url} alt="" className="w-11 h-11 rounded-lg shadow-sm object-cover bg-gray-100" />
                    ) : (
                      <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#4338ca] to-[#1d4ed8] text-white flex items-center justify-center font-bold text-sm shadow-sm">
                        {ob.name.substring(0,2).toUpperCase()}
                      </div>
                    )}
                    
                    {isVerified && (
                      <div className="absolute -bottom-1 -right-1 bg-white p-0.5 rounded-full shadow-sm">
                        <ShieldCheck className="w-[14px] h-[14px] text-[#16A34A] fill-[#16A34A] text-white" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <div className="flex items-center space-x-1.5 truncate">
                        <h2 className="font-bold text-[13px] text-[#0f172a] truncate">{ob.name}</h2>
                        {isVerified && <span className="px-1.5 rounded text-[10px] font-semibold bg-[#dcfce7] text-[#15803d] border border-[#bbf7d0] shrink-0">Verified</span>}
                      </div>
                      <span className="text-[11px] font-semibold text-[#64748b] shrink-0">
                        {conv.latestMessage ? timeAgo(conv.latestMessage.created_at) : 'New'}
                      </span>
                    </div>
                    
                    {conv.opportunity && (
                      <div className="mb-1.5 flex items-center flex-wrap gap-1.5">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-[#f3e8ff] text-[#7E22CE] border border-[#e9d5ff]">
                          <Sparkles className="w-[13px] h-[13px] mr-1" />
                          <strong className="font-semibold">Matched</strong>
                          <span className="mx-1 text-[#d8b4fe]">•</span>
                          <span className="truncate max-w-[120px]">{conv.opportunity.title}</span>
                        </span>
                      </div>
                    )}
                    
                    <p className="text-xs text-[#1e293b] line-clamp-2 leading-relaxed">
                      {conv.latestMessage?.content || 'No messages yet. Start the conversation!'}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </main>
      
      {/* FAB */}
      <div className="fixed bottom-20 right-4 max-w-md z-30">
        <button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white p-3 rounded-full shadow-lg flex items-center justify-center space-x-1.5 border border-[#60a5fa]/30 transition-all">
          <MessageSquarePlus className="w-[20px] h-[20px]" />
          <span className="text-xs font-semibold pr-1">New Message</span>
        </button>
      </div>
    </div>
  )
}
