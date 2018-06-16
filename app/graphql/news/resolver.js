/* eslint-disable array-callback-return */

'use strict';

module.exports = {
  // NewsList: {
  //   data(root, _, ctx) {
  //     console.log('root:', root);
  //     const data = root.data.map(item => {
  //       console.log('item:', item.user_id);
  //       item.user = ctx.connector.user.show(item.user_id);
  //     });
  //     return data;
  //   },
  // },
  News: {
    user(root, _, ctx) {
      return ctx.connector.user.show(root.id);
    },
  },
  Query: {
    newslist(root, params, ctx) {
      console.log('params:', params);
      return ctx.connector.news.select(params);
    },
    news(root, { id }, ctx) {
      console.log('id:', id);
      return ctx.connector.news.show(id);
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
