const { Router } = require("express");
const StopwatchController = require("./stopwatch.controller");

const router = Router();

router.route("/").get(StopwatchController.list);

router.route("/create").get(StopwatchController.create);

module.exports = router;
