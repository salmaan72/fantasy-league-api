import joi from '@hapi/joi';

async function validator({ body }) {
  const schema = {
    username: joi.string(),
    mobile: joi.string(),
    password: joi.string()
  };

  const { err, value } = joi.validate(body, schema);

  if (err) {
    throw err;
  }

  return value;
}

export { validator };