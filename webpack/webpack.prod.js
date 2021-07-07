/* eslint-disable no-undef */
const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const common = require('./webpack.config');
const plugins = require('./plugins');

module.exports = (env) => {
    const { analyze } = env;
    const prodPlugins = [analyze && new BundleAnalyzerPlugin()].filter(Boolean);

    return merge(common, {
        mode: 'production',
        devtool: 'source-map',
        plugins: [...plugins, ...prodPlugins],
    });
};
