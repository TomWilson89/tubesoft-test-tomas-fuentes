const HttpError = require("../errors/http");
const InternalServerError = require("../errors/internalServer");

const error = (err, req, res, next) => {
  let errors = [];

  if (err instanceof Array) {
    errors = err;
  } else if (err instanceof HttpError) {
    errors = [err];
  } else {
    console.error(`[Error withour handler]:`, err);
    errors = [new InternalServerError()];
  }

  const firstError = errors[0];

  res.status(firstError.status).json({
    error: {
      errors,
      code: firstError.status,
      message: firstError.message,
    },
  });
};

module.exports = error;
