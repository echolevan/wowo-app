const path = require('path')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  filenameHashing: true,

  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views',
        'libs': '@/libs',
        'api': '@/api',
      }
    },
    externals: {
      'vue': 'Vue',
      'vuex': 'Vuex',
      'vue-router': 'VueRouter',
      'iView': 'iView',
      'NProgress': 'nprogress',
      // 'VueLazyload': 'vue-lazyload',
      // 'socket.io': 'socket.io',
      // 'echarts': 'echarts',
      // 'moment': 'moment',
      // 'draggable': 'vuedraggable'
    },
    output: {
      filename: '[name]-[hash:6].js'
    }
  },

  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
    // config.plugin('webpack-bundle-analyzer')
    //   .use(BundleAnalyzerPlugin)
    //   .init(Plugin => new Plugin());
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: []
    }
  }
}

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/stylus/mixin.styl'),
        path.resolve(__dirname, './src/stylus/variable.styl'),
      ]
    })
}
