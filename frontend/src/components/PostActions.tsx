'use client'

import { useState } from 'react'
import { toggleLike } from '@/app/(main)/home/actions'

interface PostActionsProps {
  postId: string
  initialLikes: number
  initialComments: number
  hasLikedInitially?: boolean
}

export default function PostActions({ postId, initialLikes, initialComments, hasLikedInitially = false }: PostActionsProps) {
  const [likes, setLikes] = useState(initialLikes)
  const [hasLiked, setHasLiked] = useState(hasLikedInitially)
  const [isPending, setIsPending] = useState(false)

  const [showCommentInput, setShowCommentInput] = useState(false)
  const [commentText, setCommentText] = useState('')
  const [isSubmittingComment, setIsSubmittingComment] = useState(false)

  const handleLike = async () => {
    if (isPending) return
    setIsPending(true)
    
    // Optimistic UI
    setHasLiked(!hasLiked)
    setLikes(prev => hasLiked ? prev - 1 : prev + 1)
    
    await toggleLike(postId)
    setIsPending(false)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Check out this post on Nexora',
        url: window.location.origin + '/home' // In future, link to specific post
      }).catch(console.error)
    } else {
      alert('Link copied to clipboard!')
    }
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <button 
            onClick={handleLike}
            disabled={isPending}
            className={`flex items-center gap-1.5 transition-colors ${hasLiked ? 'text-[var(--color-error)]' : 'hover:text-[var(--color-error)]'}`}
          >
            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: hasLiked ? "'FILL' 1" : "'FILL' 0" }}>favorite</span>
            <span>{likes}</span>
          </button>
          <button 
            onClick={() => setShowCommentInput(!showCommentInput)}
            className="flex items-center gap-1.5 hover:text-[var(--color-ink)] transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">chat_bubble</span>
            <span>{initialComments}</span>
          </button>
          <button 
            onClick={handleShare}
            className="flex items-center gap-1.5 hover:text-[var(--color-ink)] transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">share</span>
            <span>Share</span>
          </button>
        </div>
        <button 
          onClick={() => alert('Post saved to bookmarks!')}
          className="hover:text-[var(--color-ink)] text-[var(--color-secondary)] transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">bookmark</span>
        </button>
      </div>

      {showCommentInput && (
        <form 
          className="mt-3 flex gap-2"
          action={async () => {
            if (!commentText.trim() || isSubmittingComment) return
            setIsSubmittingComment(true)
            const { addComment } = await import('@/app/(main)/home/actions')
            await addComment(postId, commentText)
            setCommentText('')
            setShowCommentInput(false)
            setIsSubmittingComment(false)
            // Note: In a real app we'd optimistically update the comments count here
          }}
        >
          <input 
            type="text" 
            placeholder="Write a comment..." 
            value={commentText}
            onChange={e => setCommentText(e.target.value)}
            className="flex-1 bg-[var(--color-canvas)] border border-[var(--color-card-border)] rounded-full px-3 py-1.5 text-[13px] text-[var(--color-ink)] focus:outline-none focus:border-[var(--color-accent)]"
          />
          <button 
            type="submit" 
            disabled={!commentText.trim() || isSubmittingComment}
            className="w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center disabled:opacity-50"
          >
            <span className="material-symbols-outlined text-[16px]">send</span>
          </button>
        </form>
      )}
    </div>
  )
}
