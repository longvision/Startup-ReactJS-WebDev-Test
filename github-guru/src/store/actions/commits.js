// ActionTypes
export const LOAD_COMMITS_REQUEST = 'LOAD_COMMITS_REQUEST';
export const LOAD_COMMITS_SUCCESS = 'LOAD_COMMITS_SUCCESS';

// Ação REQUEST lançada pelo component => ação ouvida pela Saga => chamada à API => Ação SUCCESS => Será ouvido pelo Reducer

// Action creators
export const loadCommitsRequest = full_name => ({
  type: 'LOAD_COMMITS_REQUEST',
  payload: { full_name },
});

export const loadCommitsSuccess = data => ({
  type: 'LOAD_COMMITS_SUCCESS',
  payload: { data },
});
