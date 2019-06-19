export default function(Sequelize) {
    return {
        username: {
            type: Sequelize.STRING,
            allowNull: false
          },
          mobile: {
            type: Sequelize.STRING,
            allowNull: false
          },
          password: {
              type: Sequelize.STRING,
              allowNull: false
          }
    }
};