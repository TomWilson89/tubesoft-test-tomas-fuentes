const HttpError = require("../../errors/http");

class StopwatchValidationClass {
  create = (req, res, next) => {
    const { hour, minute, second, milliseconds } = req.body;
    const errors = [];

    if (!hour) {
      errors.push(new HttpError("FieldIsRequired", 422, { field: "hour" }));
    }

    if (!minute) {
      errors.push(new HttpError("FieldIsRequired", 422, { field: "minute" }));
    }

    if (!second) {
      errors.push(new HttpError("FieldIsRequired", 422, { field: "second" }));
    }

    if (!milliseconds) {
      errors.push(
        new HttpError("FieldIsRequired", 422, { field: "milliseconds" })
      );
    }

    if (errors.length) next(errors);
    else next();
  };
}

const StopwatchValidation = new StopwatchValidationClass();

module.exports = StopwatchValidation;
