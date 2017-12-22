import { combineReducers } from 'redux';
import auth from './AuthReducer';
import job from './JobReducer';

export default combineReducers({
  auth, job
});
