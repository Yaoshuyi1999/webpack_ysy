const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/index.js", // 入口
    output: { 
        path: path.resolve(__dirname, "dist"), // 出口路径 绝对路径
        filename: "bundle.js" // 出口文件名
    },
    mode: 'development',
    devServer: {
        port: 3001, // 端口号
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', 
            filename: 'index.html'
        })
    ],
    module: {
        rules: [
          {
            test: /\.css$/, 
            use: [ "style-loader", "css-loader"]
          },
          {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader'],
          },
        ]
    }
}