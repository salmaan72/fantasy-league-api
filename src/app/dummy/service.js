import {test, rawQuery} from '../../../utils/commonService';

async function testService() {
    await test();
}

async function testRaw() {
    const query = `select * from newtable`;
    const res = await rawQuery({
        query
    });
    console.log(res);
    return res;
}

export default {
    testService,
    testRaw
}