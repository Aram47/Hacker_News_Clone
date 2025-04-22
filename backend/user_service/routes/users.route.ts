import { Router } from 'express';
import UsersMiddleware from '../src/users/middlewares/users.middlewares.js';
import UsersController from '../src/users/users.controller.js';


const router: Router = Router();

router.get('/', UsersMiddleware.getAll, UsersController.getAll);
router.get('/:id', UsersMiddleware.getById, UsersController.getById);
router.post('/', UsersMiddleware.create, UsersController.create);
router.put('/', UsersMiddleware.update, UsersController.update);
router.patch('/', UsersMiddleware.updatePartial, UsersController.updatePartial);
router.delete('/:id', UsersMiddleware.delete, UsersController.delete);

export default router;