'use strict';

const Controller = require('egg').Controller;

const loginRule = {
  username: 'string',
  password: 'string',
};


class AuthController extends Controller {
  async login() {
    const { ctx } = this;
    ctx.validate(loginRule);
    const res = await ctx.service.auth.login(ctx.request.body);
    ctx.helper.success({ ctx, res, msg: '登录成功' });
  }
}

module.exports = AuthController;
