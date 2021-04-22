const Stopwatch = require("../../config/database").stopwatch;

const { asyncHandler } = require("../../middleware/async");

class StopwatchControllerClass {
  list = asyncHandler(async (req, res) => {
    const records = await Stopwatch.findAll();
    res.json(records);
  });

  create = asyncHandler(async (req, res) => {
    const { minute, second, millisecond } = req.body;

    const data = { minute, second, millisecond };

    const stopwatch = await Stopwatch.create(data);

    res.json({ data: stopwatch });
  });
}

const StopwatchController = new StopwatchControllerClass();

module.exports = StopwatchController;
