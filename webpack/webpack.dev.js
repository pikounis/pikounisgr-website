/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
const { merge } = require('webpack-merge');
const common = require('./webpack.config');
const plugins = require('./plugins');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    output: {
        filename: '[name].js',
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [...plugins],
});
