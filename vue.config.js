const path = require('path');

module.exports = {
  outputDir: 'dist',
  publicPath: '/',
  lintOnSave: process.env.NODE_ENV === 'development',
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
    proxy: {
      '/api': {
        target: 'http://192.168.0.109:7071/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
};
