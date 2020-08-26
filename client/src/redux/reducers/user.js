import { 
  IS_AUTHED,
  IS_NOT_AUTHED,
  FLUSH_USER,
  UPDATE_USER_DATA
} from '../actionTypes';

import userData from './userData';

const initialState = {
  isAuthed: -1,
  userData
};

export default (state=initialState,action) => {
  switch(action.type) {
    case IS_AUTHED: {
      return { ...state, isAuthed: true };
    }
    case IS_NOT_AUTHED: {
      return { ...state, isAuthed: false };
    }
    case FLUSH_USER: {
      return { ...state, isAuthed: false, userData: userData(state.userData,action) };
    }
    case UPDATE_USER_DATA: {
      return { ...state, userData: userData(state.userData,action) };
    }
    default:
      return state;
  }
}
