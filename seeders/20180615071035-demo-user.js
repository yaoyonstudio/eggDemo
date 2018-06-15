'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    const admin = {
      username: 'ken',
      password: '$2a$10$B7MIyejcNxXhk8Uo13sOJOV5Ca/K5U5WmDS29I03Iu0tSYoqvSRAy',
      nickname: 'kenny',
      sex: 2,
      birthday: '1990-07-07',
      mobile: '13800138000',
      status: 1,
      role: 1,
    };
    const users = [ admin ];
    for (let i = 1, l = 10; i < l; i++) {
      users.push({
        username: 'user' + i,
        password: '$2a$10$B7MIyejcNxXhk8Uo13sOJOV5Ca/K5U5WmDS29I03Iu0tSYoqvSRAy',
        nickname: 'user' + i,
        sex: (i % 3 === 0) ? 2 : 3,
        status: 1,
        role: 3,
      });
    }

    return queryInterface.bulkInsert('Users', users, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
