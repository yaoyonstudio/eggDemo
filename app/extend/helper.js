'use strict';

const moment = require('moment');

exports.limitString = string => string.substring(0, 20);

exports.dateFormat = date => moment(date).format('L');

exports.success = ({ ctx, res = null, msg = '请求成功' }) => {
  ctx.body = {
    code: 1,
    data: res,
    msg,
  };
  ctx.status = 200;
};

exports.fail = ({ ctx, msg = '请求失败' }) => {
  ctx.body = {
    code: 1,
    data: null,
    msg,
  };
  ctx.status = 200;
};
