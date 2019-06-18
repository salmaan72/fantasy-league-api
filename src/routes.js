import routes from './app/dummy/routes';
function init(server) {
    server.get('*', function (req, res, next) {
        console.log('Request was made to: ' + req.originalUrl);
        return next();
    });
    
    server.use('/dummy', routes.dummyRoutes);
    
}

export default {
    init,
}