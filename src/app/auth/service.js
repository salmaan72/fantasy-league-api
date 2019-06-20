import { create, findOne } from '../../../utils/commonService';

async function signupService({body}) {
    const resp = await create({ model: 'users', body });
    return resp;
}

async function loginService({body}) {
    const resp = await findOne({ model: 'users', where: {
        mobile: body.mobile,
        password: body.password
    } });

    return resp && resp.toJSON();
}

export default {
    signupService,
    loginService
}