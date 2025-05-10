import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { Event } from '../events/eventsSlice';

interface PaginatedEventsResponse {
  data: any[]; // Replace with Event[] if you have a type
  currentPage: number;
  totalPages: number;
  totalItems: number;
}

export const eventsApi = createApi({
  reducerPath: 'eventsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://192.168.1.253:3001', // replace with your machine's IP
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

export const {useEventsQuery} = eventsApi;
