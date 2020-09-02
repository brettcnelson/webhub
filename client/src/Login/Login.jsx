import React, { useState } from 'react';
import { connect } from 'react-redux';
import { displayNone, authed } from '../redux/actions';
import './Login.scss';

const Login =  ({ displayNone, authed }) => {
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
        authed(res);
      }
      else {
        alert(res.msg);
      } 
    })
    .catch(err => console.err(err));
  }
  const [ loginhandle, setLoginhandle ] = useState('');
  const [ loginPassword, setLoginPassword ] = useState('');
  return (
      <div>
        <div>login</div>
        <input type="text" placeholder="handle" autoFocus={true} value={loginhandle} onChange={(e) => setLoginhandle(e.target.value)} />
        <input type="text" placeholder="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
        <button onClick={() => login(loginhandle,loginPassword)}>login</button>
      </div>
  );
}

export default connect(
  null,
  { displayNone, authed }
)(Login);
