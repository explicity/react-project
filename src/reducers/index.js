import { combineReducers } from 'redux';

import { chat } from '../scenes/chat/duck/reducer.js';

const rootReducer = combineReducers({
  chat
})

export default rootReducer;