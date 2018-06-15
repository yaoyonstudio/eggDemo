/* eslint-disable array-callback-return */
'use strict';

class NewsConnector {
  constructor(ctx) {
    this.ctx = ctx;
  }
  async select({ page, pagesize, order, filter }) {
    const options = {};
    options.offset = (page - 1) * pagesize;
    options.limit = pagesize || 5;
    if (order) {
      const _orders = order.split(',');
      if (_orders.length) {
        const _item = _orders.map(item => {
          const _od = item.split('-');
          if (_od.length === 2) {
            return _od;
          }
        });
        options.order = _item;
      }
    }
    if (filter) {
      const _filter = filter.split(',');
      const _allFilters = {};
      if (_filter.length) {
        _filter.map(item => {
          const _subItem = item.split(':');
          if (_subItem.length === 2) {
            const _subItemVal = _subItem[1].split('-');
            if (_subItemVal.length === 2) {
              _allFilters[_subItem[0]] = _subItemVal;
            } else {
              _allFilters[_subItem[0]] = _subItem[1];
            }
          }
        });
      }
      options.where = _allFilters;
    }
    const res = {
      page,
      pagesize,
    };
    await this.ctx.app.model.News.findAndCountAll(options).then(result => {
      res.count = result.count;
      res.data = result.rows.map(item => item.toJSON());
    });
    return res;
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

