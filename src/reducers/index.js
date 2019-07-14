import { combineReducers } from 'redux';

import { chat } from '../scenes/chat/duck';
import modal from '../scenes/chat/Modal/duck';

const rootReducer = combineReducers({
  chat, modal
});

export default rootReducer;