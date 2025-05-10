import {createSlice} from '@reduxjs/toolkit';

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  rsvpCount: number;
  // add more fields as needed
}

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
