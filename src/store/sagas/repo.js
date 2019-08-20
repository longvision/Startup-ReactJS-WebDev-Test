import { call, put } from 'redux-saga/effects';
import { api } from '../../services/api';

import { addRepoSuccess } from '../actions/repo';

// A Action the acesso ao payload da ACTION
export function* addRepo(action) {
  try {
    // Primeiro parametro da call vem a api, no segundo parametro vem o restante da requisição.
    const { data } = yield call(
      api.get,
      `/users/${action.payload.repository}/repos?per_page=100`
    );

    yield put(addRepoSuccess(data));
    // console.tron.log(repositoryData);
  } catch (err) {
    // yield put(loadFailure());
    // console.tron.log('error');
  }
}
