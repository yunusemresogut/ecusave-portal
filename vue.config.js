const { defineConfig } = require('@vue/cli-service')
const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/portal/' : '/', // publicPath: process.env.NODE_ENV === 'production' ? '/portal/' : '/',
  // devServer: {
  //   server: 'https',
  // },
  outputDir: path.resolve(__dirname, "../portal"),
})
