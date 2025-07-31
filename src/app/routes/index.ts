import express from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { TaskRoutes } from '../modules/task/task.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/tasks',
    route: TaskRoutes,
  },
];

// router.use('/users', UserRoutes);

moduleRoutes.forEach((moduleRoute) =>
  router.use(moduleRoute.path, moduleRoute.route),
);

export default router;
