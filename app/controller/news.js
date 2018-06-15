'use strict';

const Controller = require('egg').Controller;

// 定义创建接口的请求参数规则
const createRule = {
  title: 'string',
  content: 'string',
};

class NewsController extends Controller {
  async index() {
    const ctx = this.ctx;
    const news = await this.ctx.service.news.select(ctx.query);
    ctx.helper.success({ ctx, res: news, msg: '查询成功' });
  }
  async show() {
    const ctx = this.ctx;
    const news = await ctx.service.news.read(ctx.params.id);
    ctx.helper.success({ ctx, res: news, msg: '查询成功' });
  }
  async create() {
    const ctx = this.ctx;
    // 校验 ctx.request.body 是否符合要求的格式，如果参数校验未通过，将会抛出一个 status = 422 的异常
    ctx.validate(createRule);
    // 调用 service 创建一个user
    const res = await ctx.service.news.create(ctx.request.body);
    // 设置响应体和状态码
    if (res) {
      ctx.helper.success({ ctx, res, msg: '资讯创建成功' });
    } else {
      ctx.helper.fail({ ctx, msg: '资讯创建失败' });
    }
  }
  async update() {
    const ctx = this.ctx;
    const res = await ctx.service.news.update(ctx.params.id, ctx.request.body);
    if (res) {
      ctx.helper.success({ ctx, res, msg: '资讯更新成功' });
    } else {
      ctx.helper.fail({ ctx, msg: '资讯更新失败' });
    }
  }
  async destroy() {
    const ctx = this.ctx;
    const res = await ctx.service.news.delete(ctx.params.id);
    if (res) {
      ctx.helper.success({ ctx, res, msg: '资讯删除成功' });
    } else {
      ctx.helper.fail({ ctx, msg: '资讯删除失败' });
    }
  }
}

module.exports = NewsController;
