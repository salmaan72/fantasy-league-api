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
   return queryInterface.bulkInsert('leagues', [
     {
       typeId: 1,
       slots: 60,
       entryfee: 200,
       winningAmount: 500,
       matchId: 1,
       ...timestamp
     },
     {
      typeId: 3,
      slots: 40,
      entryfee: 20,
      winningAmount: 100,
      matchId: 2,
      ...timestamp
    },
    {
      typeId: 2,
      slots: 20,
      entryfee: 300,
      winningAmount: 900,
      matchId: 1,
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
   return queryInterface.bulkDelete('leagues', null, {});
  }
};
