'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const news = [];
    for (let i = 1, l = 20; i <= l; i++) {
      news.push({
        title: 'post' + i,
        content: 'post' + i,
        keyword: 'post' + i,
        excerpt: 'post' + i,
        user_id: 1,
      });
    }
    return queryInterface.bulkInsert('News', news, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('News', null, {});
  },
};
