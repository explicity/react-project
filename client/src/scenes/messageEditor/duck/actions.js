import types from './types';

export const fetchMessage = id => ({
  type: types.FETCH_MESSAGE_REQUEST,
  payload: {
    id
  }
});