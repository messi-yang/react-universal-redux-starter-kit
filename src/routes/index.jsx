import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes.jsx';



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
};
