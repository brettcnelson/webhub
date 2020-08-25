import React from 'react';
import Nav from '../Nav/Nav.jsx';
import Login from '../Login/Login.jsx';
import Home from '../Home/Home.jsx';
import Search from '../Search/Search.jsx';
import { Switch, Route } from 'react-router-dom';

export default () => (
  <>
    <Login />
    <Register />
    <Loading />
    <Nav />
    <main>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/search' component={Search} />
      </Switch>
    </main>
  </>
);





const login = () => {
	const email = prompt('enter email');
	const password = prompt('enter password');
	fetch()
}

const register = () => {}