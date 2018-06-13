'use strict';

const moment = require('moment');

exports.limitString = string => string.substring(0, 20);

exports.dateFormat = date => moment(date).format('L');
