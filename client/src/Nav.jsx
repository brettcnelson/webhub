import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

export default () => (
	<nav className="Nav">
		<div className="nav-link"><Link to='/'>Search</Link></div>
		<div className="nav-link"><Link to='/subscriptions'>Subscriptions</Link></div>
	</nav>
);
