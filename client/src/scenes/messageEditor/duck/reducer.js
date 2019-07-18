import types from './types';

const initialState = {
  message: { id: '', text: '' },
  loading: false,
  error: null
};

export default function(state = initialState, action) {
  const { response, error } = action;

  switch (action.type) {
    case types.FETCH_MESSAGE_REQUEST:
      return { ...state, loading: true, error: null };
    case types.FETCH_MESSAGE_SUCCESS:
      return { ...state, loading: false, message: response };
    case types.FETCH_MESSAGE_FAILURE:
      return { ...state, loading: false, error, message: { id: '', text: '' } };
    default:
      return state;
  }
}
