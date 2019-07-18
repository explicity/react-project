import uuidv4 from 'uuid/v4';
import moment from 'moment';

import types from './types';

export const fetchMessages = () => ({
  type: types.FETCH_MESSAGES_REQUEST
});

export const removeMessage = id => ({
  type: types.REMOVE_MESSAGE,
  payload: { id }
});

export const addMessage = message => ({
  type: types.ADD_MESSAGE,
  payload: {
    id: uuidv4(),
    created_at: `${moment().format('YYYY-MM-DD HH:mm:ss')}`,
    message,
    currentUser: true
  }
});

export const likeMessage = id => ({
  type: types.LIKE_MESSAGE,
  payload: { id }
});

export const updateMessage = (id, text) => ({
  type: types.UPDATE_MESSAGE,
  payload: {
    id,
    text
  }
});