import IRoute from '../types/IRoute';
import { Router } from 'express';
import { User } from '../services/db';
import { Response } from 'express-serve-static-core';

const UsersRouter: IRoute = {
  route: '/users',
  router() {
    const router = Router();

    // Route to fetch all users
    router.get('/', async (req, res) => {
      try {
        const users = await User.findAll({
          attributes: { exclude: ['password'] },
        });

        return res.json({
          success: true,
          message: 'List of users retrieved successfully.',
          data: users,
        });
      } catch (error) {
        return passError('Failed to fetch users.', error, res);
      }
    });

    return router;
  },
};

export default UsersRouter;
function passError(arg0: string, error: any, res: Response<any, Record<string, any>, number>): void | PromiseLike<void> {
    throw new Error('Function not implemented.');
}

