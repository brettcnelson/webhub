import { GET_USERS, ADD_USER, UPDATE_USER, DELETE_USER } from '../actionTypes';
import user from './user';

export default (state=[],action) => {
  switch(action.type) {
    case GET_USERS: {
      return action.users;
    }
    case ADD_USER: {
      return [...state,action.user];
    }
    case UPDATE_USER: {
      return state.map(u => user(u,action));
    }
    case DELETE_USER: {
      return state.filter(u => u._id !== action.user._id);
    }
    default:
      return state;
  }
}
