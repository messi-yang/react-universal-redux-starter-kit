import * as userConstant from '../constants/user.js';

const initState = {
	users: [],
};

export default function user(state = initState, action) {
	switch (action.type) {
	case userConstant.ADD_USER:
		return Object.assign({}, state, {users: [...state.users, action.result]});
	default:
		return state;
	}
}
