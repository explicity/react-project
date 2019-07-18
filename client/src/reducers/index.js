import { combineReducers } from 'redux';

import chat from '../scenes/chat/duck';
import modal from '../scenes/chat/Modal/duck';
import login from '../scenes/login/duck';
import users from '../scenes/userList/duck';
import editUser from '../scenes/userEditor/duck';

const rootReducer = combineReducers({
  chat, modal, login, users, editUser
});

export default rootReducer;
