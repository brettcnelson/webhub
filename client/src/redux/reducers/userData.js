import { 
  FLUSH_USER,
  UPDATE_USER_DATA,
  IS_AUTHED
} from '../actionTypes';

export default (state={},action) => {
  switch(action.type) {
    case FLUSH_USER: {
      return {};
    }
    case UPDATE_USER_DATA: 
    case IS_AUTHED: {
      return { ...state, ...action.data };
    }
    default:
      return state;
  }
}
