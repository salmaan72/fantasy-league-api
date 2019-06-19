'use strict';
import schema from '../schemas/types';
module.exports = (sequelize, DataTypes) => {
  const types = sequelize.define('types', {
    ...schema(DataTypes)
  }, {});
  types.associate = function(models) {
    // associations can be defined here
  };
  return types;
};