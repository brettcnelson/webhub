import React, { useState } from 'react';
import './Login.scss';

const register = (email,password) => {
  fetch('/api/users/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
  .then(res => res.json())
  .then(res => {
    if (res.token) {
      localStorage.setItem('token', res.token);
      // set userid in redux
    }
    else {
      // show err to register
      alert(res.msg);
    } 
  });
}

const login = (email,password) => {
  // console.log(email,password)
  fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
  .then(res => res.json())
  .then(res => {
    if (res.token) {
      localStorage.setItem('token', res.token);
      // set userid in redux
    }
    else {
      // show err to register
      alert(res.msg);
    } 
  });
}

export default () => {
  const [ loginEmail, setLoginEmail ] = useState('');
  const [ loginPassword, setLoginPassword ] = useState('');
  const [ registerEmail, setRegisterEmail ] = useState('');
  const [ registerPassword, setRegisterPassword ] = useState('');
  return (
    <div className="login">
      <div>
        <div>login</div>
        <input type="text" placeholder="email" onChange={(e) => setLoginEmail(e.target.value)} />
        <input type="text" placeholder="password" onChange={(e) => setLoginPassword(e.target.value)} />
        <button onClick={() => login(loginEmail,loginPassword)}>login</button>
      </div>
      <div>
        <div>register</div>
        <input type="text" placeholder="email" onChange={(e) => setRegisterEmail(e.target.value)} />
        <input type="text" placeholder="password" onChange={(e) => setRegisterPassword(e.target.value)} />
        <button onClick={() => register(registerEmail,registerPassword)}>register</button>
      </div>
    </div>
  );
}
