import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/starWarsReducer';

const store = configureStore({
  reducer: rootReducer
});

export default store;
