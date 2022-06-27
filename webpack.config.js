const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

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
        }),
        new VueLoaderPlugin()
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
        //   {//版本4的时候图片
        //     test: /\.(png|jpg|gif)$/i,
        //     use: [{
        //           loader: 'url-loader',
        //           options: {
        //             limit:8*1024,//limit限制
        //           },
        //         }],
        //    }
        {
            test: /\.(png|jpg|gif)$/i,
            // type: 'asset/resource',
            // type:'asset/inline'
            type:'asset',
            parser: { // 解析器 规则
              dataUrlCondition: { // dataUrl的情况
                maxSize: 8 * 1024,
                // maxSize 限制最大值
              },
            },
            generator: {
              filename: '[hash:6][ext]'
            }
          },
        //   {//版本4字体
        //     test: /\.(eot|svg|ttf|woff|woff2)$/,
        //     use: [
        //         {
        //             loader: 'url-loader',
        //             options: {
        //                 limit: 2 * 1024,
        //                 // 配置输出的文件名
        //                 name: '[name].[ext]',
        //                 // 配置输出的文件目录
        //                 outputPath: "fonts/"
        //             }
        //         }
        //     ]
        //   }
        {//版本5
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            type: 'asset',
            generator: {
                filename: 'font-[name].[hash:6][ext]'
            },
            parser:{
              dataUrlCondition:{
                maxSize:1*1024,
              },
            }
        },
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
          },
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          }
        ]
    }
}