/* eslint-disable array-callback-return */
'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async select(query) {
    /*
      完整可用的查询URL:
      http://localhost:7001/api/v1/news?page=1&pagesize=6&field=id,title,content&order=title-asc,id-desc&filter=user_id:1,title:post3

      接口收到的参数格式：
      {
        page: '1',
        pagesize: '4',
        field: 'id,username,sex',
        order: 'username-desc,sex-asc',
        filter: 'status:1,role:2-3'
      }

      使用egg-sequelize查询参数格式：
      {
        where: { status: 'draft', author: ['author1', 'author2'] },      // WHERE 条件
        attributes: ['author', 'title'],                                 // 要查询的表字段
        order: [['created_at','desc'], ['id','desc']],                   // 排序方式
        limit: 10,                                                       // 返回数据量
        offset: 0,                                                       // 数据偏移量
      }
    */
    const params = {};
    const { page, pagesize, field, order, filter } = query;
    params.limit = parseInt(pagesize, 10) || 10;
    params.offset = parseInt(page, 10) ? (parseInt(page, 10) - 1) * parseInt(pagesize, 10) : 0;
    if (field) {
      params.attributes = field.split(',');
    }
    if (order) {
      const _orders = query.order.split(',');
      if (_orders.length) {
        const _item = _orders.map(item => {
          const _od = item.split('-');
          if (_od.length === 2) {
            return _od;
          }
        });
        params.order = _item;
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
      params.where = _allFilters;
    }
    // 可以加入关系的用户信息
    params.include = {
      model: this.ctx.model.User,
      attributes: [ 'id', 'username', 'nickname' ],
      as: 'user',
    };
    console.log('params:', params);
    const news = await this.ctx.model.News.findAndCountAll(params);
    return news;
  }
  async create(news) {
    // 使用 this.ctx.state.user 获取请求用户的信息， 这些信息是由token解析而来，格式如下：
    // { data: { id: 1 }, exp: 1529582940, iat: 1528978140 }
    // 完善资讯关联的外键值 user_id
    news.user_id = this.ctx.state.user.data.id;
    const result = await this.ctx.model.News.create(news);
    return result;
  }
  async read(nid) {
    const params = {
      attributes: [ 'id', 'title', 'content', 'keyword', 'excerpt', 'slug', 'source', 'source_link', 'user_id', 'created_at' ],
      include: {
        model: this.ctx.model.User,
        attributes: [ 'id', 'username', 'nickname' ],
        as: 'user',
      },
    };
    const news = await this.ctx.model.News.findById(nid, params);
    return news;
  }
  async update(nid, newsData) {
    const news = await this.ctx.service.news.read(nid);
    if (!news) {
      this.ctx.throw(404, '资讯不存在');
    }
    const options = {
      where: {
        id: nid,
      },
    };
    const result = await this.ctx.model.News.update(newsData, options);
    return result[0];
  }
  async delete(nid) {
    const news = await this.ctx.service.news.read(nid);
    if (!news) {
      this.ctx.throw(404, '资讯不存在');
    }
    const options = {
      where: {
        id: nid,
      },
    };
    const result = await this.ctx.model.News.destroy(options);
    return result;
  }
}

module.exports = NewsService;
