const webpack = require('webpack');
const custom = require('../webpack/webpack.common')

module.exports = {
  stories: [
    '../src/**/*.stories.tsx'
  ],

  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions',
    '@storybook/addon-storysource',
    '@storybook/addon-links',
    '@storybook/addon-docs'
  ],

  webpackFinal: async config => {
    config.plugins.push(new webpack.HotModuleReplacementPlugin());

    config.module.rules.push({
      test: /\.stories\.tsx$/,
      loaders: [
        {
          loader: require.resolve('@storybook/source-loader'),
          options: { parser: 'typescript' },
        },
      ],
      enforce: 'pre',
    });

    return {
      ...config,
      resolve: {
        extensions: custom.resolve.extensions
      },
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          ...custom.module.rules
        ],
      },
    };
  },
}