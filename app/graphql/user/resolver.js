'use strict';

module.exports = {
  Query: {
    user(root, { id }, ctx) {
      return ctx.connector.user.fetchById(id);
    },
    news(root, params, ctx) {
      return ctx.connector.news.fetchRecommandation();
    },
  },
};
