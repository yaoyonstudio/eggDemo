'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('News', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.TEXT
      },
      keyword: {
        type: Sequelize.STRING
      },
      excerpt: {
        type: Sequelize.STRING
      },
      slug: {
        type: Sequelize.STRING
      },
      source: {
        type: Sequelize.STRING
      },
      source_link: {
        type: Sequelize.STRING
      },
      author: {
        type: Sequelize.STRING
      },
      featuredImg: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.INTEGER
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('News');
  }
};