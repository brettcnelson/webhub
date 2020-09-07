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
	function is_url(str) {
		const regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
		return (regexp.test(str));
	}

	const copyLink = () => {
		navigator.clipboard.readText()
		.then(text => {
			if (is_url(text)) {
				// search links, return existing link or offer to add new one
				alert('search for ['+text+'] ?');
			}
			else {
				alert('invalid url: '+text);
			}
		})
	}

	return (
		<header>
			<nav className="Nav">
				<NavLink exact to='/' className="nav-link" activeClassName="active-nav-link">Home</NavLink>
				<NavLink to='/search' className="nav-link" activeClassName="active-nav-link">Search</NavLink>
				<div className="nav-link"><img onClick={copyLink} className="navBtn" src={`${process.env.PUBLIC_URL}/link.png`} alt="copy link"/></div>
				<div className="nav-link"><button>new post</button></div>
				<div className="nav-link">
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
