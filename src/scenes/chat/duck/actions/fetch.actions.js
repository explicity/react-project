import types from '../constants/fetch.types';

export const fetchMessagesPending = () => ({
  type: types.FETCH_MESSAGES_PENDING
});

export const fetchMessagesSuccess = messages => ({
  type: types.FETCH_MESSAGES_SUCCESS,
  payload: { messages }
});

export const fetchMessagesError = error => ({
  type: types.FETCH_MESSAGES_ERROR,
  payload: { error }
});
