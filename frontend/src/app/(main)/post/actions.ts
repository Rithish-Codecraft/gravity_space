'use server'

import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export async function createPost(formData: FormData) {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  // Get user's primary business_id
  const { data: member } = await supabase
    .from('business_members')
    .select('business_id')
    .eq('user_id', user.id)
    .limit(1)
    .single()

  if (!member?.business_id) {
    throw new Error('User does not belong to a business.')
  }

  const content = formData.get('content') as string
  const post_type = formData.get('post_type') as string || 'GENERAL'

  if (!content) throw new Error('Content is required')

  const { data: post, error } = await supabase
    .from('posts')
    .insert({
      author_id: user.id,
      business_id: member.business_id,
      content,
      post_type,
      visibility: 'PUBLIC',
      status: 'PUBLISHED'
    })
    .select()
    .single()

  if (error) {
    console.error('Error creating post:', error)
    throw new Error('Failed to create post')
  }

  // Handle Media Upload if present
  const mediaFile = formData.get('media') as File | null
  if (mediaFile && mediaFile.size > 0) {
    const fileExt = mediaFile.name.split('.').pop()
    const fileName = `${post.id}-${Date.now()}.${fileExt}`
    const filePath = `${member.business_id}/${fileName}`

    const { error: uploadError } = await supabase.storage
      .from('media')
      .upload(filePath, mediaFile)

    if (uploadError) {
      console.error('Error uploading media:', uploadError)
    } else {
      // Store in post_media table
      await supabase.from('post_media').insert({
        post_id: post.id,
        storage_path: filePath,
        mime_type: mediaFile.type,
        file_size: mediaFile.size
      })
    }
  }

  redirect('/home')
}
