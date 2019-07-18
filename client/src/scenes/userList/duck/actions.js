import uuidv4 from 'uuid/v4';

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

export const addUser = data => ({
  type: types.ADD_USER_REQUEST,
  payload: {
    id: uuidv4(),
    data
  }
});

export const updateUser = (id, data) => ({
  type: types.UPDATE_USER_REQUEST,
  payload: {
    id,
    data
  }
});
