'use strict';
module.exports = (sequelize, DataTypes) => {
  const squadplayers = sequelize.define('squadplayers', {
    squadId: DataTypes.INTEGER,
    playerId: DataTypes.INTEGER
  }, {});
  squadplayers.associate = function(models) {
    // associations can be defined here
  };
  return squadplayers;
};