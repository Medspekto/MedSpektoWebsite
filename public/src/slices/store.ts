import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './loginSlice';
import securedApi from '../securedApi';
const store = configureStore({
    reducer: {
      [securedApi.reducerPath]: securedApi.reducer,
      counter: loginSlice,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(securedApi.middleware),
  });
  
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
 