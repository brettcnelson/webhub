import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { authed } from '../redux/actions';
import swal from 'sweetalert';

const HandleLogin =  ({ authed }) => {
  const [ redirect, setRedirect ] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    login();
  },[]);
  return redirect ? 
    <Redirect to='/' /> :
    <div>logging in...</div>;
  
  function login() {
    const token = localStorage.getItem('tempToken');
    if (!token) {
      swal('','you need a token','error')
      .then(val => {
        setRedirect(true);
      });
    }
    fetch(`/api/users/login/${id}`, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token
      }
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
}

export default connect(
  null,
  { authed }
)(HandleLogin);
