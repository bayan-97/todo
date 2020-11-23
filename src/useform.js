import { useState } from 'react';
// CUSTOME HOOKS START WITH "use"
const useForm = (props) => {
	const [ item, setItem ] = useState({});
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Hello from submit');
		e.target.reset();
		props.handleSubmit(item);
		const item1 = {};
		setItem({ item: item1 });
	};
	const handleInputChange = (e) => {
		setItem({ ...item, [e.target.name]: e.target.value });
	};
	return [ handleInputChange, handleSubmit ];
};

export default useForm;
