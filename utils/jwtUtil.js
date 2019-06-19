import jwt from 'jsonwebtoken';
import config from '../config';

async function verifyToken(req, res, next) {
    const { token } = req.headers.cookie;
    const { jwtSecret } = config.jwt;
    await jwt.verify(token, jwtSecret);
    return true;
}