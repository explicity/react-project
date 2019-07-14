import {
  FETCH_MESSAGES_PENDING,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_ERROR
} from './types';

const initialState = {
  messages: [],
  loading: false,
  error: null
};

export const chat = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MESSAGES_PENDING:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_MESSAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        messages: action.payload.messages
      };

    case FETCH_MESSAGES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        messages: []
      };
    default:
      return state;
  }
};
