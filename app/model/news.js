'use strict';

module.exports = app => {
  const { STRING, TEXT, INTEGER, DATE } = app.Sequelize;

  const News = app.model.define('news', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: STRING(30),
    content: TEXT,
    keyword: STRING(255),
    excerpt: STRING(255),
    slug: STRING(255),
    source: STRING(255),
    source_link: STRING(255),
    author: STRING(255),
    featuredImg: STRING(255),
    user_id: INTEGER,
    created_at: DATE,
    updated_at: DATE,
  });

  News.associate = function() {
    app.model.News.belongsTo(app.model.User, { as: 'user', foreignKey: 'user_id' });
  };

  return News;
};
