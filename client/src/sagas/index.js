import { fork } from 'redux-saga/effects';
import { watchUserActions } from './watchers';

export default function* rootSaga() {
  yield fork(watchUserActions);
}