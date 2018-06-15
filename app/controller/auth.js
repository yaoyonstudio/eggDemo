'use strict';

const Controller = require('egg').Controller;

const loginRule = {
  username: 'string',
  password: 'string',
};

const registerRule = {
  username: 'string',
  password: { type: 'string', min: 8 },
};

class AuthController extends Controller {
  async login() {
    const { ctx } = this;
    ctx.validate(loginRule);
    const res = await ctx.service.auth.login(ctx.request.body);
    ctx.helper.success({ ctx, res, msg: '登录成功' });
  }
  async register() {
    const { ctx } = this;
    ctx.validate(registerRule);
    const res = await ctx.service.auth.register(ctx.request.body);
    ctx.helper.success({ ctx, res, msg: '注册成功' });
  }
}

module.exports = AuthController;
