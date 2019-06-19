'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('matches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.ENUM,
        values: ['live', 'past', 'upcoming'],
        allowNull: false,
      },
      teamId1: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      teamId2: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      matchType: {
        type: Sequelize.ENUM,
        values: ['odi', 'test'],
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('matches');
  }
};