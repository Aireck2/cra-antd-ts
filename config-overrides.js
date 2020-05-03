const {
  override,
  fixBabelImports,
  disableEsLint,
  addLessLoader,
  useBabelRc,
} = require("customize-cra");

const path = require("path");
const lessToJS = require("less-vars-to-js");
const fs = require("fs");

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(
    path.resolve(__dirname, "src/assets/antd-custom.less"),
    "utf8"
  )
);

module.exports = override(
  disableEsLint(),
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  fixBabelImports("formik-antd", {
    libraryName: "formik-antd",
    libraryDirectory: "es",
    style: true,
  }),
  useBabelRc(),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: themeVariables,
  })
);

const config = {
  webpack(config) {
    config.resolve.modules.push(__dirname);
    return config;
  },
};
