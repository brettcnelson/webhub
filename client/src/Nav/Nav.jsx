import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';
import { connect } from 'react-redux';

const Nav = ({  }) => (
	<header>
		<nav className="Nav">
			<NavLink to='/' className="nav-link" activeClassName="active-nav-link">Home</NavLink>
			<NavLink to='/search' className="nav-link" activeClassName="active-nav-link">Search</NavLink>
		</nav>
	</header>
);

export default connect(
	({  }) => ({  })
)(Nav);
