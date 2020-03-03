import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

export default () => (
	<header>
		<nav className="Nav">
			<NavLink exact to='/' className="nav-link" activeClassName="active-nav-link">Home</NavLink>
			<NavLink to='/subscriptions' className="nav-link" activeClassName="active-nav-link">Subscriptions</NavLink>
		</nav>
	</header>
);
