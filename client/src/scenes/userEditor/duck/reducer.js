import types from './types';

const initialState = {
  userData: {
    username: '',
    password: '',
    email: ''
  },
  loading: false,
  error: null
};

export default function (state = initialState, action) {
    const { response, error } = action;
  
    switch (action.type) {
      case types.FETCH_USER_REQUEST:
        return { ...state, loading: true, error: null };
      case types.FETCH_USER_SUCCESS:
        return { ...state, loading: false, userData: response };
      case types.FETCH_USER_FAILURE:
        return { ...state, loading: false, error, userData: {} };
      default:
        return state;
    }
  }
