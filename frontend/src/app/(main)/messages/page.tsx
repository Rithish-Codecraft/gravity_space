import { getConversations } from './actions'
import ConversationList from '@/components/messages/ConversationList'

export default async function MessagesPage() {
  const conversations = await getConversations()

  return (
    <ConversationList initialConversations={conversations} />
  )
}
