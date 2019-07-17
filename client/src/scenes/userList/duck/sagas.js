import { call, put } from 'redux-saga/effects';
import { fetchService } from '../../../services/fetchService';

import types from './types';

function* fetchUsers() {
  try {
    const response = yield call(fetchService, {
      url: '/users',
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

function* deleteUser(action) {
  const { id } = action.payload;

  try {
    yield call(fetchService, {
      url: `/users/${id}`,
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

const userSaga = { fetchUsers, deleteUser };

export default userSaga;
