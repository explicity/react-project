import {
  FETCH_MESSAGES_PENDING,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_ERROR
} from './types';

export const fetchMessagesPending = () => ({
  type: FETCH_MESSAGES_PENDING
});

export const fetchMessagesSuccess = messages => ({
  type: FETCH_MESSAGES_SUCCESS,
  payload: { messages }
});

export const fetchMessagesError = error => ({
  type: FETCH_MESSAGES_ERROR,
  payload: { error }
});
