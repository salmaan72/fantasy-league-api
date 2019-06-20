import { create, bulkCreate, rawQuery } from '../../../utils/commonService';

async function createSquad({body}) {
    const resp = await create({model: 'squads', body});
    return resp;
}

async function createBulkSquadPlayers({body}) {
    const resp = await bulkCreate({ model: 'squadplayers', values: body });
    return resp;
}

async function numberOfSquads({matchId, userId}) {
    const resp = await rawQuery({
        query: `select count(id) as count from squads where matchId=? and userId=?`,
        replacements: [matchId, userId]
    });

    return resp[0];
}

export default {
    createSquad,
    createBulkSquadPlayers,
    numberOfSquads
}