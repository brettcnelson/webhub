import React from 'react';
import Nav from '../Nav/Nav.jsx';
import LoadingAuthed from '../LoadingAuthed/LoadingAuthed.jsx';
import Home from '../Home/Home.jsx';
import Search from '../Search/Search.jsx';
import { Switch, Route } from 'react-router-dom';

export default () => (
  <>
    <Nav />
    <main>
      <LoadingAuthed>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/search' component={Search} />
        </Switch>
      </LoadingAuthed>
    </main>
  </>
);