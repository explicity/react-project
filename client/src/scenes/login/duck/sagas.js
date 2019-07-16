import { put, call } from 'redux-saga/effects';
import { loginUserService } from '../../../services/authenticationService';

import types from './types';

export default function* loginSaga(payload) {
  try {
    const response = yield call(loginUserService, payload);
    console.log('response: ', response);
    yield put({ type: types.LOGIN_SUCCESS, response });
  } catch (error) {
    yield put({ type: types.LOGIN_FAILURE, error });
  }
}
