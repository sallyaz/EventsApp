import { Event } from '../types/event.types.js';

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Annual Tech Meetup',
    location: 'Tel Aviv',
    date: '2025-06-01',
    rsvpCount: {
      participants: ["sally", "ido"],
      guests: 2
    },

  },
  {
    id: '2',
    title: 'Startup Pitch Night',
    location: 'Jerusalem',
    date: '2025-06-15',
    rsvpCount: {
      participants: ["sally"],
      guests: 1
    },
  },
];
