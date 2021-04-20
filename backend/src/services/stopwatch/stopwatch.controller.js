const Stopwatch = require("./stopwatch.model");

class StopwatchControllerClass {
  list = async (req, res) => {
    try {
      const records = await Stopwatch.findAll();
      res.json(records);
    } catch (err) {
      console.error(`[Error]: ${err}`);
    }
  };

  create = async (req, res) => {
    const data = {
      hour: 0.0,
      minute: 1,
      second: 30,
    };

    await Stopwatch.create(data);

    res.redirect("/stopwatch");
  };
}

const StopwatchController = new StopwatchControllerClass();

module.exports = StopwatchController;
