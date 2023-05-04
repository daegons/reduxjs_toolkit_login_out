import { configureStore } from '@reduxjs/toolkit';

// import counterReducer from './counter';
import authReducer from './auth';

const store = configureStore({
  // counter: counterReducer,
  reducer: { auth: authReducer },
});

export default store;
