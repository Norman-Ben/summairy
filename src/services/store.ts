import { configureStore } from '@reduxjs/toolkit';
import { articleApi } from './article/articleService';
import authReducer from './auth/authSlice';

export const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware),
});

type AppDispatch = typeof store.dispatch;
export type { AppDispatch };
