// 'use strict';

// const LocalStrategy = require('passport-local').Strategy;

// module.exports = app => {
//   // 挂载strategy
//   app.passport.use(new LocalStrategy({
//     passReqToCallback: true,
//   }, (req, username, password, done) => {
//     const user = {
//       privider: 'local',
//       username,
//       password,
//     };
//     debug('%s %s get user: %j', req.method, req.url, user);
//     app.passport.doVerify(req, user, done);
//   }));

//   // 处理用户信息
//   app.passport.verify(async (ctx, user) => {});
//   app.passport.serializeUser(async (ctx, user) => {});
//   app.passport.deserializeUser(async (ctx, user) => {});
// };
