import express from 'express';
import eventRoutes from './routes/event.routes.js';

const app = express();
app.use(express.json());

app.use('/', eventRoutes);

export default app;
