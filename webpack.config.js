const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/scripts/index.tsx",
    devtool: "inline-source-map",
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: {
                loader: "ts-loader"
            },
            exclude: /node_modules/
        },
        {
            test: /\.less$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "less-loader"
            }]
        }]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    output: {
        filename: "./js/bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};