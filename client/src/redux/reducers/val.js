import { INCREMENT_VAL } from '../actionTypes';

export default (state=1,action) => {
  switch(action.type) {
    case INCREMENT_VAL: {
      return state+1;
    }
    default:
      return state;
  }
}
