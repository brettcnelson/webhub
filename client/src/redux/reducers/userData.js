import { 
  FLUSH_USER
} from '../actionTypes';

const initialState = {
  following: {
    oneDay: {},
    users: {},
    channels: {}
  },
  oneDay: [],
  feed: [],
  recs: []
};

export default (state=initialState,action) => {
  switch(action.type) {
    case FLUSH_USER: {
      return initialState;
    }
    default:
      return state;
  }
}
