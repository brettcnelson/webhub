import { 
  SHOW_MODAL,
  HIDE_MODAL
} from '../actionTypes';

export default (state=false,action) => {
  switch(action.type) {
    case SHOW_MODAL: {
      return action.component;
    }
    case HIDE_MODAL: {
      return false;
    }
    default:
      return state;
  }
}
