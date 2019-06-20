import {rawQuery, bulkCreate} from '../../../utils/commonService';

async function getLeaguesService() {
    const resp = await rawQuery({
        query: `select * from leagues`
    });

    return resp;
}

async function getTypeData({id}) {
    const resp = await rawQuery({
        query: `select * from types where id=?`,
        replacements: [id]
    });

    return resp;
} 

async function getMatchData({id}) {
    const resp = await rawQuery({
        query: `select * from matches where id=?`,
        replacements: [id]
    });

    return resp;
}

async function createBulk({body}) {
    const resp = await bulkCreate({ model: 'userJoinedLeagues', values: body });
    return resp;
}

export default {
    getLeaguesService,
    getTypeData,
    getMatchData,
    createBulk
}