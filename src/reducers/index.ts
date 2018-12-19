import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import member from './member';
import posts from './posts';
import rehydrated from './rehydrated';

// Add each of the reducers
const reducers = {
  member,
  posts,
  rehydrated,
};

// Setup redux persist config
const persistConfig = {
  blacklist: [],
  key: 'root',
  storage,
};

export default persistCombineReducers(persistConfig, reducers as any);
