import {createSlice} from '@reduxjs/toolkit';
import { Event } from '../../types/types';

interface EventsState {
  eventsInfo: Event[];
}

const initialState: EventsState = {
  eventsInfo: [],
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents: (state, action) => {
      state.eventsInfo = action.payload;
    },
  },
});

export const {setEvents} = eventsSlice.actions;
export default eventsSlice.reducer;
