import React from 'react';
import { Route, IndexRoute } from 'react-router';
import HomeContainer from '../containers/HomeContainer/HomeContainer.jsx';

export default (
	<Route path="/">
		<Route path="home" component={HomeContainer}>
		</Route>
	</Route>
);
