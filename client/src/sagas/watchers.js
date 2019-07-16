import { takeLatest } from 'redux-saga/effects';
import { loginSaga } from '../scenes/login/duck/sagas';

import types from '../scenes/login/duck/types';

export function* watchUserAuthentication() {
  yield takeLatest(types.LOGIN_REQUEST, loginSaga);
}
