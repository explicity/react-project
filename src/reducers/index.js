import { combineReducers } from 'redux';

import { chat } from '../scenes/chat/duck';

const rootReducer = combineReducers({
  chat
});

export default rootReducer;