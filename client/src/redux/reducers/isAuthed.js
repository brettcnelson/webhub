import { 
  IS_AUTHED,
  IS_NOT_AUTHED,
  CHECKING_AUTH
} from '../actionTypes';

export default (state=-1,action) => {
  switch(action.type) {
    case IS_AUTHED: {
      return true;
    }
    case IS_NOT_AUTHED: {
      return false;
    }
    case CHECKING_AUTH: {
      return -1;
    }
    default:
      return state;
  }
}
