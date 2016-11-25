import * as userConstant from '../constants/user.js';

export function addUserOptimistic(user) {
	return {
		type: userConstant.ADD_USER,
		result: user,
	};
}
