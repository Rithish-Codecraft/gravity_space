'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import SocialPostForm from '@/components/opportunities/SocialPostForm'
import OpportunityForm from '@/components/opportunities/OpportunityForm'

export default function CreatePostPage({ searchParams }: { searchParams: { type?: string } }) {
  const router = useRouter()
  // Default to OPPORTUNITY instead of GENERAL to show off the new form by default
  const [tab, setTab] = useState<'SOCIAL' | 'OPPORTUNITY'>(searchParams.type === 'GENERAL' ? 'SOCIAL' : 'OPPORTUNITY')

  return (
    <div className="bg-[#f8fafc] text-[#0f172a] min-h-screen font-sans">
      {/* TOP APP BAR */}
      <header className="sticky top-0 z-40 bg-white border-b border-[#e2e8f0] backdrop-blur-md">
        <div className="max-w-md mx-auto px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <button 
              onClick={() => router.back()}
              className="p-1 -ml-1 text-[#64748b] hover:text-[#0f172a] transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="font-bold text-base text-[#0f172a] tracking-tight leading-snug">Create</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="max-w-md mx-auto flex border-b border-[#e2e8f0]">
          <button 
            onClick={() => setTab('SOCIAL')}
            className={`flex-1 py-3 text-sm font-semibold text-center border-b-2 transition-colors ${tab === 'SOCIAL' ? 'border-[#2563EB] text-[#2563EB]' : 'border-transparent text-[#64748b] hover:text-[#0f172a]'}`}
          >
            Social Update
          </button>
          <button 
            onClick={() => setTab('OPPORTUNITY')}
            className={`flex-1 py-3 text-sm font-semibold text-center border-b-2 transition-colors ${tab === 'OPPORTUNITY' ? 'border-[#2563EB] text-[#2563EB]' : 'border-transparent text-[#64748b] hover:text-[#0f172a]'}`}
          >
            Commercial Opportunity
          </button>
        </div>
      </header>

      {/* Forms */}
      {tab === 'SOCIAL' ? (
        <SocialPostForm defaultType={searchParams.type} />
      ) : (
        <OpportunityForm />
      )}
    </div>
  )
}
