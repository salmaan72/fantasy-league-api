import service from './service';
import validator from './validator';

async function createSquad(req, res) {
    try {
        const validBody = await validator.createSquadValidator.validate({body: req.body});

        // check number of squads
        const nof = await service.numberOfSquads({matchId: validBody.body.matchId, userId: req.userData.id});
        if(nof.count >= 8) {
            return res.json({
                status: 400,
                message: ' Each user can only create a maximum of 8 squads in a match.'
            })
        }

        const squad = {
            name: validBody.body.name,
            userId: req.userData.id,
            matchId: validBody.body.matchId
        }
        const squadCreated = await service.createSquad({body: squad});

        const squadPlayers = validBody.body.playerIds.map(id => ({
            playerId: id,
            squadId: squadCreated.id
        }));

        await service.createBulkSquadPlayers({body: squadPlayers});

        res.json({
            status: 201,
            data: squadCreated,
            message: 'squad created successfully'
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
    createSquad
}