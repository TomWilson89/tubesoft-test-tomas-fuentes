const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const { stopwatchRoutes } = require("../routes");

const db = require("../config/database");

class App {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 4000;
    this.middleware();
  }

  middleware() {
    this.app.use(cors());
    this.app.use(helmet());
    if (process.env.NODE_ENV === "development") {
      this.app.use(morgan());
    }
    this.app.use(express.json({ limit: "50mb" }));
    this.app.use(express.urlencoded({ extended: true, limit: "50mb" }));

    this.app.use("/stopwatch", stopwatchRoutes);

    this.app.use((req, res) => {
      res.status(404).send("404: Page not found");
    });
  }

  connect() {
    this.app.listen(this.port, () => {
      console.log(`[server]: Running on port ${this.port}`);
    });
  }
}

db.sync()
  .then(() => console.log("[Database]: Connected"))
  .catch((err) => console.error(`[Error]: ${err}`));

if (module === require.main) {
  new App().connect();
}
