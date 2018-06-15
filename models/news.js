'use strict';
module.exports = (sequelize, DataTypes) => {
  var News = sequelize.define('News', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    keyword: DataTypes.STRING,
    excerpt: DataTypes.STRING,
    slug: DataTypes.STRING,
    source: DataTypes.STRING,
    source_link: DataTypes.STRING,
    author: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  News.associate = function(models) {
    // associations can be defined here
  };
  return News;
};