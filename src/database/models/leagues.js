'use strict';
import schema from '../schemas/leagues';
module.exports = (sequelize, DataTypes) => {
  const leagues = sequelize.define('leagues', {
    ...schema(DataTypes)
  }, {});
  leagues.associate = function(models) {
    // associations can be defined here
    leagues.belongsTo(models.matches, {foreignKey: 'matchId'});
    leagues.belongsTo(models.types, {foreignKey: 'typeId'});
  };
  return leagues;
};