'use strict';

const Controller = require('egg').Controller;

// 定义创建接口的请求参数规则
const createRule = {
  username: 'string',
  password: 'string',
  nickname: { type: 'string', required: false },
  sex: { type: 'string', required: false },
  mobile: { type: 'string', required: false },
};

class UserController extends Controller {
  async profile() {
    const user = await this.ctx.service.user.read(this.ctx.params.id);
    await this.ctx.render('user/profile.tpl', { user });
  }
  async index() {
    const ctx = this.ctx;
    const users = await this.ctx.service.user.select(ctx.query);
    ctx.helper.success({ ctx, res: users, msg: '查询成功' });
  }
  async show() {
    const ctx = this.ctx;
    const user = await ctx.service.user.read(ctx.params.id);
    ctx.helper.success({ ctx, res: user, msg: '查询成功' });
  }
  async create() {
    const ctx = this.ctx;
    // 校验 ctx.request.body 是否符合要求的格式，如果参数校验未通过，将会抛出一个 status = 422 的异常
    ctx.validate(createRule);
    // 调用 service 创建一个user
    const res = await ctx.service.user.create(ctx.request.body);
    // 设置响应体和状态码
    if (res.affectedRows) {
      ctx.helper.success({ ctx, res: res.insertId, msg: '查询成功' });
    } else {
      ctx.helper.fail({ ctx, msg: '用户创建失败' });
    }
  }
  async update() {
    const ctx = this.ctx;
    const res = await ctx.service.user.update(ctx.params.id, ctx.request.body);
    if (res.affectedRows) {
      ctx.helper.success({ ctx, res: res.affectedRows, msg: '用户更新成功' });
    } else {
      ctx.helper.fail({ ctx, msg: '用户更新失败' });
    }
  }
  async destroy() {
    const ctx = this.ctx;
    const res = await ctx.service.user.delete(ctx.params.id);
    if (res.affectedRows) {
      ctx.helper.success({ ctx, res: res.affectedRows, msg: '用户删除成功' });
    } else {
      ctx.helper.fail({ ctx, msg: '用户删除失败' });
    }
  }
}

module.exports = UserController;
