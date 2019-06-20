import express from 'express';
import controller from './controller';
import { verifyToken } from '../../../utils/jwtUtil';

const router = express.Router();

router.route('/').get(verifyToken, controller.getMatches)

export { router as matchesRoutes }