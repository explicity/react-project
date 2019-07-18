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

function* addMessage(action) {
  const newMessage = { ...action.payload };

  try {
    yield call(fetchService, {
      url: '/messages',
      method: 'POST',
      data: newMessage
    });
    yield put({ type: types.FETCH_MESSAGES_REQUEST });
  } catch (error) {
    console.log('createMessage error:', error.message);
  }
}

function* removeMessage(action) {
  const { id } = action.payload;

  try {
    yield call(fetchService, {
      url: `/messages/${id}`,
      method: 'DELETE'
    });
    yield put({ type: types.FETCH_MESSAGES_REQUEST });
  } catch (error) {
    yield put({
      type: types.FETCH_MESSAGES_FAILURE,
      error: 'Failed to load data. Please try again.'
    });
  }
}

function* likeMessage(action) {
  const { id } = action.payload;

  try {
    yield call(fetchService, {
      url: `/messages/${id}/liked`,
      method: 'POST',
    });
    yield put({ type: types.FETCH_MESSAGES_REQUEST });
  } catch (error) {
    console.log('updateMessage error:', error.message);
  }
}

const chatSaga = { fetchMessages, removeMessage, addMessage, likeMessage };
export default chatSaga;
