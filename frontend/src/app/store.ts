import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../services/auth/authSlice';
import eventsReducer from '../services/events/eventsSlice';
import {authApi} from '../services/auth/authApi';
import { eventsApi } from '../services/events/eventsApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    events: eventsReducer,
    [authApi.reducerPath]: authApi.reducer,
    [eventsApi.reducerPath]: eventsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([authApi.middleware, eventsApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
