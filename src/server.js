import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import favicon from 'serve-favicon';

import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
import webpackConfig from '../tools/webpack.dev.config.js';
import WebpackIsomorphicTools from 'webpack-isomorphic-tools';

import createLocation from 'history/lib/createLocation';
import React from 'react';
import { match, RouterContext } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import ReactDomServer from 'react-dom/server';

import reducers from './reducers/index.js';
import routes from './routes/routes.js';
import Html from './components/Html/Html.js';

import { port } from './config.js';

// The two following lines comes from https://github.com/halt-hammerzeit/webpack-isomorphic-tools, see it on Github
const rootDir = path.resolve(__dirname, '..');
global.webpackIsomorphicTools = new WebpackIsomorphicTools(require('../tools/webpack-isomorphic-tools.js'))
	.development(process.env.NODE_ENV === 'development')
	.server(rootDir, () => {
		require('./server.js');
	});

const app = express();

app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'development') {
	const compiler = webpack(webpackConfig);

	app.use(webpackDevMiddleware(compiler, {
		publicPath: '/dist',
		hot: true,
		filename: 'bundle.js',
		stats: {
			colors: true,
		},
		historyApiFallback: true,
	}));

	app.use(webpackHotMiddleware(compiler, {
		log: console.log,
		path: '/__webpack_hmr',
		heartbeat: 10 * 1000,
	}));
}

function handleReactRender(req, res, initState = {}, assets = {}) {
	const store = createStore(reducers, initState, applyMiddleware(thunk));
	const location = createLocation(req.originalUrl);

	match({ routes, location }, (error, redirectLocation, renderProps) => {
		if (error) {
			console.error(error);
			return res.status(500).end('Server Error');
		}
		if (!renderProps) {
			return res.status(404).end('Not Found');
		}

		const reactHtml = ReactDomServer.renderToString(
			<Provider store = {store}>
				<RouterContext {...renderProps} />
			</Provider>
		);
		const html = ReactDomServer.renderToStaticMarkup(
			<Html assets={assets} reactHtml={reactHtml} store={store}/>
		);
		res.send(`<!doctype html>${html}`);
	});
}

// It's created for redux's action, just to show how to call asynchronized action in redux. 
app.get('/getUserTitle', (req, res) => {
	res.send('Mr\.');
});

app.use((req, res) => {
	// Do hot reload in development mode
	if (process.env.NODE_ENV === 'development') {
		global.webpackIsomorphicTools.refresh();
	}
	/**
	* This is the initState to be dehydrated on server side and hydrated on client side.
	* It's just an easy example that show you how to create store in server-side.
	*/
	const initState = {
		user: {
			users: [{name: 'John'}, {name: 'Lennon'}],
		},
	};
	handleReactRender(req, res, initState, global.webpackIsomorphicTools.assets());
});

app.listen(port, () => {
	console.log(`app\'s running on port ${port}!`);
});

export default app;
