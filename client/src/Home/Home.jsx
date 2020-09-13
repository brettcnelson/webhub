import React, { useState } from 'react';
import { connect } from 'react-redux';
import Login from '../Login/Login.jsx';
import './Home.scss';

const Home = ({ uid, isAuthed }) => {
  if (!isAuthed) {
    return ( 
      <div>
        <Login />
      </div>
    );
  }
  return (
    <div>
      { uid }
    </div>
  );
}

export default connect(
  ({ user: { uid, isAuthed } }) => ({ uid, isAuthed })
)(Home);
