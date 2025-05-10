import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Event} from '../../types/types';

interface PaginatedEventsResponse {
  data: any[]; // Replace with Event[] if you have a type
  currentPage: number;
  totalPages: number;
  totalItems: number;
}

export const eventsApi = createApi({
  reducerPath: 'eventsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://192.168.10.18:3001', // replace with your machine's IP
  }),
  tagTypes: ['Events'], // Define the tag type
  endpoints: build => ({
    getAllEvents: build.query<any[], void>({
      query: () => ({
        url: '/events',
        method: 'GET',
      }),
      providesTags: result =>
        result
          ? result.map(({id}) => ({type: 'Events', id}))
          : [{type: 'Events', id: 'LIST'}],
    }),

    getEventById: build.query<Event, number>({
      query: id => `/events/${id}`,
      providesTags: (result, error, id) => [{type: 'Events', id}],
    }),

    registerRSVP: build.mutation<any, {id: number; userName: string}>({
      query: ({id, userName}) => ({
        url: `/events/${id}/rsvp`, // id in path
        method: 'POST',
        body: {
          userName,
        },
      }),
      invalidatesTags: (result, error, {id}) => [{type: 'Events', id}],
    }),

    updateRSVP: build.mutation<any, {id: number} & Partial<Omit<Event, 'id'>>>({
      query: ({id, ...body}) => ({
        url: `/events/${id}/rsvp`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: (result, error, {id}) => [{type: 'Events', id}],
    }),
    cancelRSVP: build.mutation<any, {id: number; userName: string}>({
      query: ({id, userName}) => ({
        url: `/events/${id}/rsvp`,
        method: 'DELETE',
        body: {userName},
      }),
      invalidatesTags: (result, error, {id}) => [{type: 'Events', id}],
    }),
  }),
});

export const {
  useGetAllEventsQuery,
  useGetEventByIdQuery,
  useUpdateRSVPMutation,
  useCancelRSVPMutation,
  useRegisterRSVPMutation,
} = eventsApi;
