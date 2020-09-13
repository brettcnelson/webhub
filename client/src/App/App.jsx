import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { authed, notAuthed } from '../redux/actions';
import { checkAuth } from '../API';
import Loading from '../Loading/Loading.jsx';
import Nav from '../Nav/Nav.jsx';
import Home from '../Home/Home.jsx';
import Dashboard from '../Dashboard/Dashboard.jsx';
import Interactions from '../Interactions/Interactions.jsx';
import Search from '../Search/Search.jsx';
import User from '../User/User.jsx';
import Channel from '../Channel/Channel.jsx';
import Post from '../Post/Post.jsx';
import GraphLink from '../GraphLink/GraphLink.jsx';
import Bundle from '../Bundle/Bundle.jsx';
import Alert from '../Alert/Alert.jsx';
import ProxyFeed from '../ProxyFeed/ProxyFeed.jsx';
import HandleLogin from '../HandleLogin/HandleLogin.jsx';
import HandleRegister from '../HandleRegister/HandleRegister.jsx';
import './App.scss';

const App = ({ isAuthed, authed, notAuthed, updateUserData }) => {
  if (isAuthed === -1) {
    checkAuth()
    .then(res => {
      if (res) {
        authed(res);
      }
      else {
        notAuthed();
      }
    });
    return (<Loading />);
  }
  return (
    <>
      <Nav />
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/interactions' component={Interactions} />
          <Route path='/search' component={Search} />
          <Route path='/feed/:handle' component={ProxyFeed} />
          <Route path='/channel/:handle' component={Channel} />
          <Route path='/bundle/:id' component={Bundle} />
          <Route path='/post/:id' component={Post} />
          <Route path='/alert/:id' component={Alert} />
          <Route path='/link/:id' component={GraphLink} />
          <Route path='/login/:id' component={HandleLogin} />
          <Route path='/register/:id' component={HandleRegister} />
          <Route path='/:handle' component={User} />
        </Switch>
      </main>
    </>
  );
}

export default connect(
  ({ user: { isAuthed } }) => ({ isAuthed }),
  { authed, notAuthed }
)(App);
