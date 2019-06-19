import { dummyRoutes } from './app/dummy/routes';
import { authRoutes } from './app/auth/routes';

import express from 'express';
const router = express.Router();

router.route('*').get(function (req, res, next) {
    console.log('Request was made to: ' + req.originalUrl);
    return next();
});

router.use('/dummy', dummyRoutes);

router.use('/auth', authRoutes);

export { router as globalRouter };
