'use strict';
import schema from '../schemas/players';
module.exports = (sequelize, DataTypes) => {
  const players = sequelize.define('players', {
    ...schema(DataTypes)
  }, {});
  players.associate = function(models) {
    // associations can be defined here
    players.belongsTo(models.matches, {foreignKey: 'matchId'});
  };
  return players;
};