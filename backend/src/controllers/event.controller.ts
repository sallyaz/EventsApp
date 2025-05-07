import { Request, Response } from 'express';
import { mockEvents } from '../mocks/events.mock';
import { RSVP } from '../types/event.types.js';

// GET /events
export const getAllEvents = (_: Request, res: Response) => {
  res.status(200).json(mockEvents);
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
// It expects a userId and the number of guests in the request body
export const registerRSVP = (req: Request, res: Response) => {
  const { id } = req.params;
  const { userId, guests } = req.body as RSVP;
  if (!userId || typeof guests !== 'number') {
    return res.status(400).json({ error: 'Invalid RSVP data' });
  }
  const event = mockEvents.find(e => e.id === id);
  if (!event) return res.status(404).json({ error: 'Event not found' });

  res.status(201).json({ message: 'RSVP created', id, userId, guests });
}

export const updateRSVP = (req: Request, res: Response) => {
  const { id } = req.params;
  const { guests } = req.body;
  if (typeof guests !== 'number') {
    return res.status(400).json({ error: 'Invalid guests count' });
  }

  res.status(200).json({ message: 'RSVP updated', id, guests });
};

export const cancelRSVP = (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json({ message: `RSVP for event ${id} cancelled` });
};
