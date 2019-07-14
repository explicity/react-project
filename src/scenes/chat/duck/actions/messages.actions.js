import types from '../constants/messages.types';

export const removeMessage = id => ({
  type: types.REMOVE_MESSAGE,
  payload: { id }
});
