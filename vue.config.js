const path = require("path");
module.exports = {
  publicPath: "./",
  productionSourceMap: false,
  filenameHashing: true,
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "./src/assets/style/global.less")]
    }
  },
  css: {
    extract: false
  }
};
