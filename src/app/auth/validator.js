import joi from '@hapi/joi';

export default {
  signupValidator: joi.object({
    body: joi.object({
      username: joi.string(),
      mobile: joi.string(),
      password: joi.string()
    })
  }),

  loginValidator: joi.object({
    body: joi.object({
      mobile: joi.string(),
      password: joi.string()
    })
  })
}