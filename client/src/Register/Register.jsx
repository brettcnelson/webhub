import React, { useState } from 'react';
import { connect } from 'react-redux';
import { displayNone, authed, updateUserData } from '../redux/actions';
import './Register.scss';

const Register =  ({ displayNone, authed, updateUserData }) => {
  const register = ( handle, password ) => {
    fetch('/api/users/register', {
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
        console.log(res);
        displayNone();
        authed();
        updateUserData(res);
      }
      else {
        // show err to register
        alert(res.msg);
      } 
    });
  }
  const [ registerhandle, setRegisterhandle ] = useState('');
  const [ registerPassword, setRegisterPassword ] = useState('');
  return (
    <div className="register">
      <div style={{color:'gray'}}>do not type your real handle, just type a name</div>
      <div>register</div>
      <input type="text" autoFocus={true} placeholder="handle" onChange={(e) => setRegisterhandle(e.target.value)} />
      <input type="text" placeholder="password" onChange={(e) => setRegisterPassword(e.target.value)} />
      <button onClick={() => register(registerhandle,registerPassword)}>register</button>
    </div>
  );
}

export default connect(
  null,
  { displayNone, authed, updateUserData }
)(Register);
