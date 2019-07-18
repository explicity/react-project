import { combineReducers } from 'redux';

import chat from '../scenes/chat/duck';
import login from '../scenes/login/duck';
import users from '../scenes/userList/duck';
import editUser from '../scenes/userEditor/duck';
import editMessage from '../scenes/messageEditor/duck'

const rootReducer = combineReducers({
  chat, login, users, editUser, editMessage
});

export default rootReducer;
