import { fork } from 'redux-saga/effects';
import { watchUserAuthentication } from './watchers';

export default function* start() {
  yield fork(watchUserAuthentication);
}