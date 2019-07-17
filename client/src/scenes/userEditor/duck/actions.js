import types from './types';

export const fetchUser = id => ({
  type: types.FETCH_USER_REQUEST,
  payload: {
    id
  }
});
