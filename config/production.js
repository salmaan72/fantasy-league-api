export default {
    env: 'production',
    hostname: '127.0.0.1',
    port: 3000,
    database: {
        database: 'leaguex',
        username: 'root',
        password: 'root',
        host: '127.0.0.1',
        dialect: 'mysql'
    },
    jwt: {
        jwtSecret: "thisisasecretkey"
    }
}