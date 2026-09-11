'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function toggleLike(postId: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return

  // Check if liked
  const { data: existingLike } = await supabase
    .from('post_likes')
    .select('id')
    .eq('post_id', postId)
    .eq('profile_id', user.id)
    .single()

  if (existingLike) {
    await supabase.from('post_likes').delete().eq('id', existingLike.id)
  } else {
    await supabase.from('post_likes').insert({
      post_id: postId,
      profile_id: user.id
    })
  }

  revalidatePath('/home')
}

export async function addComment(postId: string, content: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user || !content.trim()) return

  await supabase.from('post_comments').insert({
    post_id: postId,
    author_id: user.id,
    content: content.trim()
  })

  revalidatePath('/home')
}
