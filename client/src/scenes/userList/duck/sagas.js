import { call, put } from 'redux-saga/effects';
import { fetchService } from '../../../services/fetchService';

import types from './types';

function* fetchUsers() {
  try {
    const response = yield call(fetchService, {
      url: '/',
      method: 'GET'
    });
    console.log('response: ', response);
    yield put({ type: types.FETCH_USERS_SUCCESS, response });
  } catch (error) {
    yield put({
      type: types.FETCH_USERS_FAILURE,
      error: 'Failed to load data. Please try again.'
    });
  }
}

function* updateUser(action) {
  const { id, data } = action.payload;
  const updatedUser = { ...data };
  console.log('updatedUser: ', updatedUser);

  try {
    yield call(fetchService, {
      url: `/user/${id}`,
      method: 'PUT',
      data: updatedUser
    })
    yield put({ type: types.FETCH_USERS_REQUEST });
  } catch (error) {
    console.log('updateUser error:', error.message);
  }
}

function* deleteUser(action) {
  const { id } = action.payload;

  try {
    yield call(fetchService, {
      url: `/user/${id}`,
      method: 'DELETE'
    });
    yield put({ type: types.FETCH_USERS_REQUEST });
  } catch (error) {
    yield put({
      type: types.FETCH_USERS_FAILURE,
      error: 'Failed to load data. Please try again.'
    });
  }
}

const userSaga = { fetchUsers, deleteUser, updateUser };

export default userSaga;
