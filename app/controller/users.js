'use strict';

const Controller = require('egg').Controller;

// 定义创建接口的请求参数规则
const createRule = {
  accesstoken: 'string',
  username: 'string',
  password: 'string',
  nickname: { type: 'string', required: false },
  sex: { type: 'string', required: false },
  mobile: { type: 'string', required: false },
};

class UserController extends Controller {
  async info() {
    const user = await this.ctx.service.user.read(this.ctx.params.id);
    await this.ctx.render('user/profile.tpl', { user });
  }
  async index() {
    const ctx = this.ctx;
    const users = await this.ctx.service.user.select();
    ctx.body = {
      data: users,
    };
    ctx.status = 201;
  }
  async show() {
    const ctx = this.ctx;
    const user = await ctx.service.user.read(ctx.params.id);
    ctx.body = {
      data: user,
    };
    ctx.status = 201;
  }
  async create() {
    const ctx = this.ctx;
    // 校验 ctx.request.body 是否符合要求的格式，如果参数校验未通过，将会抛出一个 status = 422 的异常
    ctx.validate(createRule);
    // 调用 service 创建一个user
    const id = await ctx.service.user.create(ctx.request.body);
    // 设置响应体和状态码
    ctx.body = {
      data: id,
    };
    ctx.status = 201;
  }
}

module.exports = UserController;
