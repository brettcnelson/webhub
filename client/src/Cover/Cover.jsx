import React from 'react';
import './Cover.scss';
import { connect } from 'react-redux';
import Login from '../Login/Login.jsx';
import Register from '../Register/Register.jsx';
import { displayNone  } from '../redux/actions';

const Cover =  ({ displayCover, displayNone }) => {
  if (!displayCover) {
    return null;
  }
  return (
    <div className="cover">
      <div className="blackDisplay">
        <button className="closeDisplay" onClick={displayNone}>X</button>
        { displayCover === 'LOGIN' ? <Login /> : <Register /> }
      </div>
    </div>
  );
}

export default connect(
  ({ displayCover }) => ({ displayCover }),
  { displayNone }
)(Cover);
