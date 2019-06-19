'use strict';
module.exports = (sequelize, DataTypes) => {
  const teams = sequelize.define('teams', {
    name: DataTypes.STRING,
    code: DataTypes.STRING
  }, {});
  teams.associate = function(models) {
    // associations can be defined here
  };
  return teams;
};