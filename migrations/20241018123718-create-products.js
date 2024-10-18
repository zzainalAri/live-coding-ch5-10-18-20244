'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull : false,
        type: Sequelize.STRING
      },
      images: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        defaultValue : ["https://ik.imagekit.io/imamth/Profile-17-1729202156932_ieaMdNeZB.png?updatedAt=1729202158471"]
      },
      stock: {
        type: Sequelize.INTEGER,
        defaultValue : 0,
        validate : {
          max : 10000
        }
      },
      price: {
        allowNull : false,
        type: Sequelize.INTEGER,
        defaultValue: 1000,
        validate : {
          min: 5000
        }
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};