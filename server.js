import server from './src';
import config from './config';

server.create(config.default);
server.start();