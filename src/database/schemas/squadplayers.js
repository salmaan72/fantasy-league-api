export default function(Sequelize) {
    return {
        squadId: {
            type: Sequelize.INTEGER,
            allowNull: false
          },
          playerId: {
            type: Sequelize.INTEGER,
            allowNull: false
          }
    }
};