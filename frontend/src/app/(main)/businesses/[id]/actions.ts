'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function toggleFollow(targetBusinessId: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { success: false, error: 'Unauthorized' }

  const { data: existingFollow } = await supabase
    .from('follows')
    .select('id')
    .eq('follower_profile_id', user.id)
    .eq('following_business_id', targetBusinessId)
    .single()

  if (existingFollow) {
    await supabase.from('follows').delete().eq('id', existingFollow.id)
    revalidatePath(`/businesses/${targetBusinessId}`)
    return { success: true, isFollowing: false }
  } else {
    await supabase.from('follows').insert({
      follower_profile_id: user.id,
      following_business_id: targetBusinessId
    })
    revalidatePath(`/businesses/${targetBusinessId}`)
    return { success: true, isFollowing: true }
  }
}

export async function toggleConnect(targetBusinessId: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { success: false, error: 'Unauthorized' }

  // Get current user's business
  const { data: member } = await supabase
    .from('business_members')
    .select('business_id')
    .eq('user_id', user.id)
    .limit(1)
    .single()

  if (!member?.business_id) return { success: false, error: 'User does not belong to a business' }
  
  if (member.business_id === targetBusinessId) {
    return { success: false, error: 'Cannot connect to your own business' }
  }

  // Check if connection exists (either direction)
  const { data: existingConnection1 } = await supabase
    .from('connections')
    .select('id, status')
    .eq('business_a_id', member.business_id)
    .eq('business_b_id', targetBusinessId)
    .single()

  const { data: existingConnection2 } = await supabase
    .from('connections')
    .select('id, status')
    .eq('business_a_id', targetBusinessId)
    .eq('business_b_id', member.business_id)
    .single()

  const existingConnection = existingConnection1 || existingConnection2

  if (existingConnection) {
    await supabase.from('connections').delete().eq('id', existingConnection.id)
    revalidatePath(`/businesses/${targetBusinessId}`)
    return { success: true, status: 'NONE' }
  } else {
    await supabase.from('connections').insert({
      business_a_id: member.business_id,
      business_b_id: targetBusinessId,
      status: 'PENDING'
    })
    revalidatePath(`/businesses/${targetBusinessId}`)
    return { success: true, status: 'PENDING' }
  }
}
