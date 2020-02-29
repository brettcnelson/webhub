import React from 'react';
import Nav from '../Nav/Nav.jsx';
import Home from '../Home/Home.jsx';
import Subscriptions from '../Subscriptions/Subscriptions.jsx';
import { Switch, Route } from 'react-router-dom';

export default () => (
  <>
    <Nav />
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/subscriptions' component={Subscriptions}/>
      </Switch>
    </main>
  </>
);

// /
// /search
// /home(loggedin)
// /account(loggedin)
// /:userHandle
// /:postID
// /login
