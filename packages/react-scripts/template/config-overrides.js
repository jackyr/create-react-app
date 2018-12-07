/*
 * @param config <object> - Webpack config
 * @param env <'development'|'production'> - Webpack runtime env
 * @return config
 */

const webpack = require('webpack');

module.exports = function override(config, env) {
  /* Example: Add a webpack plugin */
  // config.plugins.push(new webpack.DefinePlugin({
  //   'process.env.webpackConfig': JSON.stringify(config),
  //   'process.env.webpackEnv': JSON.stringify(env),
  // }));

  return config;
};