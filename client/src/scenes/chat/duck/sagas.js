import { call, put } from 'redux-saga/effects';
import { fetchService } from '../../../services/fetchService';

import types from './types';

function* fetchMessages() {
  try {
    const response = yield call(fetchService, {
      url: '/messages',
      method: 'GET'
    });
    yield put({ type: types.FETCH_MESSAGES_SUCCESS, response });
  } catch (error) {
    yield put({
      type: types.FETCH_MESSAGES_FAILURE,
      error: 'Failed to load data. Please try again.'
    });
  }
}

const chatSaga = { fetchMessages };
export default chatSaga;
