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

    default:
      return state;
  }
};
