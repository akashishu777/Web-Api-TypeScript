var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/index.ts',
    target: "node",
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js'] //resolve all the modules other than index.ts
    },
    node: {
        fs: "empty",
        child_process : "empty",
        net : "empty",
    },
    target: 'node',
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                use: 'ts-loader',
                test: /\.ts?$/,
                exclude: /node_modules/
            }
        ]
    },
}