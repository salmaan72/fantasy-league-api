'use strict';
import schema from '../schemas/squads';
module.exports = (sequelize, DataTypes) => {
  const squads = sequelize.define('squads', {
    ...schema(DataTypes)
  }, {});
  squads.associate = function(models) {
    // associations can be defined here
    squads.belongsTo(models.users, {foreignKey: 'userId'});
  };
  return squads;
};