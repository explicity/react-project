import { takeLatest } from 'redux-saga/effects';

import { loginSaga, loginTypes } from '../scenes/login/duck';
import { userSaga, userTypes } from '../scenes/userList/duck';
import { editUserSaga, editUserTypes } from '../scenes/userEditor/duck';
import { chatSaga, chatTypes } from '../scenes/chat/duck';
import { editMessageSaga, editMessageTypes } from '../scenes/messageEditor/duck';

export function* watchUserActions() {
  yield takeLatest(chatTypes.FETCH_MESSAGES_REQUEST, chatSaga.fetchMessages);
  yield takeLatest(chatTypes.REMOVE_MESSAGE, chatSaga.removeMessage);
  yield takeLatest(chatTypes.ADD_MESSAGE, chatSaga.addMessage);
  yield takeLatest(chatTypes.LIKE_MESSAGE, chatSaga.likeMessage);
  yield takeLatest(chatTypes.UPDATE_MESSAGE, chatSaga.updateMessage);
  yield takeLatest(editMessageTypes.FETCH_MESSAGE_REQUEST, editMessageSaga);
  yield takeLatest(userTypes.FETCH_USERS_REQUEST, userSaga.fetchUsers);
  yield takeLatest(userTypes.DELETE_USER_REQUEST, userSaga.deleteUser);
  yield takeLatest(userTypes.UPDATE_USER_REQUEST, userSaga.updateUser);
  yield takeLatest(userTypes.ADD_USER_REQUEST, userSaga.addUser);
  yield takeLatest(editUserTypes.FETCH_USER_REQUEST, editUserSaga);
  yield takeLatest(loginTypes.LOGIN_REQUEST, loginSaga);
}
