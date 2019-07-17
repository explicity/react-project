import { takeLatest } from 'redux-saga/effects';

import { loginSaga, loginTypes } from '../scenes/login/duck';
import { userSaga, userTypes } from '../scenes/userList/duck';

export function* watchUserActions() {
  yield takeLatest(userTypes.FETCH_USERS_REQUEST, userSaga);
  yield takeLatest(loginTypes.LOGIN_REQUEST, loginSaga);
}
