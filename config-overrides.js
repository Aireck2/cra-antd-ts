const {
  override,
  fixBabelImports,
  addLessLoader
} = require('customize-cra');

const path = require('path');
const lessToJS = require('less-vars-to-js');
const fs = require('fs');

// Where your antd-custom.less file lives
const themeVariables = lessToJS(fs.readFileSync(path.resolve(__dirname, 'src/assets/antd-custom.less'), 'utf8'));
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: themeVariables,
  })
);

// eslint-disable-next-line no-unused-vars
const config = {
  webpack(config) {
    config.resolve.modules.push(__dirname);
    return config;
  },
};