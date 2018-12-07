import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import rehydrated from './rehydrated';
import member from './member';
import posts from './posts';

// Add each of the reducers
const reducers = {
  rehydrated,
  member,
  posts,
};

// Setup redux persist config
const persistConfig = {
  key: 'root',
  storage,
  blacklist: [],
};

export default persistCombineReducers(persistConfig, reducers);
