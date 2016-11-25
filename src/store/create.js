import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';


export default function configureStore(preloadedState) {
	const store = createStore(reducers, preloadedState, applyMiddleware(thunk));

	if (module.hot) {
		module.hot.accept('../reducers', () => {
			store.replaceReducer(require('../reducers').default);
		});
	}

	return store;
}
