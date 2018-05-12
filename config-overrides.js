/* config-overrides.js */
const { injectBabelPlugin } = require("react-app-rewired");

module.exports = function override(config, env) {
  // add a plugin
  const myPlugins = ["transform-decorators-legacy"];

  return injectBabelPlugin(myPlugins, config);
};
