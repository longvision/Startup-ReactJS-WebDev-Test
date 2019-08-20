import { LOAD_REQUEST, LOAD_SUCCESS } from '../actions/repo';

const INITIAL_STATE = {
  data: [],
  loading: false
};

export default function repo(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_REQUEST:
      return { ...state, loading: true };
    case LOAD_SUCCESS:
      return { ...state, data: action.payload.data, loading: false };
    default:
      return state;
  }
}
// console.log('teste');
