'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      product_id: {
        type: Sequelize.STRING
      },
      
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      Phone: {
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      attachment: {
        type: Sequelize.STRING
      },
     
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('transactions');
  }
};