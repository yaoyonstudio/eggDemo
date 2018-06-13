'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async info() {
    const user = await this.ctx.service.user.read(this.ctx.params.id);
    await this.ctx.render('user/profile.tpl', { user });
  }
}

module.exports = UserController;
