import {createSlice} from '@reduxjs/toolkit';

export interface Event {
  eventsInfo: any;
}

const initialState: Event = {
  eventsInfo: [], // Initialize eventInfo to null or an empty object
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEvents: (state, action) => {
      state.eventsInfo = action.payload;
      console.log('🚀 ~ state.eventInfo:', state.eventsInfo);
    },
  },
});

export const {setEvents} = eventsSlice.actions;
export default eventsSlice.reducer;
