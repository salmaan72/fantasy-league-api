'use strict';
import schema from '../schemas/leagues';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('leagues', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      ...schema(Sequelize)
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('leagues');
  }
};