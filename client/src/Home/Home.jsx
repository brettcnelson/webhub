import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getUsers, addUser, updateUser, deleteUser } from '../redux/actions';
import './Home.scss';
import User from '../User/User.jsx';

const Home = ({ users, getUsers, addUser, updateUser, deleteUser }) => {
  const [inputVal,setInputVal] = useState('');

  const onInputChange = ({ target:{ value } }) => {
    setInputVal(value);
  }

  const handleGetUsers = () => {
    fetch('/api/users')
    .then(res => res.json())
    .then(res => getUsers(res))
    .catch(err => console.log('handleGetUsers err in Home component', err));
  }

  const handleAddUser = (name) => {
    if (name.length) {
      setInputVal('');
      fetch(`/api/users`, {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify({name})
      })
      .then(res => res.json())
      .then(res => addUser(res))
      .catch(err => console.log('handleAddUser err in Home component', err))
    }
  }

  const handleUpdateUser = (name,user) => {
    fetch(`/api/users/${user._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({name})
    })
    .then(res => res.json())
    .then(res => updateUser(res))
    .catch(err => console.log('handleUpdateUser err in User component', err));
  }

  const handleDeleteUser = (user) => {
    fetch(`/api/users/${user._id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type':'application/json'
      }
    })
    .then(res => res.json())
    .then(res => deleteUser(res))
    .catch(err => console.log('handleDeleteUser err in Home component', err));
  }

  // handleGetUsers();

  return (
    <div className="Home">
      <div>
        <div>Users: {users.length}</div>
        <button onClick={handleGetUsers}>get users</button>
        <input type="text" placeholder="add a user" value={inputVal} onChange={onInputChange}/>
        <button onClick={() => handleAddUser(inputVal)}>add user</button>
      </div>
      <div className="users-con">
        {users.map(user => (<User key={user._id} user={user} handleUpdateUser={(update) => handleUpdateUser(update,user)} handleDeleteUser={() => handleDeleteUser(user)} />))}
      </div>
    </div>
  );
}

export default connect(
  ({ users }) => ({ users }),
  { getUsers, addUser, updateUser, deleteUser }
)(Home);
