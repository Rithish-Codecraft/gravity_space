'use client'

import { useState } from 'react'
import { toggleFollow, toggleConnect } from '@/app/(main)/businesses/[id]/actions'

interface BusinessActionsProps {
  businessId: string
  initialIsFollowing: boolean
  initialConnectionStatus: 'NONE' | 'PENDING' | 'ACCEPTED'
}

export default function BusinessActions({ businessId, initialIsFollowing, initialConnectionStatus }: BusinessActionsProps) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
  const [connectionStatus, setConnectionStatus] = useState(initialConnectionStatus)
  const [isPendingFollow, setIsPendingFollow] = useState(false)
  const [isPendingConnect, setIsPendingConnect] = useState(false)

  const handleFollow = async () => {
    if (isPendingFollow) return
    setIsPendingFollow(true)
    
    setIsFollowing(!isFollowing) // Optimistic
    const result = await toggleFollow(businessId)
    if (result.success !== false) {
      setIsFollowing(result.isFollowing!)
    }
    setIsPendingFollow(false)
  }

  const handleConnect = async () => {
    if (isPendingConnect) return
    setIsPendingConnect(true)
    
    // Optimistic
    const newStatus = connectionStatus === 'NONE' ? 'PENDING' : 'NONE'
    setConnectionStatus(newStatus)
    
    const result = await toggleConnect(businessId)
    if (result.success !== false) {
      setConnectionStatus(result.status as 'NONE' | 'PENDING' | 'ACCEPTED')
    } else {
      if (result.error) alert(result.error)
      // Revert if error
      setConnectionStatus(initialConnectionStatus)
    }
    setIsPendingConnect(false)
  }

  return (
    <div className="flex gap-2 mt-4">
      <button 
        onClick={handleFollow}
        disabled={isPendingFollow}
        className={`flex-1 py-2 rounded-lg font-semibold text-sm transition-colors ${
          isFollowing 
            ? 'bg-[#eaedff] text-[#091e42] border border-[#091e42]/20' 
            : 'bg-[#091e42] text-white hover:bg-black'
        }`}
      >
        {isFollowing ? 'Following' : 'Follow'}
      </button>
      
      <button 
        onClick={handleConnect}
        disabled={isPendingConnect}
        className={`flex-1 py-2 rounded-lg font-semibold text-sm transition-colors ${
          connectionStatus === 'PENDING' ? 'bg-amber-100 text-amber-800 border border-amber-300' :
          connectionStatus === 'ACCEPTED' ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' :
          'bg-white border border-[#c5c6cf] text-[#131b2e] hover:bg-[#f2f3ff]'
        }`}
      >
        {connectionStatus === 'PENDING' ? 'Requested' :
         connectionStatus === 'ACCEPTED' ? 'Connected' : 'Connect'}
      </button>
    </div>
  )
}
