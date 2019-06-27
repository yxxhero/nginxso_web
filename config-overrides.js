const { addDecoratorsLegacy, addWebpackAlias, override, fixBabelImports, addLessLoader } = require('customize-cra');
const path = require('path');
function resolve(dir) {
  return path.join(__dirname, '.', dir)
}


module.exports = override(
  // 按需加载 antd
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addDecoratorsLegacy(),
  addWebpackAlias({
    ["@"]: resolve('src') 
  }),

  // 添加加载 less 的 javascriptEnabled 和 antd 的主题配置。
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' },
  }),
);
