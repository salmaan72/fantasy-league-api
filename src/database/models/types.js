'use strict';
module.exports = (sequelize, DataTypes) => {
  const types = sequelize.define('types', {
    type: DataTypes.STRING
  }, {});
  types.associate = function(models) {
    // associations can be defined here
  };
  return types;
};