import { UPDATE_USER } from '../actionTypes';

export default (state,action) => {
  switch(action.type) {
    case UPDATE_USER: {
      return action.user._id === state._id ? action.user : state;
    }
    default:
      return state;
  }
}
