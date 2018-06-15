'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('user', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: STRING(200),
    password: STRING(200),
    nickname: STRING(200),
    sex: INTEGER,
    birthday: STRING(20),
    mobile: STRING(11),
    status: INTEGER,
    role: INTEGER,
    createdAt: DATE,
    updatedAt: DATE,
  });

  User.prototype.associate = function() {
    app.model.User.hasMany(app.model.News, { as: 'news', foreignKey: 'user_id' });
  };

  return User;
};
