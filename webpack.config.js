const path = require('path');
const outputRoot = path.resolve(__dirname, 'build/');
const bundleNameWeb = 'triggered-promise.js';

module.exports = {
    target: 'web',
    entry: 'triggered-promise.ts',
    output: {
        path: outputRoot,
        filename: bundleNameWeb
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'node_modules')
        ],
        extensions: [".js", ".ts"]
    }
};