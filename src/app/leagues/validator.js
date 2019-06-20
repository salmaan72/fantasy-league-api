import joi from '@hapi/joi';

export default {
    joinLeagueValidator: joi.object({
        body: joi.object({
            leagueId: joi.number(),
            squadIds: joi.array().items(joi.number())
        })
    })
}