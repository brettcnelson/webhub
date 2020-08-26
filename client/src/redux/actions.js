import { 
  REGISTER,
  LOGIN,
  NONE,
  IS_AUTHED,
  IS_NOT_AUTHED,
  FLUSH_USER,
  UPDATE_USER_DATA
} from './actionTypes';

export const authed = () => ({type:IS_AUTHED});
export const notAuthed = () => ({type:IS_NOT_AUTHED});
export const flushUser = () => ({type:FLUSH_USER});
export const displayRegister = () => ({type:REGISTER});
export const displayLogin = () => ({type:LOGIN});
export const displayNone = () => ({type:NONE});
export const updateUserData = (data) => ({ type:UPDATE_USER_DATA, data });

// export const getUsers = (users) => ({type:GET_USERS, users});
