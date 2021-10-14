const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const Dotenv = require('dotenv-webpack');
// App directory
const appDirectory = fs.realpathSync(process.cwd());
// Gets absolute path of file within app directory
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
    mode: 'development',
    entry: resolveAppPath('src'),
    output: {
        path: resolveAppPath('build'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                include: resolveAppPath('src'),
                use: ["babel-loader"],
            },
            {
                test: /\.(s[ac]ss|css)$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true, importLoaders: 2 }
                    },
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
              test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]',
              },
            }
        ]
    },
    resolve: {
        modules: [resolveAppPath('src'), 'node_modules'],
        alias: {
            '@assets': resolveAppPath('src/assets'),
            '@components': resolveAppPath('src/components'),
            '@pages': resolveAppPath('src/pages'),
        },
        extensions: ['.js', '.json'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: resolveAppPath('public/index.html'),
        }),
        new StylelintPlugin(),
        new Dotenv({
            path: resolveAppPath('.env')
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
            // watch: true
        },
        compress: true,
        // hot: true, // Enable hot reloading
        open: true, // Open your default browser
        port: 9000
    }
}