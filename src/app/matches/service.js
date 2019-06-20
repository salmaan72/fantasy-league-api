import { rawQuery } from '../../../utils/commonService';

async function listMatches({query}) {
    const resp = await rawQuery({
        query: `select * from matches where status=?`,
        replacements: [query.status]
    });

    return resp;
}

async function getTeamData({id}) {
    const resp = await rawQuery({
        query: `select * from teams where id=?`,
        replacements: [id]
    });

    return resp;
}

export default {
    listMatches,
    getTeamData
}