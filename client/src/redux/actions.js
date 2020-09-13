import { 
  SHOW_MODAL,
  HIDE_MODAL,
  IS_AUTHED,
  IS_NOT_AUTHED,
  FLUSH_USER,
  UPDATE_USER_DATA
} from './actionTypes';

export const authed = (data) => ({ type:IS_AUTHED, data });
export const updateUserData = (data) => ({ type:UPDATE_USER_DATA, data });

export const notAuthed = () => ({type:IS_NOT_AUTHED});
export const flushUser = () => ({type:FLUSH_USER});
export const showModal = (component) => ({type:SHOW_MODAL, component });
export const hideModal = () => ({type:HIDE_MODAL});

// export const getUsers = (users) => ({type:GET_USERS, users});
