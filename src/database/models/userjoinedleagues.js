'use strict';
import schema from '../schemas/userJoinedLeagues';
module.exports = (sequelize, DataTypes) => {
  const userJoinedLeagues = sequelize.define('userJoinedLeagues', {
    ...schema(DataTypes)
  }, {});
  userJoinedLeagues.associate = function(models) {
    // associations can be defined here
    userJoinedLeagues.belongsTo(models.leagues, {foreignKey: 'leagueId'});
    userJoinedLeagues.belongsTo(models.squads, {foreignKey: 'squadId'});
  };
  return userJoinedLeagues;
};