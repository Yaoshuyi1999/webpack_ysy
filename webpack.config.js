const path = require("path")

module.exports = {
    entry: "./src/index.js", // 入口
    output: { 
        path: path.resolve(__dirname, "dist"), // 出口路径 绝对路径
        filename: "bundle.js" // 出口文件名
    },
    mode: 'development',
    devServer: {
        port: 3000, // 端口号
        open: true
    }
}