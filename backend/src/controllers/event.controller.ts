import { Request, Response } from 'express';
import { mockEvents } from '../mocks/events.mock';
import { mockUsers } from '../mocks/users.mock';

// GET /events
export const getAllEvents = (req: Request, res: Response) => {
  const pageParam = req.query.page;
  const limitParam = req.query.limit;

  // If no pagination params provided → return all events
  if (!pageParam || !limitParam) {
    return res.status(200).json(mockEvents);
  }

  // Otherwise paginate
  const page = parseInt(pageParam as string, 10) || 1;
  const limit = parseInt(limitParam as string, 10) || 10;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const paginatedEvents = mockEvents.slice(startIndex, endIndex);

  res.status(200).json({
    data: paginatedEvents,
    currentPage: page,
    totalPages: Math.ceil(mockEvents.length / limit),
    totalItems: mockEvents.length,
  });
};

// GET /events/:id
// This endpoint retrieves a specific event by its ID
export const getEventById = (req: Request, res: Response) => {
  const { id } = req.params;
  const event = mockEvents.find(e => e.id === id);
  if (!event) return res.status(404).json({ error: 'Event not found' });
  res.status(200).json(event);
};

// POST /events/:id/rsvp
// This endpoint allows a user to RSVP to an event
export const registerRSVP = (req: Request, res: Response) => {
  const { id } = req.params;
  const { userName } = req.body ;
  const event = mockEvents.find(e => e.id === id);
  const eventIndex = mockEvents.findIndex(e => e.id === id);
  if (!event) return res.status(404).json({ error: 'Event not found' });

  if(event.rsvpCount.participants.includes(userName)) {
    return res.status(400).json({ error: 'User already RSVP' });
  }
  event.rsvpCount.participants.push(userName);
  event.rsvpCount.guests += 1;
  mockEvents[eventIndex] = event;

  res.status(201).json({ message: 'RSVP created', mockEvents });
}
// PATCH /events/:id/rsvp
// This endpoint allows a user to update their RSVP to an event
export const updateRSVP = (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, location, date } = req.body;
  const event = mockEvents.find(e => e.id === id);
  const eventIndex = mockEvents.findIndex(e => e.id === id);
  if (!event) return res.status(404).json({ error: 'Event not found' });
  
  if (title) event.title = title;
  if (location) event.location = location;
  if (date) event.date = date;

  mockEvents[eventIndex] = event;

  res.status(200).json({ message: 'RSVP updated' ,event: mockEvents[eventIndex] });
};
// DELETE /events/:id/rsvp
// This endpoint allows a user to cancel their RSVP to an event
export const cancelRSVP = (req: Request, res: Response) => {
  const { id } = req.params;

  const updateMockEvent = mockEvents.filter(e => e.id != id);
  mockEvents.length = 0;
  mockEvents.push(...updateMockEvent);

  res.status(200).json({ message: `RSVP for event ${id} cancelled`, mockEvents });
};

export const userAuth = (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Missing credentials' });
  }
  const user = mockUsers.find(e => e.email === email );
  if (user) {
    const isPasswordCorrect = user.password === password;
    if (isPasswordCorrect) {
      const { password, ...userWithoutPassword } = user;
      return res.status(200).json(userWithoutPassword);
    }else {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
  }
  return res.status(401).json({ error: 'User Not Found' }); 
};
