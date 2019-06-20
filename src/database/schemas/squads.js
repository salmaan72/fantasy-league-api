export default function(Sequelize) {
    return {
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false
          },
          name: {
            type: Sequelize.STRING
          },
          matchId: {
            type: Sequelize.STRING,
            allowNull: false
          }
    }
};