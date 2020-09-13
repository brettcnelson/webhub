import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { authed } from '../redux/actions';
import swal from 'sweetalert';
import PickHandle from '../PickHandle/PickHandle.jsx';
// import './HandleRegister.scss';

const Register =  ({ authed }) => {
  const [ redirect, setRedirect ] = useState(false);
  const register = ( handle ) => {
    const token = localStorage.getItem('tempToken');
    fetch('/api/users/register', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ handle })
    })
    .then(res => res.json())
    .then(res => {
      if (res.token) {
        localStorage.setItem('token', res.token);
        localStorage.removeItem('tempToken');
        authed({ uid: res.uid });
        setRedirect(true);
      }
      else {
        swal('Error',res.msg,'error')
        .then(val => {
          setRedirect(true);
        });
      } 
    })
    .catch(err => console.error(err));
  }
  return redirect ?
    <Redirect to='/' /> :
    <PickHandle onClick={(handle) => register(handle)} />;
  }

export default connect(
  null,
  { authed }
)(Register);
