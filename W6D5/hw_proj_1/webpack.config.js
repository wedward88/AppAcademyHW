var path = require('path')


module.exports = {
    entry: "./app.jsx",
    output: {
        filename: "./bundle.js"
    },

    module: {
        rules: [
            {
                test: [/\.jsx?$/], // Specifies file types to transpile
                exclude: /(node_modules)/, // Leaves dependencies alone
                loader: 'babel-loader', // Sets Babel as the transpiler
                query: {
                    presets: ['@babel/env', '@babel/react']
                }
            }
        ]
    },

    devtool: 'source-map',

    resolve: {
        extensions: ['.js', '.jsx', '*']
    },
    
}