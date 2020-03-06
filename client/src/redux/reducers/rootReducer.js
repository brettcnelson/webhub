import { combineReducers } from 'redux';
import loading from './loading';
import isAuthed from './isAuthed';

export default combineReducers({ 
  loading,
  isAuthed
});
