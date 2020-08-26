import React, { useState } from 'react';
import { connect } from 'react-redux';
import Login from '../Login/Login.jsx';
import Register from '../Register/Register.jsx';
import './Home.scss';

const Home = ({ userData, isAuthed }) => {
  if (!isAuthed) {
    return ( 
      <div>
        <Login />
        <Register />
      </div>
    );
  }
  return (
    <div>
      {userData.handle}
      {userData._id}
    </div>
  );
}

export default connect(
  ({ user: { userData }, user: { isAuthed } }) => ({ userData, isAuthed })
)(Home);
