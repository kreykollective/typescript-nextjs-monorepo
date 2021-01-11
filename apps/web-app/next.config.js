const path = require("path");
const withPlugins = require("next-compose-plugins");

// https://www.npmjs.com/package/next-transpile-modules
const withTM = require("next-transpile-modules")(["@scope/ui"]);

module.exports = withPlugins([withTM], {
  // ...
});
