import express from 'express';
import controller from './controller';

const router = express.Router();

router.route('/').get(controller.getMatches)

export { router as matchesRoutes }