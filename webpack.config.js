const path = require('path');
var nodeExternals = require('webpack-node-externals');
module.exports = {
    entry: './src/client/js/app.js',
    target: 'node', // in order to ignore built-in modules like path, fs, etc. 
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder 
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.css$/i,
            use: ["style-loader", "css-loader?url=false"],
        }]
    }
};