import { Router } from 'express';
import { Activity, Leaderboard, Team, User, Workout } from '../models/index.js';
import { createResourceRouter } from './resourceRouter.js';

const apiRouter = Router();

apiRouter.use(
  '/users',
  createResourceRouter({
    model: User,
    writableFields: ['username', 'email', 'displayName'],
    requiredFields: ['username', 'email', 'displayName'],
  }),
);
apiRouter.use(
  '/teams',
  createResourceRouter({
    model: Team,
    writableFields: ['name', 'description', 'members'],
    requiredFields: ['name'],
  }),
);
apiRouter.use(
  '/activities',
  createResourceRouter({
    model: Activity,
    writableFields: ['user', 'type', 'durationMinutes', 'distanceKm', 'performedAt'],
    requiredFields: ['user', 'type', 'durationMinutes'],
  }),
);
apiRouter.use(
  '/leaderboard',
  createResourceRouter({
    model: Leaderboard,
    writableFields: ['user', 'period', 'points'],
    requiredFields: ['user', 'period'],
  }),
);
apiRouter.use(
  '/workouts',
  createResourceRouter({
    model: Workout,
    writableFields: ['title', 'description', 'category', 'durationMinutes', 'difficulty'],
    requiredFields: ['title', 'category', 'durationMinutes', 'difficulty'],
  }),
);

export default apiRouter;
