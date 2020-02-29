import React from 'react';
import { connect } from 'react-redux';
import { increment } from '../redux/actions';
import './Home.scss';

const Home = ({ val, increment }) => (
  <button onClick={increment}>{val}</button>
);

export default connect(
  ({ val }) => ({ val }),
  { increment }
)(Home);
