import { 
  LOADING,
  LOADED,
  IS_AUTHED,
  IS_NOT_AUTHED,
  CHECKING_AUTH
} from './actionTypes';

export const loading = () => ({type:LOADING});
export const loaded = () => ({type:LOADED});
export const checkingAuth = () => ({type:CHECKING_AUTH});
export const authed = () => ({type:IS_AUTHED});
export const notAuthed = () => ({type:IS_NOT_AUTHED});

// export const getUsers = (users) => ({type:GET_USERS, users});
