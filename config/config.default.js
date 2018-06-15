'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1528806486462_9070';

  // 加载 errorHandler 中间件
  config.middleware = [ 'errorHandler', 'graphql' ];

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [ 'http://localhost:8000' ],
  };

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    credentials: true,
    csrf: {
      headerNamer: 'csrftoken',
      ignoreJSON: true,
    },
  };

  config.bcrypt = {
    saltRounds: 10,
  };

  config.jwt = {
    secret: 'Great4-M',
    enable: true, // default is false
    match: '/jwt', // optional
  };

  // egg-mysql 配置
  config.mysql = {
    // 单数据库信息配置
    client: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: '',
      database: 'egg_demo',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  // egg-sequelize 配置
  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'egg_demo',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: '',
  };

  exports.graphql = {
    router: '/graphql',
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
    graphiql: true,
  };

  config.posts = {
    pageSize: 5,
    serverUrl: 'https://www.thatyou.cn/wp-json/wp/v2',
  };

  return config;
};
