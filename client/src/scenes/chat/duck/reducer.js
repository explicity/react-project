import types from "./types";

const initialState = {
  messages: [],
  loading: false,
  error: null
};

export default function (state = initialState, action) {
  const { response, error } = action;

  switch (action.type) {
    case types.FETCH_MESSAGES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case types.FETCH_MESSAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        messages: response
      };

    case types.FETCH_MESSAGES_FAILURE:
      return {
        ...state,
        loading: false,
        error,
        messages: []
      };

    default:
      return state;
  }
}
