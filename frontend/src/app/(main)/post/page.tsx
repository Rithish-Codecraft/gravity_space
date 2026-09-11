'use client'

import { useState } from 'react'
import { createPost } from './actions'

export default function CreatePostPage({ searchParams }: { searchParams: { type?: string } }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const defaultType = searchParams.type || 'GENERAL'
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  return (
    <div className="flex-1 bg-[#faf8ff] p-4 pb-20">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-[#000619]">Create Post</h1>
      </div>

      <form action={async (formData) => {
        setIsSubmitting(true)
        try {
          await createPost(formData)
        } catch (e) {
          console.error(e)
          setIsSubmitting(false)
        }
      }} className="space-y-4">
        
        <div className="bg-white p-4 rounded-xl border border-[#c5c6cf] shadow-sm">
          <label className="block text-[12px] font-bold text-[#44474e] uppercase mb-2">Post Type</label>
          <select name="post_type" defaultValue={defaultType} className="w-full bg-[#f2f3ff] border border-[#eaedff] rounded-lg p-2.5 text-sm text-[#131b2e] focus:outline-none focus:ring-1 focus:ring-[#091e42]">
            <option value="GENERAL">General Update</option>
            <option value="PRODUCT">Product Showcase</option>
            <option value="REQUIREMENT">Requirement / RFQ</option>
            <option value="FUNDING">Funding Need</option>
            <option value="HIRING">Hiring</option>
            <option value="PARTNERSHIP">Partnership</option>
            <option value="ACHIEVEMENT">Achievement</option>
            <option value="ANNOUNCEMENT">Announcement</option>
            <option value="FACTORY_REEL">Factory Reel</option>
          </select>
        </div>

        <div className="bg-white p-4 rounded-xl border border-[#c5c6cf] shadow-sm">
          <label className="block text-[12px] font-bold text-[#44474e] uppercase mb-2">Content</label>
          <textarea 
            name="content" 
            rows={5} 
            placeholder="What do you want to share with the network?" 
            className="w-full bg-[#f2f3ff] border border-[#eaedff] rounded-lg p-3 text-sm text-[#131b2e] focus:outline-none focus:ring-1 focus:ring-[#091e42] resize-none"
            required
          ></textarea>
        </div>

        <div className="bg-white p-4 rounded-xl border border-[#c5c6cf] shadow-sm">
          <label className="block text-[12px] font-bold text-[#44474e] uppercase mb-2">Attach Media</label>
          <div className="border-2 border-dashed border-[#c5c6cf] rounded-lg p-6 text-center">
            <input 
              type="file" 
              name="media" 
              id="media" 
              accept="image/*,video/*"
              className="hidden" 
              onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
            />
            <label htmlFor="media" className="cursor-pointer flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-[32px] text-[#44474e]">cloud_upload</span>
              <span className="text-sm font-medium text-[#131b2e]">
                {selectedFile ? selectedFile.name : 'Tap to upload an image or video'}
              </span>
            </label>
          </div>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-[#091e42] hover:bg-black text-white font-bold text-[15px] py-3.5 rounded-xl transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            'Publishing...'
          ) : (
            <><span className="material-symbols-outlined text-[18px]">send</span> Publish to Network</>
          )}
        </button>
      </form>
    </div>
  )
}
