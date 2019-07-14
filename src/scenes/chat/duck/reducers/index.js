import fetchTypes from "../constants/fetch.types";
import messageTypes from '../constants/messages.types';

const initialState = {
  messages: [],
  loading: false,
  error: null
};

export const chat = (state = initialState, action) => {
  switch (action.type) {
    case fetchTypes.FETCH_MESSAGES_PENDING:
      return {
        ...state,
        loading: true,
        error: null
      };

    case fetchTypes.FETCH_MESSAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        messages: action.payload.messages
      };

    case fetchTypes.FETCH_MESSAGES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        messages: []
      };

    case messageTypes.REMOVE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter(
          data => action.payload.id !== data.id
        )
      };

    default:
      return state;
  }
};
