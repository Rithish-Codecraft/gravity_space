'use server'

import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export async function getConversations() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return redirect('/login')

  const { data: member } = await supabase
    .from('business_members')
    .select('business_id')
    .eq('user_id', user.id)
    .limit(1)
    .single()

  if (!member?.business_id) return []

  // Fetch conversations where this business is a member
  // Also get the OTHER members and the latest message
  // And opportunity context
  const { data: convMembers, error } = await supabase
    .from('conversation_members')
    .select(`
      conversation_id,
      conversations (
        id,
        opportunity_id,
        updated_at,
        opportunities (
          title,
          type
        ),
        messages (
          id,
          content,
          created_at,
          sender_id
        ),
        conversation_members (
          business_id,
          businesses (
            name,
            verified,
            verification_status,
            logo_url
          )
        )
      )
    `)
    .eq('business_id', member.business_id)
    .order('joined_at', { ascending: false })

  if (error || !convMembers) {
    console.error('Error fetching conversations:', error)
    return []
  }

  // Format the data
  const formatted = convMembers.map((cm: any) => {
    const conv = cm.conversations
    // Find the "other" business in the conversation
    const otherMember = conv.conversation_members?.find((m: any) => m.business_id !== member.business_id)
    
    // Get latest message
    const messages = conv.messages || []
    const latestMessage = messages.sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())[0]

    return {
      id: conv.id,
      updated_at: conv.updated_at,
      opportunity: conv.opportunities,
      otherBusiness: otherMember?.businesses || { name: 'Unknown Business' },
      latestMessage
    }
  }).sort((a: any, b: any) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())

  return formatted
}
