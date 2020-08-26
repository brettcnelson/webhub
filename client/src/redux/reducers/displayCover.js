import { 
  REGISTER,
  LOGIN,
  NONE
} from '../actionTypes';

export default (state=false,action) => {
  switch(action.type) {
    case REGISTER: {
      return 'REGISTER';
    }
    case LOGIN: {
      return 'LOGIN';
    }
    case NONE: {
      return false;
    }
    default:
      return state;
  }
}
