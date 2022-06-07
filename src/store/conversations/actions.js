import { CREATE_CONVERSATION } from './types.js'
import { DELETE_CONVERSATION } from '../types.js'

export const createConversation = (conversation) => ({
  type: CREATE_CONVERSATION,
  payload: conversation,
})

export const deleteConversation = (conversation) => ({
  type: DELETE_CONVERSATION,
  payload: conversation,
})
