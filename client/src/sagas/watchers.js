import { takeLatest } from 'redux-saga/effects';

import { loginSaga, loginTypes } from '../scenes/login/duck';

export function* watchUserAuthentication() {
  yield takeLatest(loginTypes.LOGIN_REQUEST, loginSaga);
}
