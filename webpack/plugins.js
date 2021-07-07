/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

const plugins = [
    new MomentLocalesPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
        template: './public/index.html',
        filename: 'index.html',
        minify: {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true,
        },
    }),
];

module.exports = plugins;
