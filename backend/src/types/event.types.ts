export interface Event {
  id: string;
  title: string;
  location: string;
  date: string;
}

export interface RSVP {
  userId: string;
  guests: number;
}
