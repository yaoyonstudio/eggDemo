'use strict';

const Service = require('egg').Service;


class UserService extends Service {
  async select() {
    const users = await this.app.mysql.select('users');
    return users;
  }
  async search(params) {
    // params格式：
    // {
    //   where: { status: 'draft', author: ['author1', 'author2'] },      // WHERE 条件
    //   columns: ['author', 'title'],                                    // 要查询的表字段
    //   orders: [['created_at','desc'], ['id','desc']],                  // 排序方式
    //   limit: 10,                                                       // 返回数据量
    //   offset: 0,                                                       // 数据偏移量
    // }
    const users = await this.app.mysql.select('users', params);
    return users;
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
