// features/events/eventsActions.ts
import { AppDispatch } from '../../app/store';
import { eventsApi } from './eventsApi';
import { setEvents } from './eventsSlice';

export const getEvents = () => async (dispatch: AppDispatch) => {
  try {
    const result = await dispatch(eventsApi.endpoints.events.initiate(undefined, { forceRefetch: true }));
    if ('data' in result) {
      dispatch(setEvents(result.data)); 
    } else {
      dispatch(setEvents([]));
    }
  } catch (e) {
    console.error('Error in getAllEvents:', e);
  }
};
