import { useState, useEffect } from 'react';
import axios from 'axios';
// CUSTOME HOOKS START WITH "use"
const useAjaxs = () => {
	const [ list, setList ] = useState([]);

	const handleSubmitpost = (url, method, body) => {
		body.due = new Date();
		axios({
			method: `${method}`,
			url: `${url}`,
			data: body
			// headers: { 'content-type': 'application/x-www-form-urlencoded' }
		})
			.then((savedItem) => {
				setList([ ...list, savedItem.data ]);
			})
			.catch(console.error);
	};
	const handleSubmitput = (url, method, body) => {
		axios({
			method: `${method}`,
			url: `${url}`,
			data: body
			// headers: { 'content-type': 'application/x-www-form-urlencoded' }
		})
			.then((savedItem) => {
				setList(list.map((listItem) => (listItem._id === body._id ? savedItem.data : listItem)));
			})
			.catch(console.error);
	};

	const handleSubmitget = (url, method) => {
		axios({
			method: `${method}`,
			url: `${url}`
			// headers: { 'content-type': 'application/x-www-form-urlencoded' },
		})
			.then((savedItem) => {
				setList(savedItem.data.results);
				console.log('vvg', savedItem.data.results);
			})
			.catch(console.error);
	};
	const handleSubmitdelete = (url, method) => {
		axios({
			method: `${method}`,
			url: `${url}`

			// headers: { 'content-type': 'application/x-www-form-urlencoded' },
		})
			.then((data) => {
				axios({
					method: 'get',
					url: 'https://api-js401.herokuapp.com/api/v1/todo'
					// headers: { 'content-type': 'application/x-www-form-urlencoded' },
				})
					.then((savedItem) => {
						console.log('vvgvvvv', savedItem.data.results);
						setList(savedItem.data.results);
					})
					.catch(console.error);
				// handleSubmitget()
				// console.log('vvgdd', savedItem.data.results);
				// setList(savedItem.data.results);
			})
			.catch(console.error);
	};
	useEffect(() => {
		axios({
			method: 'get',
			url: 'https://api-js401.herokuapp.com/api/v1/todo'
			// headers: { 'content-type': 'application/x-www-form-urlencoded' },
		})
			.then((savedItem) => {
				setList(savedItem.data.results);
				console.log('vvg', savedItem.data.results);
			})
			.catch(console.error);
		// handleSubmitget()
	}, []);
	// useEffect(
	// 	() => {
	// 		axios({
	// 			method: 'get',
	// 			url: 'https://api-js401.herokuapp.com/api/v1/todo'
	// 			// headers: { 'content-type': 'application/x-www-form-urlencoded' },
	// 		})
	// 			.then((savedItem) => {
	// 				setList(savedItem.data.results);
	// 				console.log('vvg', savedItem.data.results);
	// 			})
	// 			.catch(console.error);
	// 		// handleSubmitget()
	// 	},
	// 	[ list ]
	// );
	return [ list, handleSubmitpost, handleSubmitput, handleSubmitdelete ];
};

export default useAjaxs;
