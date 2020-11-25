import React, { useContext, useState } from 'react';
import { LoginContext } from './auth';

import { Button, Form, Navbar, FormControl } from 'react-bootstrap';
import { If, Else, Then } from 'react-if';

// const If = props => {
//     return props.condition ? props.children : null;
//   };
function Login(props) {
	const context = useContext(LoginContext);
	const [ username, setusername ] = useState('');
	const [ password, setpassword ] = useState('');

	const state = {
		username,
		setusername,
		password,
		setpassword
	};

	const handleChange = (e) => {
		if (e.target.name == 'username') {
			setusername(e.target.value);
		} else {
			setpassword(e.target.value);
		}
		// this.setState({ [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		context.login(username, password);
	};

	return (
		<If condition={context.loggedIn}>
			<Then>
				<Button id="btj" variant="dark" onClick={context.logout}>
					Logout
				</Button>
			</Then>
			<Else>
				<Navbar bg="primary" variant="dark">
					<Form onSubmit={handleSubmit} inline>
						<FormControl
							type="text"
							name="username"
							placeholder="Enter Username"
							onChange={handleChange}
							className="mr-sm-2"
						/>
						<FormControl
							type="text"
							name="password"
							placeholder="Enter password"
							onChange={handleChange}
							className="mr-sm-2"
						/>

						<Button variant="outline-light" type="submit">
							Login
						</Button>
					</Form>
				</Navbar>
			</Else>
		</If>
	);
}

export default Login;
