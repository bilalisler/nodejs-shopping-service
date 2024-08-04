const Joi = require('joi');

module.exports = {
  createUser: {
    payload: Joi
      .object()
      .keys({
        name: Joi.string().required(),
      })
  },
  fetchUser: {
    params: Joi
      .object()
      .keys({
        id: Joi.number().required(),
      })
  }
};
