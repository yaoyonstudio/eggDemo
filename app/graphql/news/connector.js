'use strict';

class NewsConnector {
  constructor(ctx) {
    this.ctx = ctx;
  }

  async fetchByUserId(userID) {
    const news = await this.ctx.app.model.News.findAll({
      where: {
        user_id: userID,
      },
    }).then(ts => ts.map(u => u.toJSON()));
    return news;
  }

  async create(userID, title, content) {
    const news = await this.ctx.app.model.News.create({ user_id: userID, content, title });
    return news.toJSON();
  }

  async update(id, title, content) {
    await this.ctx.app.model.News.update({ title, content }, { where: { id } });
    const news = await this.proxy.findOne({ where: { id } });
    return news.toJSON();
  }

  async delete(id) {
    const news = await this.ctx.app.model.News.findOne({ where: { id } });
    const res = news.toJSON();
    await news.destroy();
    return res;
  }
}

module.exports = NewsConnector;

