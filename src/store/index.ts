import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import reducers from '../reducers';

// Allows us to use devtools when installed (browser extension)
const composeEnhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Init Redux Store (and apply middleware)
const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));

// Init Redux Persist
const persistor = persistStore(store, undefined, () => { store.getState(); });

export { store, persistor };
