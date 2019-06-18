import express from 'express';
import bodyParser from 'body-parser';
import mainRouter from './routes';

export default (function() {
    let server = express(),
        create,
        start;

    create = function(config) {

        // Server settings
        server.set('env', config.env);
        server.set('port', config.port);
        server.set('hostname', config.hostname);

        // Returns middleware that parses json
        server.use(bodyParser.json());

        // server.use('/api', apiRoute);

        // Set up routes
        mainRouter.init(server);
    };

    start = function() {
        let hostname = server.get('hostname'),
            port = server.get('port');

        server.listen(port, function () {
            console.log('Express server listening on - http://' + hostname + ':' + port);
        });
    };

    return {
        create: create,
        start: start
    };
})();