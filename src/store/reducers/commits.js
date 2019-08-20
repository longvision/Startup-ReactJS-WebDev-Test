import { LOAD_COMMITS_REQUEST, LOAD_COMMITS_SUCCESS } from '../actions/commits';

const INITIAL_STATE = {
  data: [],
  loading: false
};

export default function commits(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_COMMITS_REQUEST:
      return { ...state, loading: true };
    case LOAD_COMMITS_SUCCESS:
      return { ...state, data: action.payload.data, loading: false };
    default:
      return state;
  }
}
// console.tron.log(commits);
