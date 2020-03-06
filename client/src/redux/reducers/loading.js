import { 
  LOADING,
  LOADED
} from '../actionTypes';

export default (state=false,action) => {
  switch(action.type) {
    case LOADING: {
      return true;
    }
    case LOADED: {
      return false;
    }
    default:
      return state;
  }
}
