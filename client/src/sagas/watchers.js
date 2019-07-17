import { takeLatest } from 'redux-saga/effects';

import { loginSaga, loginTypes } from '../scenes/login/duck';
import { userSaga, userTypes } from '../scenes/userList/duck';
import { editUserSaga, editUserTypes } from '../scenes/userEditor/duck'

export function* watchUserActions() {
  yield takeLatest(userTypes.FETCH_USERS_REQUEST, userSaga.fetchUsers);
  yield takeLatest(userTypes.DELETE_USER_REQUEST, userSaga.deleteUser);
  yield takeLatest(editUserTypes.FETCH_USER_REQUEST, editUserSaga);
  yield takeLatest(loginTypes.LOGIN_REQUEST, loginSaga);
}
