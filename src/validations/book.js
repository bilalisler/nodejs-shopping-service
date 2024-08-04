const Joi = require('joi');

module.exports = {
  createBook: {
    payload: Joi
      .object()
      .keys({
        name: Joi.string().required(),
      })
  },
  fetchBook: {
    params: Joi
      .object()
      .keys({
        id: Joi.number().required(),
      })
  }
};
