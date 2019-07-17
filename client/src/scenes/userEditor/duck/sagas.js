import { call, put } from 'redux-saga/effects';
import { fetchService } from '../../../services/fetchService';

import types from './types';

export default function* fetchUser(action) {
  const { id } = action.payload;

  try {
    const response = yield call(fetchService, {
      url: `/users/${id}`,
      method: 'GET'
    });
    yield put({ type: types.FETCH_USER_SUCCESS, response });
  } catch (error) {
    yield put({
      type: types.FETCH_USER_FAILURE,
      error: 'Failed to load data. Please try again.'
    });
  }
}
