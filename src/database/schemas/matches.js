export default function(Sequelize) {
    return {
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
          }
    }
};