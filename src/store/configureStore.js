import { combineReducers, compose, createStore } from 'redux';

export default function configureStore() {
	var reducers = combineReducers({

	});

	var store = createStore(reducers, compose(
		window.devToolsExtension && process.env.NODE_ENV !== 'production' ? window.devToolsExtension() : f => f
	));

	return store;
};