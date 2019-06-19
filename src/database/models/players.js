'use strict';
module.exports = (sequelize, DataTypes) => {
  const players = sequelize.define('players', {
    matchId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    bat: DataTypes.BOOLEAN,
    wk: DataTypes.BOOLEAN,
    ar: DataTypes.BOOLEAN,
    bowl: DataTypes.BOOLEAN
  }, {});
  players.associate = function(models) {
    // associations can be defined here
  };
  return players;
};