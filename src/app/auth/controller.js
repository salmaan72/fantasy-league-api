import service from './service';
import validator from './validator';
import { generateToken } from '../../../utils/jwtUtil';

async function signup(req, res) {
    try {
        const validBody = await validator.signupValidator.validate({body: req.body});
        const saved = await service.signupService({body: validBody.body});
        delete saved.password;
        res.json({
            status: 201,
            body: saved,
            message: 'User created successfully'
        });
    } catch(err) {
        res.json({
            status: err.status,
            message: err.message,
            error: err
        });
    }
}

async function login(req, res) {
    try {
        const validBody = await validator.loginValidator.validate({body: req.body});
        const retrieved = await service.loginService({body: validBody.body});
        if(!retrieved) {
            res.json({
                status: 404,
                message: "wrong mobile/password"
            });
        }
        delete retrieved.password;
        const token = await generateToken({payload: retrieved});
        res.cookie('token',token,{ httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
        res.send({
            status: 200,
            data: retrieved,
            message: 'loggedin successfully'
        })
    } catch(err) {
        res.json({
            status: err.status,
            message: err.message,
            error: err
        });
    }
}

export default {
    signup,
    login
}