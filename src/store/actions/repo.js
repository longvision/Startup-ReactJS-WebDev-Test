// ActionTypes
export const LOAD_REQUEST = 'LOAD_REQUEST';
export const LOAD_SUCCESS = 'LOAD_SUCCESS';

// Ação REQUEST lançada pelo component => ação ouvida pela Saga => chamada à API => Ação SUCCESS => Será ouvido pelo Reducer

// Action creators
export const addRepoRequest = repository => ({
  type: 'LOAD_REQUEST',
  payload: { repository },
});

export const addRepoSuccess = data => ({
  type: 'LOAD_SUCCESS',
  payload: { data },
});
