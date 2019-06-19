'use strict';
import schema from '../schemas/users';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    ...schema(DataTypes)
  }, {});
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};