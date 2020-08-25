import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';
import { connect } from 'react-redux';

const logout = () => {
	localStorage.removeItem('token');
	window.location.reload();
	
}

const Nav = ({ isAuthed }) => (
	<header>
		<nav className="Nav">
			<NavLink to='/' className="nav-link" activeClassName="active-nav-link">Home</NavLink>
			<NavLink to='/search' className="nav-link" activeClassName="active-nav-link">Search</NavLink>
			<div>
				{isAuthed ?
					(<button onClick={logout}>logout</button>) :
					(<><button onClick={login}>login</button><button onClick={register}>register</button></>)
				}
			</div>
		</nav>
		<div>{isAuthed}</div>
	</header>
);

export default connect(
	({ isAuthed }) => ({ isAuthed })
)(Nav);
