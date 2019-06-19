'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('leagues', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      typeId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      slots: {
        type: Sequelize.INTEGER
      },
      entryfee: {
        type: Sequelize.INTEGER
      },
      winningAmount: {
        type: Sequelize.INTEGER
      },
      matchId: {
        type: Sequelize.INTEGER,
        allowNull: false
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
    return queryInterface.dropTable('leagues');
  }
};