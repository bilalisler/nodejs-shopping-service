const validate = ({query, payload, params}) => {
  return (req, res, next) => {
    const {error: errorQuery} = query ? query.validate(req.query) : {};
    const {error: errorPayload} = payload ? payload.validate(req.body) : {};
    const {error: errorParams, value: parameters} = params ? params.validate(req.params) : {};

    let errors = {
      ...(errorQuery ? {query: {error: errorQuery.details[0].message}} : {}),
      ...(errorPayload ? {payload: {error: errorPayload.details[0].message}} : {}),
      ...(errorParams ? {params: {error: errorParams.details[0].message}} : {}),
    }

    if (Object.values(errors).length > 0) {
      return res.status(400).json({ errors });
    }
    next();
  };
};

module.exports = validate;
