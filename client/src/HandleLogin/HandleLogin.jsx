import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { authed } from '../redux/actions';
import swal from 'sweetalert';

const HandleLogin =  ({ authed }) => {
  const [ redirect, setRedirect ] = useState(false);
  (function() {
    const token = localStorage.getItem('tempToken');
    fetch('/api/users/login', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token
      }
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
  }());
  return redirect ? 
    <Redirect to='/' /> :
    <div>logging in...</div>;
}

export default connect(
  null,
  { authed }
)(HandleLogin);
