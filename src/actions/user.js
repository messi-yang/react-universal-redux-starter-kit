import * as userConstant from '../constants/user.js';
import es6Promise from 'es6-promise';
es6Promise.polyfill();
import fetch from 'isomorphic-fetch';

export function addUser(user) {
	return {
		type: userConstant.ADD_USER,
		result: user,
	};
}

/*
Here's example of how to do asynchronization in Redux Actions ,
Before doing that, you need to add 'Thunk' middleware in createStore function.
*/
export function addUserAsync(user) {
	// You will need dispatch to dispatch the object returned by addUser
	return dispatch => {
		const headers = new Headers();
		headers.append('Content-Type', 'text/plain');

		//process.env.API comes from webpack config file and .env file
		fetch(process.env.API + '/getUserTitle', {headers: headers})
			.then((res) => {
				return res.text();
			})
			.then((res) => {
				user.name = res + user.name;
				dispatch(addUser(user));
			});
	}
}
