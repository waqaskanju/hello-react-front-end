// store configuration.

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';

// assigning the reducer.
const store = configureStore({
  reducer: rootReducer,
});

export default store;
