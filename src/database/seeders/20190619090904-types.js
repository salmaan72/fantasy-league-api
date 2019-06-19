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
   return queryInterface.bulkInsert('types', [
     {
       type: 'superstars',
       ...timestamp
     },
     {
       type: 'h2h',
       ...timestamp
     },
     {
       type: 'battles',
       ...timestamp
     },
     {
       type: 'multiplier',
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
   return queryInterface.bulkDelete('types', null, {});
  }
};
