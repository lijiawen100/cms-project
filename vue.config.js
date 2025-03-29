const path = require('path')
module.exports = {
  // 部署应用时的基本 URL（影响所有资源路径）
  publicPath: '/cms-manage/',
  // 构建输出的目录（默认是 dist）
  outputDir: 'dist',
  devServer: {
    host: '127.0.0.1',// 开发服务器主机（默认 localhost）
    port: 3011, // 开发服务器端口
    open: true, // 启动后自动打开浏览器
    openPage: 'cms-manage/' // 自动打开的页面路径
    // 启动开发服务器后，自动打开浏览器并访问 http://127.0.0.1:3011/cms-manage/。
  },
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
    // 设置别名
    config.resolve.alias.set('@', path.resolve(__dirname, './src'))
  },
}
// 通过 style-resources-loader 插件，将 src/styles/mixin.less 中的 Less 变量、混合（mixins）等代码自动注入到所有 Less 文件中，无需手动在每个文件中 @import。
function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        // 全局 Less 文件路径
        path.resolve(__dirname, './src/styles/mixin.less'),
      ],
    })
}