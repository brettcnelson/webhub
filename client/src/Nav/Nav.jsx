import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';
import { connect } from 'react-redux';
import { displayRegister, displayLogin, flushUser, notAuthed } from '../redux/actions';

const Nav = ({ isAuthed, displayLogin, displayRegister, notAuthed, flushUser }) => {
	const logout = () => {
		localStorage.removeItem('token');
		flushUser();
		notAuthed();
	}

	return (
		<header>
			<nav className="Nav">
				<NavLink to='/' className="nav-link" activeClassName="active-nav-link">Home</NavLink>
				<NavLink to='/search' className="nav-link" activeClassName="active-nav-link">Search</NavLink>
				<div>
					{isAuthed ?
						(<button onClick={logout}>logout</button>) :
						(<><button onClick={displayLogin}>login</button><button onClick={displayRegister}>register</button></>)
					}
				</div>
			</nav>
		</header>
	);
}

export default connect(
	({ user: { isAuthed } }) => ({ isAuthed }),
	{ flushUser, displayLogin, displayRegister, notAuthed }
)(Nav);
