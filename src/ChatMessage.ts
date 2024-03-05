import type { FunctionDef } from 'openai-chat-tokens/dist/functions.js'
import { formatFunctionDefinitions } from 'openai-chat-tokens/dist/functions.js'

interface ChatMessageBase {
  role?: 'system' | 'user' | 'assistant'
  name?: string
}

export interface ChatMessageContent extends ChatMessageBase {
  content: string
}

export interface ChatMessageFunction extends ChatMessageBase {
  function_call: FunctionDef[]
}

export type ChatMessage = ChatMessageContent | ChatMessageFunction

export function toChatMessageContent(chat: ChatMessage): ChatMessageContent {
  if ('content' in chat) return chat

  return {
    ...chat,
    content: formatFunctionDefinitions(chat.function_call),
  }
}
