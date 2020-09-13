import React, { useState } from 'react';
// import './HandleRegister.scss';

export default (props) => {
  const [ registerhandle, setRegisterhandle ] = useState('');
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
  return (
    <div className="pick-handle">
      <div>register</div>
      <input type="text" autoFocus={true} placeholder="handle" value={registerhandle} onChange={checkRegisterChar} />
      {handleAvailable ? 
        <button onClick={() => props.onClick(registerhandle)}>register</button> :
        null
      }
      <div>{!registerhandle ? null : `@${registerhandle} ${handleAvailable ? 'is' : 'isn\'t'} available`}</div>
    </div>
  );
}
