export interface Event {
  id: string;
  title: string;
  location: string;
  date: string;
  rsvpCount: RSVP;
  description: string;
  image: string;
}

export interface RSVP {
  participants: string[];
  guests: number;
}
export interface User {
  id: number;
  userName: string;
  email: string;
  password: string;
}