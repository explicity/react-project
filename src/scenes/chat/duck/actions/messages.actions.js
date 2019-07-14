import uuidv4 from "uuid/v4";
import moment from "moment";

import types from "../constants/messages.types";

export const removeMessage = id => ({
  type: types.REMOVE_MESSAGE,
  payload: { id }
});

export const addMessage = message => ({
  type: types.ADD_MESSAGE,
  payload: {
    id: uuidv4(),
    created_at: `${moment().format("YYYY-MM-DD HH:mm:ss")}`,
    message,
    currentUser: true
  }
});

export const likeMessage = id => ({
  type: types.LIKE_MESSAGE,
  payload: { id }
});
