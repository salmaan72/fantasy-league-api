import express from 'express';
import controller from './controller';

const router = express.Router();

router.route('/signup').post(controller.signup);

router.route('/login').post(controller.login);

export { router as authRoutes }