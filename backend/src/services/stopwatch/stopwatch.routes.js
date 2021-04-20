const { Router } = require("express");
const StopwatchController = require("./stopwatch.controller");
const StopwatchValidation = require("./stopwatch.validation");

const router = Router();

router.route("/").get(StopwatchController.list);

router
  .route("/create")
  .post(StopwatchValidation.create, StopwatchController.create);

module.exports = router;
