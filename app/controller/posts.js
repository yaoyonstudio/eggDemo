'use strict';

const Controller = require('egg').Controller;

class PostsController extends Controller {
  async list() {
    const { pageSize } = this.config.posts;
    const ctx = this.ctx;
    const page = ctx.query.page || 1;
    const postList = await ctx.service.posts.list(page);
    const hasMore = postList.length >= pageSize;
    await ctx.render('posts/list.tpl', { page, hasMore, list: postList });
  }
  async detail() {
    const data = await this.ctx.service.posts.detail(this.ctx.params.id);
    await this.ctx.render('posts/detail.tpl', { post: data });
  }
}

module.exports = PostsController;
