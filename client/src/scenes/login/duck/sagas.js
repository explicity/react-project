import { put, call } from 'redux-saga/effects';
import { fetchService } from '../../../services/fetchService';

import types from './types';

export default function* loginSaga(payload) {
  try {
    const response = yield call(fetchService, {
      url: '/login',
      method: 'POST',
      data: payload.user
    });

    localStorage.setItem('currentUser', JSON.stringify(response));
    yield put({ type: types.LOGIN_SUCCESS, response });
  } catch (error) {
    yield put({
      type: types.LOGIN_FAILURE,
      error: 'Incorrect username or password'
    });
  }
}
