import types from '../constants/messages.types';

export const messaging = (state, action) => {
  switch (action.type) {
    case types.REMOVE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter(data => action.payload.id !== data.id)
      };

    case types.ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };

    case types.LIKE_MESSAGE:
      return {
        ...state,
        messages: state.messages.map(message =>(          
          message.id === action.payload.id
            ? { ...message, isLiked: true }
            : message
        ))
      };

    case types.UPDATE_MESSAGE:
      return {
        ...state,
        messages: state.messages.map(item => (
          item.id === action.payload.id ? { ...item, message: action.payload.text } : item
        ))
      };

    default:
      return state;
  }
};
