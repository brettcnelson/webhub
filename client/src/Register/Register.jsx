import React, { useState } from 'react';
import { connect } from 'react-redux';
import { displayNone, authed, updateUserData } from '../redux/actions';
import './Register.scss';

const Register =  ({ displayNone, authed }) => {
  const [ registerhandle, setRegisterhandle ] = useState('');
  const [ registerPassword, setRegisterPassword ] = useState('');
  const [ handleAvailable, setHandleAvailable ] = useState('');
  const checkRegisterChar = (e) => {
    const val = e.target.value;
    if (val[val.length-1] !== ' ') {
      setRegisterhandle(val);
      if (val.length) {
        fetch('/api/users/handle', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ handle: val })
        })
        .then(res => res.json())
        .then(({handle}) => setHandleAvailable(handle));
      }
      else {
        setHandleAvailable('');
      }
    }
  }
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
      console.log(res);
      if (res.token) {
        localStorage.setItem('token', res.token);
        displayNone();
        authed(res);
      }
      else {
        // show err to register
        alert(res.msg);
      } 
    });
  }
  return (
    <div className="register">
      <div>register</div>
      <input type="text" autoFocus={true} placeholder="handle" value={registerhandle} onChange={checkRegisterChar} />
      <input type="text" placeholder="password" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} />
      {handleAvailable && registerPassword ? 
        <button onClick={() => register(registerhandle,registerPassword)}>register</button> :
        null
      }
      <div>{!registerhandle ? null : `@${registerhandle} ${handleAvailable ? 'is' : 'isn\'t'} available`}</div>
    </div>
  );
}

export default connect(
  null,
  { displayNone, authed }
)(Register);
