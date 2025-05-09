import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../services/auth/authSlice';
import {authApi} from '../services/auth/authApi';
// import {EventsApi} from '../services/events/eventsApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    // [EventsApi.reducerPath]: EventsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
