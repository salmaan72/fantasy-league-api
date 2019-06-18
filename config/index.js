import _ from 'lodash'
const
    env = process.env.NODE_ENV || 'development',
    envConfig = require('./' + env);

let defaultConfig = {
    env: env
};

export default _.merge(defaultConfig, envConfig);