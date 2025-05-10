import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { Event } from '../events/eventsSlice';


export const eventsApi = createApi({
  reducerPath: 'eventsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://192.168.10.4:3001',
  }),
  endpoints: (build) => ({
    events: build.query<Event[], void>({
      query: () => ({
        url: '/events',
        method: 'GET',
      }),
    }),
  }),
});

export const {useEventsQuery} = eventsApi;
