import React, { useContext } from 'react';
import { LoginContext } from './auth';
import { If } from 'react-if';

function Auth(props) {
	const context = useContext(LoginContext);
	console.log('vvddddddd', props.capability, context);
	let okToRender =
		context.loggedIn && props.capability ? context.user.capabilities.includes(props.capability) : false;
	return <If condition={okToRender}>{props.children}</If>;
}

export default Auth;
