import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { authed } from '../redux/actions';
import swal from 'sweetalert';
import PickHandle from '../PickHandle/PickHandle.jsx';
// import './HandleRegister.scss';

const Register =  ({ authed }) => {
  const [ redirect, setRedirect ] = useState(false);
  const { id } = useParams();
  const token = localStorage.getItem('tempToken');
  const register = ( handle ) => {
    if (!token) {
      swal('','you need a token','error');
    }
    fetch(`/api/users/register/${id}`, {
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
        localStorage.removeItem('tempToken');
        localStorage.setItem('token', res.token);
        setRedirect(true);
        authed({ uid: res.uid });
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
  return redirect || !token ?
    <Redirect to='/' /> :
    <PickHandle onClick={(handle) => register(handle)} />;
  }

export default connect(
  null,
  { authed }
)(Register);
