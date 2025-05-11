export interface FormState {
    [key: string]: string;
  }
  
  export interface ErrorState {
    [key: string]: string;
  }

  export interface User {
    id: string;
    userName: string;
    email: string;
  }

  export interface Event {
    id: number;
    title: string;
    date: string;
    location: string;
    description: string;
    image: string;
    rsvpCount: {
      participants: { userName: string }[];
      guests: number;
    };
  }

  export type NotificationItem = {
    id: string;
    title: string;
    body: string;
    timestamp: string;
  };