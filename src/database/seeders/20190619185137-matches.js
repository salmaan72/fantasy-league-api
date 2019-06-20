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
   return queryInterface.bulkInsert('matches', [
     {
       status: 'upcoming',
       teamId1: 2,
       teamId2: 4,
       matchType: 'odi',
       ...timestamp
     },
     {
      status: 'live',
      teamId1: 3,
      teamId2: 2,
      matchType: 'odi',
      ...timestamp
    },
    {
      status: 'live',
      teamId1: 1,
      teamId2: 4,
      matchType: 'odi',
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
   return queryInterface.bulkDelete('matches', null, {});
  }
};
