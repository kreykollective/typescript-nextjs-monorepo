const path = require("path");
const withPlugins = require("next-compose-plugins");

// https://www.npmjs.com/package/next-transpile-modules
const withTM = require("next-transpile-modules")([
  path.resolve(__dirname, "../../packages"),
]);

const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin", {});

module.exports = withPlugins([withTM], {
  // ...
});
