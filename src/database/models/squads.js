'use strict';
module.exports = (sequelize, DataTypes) => {
  const squads = sequelize.define('squads', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  squads.associate = function(models) {
    // associations can be defined here
  };
  return squads;
};