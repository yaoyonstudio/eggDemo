'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async list(page = 1) {
    const { serverUrl, pageSize } = this.config.news;
    const { data } = await this.ctx.curl(`${serverUrl}/posts?per_page=${pageSize}&page=${page}`, {
      dataType: 'json',
    });
    return data;
  }
  async detail(id) {
    const { serverUrl } = this.config.news;
    const { data } = await this.ctx.curl(`${serverUrl}/posts/${id}`, {
      dataType: 'json',
    });
    return data;
  }
}

module.exports = NewsService;
