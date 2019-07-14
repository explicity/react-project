import { combineReducers } from 'redux';

import { fetchData } from '../scenes/chat/duck/reducers/fetch.reducer';

const rootReducer = combineReducers({
  fetchData
})

export default rootReducer;