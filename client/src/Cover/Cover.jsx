import React from 'react';
import './Cover.scss';
import { connect } from 'react-redux';
import { hideModal  } from '../redux/actions';
import Login from '../Login/Login.jsx';
import Post from '../Post/Post.jsx';

const Cover =  ({ modal, hideModal }) => {
  if (!modal) {
    return null;
  }
  return (
    <div className="cover">
      <div className="blackDisplay">
        <button className="closeDisplay" onClick={hideModal}>close</button>
        { displayModal() }
      </div>
    </div>
  );
  function displayModal() {
    switch(modal.component) {
      case('LOGIN'): {
        return <Login />;
      }
      case('POST'): {
        return <Post {...modal.props} />
      }
      default: {
        return null;
      }
    }
  }
}

export default connect(
  ({ modal }) => ({ modal }),
  { hideModal }
)(Cover);
