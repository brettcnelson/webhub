import { 
  FLUSH_USER,
  UPDATE_USER_DATA
} from '../actionTypes';

export default (state={},action) => {
  switch(action.type) {
    case FLUSH_USER: {
      return {};
    }
    case UPDATE_USER_DATA: {
      return { ...state, ...action.data };
    }
    default:
      return state;
  }
}
