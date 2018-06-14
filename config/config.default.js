'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1528806486462_9070';

  // 加载 errorHandler 中间件
  config.middleware = [ 'errorHandler' ];

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

  config.news = {
    pageSize: 5,
    serverUrl: 'https://www.thatyou.cn/wp-json/wp/v2',
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

  return config;
};
