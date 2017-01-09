import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/index.js';

import { Provider } from 'react-redux';
import storeCreator from './store/create.js';

const app = document.getElementById('app');

/**
* Hydrate the server side State.
*/
const store = storeCreator(window.__INITIAL_STATE__);

ReactDOM.render(
	<Provider store={store}>
		<Routes />
	</Provider>
, app);

// Let you do the hot-reload while in development mode, google 'webpack-dev-middleware' and 'webpack-hot-middleware'
if (module.hot) {
	module.hot.accept();
}
