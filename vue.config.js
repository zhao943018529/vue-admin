const path = require('path');

module.exports = {
  outputDir: 'dist',
  publicPath: '/',

  chainWebpack(config) {
    // 内联svg资源
    config.module
      .rule('svg')
      .test(/\.svg$/)
      .include.add(path.resolve(__dirname, 'src'))
      .end()
      .use('svg-inline-loader')
      .loader('svg-inline-loader')
      .end();
  },
  devServer: {
    port: 7070,
  },
};
