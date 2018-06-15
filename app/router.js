'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/posts', controller.posts.list);
  router.get('/posts/:id', controller.posts.detail);

  // 登录获取token
  router.post('/login', controller.auth.login);
  router.post('/register', controller.auth.register);

  // 注册RESTful风格路由
  router.resources('users', '/api/v1/users', app.jwt, controller.users);

  router.get('/api/v1/news', controller.news.index);
  router.get('/api/v1/news/:id', controller.news.show);
  router.post('/api/v1/news', app.jwt, controller.news.create);
  router.put('/api/v1/news/:id', app.jwt, controller.news.update);
  router.delete('/api/v1/news/:id', app.jwt, controller.news.destroy);
};
