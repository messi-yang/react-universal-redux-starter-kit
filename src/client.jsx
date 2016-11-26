import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/index.jsx';

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

if (module.hot) {
	module.hot.accept();
}
