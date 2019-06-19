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
   return queryInterface.bulkInsert('teams', [
     {
       name: 'australia',
       code: 'AUS',
       ...timestamp
     },
     {
       name: 'india',
       code: 'IND',
       ...timestamp
     },
     {
       name: 'sri lanka',
       code: 'SL',
       ...timestamp
     },
     {
       name: 'south africa',
       code: 'SA',
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
   return queryInterface.bulkDelete('teams', null, {});
  }
};
