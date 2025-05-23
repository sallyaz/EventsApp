import { Router } from 'express';
import {
  getAllEvents,
  getEventById,
  registerRSVP,
  updateRSVP,
  cancelRSVP, 
  userAuth
} from '../controllers/event.controller.js';

const router = Router();

router.get('/events', getAllEvents);
router.get('/events/:id', getEventById);
router.post('/events/:id/rsvp', registerRSVP);
router.patch('/events/:id/rsvp', updateRSVP);
router.delete('/events/:id/rsvp', cancelRSVP);
router.post('/login', userAuth);


export default router;
