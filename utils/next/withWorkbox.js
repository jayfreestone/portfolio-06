const R = require('ramda');
const workboxPlugin = require('workbox-webpack-plugin');

function withWorkbox(nextConfig) {
  return Object.assign({}, nextConfig, {
    webpack(config, options){
      config.plugins.push(
        new workboxPlugin.GenerateSW({
          swDest: 'sw.js',
          clientsClaim: true,
          skipWaiting: true,
        }),
      );

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }
    },
  });
}

module.exports = withWorkbox;

