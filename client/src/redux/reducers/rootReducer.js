import { combineReducers } from 'redux';
import user from './user';
import displayCover from './displayCover';

export default combineReducers({ 
  displayCover,
  user
});
