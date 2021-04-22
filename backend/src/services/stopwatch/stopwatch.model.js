module.exports = (sequelize, Sequelize) => {
  const Stopwatch = sequelize.define("stopwatch", {
    minute: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    second: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    millisecond: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  });

  return Stopwatch;
};
