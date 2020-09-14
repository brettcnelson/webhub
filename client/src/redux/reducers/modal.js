import { 
  SHOW_MODAL,
  HIDE_MODAL
} from '../actionTypes';

export default (state=false,action) => {
  switch(action.type) {
    case SHOW_MODAL: {
      return { component: action.component, props: action.props };
    }
    case HIDE_MODAL: {
      return false;
    }
    default:
      return state;
  }
}
