'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
  router.get('/news/:id', controller.news.detail);

  // 登录获取token
  router.post('/login', controller.auth.login);

  // 注册RESTful风格路由
  router.resources('users', '/api/v1/users', app.jwt, controller.users);
};
