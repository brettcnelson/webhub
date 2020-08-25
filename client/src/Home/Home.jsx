import React, { useState } from 'react';
import { connect } from 'react-redux';
import { authed, notAuthed } from '../redux/actions';
import './Home.scss';
import checkAuth from '../checkAuth';

const Home = ({ isAuthed, authed, notAuthed }) => {
  checkAuth()
  .then(res => {
    if (res) {
      authed();
    }
    else {
      notAuthed();
    }
  });

  return (
    <div>
      <div>home</div>
      <div><span>{``}</span></div>
      <div>{isAuthed ? 'logged in' : 'logged out'}</div>
    </div>
  );
}

export default connect(
  ({ isAuthed }) => ({ isAuthed }),
  { authed, notAuthed }
)(Home);
