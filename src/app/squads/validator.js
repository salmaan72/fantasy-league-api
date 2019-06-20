import joi from '@hapi/joi';

export default {
    createSquadValidator: joi.object({
        body: joi.object({
            name: joi.string(),
            playerIds: joi.array().items(joi.number()),
            matchId: joi.number()
        })
    })
}