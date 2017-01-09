import React from 'react';
import { Router, browserHistory } from 'react-router';
import routes from './routes.js';

export default class Routes extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Router history={browserHistory}>
				{routes}
			</Router>
		);
	}
}
