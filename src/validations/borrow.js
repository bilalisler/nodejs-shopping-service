const Joi = require('joi');

module.exports = {
  borrowBook: {
    params: Joi
      .object()
      .keys({
        user_id: Joi.number().required(),
        book_id: Joi.number().required(),
      })
  },
  returnBook: {
    params: Joi
      .object()
      .keys({
        user_id: Joi.number().required(),
        book_id: Joi.number().required(),
      }),
    payload: Joi
      .object()
      .keys({
        score: Joi.number().required(),
      })
  }
};
