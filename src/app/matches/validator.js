import joi from '@hapi/joi';

export default {
    getMatchesValidator: joi.object({
        query: joi.object({
            status: joi.string().valid('past', 'live', 'upcoming')
        })
    })
}