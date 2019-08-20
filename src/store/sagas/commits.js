import { call, put } from 'redux-saga/effects';
import { api } from '../../services/api';
import history from '../../services/history';

import { loadCommitsSuccess } from '../actions/commits';

// A Action tem acesso ao payload da ACTION
export function* listCommits(action) {
  try {
    // Primeiro parametro da call vem a api, no segundo parametro vem o restante da requisição.
    const response = yield call(api.get, `/repos/${action.payload.full_name}/commits`);
    yield put(loadCommitsSuccess(response.data));
    history.push('/commits');
    console.tron.log('sucesso');
  } catch (err) {
    // yield put(loadFailure());
    console.tron.log('error');
  }
}
