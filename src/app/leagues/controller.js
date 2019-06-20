import service from './service';
import validator from './validator';

async function getLeagues(req, res) {
    try {
        const retrieved = await service.getLeaguesService();
        const response = await Promise.all(retrieved.map(async item => {
            item.typeId = await service.getTypeData({id: item.typeId});
            item.matchId = await service.getMatchData({id: item.matchId});
            return item;
        }));
        res.json({
            status: 200,
            data: response,
            message: 'data fetched successfully'
        });
    } catch (err) {
        res.json({
            status: err.status,
            message: err.message,
            error: err
        });
    }

}

async function joinLeague(req, res) {
    try {
        const validBody = await validator.joinLeagueValidator.validate({body: req.body});
        const joinLeagueRecords = validBody.body.squadIds.map(id => ({
            leagueId: validBody.body.leagueId,
            squadId: id
        }));

        await service.createBulk({body: joinLeagueRecords});

        res.json({
            status: 200,
            message: 'squads joined leagues successfully'
        });
    } catch(err) {
        res.json({
            status: err.status,
            message: err.message,
            error: err
        });
    }
}

export default {
    getLeagues,
    joinLeague
}