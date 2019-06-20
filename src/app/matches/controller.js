import validator from './validator';
import service from './service';

async function getMatches(req, res) {
    try {
        const validQuery = await validator.getMatchesValidator.validate({query: req.query});
        const retrieved = await service.listMatches({query: validQuery.query});
        const response = await Promise.all(retrieved.map(async item => {
            item.teamId1 = await service.getTeamData({id: item.teamId1});
            item.teamId2 = await service.getTeamData({id: item.teamId2});
            return item;
        }));
        
        res.json({
            status: 200,
            body: response,
            message: 'data fetched successfully'
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
    getMatches
}