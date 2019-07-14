import messageTypes from "../constants/messages.types";

export const messaging = (state, action) => {
  switch (action.type) {
    case messageTypes.REMOVE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter(data => action.payload.id !== data.id)
      };

    case messageTypes.ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };

    case messageTypes.LIKE_MESSAGE:
      return {
        ...state,
        messages: state.messages.map(message => (
          message.id === action.payload.id ? { ...message, isLiked: true } : message
        ))
      };

    default:
      return state;
  }
};
