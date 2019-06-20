import jwt from 'jsonwebtoken';
import config from '../config';

export async function verifyToken(req, res, next) {
    const { token } = req.cookies;
    const { jwtSecret } = config.jwt;
    try {
        const data = jwt.verify(token, jwtSecret);
        if(data.mobile) {
            req.userData = data;
            return next();
        }
    } catch(err) {
        res.json({
            status: 400,
            message: 'auth failed',
            error: err
        });
    }
    
}

export async function generateToken({payload}) {
    const { jwtSecret } = config.jwt;
    const token = await jwt.sign(payload, jwtSecret);
    return token;
}