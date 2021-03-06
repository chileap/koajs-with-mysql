require('dotenv').config();
var _ = require('lodash');
var development = require('./development');

var env = process.env.NODE_ENV;
var configs = {
  development: development,
};
var defaultConfig = {
  env: env
};

var config = _.merge(defaultConfig, configs[env]);

module.exports = config;
