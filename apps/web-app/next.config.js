const withTranspileModules = require("next-transpile-modules");

const getTranspileWorkspaces = require("./scripts/getTranspileWorkspaces"); // @x-shipit-disable

const transpileWorkspaces = getTranspileWorkspaces(); // @x-shipit-disable
// @x-shipit-enable: const transpileWorkspaces = [];

module.exports = withTranspileModules(transpileWorkspaces, { debug: true })({
  images: {
    domains: ["images.kiwi.com"],
  },

  webpack: (config) => {
    config.module.rules.push({
      type: "javascript/auto",
      test: /\.mjs$/,
    });

    return config;
  },
});
