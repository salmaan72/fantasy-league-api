'use strict';
module.exports = (sequelize, DataTypes) => {
  const leagues = sequelize.define('leagues', {
    typeId: DataTypes.INTEGER,
    slots: DataTypes.INTEGER,
    entryfee: DataTypes.INTEGER,
    winningAmount: DataTypes.INTEGER,
    matchId: DataTypes.INTEGER
  }, {});
  leagues.associate = function(models) {
    // associations can be defined here
  };
  return leagues;
};