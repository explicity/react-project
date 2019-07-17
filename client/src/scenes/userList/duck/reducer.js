import types from './types';

const initialState = {
  users: [],
  loading: false,
  error: null
};

export default function (state = initialState, action) {
  const { response, error } = action;

  switch (action.type) {
    case types.FETCH_USERS_REQUEST:
      return { ...state, loading: true, error: null };
    case types.FETCH_USERS_SUCCESS:
      return { ...state, loading: false, users: response };
    case types.FETCH_USERS_FAILURE:
      return { ...state, loading: false, error, users: [] };
    default:
      return state;
  }
}
