import React from 'react';
import Loading from '../Loading/Loading.jsx';
import Cover from '../Cover/Cover.jsx';
import Nav from '../Nav/Nav.jsx';
import Home from '../Home/Home.jsx';
import Search from '../Search/Search.jsx';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { authed, notAuthed } from '../redux/actions';
import checkAuth from '../checkAuth';

const App = ({ isAuthed, authed, notAuthed }) => {
  if (isAuthed === -1) {
    checkAuth()
    .then(res => {
      if (res) {
        authed();
      }
      else {
        notAuthed();
      }
    });
    return (<Loading />);
  }
  return (
    <>
      <Cover />
      <Nav />
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/search' component={Search} />
        </Switch>
      </main>
    </>
  );
}

export default connect(
  ({ user: { isAuthed } }) => ({ isAuthed }),
  { authed, notAuthed }
)(App);
