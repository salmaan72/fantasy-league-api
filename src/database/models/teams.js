'use strict';
import schema from '../schemas/teams';
module.exports = (sequelize, DataTypes) => {
  const teams = sequelize.define('teams', {
    ...schema(DataTypes)
  }, {});
  teams.associate = function(models) {
    // associations can be defined here
  };
  return teams;
};