import React, { useState } from 'react';
import { connect } from 'react-redux';
import { displayNone, authed, updateUserData } from '../redux/actions';
import './Login.scss';

const Login =  ({ displayNone, authed, updateUserData }) => {
  const login = ( handle, password ) => {
    fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ handle, password })
    })
    .then(res => res.json())
    .then(res => {
      if (res.token) {
        localStorage.setItem('token', res.token);
        displayNone();
        authed();
        updateUserData(res);
      }
      else {
        alert(res.msg);
      } 
    });
  }
  const [ loginhandle, setLoginhandle ] = useState('');
  const [ loginPassword, setLoginPassword ] = useState('');
  return (
      <div>
        <div>login</div>
        <input type="text" placeholder="handle" autoFocus={true} onChange={(e) => setLoginhandle(e.target.value)} />
        <input type="text" placeholder="password" onChange={(e) => setLoginPassword(e.target.value)} />
        <button onClick={() => login(loginhandle,loginPassword)}>login</button>
      </div>
  );
}

export default connect(
  null,
  { displayNone, authed, updateUserData }
)(Login);
