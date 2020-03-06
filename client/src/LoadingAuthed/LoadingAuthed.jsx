import React from 'react';
import { connect } from 'react-redux';
import { authed, notAuthed } from '../redux/actions';

const LoadingAuthed = ({ children, isAuthed,authed, notAuthed }) => {
  if (isAuthed === -1) {
    fetch('/api/users/auth')
    .then(res => res.status === 200 ? authed() : notAuthed());
    return (<div>authorizing...</div>);
  }
  return !isAuthed ? (<div>not authorized</div>) : (<>{children}</>);
}

export default connect(
  ({ isAuthed }) => ({ isAuthed }),
  { authed, notAuthed }
)(LoadingAuthed);
