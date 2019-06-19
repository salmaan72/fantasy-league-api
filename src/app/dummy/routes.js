import express from 'express';
const router = express.Router();

import controller from './controller';

router.route('/hello').get(controller.dummy);

export { router as dummyRoutes };
