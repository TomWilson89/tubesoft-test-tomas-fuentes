const Sequelize = require("sequelize");

const sequelize = require("../../config/database");

const Stopwatch = sequelize.define("stopwatch", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },

  hour: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  minute: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  second: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  milliseconds: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Stopwatch;
