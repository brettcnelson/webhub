import React, { useState } from 'react';
import { connect } from 'react-redux';
import Login from '../Login/Login.jsx';
import Register from '../Register/Register.jsx';
import './Home.scss';

const Home = ({ userData, isAuthed }) => {
  return (
    isAuthed ? (
      <div>
        {userData.handle}
        {userData._id}
      </div>
    ) :
    <div>
      <Login />
      <Register />
    </div>
  );
}

export default connect(
  ({ user: { userData }, user: { isAuthed } }) => ({ userData, isAuthed })
)(Home);
