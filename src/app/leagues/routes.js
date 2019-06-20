import express from 'express'
import controller from './controller';
import { verifyToken } from '../../../utils/jwtUtil';

const router = express.Router();

router.route('/').get(verifyToken, controller.getLeagues).post(verifyToken, controller.joinLeague);

export { router as leaguesRoutes }