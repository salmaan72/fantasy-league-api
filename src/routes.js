import routes from './app/dummy/routes';
import express from 'express';
const router = express.Router();

router.route('*').get(function (req, res, next) {
    console.log('Request was made to: ' + req.originalUrl);
    return next();
});

router.use('/dummy', routes.dummyRoutes);

export default { globalRoutes: router };
