import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';

export const EventsApi = createApi({
  reducerPath: 'eventsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: Config.API_BASE_URL,
  }),
  endpoints: (build) => ({
    events: build.query<any[], void>({
      query: () => ({
        url: '/events',
        method: 'GET',
      }),
    }),
  }),
});

export const {useEventsQuery} = EventsApi;
