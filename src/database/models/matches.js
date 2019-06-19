'use strict';
import schema from '../schemas/matches';
module.exports = (sequelize, DataTypes) => {
  const matches = sequelize.define('matches', {
    ...schema(DataTypes)
  }, {});
  matches.associate = function(models) {
    // associations can be defined here
    matches.belongsTo(models.teams, {foreignKey: 'teamId1'});
    matches.belongsTo(models.teams, {foreignKey: 'teamId2'});
  };
  return matches;
};