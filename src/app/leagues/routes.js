import express from 'express'
import controller from './controller';

const router = express.Router();

router.route('/').get(controller.getLeagues).post(controller.joinLeague);

export { router as leaguesRoutes }