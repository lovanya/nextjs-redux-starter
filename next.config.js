const path = require('path');
const { ASSET_HOST } = process.env;

// for those who using CDN
const assetPrefix = ASSET_HOST || '';

module.exports = {
  assetPrefix,
  target: 'serverless',
  webpack: (config, { dev }) => {
    config.output.publicPath = `${assetPrefix}${config.output.publicPath}`;

    return config;
  },
  cssModules: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "src/styles/mixins.scss";`
  }
};
