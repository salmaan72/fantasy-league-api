import express from 'express';
import controller from './controller';
import { verifyToken } from '../../../utils/jwtUtil';

const router = express.Router();

router.route('/').post(verifyToken, controller.createSquad);

export { router as squadsRoutes }
