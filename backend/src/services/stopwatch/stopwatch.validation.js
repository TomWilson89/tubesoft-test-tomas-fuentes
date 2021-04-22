const HttpError = require("../../errors/http");

class StopwatchValidationClass {
  create = (req, res, next) => {
    const { minute, second, millisecond } = req.body;
    const errors = [];

    if (minute === null) {
      errors.push(new HttpError("FieldIsRequired", 422, { field: "minute" }));
    }

    if (second === null) {
      errors.push(new HttpError("FieldIsRequired", 422, { field: "second" }));
    }

    if (millisecond === null) {
      errors.push(
        new HttpError("FieldIsRequired", 422, { field: "millisecond" })
      );
    }

    if (errors.length) next(errors);
    else next();
  };
}

const StopwatchValidation = new StopwatchValidationClass();

module.exports = StopwatchValidation;
