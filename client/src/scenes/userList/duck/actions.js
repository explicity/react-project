import types from './types';

export const fetchUsers = () => ({
  type: types.FETCH_USERS_REQUEST
});

export const deleteUser = id => ({
  type: types.DELETE_USER_REQUEST,
  payload: {
    id
  }
});
