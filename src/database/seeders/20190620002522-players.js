'use strict';

const timestamp = {
  updatedAt: new Date,
  createdAt: new Date
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('players', [
      {
        matchId: 1,
        name: 'sachin tendulkar',
        bat: true,
        ...timestamp
      },
      {
        matchId: 1,
        name: 'virat kohli',
        bat: true,
        ...timestamp
      },
      {
        matchId: 1,
        name: 'ms dhoni',
        wk: true,
        ...timestamp
      },
      {
        matchId: 1,
        name: 'rohit sharma',
        bowl: true,
        ...timestamp
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('players', null, {});
  }
};
