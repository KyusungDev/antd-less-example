const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const antdTheme = require('./antd-theme-override');

console.log(antdTheme);

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', style: true }],
    config
  ); // change importing css to less
  config = rewireLess.withLoaderOptions({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#f00',
      '@body-background': 'black'
    }
  })(config, env);
  return config;
};
