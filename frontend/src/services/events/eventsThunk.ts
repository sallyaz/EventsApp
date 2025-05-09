// features/events/eventsActions.ts
import { AppDispatch } from '../../app/store';
import { EventsApi } from './eventsApi';
import { setEvents } from './eventsSlice';

export const getEvents = () => async (dispatch: AppDispatch) => {
  try {
    const result = await dispatch(EventsApi.endpoints.events.initiate());
    if ('data' in result) {
      dispatch(setEvents(result.data)); 
    } else {
      dispatch(setEvents([]));
    }
  } catch (e) {
    console.error('Error in getAllEvents:', e);
  }
};
