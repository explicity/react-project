import types from "../constants/messages.types";

export const removeMessage = id => ({
  type: types.REMOVE_MESSAGE,
  payload: { id }
});

export const addMessage = message => ({
  type: types.ADD_MESSAGE,
  payload: { message }
});
