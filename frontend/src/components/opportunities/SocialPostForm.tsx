'use client'

import { useState } from 'react'
import { createPost } from '@/app/(main)/post/actions'

export default function SocialPostForm({ defaultType = 'GENERAL' }: { defaultType?: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  return (
    <form action={async (formData) => {
      setIsSubmitting(true)
      try {
        await createPost(formData)
      } catch (e) {
        console.error(e)
        setIsSubmitting(false)
      }
    }} className="space-y-4 px-4 mt-4">
      
      <div className="bg-white p-4 rounded-xl border border-[#e2e8f0] shadow-sm">
        <label className="block text-[12px] font-bold text-[#64748b] uppercase mb-2">Post Type</label>
        <select name="post_type" defaultValue={defaultType} className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-2.5 text-sm text-[#0f172a] focus:outline-none focus:ring-1 focus:ring-[#2563EB]">
          <option value="GENERAL">General Update</option>
          <option value="PRODUCT">Product Showcase</option>
          <option value="ACHIEVEMENT">Achievement</option>
          <option value="ANNOUNCEMENT">Announcement</option>
          <option value="FACTORY_REEL">Factory Reel</option>
        </select>
      </div>

      <div className="bg-white p-4 rounded-xl border border-[#e2e8f0] shadow-sm">
        <label className="block text-[12px] font-bold text-[#64748b] uppercase mb-2">Content</label>
        <textarea 
          name="content" 
          rows={5} 
          placeholder="What do you want to share with the network?" 
          className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-lg p-3 text-sm text-[#0f172a] focus:outline-none focus:ring-1 focus:ring-[#2563EB] resize-none"
          required
        ></textarea>
      </div>

      <div className="bg-white p-4 rounded-xl border border-[#e2e8f0] shadow-sm">
        <label className="block text-[12px] font-bold text-[#64748b] uppercase mb-2">Attach Media</label>
        <div className="border-2 border-dashed border-[#cbd5e1] rounded-lg p-6 text-center">
          <input 
            type="file" 
            name="media" 
            id="media" 
            accept="image/*,video/*"
            className="hidden" 
            onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
          />
          <label htmlFor="media" className="cursor-pointer flex flex-col items-center gap-2">
            <span className="material-symbols-outlined text-[32px] text-[#94a3b8]">cloud_upload</span>
            <span className="text-sm font-medium text-[#0f172a]">
              {selectedFile ? selectedFile.name : 'Tap to upload an image or video'}
            </span>
          </label>
        </div>
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-[15px] py-3.5 rounded-xl transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          'Publishing...'
        ) : (
          <><span className="material-symbols-outlined text-[18px]">send</span> Publish to Network</>
        )}
      </button>
    </form>
  )
}
