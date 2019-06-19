'use strict';
import schema from '../schemas/squadplayers';
module.exports = (sequelize, DataTypes) => {
  const squadplayers = sequelize.define('squadplayers', {
    ...schema(DataTypes)
  }, {});
  squadplayers.associate = function(models) {
    // associations can be defined here
    squadplayers.belongsTo(models.players, {foreignKey: 'playerId'});
    squadplayers.belongsTo(models.squads, {foreignKey: 'squadId'});
  };
  return squadplayers;
};