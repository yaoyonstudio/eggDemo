'use strict';

const Service = require('egg').Service;

class AuthService extends Service {
  async createToken(id) {
    const { ctx } = this;
    return ctx.app.jwt.sign({
      data: {
        id,
      },
      exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7),
    }, ctx.app.config.jwt.secret);
  }
  async login(payload) {
    const { ctx, service } = this;
    const user = await this.app.mysql.get('users', { username: payload.username });
    if (!user) {
      ctx.throw(404, '找不到用户');
    }
    const pwdCheck = await ctx.compare(payload.password, user.password);
    if (!pwdCheck) {
      ctx.throw(404, '用户密码错误');
    }
    // 生成Token
    return { token: await service.auth.createToken(user.id) };
  }
}

module.exports = AuthService;
