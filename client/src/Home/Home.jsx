import React, { useState } from 'react';
import { connect } from 'react-redux';
import {  } from '../redux/actions';
import './Home.scss';

const Home = ({ isAuthed, }) => {
  return (
    <div>
      <div>home</div>
      <div>{isAuthed ? 'logged in' : 'logged out'}</div>
    </div>
  );
}

export default connect(
  ({ isAuthed }) => ({ isAuthed }),
  {  }
)(Home);
