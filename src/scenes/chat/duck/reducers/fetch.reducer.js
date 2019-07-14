import fetchTypes from "../constants/fetch.types";

export const fetching = (state, action) => {
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

    default:
      return state;
  }
};
