import { Router } from 'express';
import AuthMiddleware from '../src/auth/middlewares/auth.middleware.js';
import AuthController from '../src/auth/auth.controller.js';

const router: Router = Router();

router.post('login', AuthMiddleware.loginMiddleware, AuthController.login);
router.post('register', AuthMiddleware.registerMiddleware, AuthController.register);

export default router;