export default function(Sequelize) {
    return {
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
          }
    }
};