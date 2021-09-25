const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-styled-component-theme/dist/preset',
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.plugins = [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      }),
    ];

    // SVGR fix
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test(/.svg/)
    );
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/;
    }

    config.module.rules.push({
      test: /\.svg$/,
      enforce: 'pre',
      loader: require.resolve('@svgr/webpack'),
    });

    return config;
  },
};
