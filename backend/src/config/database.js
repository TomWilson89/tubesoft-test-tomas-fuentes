const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@postgres:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.stopwatch = require("../services/stopwatch/stopwatch.model")(
  sequelize,
  Sequelize
);

module.exports = db;
