const path = require('path');

module.exports = {
  outputDir: 'dist',
  publicPath: '/',
  lintOnSave: process.env.NODE_ENV === 'development',
  chainWebpack(config) {
    // 内联svg资源
    // config.module
    //   .rule('svg')
    //   .test(/\.svg$/)
    //   .include.add(path.resolve(__dirname, 'src'))
    //   .end()
    //   .use('svg-inline-loader')
    //   .loader('svg-inline-loader')
    //   .end();
    // config.module
    //   .rule('less')
    //   .test(/\.less$/)
    //   .use('less-loader')
    //   .loader('less-loader')
    //   .end();
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  devServer: {
    port: 7070,
    proxy: {
      '/api': {
        target: 'http://192.168.0.111:7071/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
};
