import types from './types';

const initialState = {
  user: {},
  loading: false,
  error: null
};

export default function (state = initialState, action) {
  const { response, error } = action;

  switch (action.type) {
    case types.LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case types.LOGIN_SUCCESS:
      return { ...state, loading: false, user: response, isSuccess: true };
    case types.LOGIN_FAILURE:
      return { ...state, loading: false, error, user: {} };
    default:
      return state;
  }
}
