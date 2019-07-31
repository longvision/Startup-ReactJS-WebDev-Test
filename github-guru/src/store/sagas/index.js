import { all, takeLatest } from 'redux-saga/effects';
import { LOAD_REQUEST } from '../actions/repo';
import { LOAD_COMMITS_REQUEST } from '../actions/commits';

import { addRepo } from './repo';
import { listCommits } from './commits';

export default function* rootSaga() {
  yield all([takeLatest(LOAD_REQUEST, addRepo), takeLatest(LOAD_COMMITS_REQUEST, listCommits)]);
}
