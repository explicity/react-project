import { call, put } from 'redux-saga/effects';
import { fetchService } from '../../../services/fetchService';

import types from './types';

export default function* fetchMessge(action) {
  const { id } = action.payload;

  try {
    const response = yield call(fetchService, {
      url: `/messages/${id}`,
      method: 'GET'
    });
    yield put({ type: types.FETCH_MESSAGE_SUCCESS, response });
  } catch (error) {
    yield put({
      type: types.FETCH_MESSAGE_FAILURE,
      error: 'Failed to load data. Please try again.'
    });
  }
}
