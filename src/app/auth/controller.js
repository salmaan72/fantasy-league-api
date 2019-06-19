import service from './service';
import {validator} from './validator';

async function signup(req, res) {
    try {
        const validBody = await validator({body: req.body});
        const saved = await service.signupService({model: 'users', body: validBody});
        res.json({
            status: 200,
            body: saved,
            message: 'User data saved successfully'
        });
    } catch(e) {

    }
}

async function login(req, res) {

}

export default {
    signup,
    login
}