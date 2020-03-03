import React, { useState } from 'react';
import './User.scss';

export default ({ user, handleUpdateUser, handleDeleteUser }) => {
  const [inputVal,setInputVal] = useState('');
  function submitUpdate() {
    if (inputVal.length) {
      handleUpdateUser(inputVal,user);
      setInputVal('');
    }
  }
  return (
    <div className="user">
      <div className="user-con">
        {['_id', 'name', 'date'].map(key => (
          <React.Fragment key={key}>
            <span className="field key">{key}:</span><span className="field val">{user[key]}</span>
          </React.Fragment>
        ))}
      </div>
      <input type="text" placeholder="update name" value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
      <button onClick={submitUpdate}>update name</button>
      <button onClick={handleDeleteUser}>delete</button>
    </div>
  );
}
