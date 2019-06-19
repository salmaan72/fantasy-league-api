'use strict';
module.exports = (sequelize, DataTypes) => {
  const matches = sequelize.define('matches', {
    status: DataTypes.ENUM,
    teamId1: DataTypes.INTEGER,
    teamId2: DataTypes.INTEGER,
    matchType: DataTypes.ENUM
  }, {});
  matches.associate = function(models) {
    // associations can be defined here
    matches.belongsTo(models.teams, {foreignKey: 'teamId1'});
    matches.belongsTo(models.teams, {foreignKey: 'teamId2'});
  };
  return matches;
};