import { 
  GET_USERS,
  ADD_USER,
  UPDATE_USER,
  DELETE_USER
} from './actionTypes';

export const getUsers = (users) => ({type:GET_USERS, users});
export const addUser = (user) => ({type:ADD_USER, user});
export const updateUser = (user) => ({type:UPDATE_USER, user});
export const deleteUser = (user) => ({type:DELETE_USER, user});
