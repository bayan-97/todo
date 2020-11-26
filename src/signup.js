import React, { useState, useContext } from 'react';
import { LoginContext } from './auth';
import { If, Else, Then } from 'react-if';
import { Button, Form, Navbar, FormControl } from 'react-bootstrap';

// const If = props => {
//     return props.condition ? props.children : null;
//   };
function Login(props) {
	const context = useContext(LoginContext);
	const [ username, setusername ] = useState('');
	const [ password, setpassword ] = useState('');
	const [ email, setemil ] = useState('');
	const [ role, setrole ] = useState('user');

	const state = {
		username,
		setusername,
		email,
		setemil,
		password,
		setpassword,
		role,
		setrole
	};

	const handleChange = (e) => {
		if (e.target.name === 'username') {
			setusername(e.target.value);
		} else if (e.target.name === 'password') {
			setpassword(e.target.value);
		} else if (e.target.name === 'email') {
			setemil(e.target.value);
		} else {
			setrole(e.target.value);
		}
		// this.setState({ [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		context.signup(username, password, email, role);
	};

	return (
		<If condition={context.loggedIn}>
			<Then />
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
						<FormControl
							type="text"
							name="email"
							placeholder="Enter email"
							onChange={handleChange}
							className="mr-sm-2"
						/>
						<FormControl
							type="text"
							name="role"
							placeholder="Enter role"
							onChange={handleChange}
							className="mr-sm-2"
						/>

						<Button variant="outline-light" type="submit">
							signup
						</Button>
					</Form>
				</Navbar>
			</Else>
		</If>
	);
}

export default Login;
