import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import notFound from './app/middlewares/notFound';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
const app: Application = express();

// Parser / Middleware
app.use(express.json());
app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'https://task-management-client-1746.netlify.app',
    ],
  }),
);

// Application Routes
app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Task Management App! 😊');
});

// Not found route
app.use(notFound);

// Global Error Handler
app.use(globalErrorHandler);

export default app;
