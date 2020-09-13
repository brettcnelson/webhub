import { 
  IS_AUTHED,
  IS_NOT_AUTHED,
  FLUSH_USER,
  UPDATE_USER_DATA
} from '../actionTypes';

const initialState = {
  isAuthed: -1,
  uid: null
};

export default (state=initialState,action) => {
  switch(action.type) {
    case IS_AUTHED: {
      return { ...state, isAuthed: true, uid: action.data.uid };
    }
    case IS_NOT_AUTHED: {
      return { ...state, isAuthed: false };
    }
    case FLUSH_USER: {
      return initialState;
    }
    case UPDATE_USER_DATA: {
      return { ...state, uid: action.data.uid };
    }
    default:
      return state;
  }
}
