'use strict';

module.exports = {
  User: {
    news(root, _, ctx) {
      return ctx.connector.news.fetchByUserId(root.id);
    },
  },
  Query: {
    user(root, { id }, ctx) {
      return ctx.connector.user.fetchById(id);
    },
    news(root, params, ctx) {
      return ctx.connector.news.fetchRecommandation();
    },
  },
  Mutation: {
    createNews(root, {
      userID,
      title,
      content,
    }, ctx) {
      return ctx.connector.news.create(userID, title, content);
    },
    updateNews(root, {
      id,
      title,
      content,
    }, ctx) {
      return ctx.connector.news.update(id, title, content);
    },
    deleteNews(root, {
      id,
    }, ctx) {
      return ctx.connector.news.delete(id);
    },
  },
};
