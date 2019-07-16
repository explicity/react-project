import { combineReducers } from 'redux';

import { chat } from '../scenes/chat/duck';
import modal from '../scenes/chat/Modal/duck';
import login from '../scenes/login/duck';

const rootReducer = combineReducers({
  chat, modal, login
});

export default rootReducer;