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
        { displayCover === 'LOGIN' ? <Login /> : <Register /> }
        <button className="closeDisplay" onClick={displayNone}>close</button>
      </div>
    </div>
  );
}

export default connect(
  ({ displayCover }) => ({ displayCover }),
  { displayNone }
)(Cover);
