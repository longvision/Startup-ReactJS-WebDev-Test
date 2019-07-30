import { all, takeLatest } from 'redux-saga/effects';
import { LOAD_REQUEST } from '../actions/repo';

import { addRepo } from './repo';

export default function* rootSaga() {
  yield all([takeLatest('LOAD_REQUEST', addRepo)]);
}
