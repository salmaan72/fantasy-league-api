export default function(Sequelize) {
    return {
        matchId: {
            type: Sequelize.INTEGER,
            allowNull: false
          },
          name: {
            type: Sequelize.STRING,
            allowNull: false
          },
          bat: {
            type: Sequelize.BOOLEAN
          },
          wk: {
            type: Sequelize.BOOLEAN
          },
          ar: {
            type: Sequelize.BOOLEAN
          },
          bowl: {
            type: Sequelize.BOOLEAN
          }
    }
};