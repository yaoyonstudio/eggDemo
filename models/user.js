'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    nickname: DataTypes.STRING,
    sex: DataTypes.INTEGER,
    birthday: DataTypes.STRING,
    mobile: DataTypes.STRING,
    status: DataTypes.INTEGER,
    role: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};