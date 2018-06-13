'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    const { pageSize } = this.config.news;
    const ctx = this.ctx;
    const page = ctx.query.page || 1;
    const newList = await ctx.service.news.list(page);
    const hasMore = newList.length >= pageSize;
    await ctx.render('news/list.tpl', { page, hasMore, list: newList });
  }
  async detail() {
    const data = await this.ctx.service.news.detail(this.ctx.params.id);
    await this.ctx.render('news/detail.tpl', { news: data });
  }
}

module.exports = NewsController;
