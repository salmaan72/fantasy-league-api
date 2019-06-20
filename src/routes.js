import { authRoutes } from './app/auth/routes';
import { matchesRoutes } from './app/matches/routes';
import { leaguesRoutes } from './app/leagues/routes';
import { squadsRoutes } from './app/squads/routes';

import express from 'express';
const router = express.Router();

router.route('*').get(function (req, res, next) {
    console.log('Request was made to: ' + req.originalUrl);
    return next();
});

router.use('/auth', authRoutes);

router.use('/matches', matchesRoutes);

router.use('/leagues', leaguesRoutes);

router.use('/squads', squadsRoutes);

export { router as globalRouter };
