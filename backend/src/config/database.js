const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@postgres:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`
);

module.exports = sequelize;
