const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[contenthash].js',
        path: path.resolve(__dirname, '../build'),
        publicPath: '/',
    },
    resolve: {
        modules: [path.resolve(__dirname, '../src'), 'node_modules'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(gif|woff|woff2|eot|ttf|otf)(\?[a-z0-9=.]+)?$/,
                use: {
                    loader: 'url-loader',
                    options: { limit: 50000 },
                },
            },
            {
                test: /\.png$/,
                use: { loader: 'file-loader' },
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack', 'url-loader'],
            },
        ],
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: { chunks: 'all' },
    },
};
