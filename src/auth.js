import React, { useState, useEffect } from 'react';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import superagent from 'superagent';
import cookie from 'react-cookies';
dotenv.config();
const API = process.env.API_SERVER || 'https://auth-server-401.herokuapp.com';
const SECRET = process.env.JWT_SECRET || 'supersecret';

export const LoginContext = React.createContext();
function LoginProvider(props) {
	const [ loggedIn, setloggedIn ] = useState(false);
	const [ user, setuser ] = useState({});

	// const state = {
	// 	loggedIn,
	// 	setloggedIn,
	// 	user,
	// 	setuser,
	// 	login,
	// 	logout
	// };

	// constructor(props) {
	// 	super(props);
	// state = {
	// 		loggedIn: false,
	// 		login: this.login,
	// 		logout: this.logout,
	// 		user: {}
	// 	};

	useEffect(() => {
		const token = cookie.load('auth');
		validateToken(token);
	}, []);
	const validateToken = (token) => {
		console.log(token);
		try {
			const user = jwt.verify(token, SECRET);
			console.log(token, user);
			// const user = jwt.decode(token);
			console.log('hi', user);
			setLoginState(true, token, user);
		} catch (e) {
			console.log(`TOKEN validation ERROR ${e.message}`);
			setLoginState(false, null, {});
		}
	};
	const setLoginState = (loggedIn, token, user) => {
		cookie.save('auth', token);
		setuser(user);
		setloggedIn(loggedIn);
		console.log('hi', user);
	};
	const login = async (username, password) => {
		try {
			const response = await superagent
				.post(`${API}/signin`)
				.set('authorization', `Basic ${btoa(`${username}:${password}`)}`);
			console.log('userrr', response.body);
			validateToken(response.body.token);
		} catch (e) {
			console.error(e.message);
		}
	};

	const signup = async (username, password, email, role) => {
		try {
			const response = await superagent.post(`${API}/signup`).send({ username, password, email, role });
			console.log(response.body);
			validateToken(response.body.token);
		} catch (e) {
			console.error(e.message);
		}
	};

	const logout = () => {
		setLoginState(false, null, {});
	};
	const state = {
		loggedIn,
		setloggedIn,
		user,
		setuser,
		login,
		logout,
		signup
	};
	console.log('bbb', state);

	return <LoginContext.Provider value={state}>{props.children}</LoginContext.Provider>;
}
export default LoginProvider;
