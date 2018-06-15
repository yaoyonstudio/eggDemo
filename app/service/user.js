/* eslint-disable array-callback-return */
'use strict';

const Service = require('egg').Service;


class UserService extends Service {
  async select(query) {
    /*
      完整可用的查询URL:
      http://localhost:7001/api/v1/users?page=1&pagesize=6&field=id,username,status,role&order=id-asc,username-desc&filter=status:1,role:1-3

      接口收到的参数格式：
      {
        page: '1',
        pagesize: '4',
        field: 'id,username,sex',
        order: 'username-desc,sex-asc',
        filter: 'status:1,role:2-3'
      }

      使用egg-mysql查询参数格式：
      {
        where: { status: 'draft', author: ['author1', 'author2'] },      // WHERE 条件
        columns: ['author', 'title'],                                    // 要查询的表字段
        orders: [['created_at','desc'], ['id','desc']],                  // 排序方式
        limit: 10,                                                       // 返回数据量
        offset: 0,                                                       // 数据偏移量
      }
    */
    const params = {};
    const { page, pagesize, field, order, filter } = query;
    params.limit = parseInt(pagesize, 10) || 10;
    params.offset = parseInt(page, 10) ? (parseInt(page, 10) - 1) * parseInt(pagesize, 10) : 0;
    if (field) {
      params.columns = field.split(',');
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
        params.orders = _item;
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
    // console.log('params:', params);
    const users = await this.app.mysql.select('users', params);
    const count = await this.app.mysql.count('users', params.where);
    return { count, data: users };
  }
  async create(user) {
    user.password = await this.ctx.genHash(user.password);
    const result = await this.app.mysql.insert('users', user);
    return result;
  }
  async read(uid) {
    const user = await this.app.mysql.get('users', { id: uid });
    return user;
  }
  async update(uid, userData) {
    // 如果主键是id，会自动根据主键id查找并更新
    const user = await this.ctx.service.user.read(uid);
    if (!user) {
      this.ctx.throw(404, '用户不存在');
    }
    userData.id = uid;
    if (userData.password) {
      userData.password = await this.ctx.genHash(userData.password);
    }
    const result = await this.app.mysql.update('users', userData);
    // 如果主键不是id，则需要配置where
    // const result = await this.app.mysql.update('users', user, { where: { user_id: 1 } })
    return result;
  }
  async delete(uid) {
    const result = await this.app.mysql.delete('users', { id: uid });
    return result;
  }
}

module.exports = UserService;
