'use strict';

module.exports = {
  // User: {
  //   news(root, _, ctx) {
  //     return ctx.connector.news.fetchByUserId(root.id);
  //   },
  // },
  Query: {
    news(root, params, ctx) {
      console.log('params:', params);
      return ctx.connector.news.select(params);
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
