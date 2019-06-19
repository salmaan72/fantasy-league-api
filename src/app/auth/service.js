import { create } from '../../../utils/commonService';

async function signupService({model, body}) {
    const resp = await create({ model, body });
    return resp;
}

export default {
    signupService
}