import React, { useState } from 'react';
import { connect } from 'react-redux';
import { authed, hideModal, showModal } from '../redux/actions';
import './Login.scss';
import swal from 'sweetalert';

const Login =  ({ authed, hideModal, showModal }) => {
  const [ email, setEmail ] = useState('');
  const [ loginLink, setLoginLink ] = useState('');
  const login = () => {
    fetch('/api/users/login-request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    })
    .then(res => res.json())
    .then(res => {
      if (res.msg) {
        swal(res.msg);
      }
      else {
        localStorage.setItem('tempToken',res.token);
        setLoginLink(res.link);
        swal({
          text: `A ${res.register ? 'registration' : 'login'} link has been emailed to ${res.email}`,
          icon: 'success'
        })
      }
    })
    .catch(err => console.error(err));
  }
  return loginLink ? 
    (<div><a href={loginLink}>{loginLink}</a></div>) :
    (
      <div>
        <div>login or register</div>
        <input type="email" placeholder="enter email" autoFocus={true} value={email} onChange={(e) => setEmail(e.target.value)} />
        {email ?
          (<button onClick={() => login()}>OK</button>) :
          null
        }
      </div>
    );
}

export default connect(
  null,
  { hideModal, showModal }
)(Login);
