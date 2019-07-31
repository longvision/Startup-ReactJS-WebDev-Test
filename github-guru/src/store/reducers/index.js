import { combineReducers } from 'redux';

import repo from './repo';
import commits from './commits';

export default combineReducers({
  repo,
  commits,
});
