import { configureStore } from '@reduxjs/toolkit';
import { articleApi } from './article/articleService';
import authReducer from './auth/authSlice';
import articleReducer from './article/articleSlice';

export const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer,
    auth: authReducer,
    article: articleReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware),
});

type AppDispatch = typeof store.dispatch;
export type { AppDispatch };
