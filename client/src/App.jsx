import React from 'react';
import Nav from './Nav.jsx';
import Home from './Home.jsx';
import Subscriptions from './Subscriptions.jsx';
import { Switch, Route } from 'react-router-dom';

const App = () => (
  <div>
    <Nav />
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/subscriptions' component={Subscriptions}/>
      </Switch>
    </main>
  </div>
);

export default App;
