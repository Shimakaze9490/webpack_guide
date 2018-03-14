// //webpack配置文件,涉及:生成sourceMap,入口,输出.
// const webpack = require("./node_modules/webpack");
// const path = require("path");
// module.exports = {
//     devtool: "source-map", //最原始的source-map生成
//     entry: {
//         main: __dirname + "/public/js/main.js", //entry 入口文件
//     },
//     output: {
//         path: __dirname + "/dist", //输出路径
//         filename: "[name].bundle.js"  //输出文件名,使用占位符
//     },
//     // 添加loading
//     module: {
//         rules: [
//             {
//                 test: /(\.jsx|\.js)$/,
//                 use: {
//                     loader: "babel-loader",
//                     options: {
//                         presets: [
//                             "env", "react"
//                         ]
//                     }
//                 },
//                 exclude: /node_modules/
//             }
//         ]
//     },
//     plugins: [
//         new webpack.LoaderOptionsPlugin({
//             options: {
//                 devServer: {
//                     contentBase: [path.join(__dirname), path.join(__dirname, "public")],
//                     colors: true,
//                     historyApiFallback: false,
//                     inline: true,
//                     hot: true,
//                     host: "0.0.0.0",
//                     post: 8081
//                 }
//             }
//         })
//     ],
//     mode: "development",
//     // devServer: {
//     //     contentBase: "./public",  //本地服务器所加载的页面所在的目录
//     //     historyApiFallBack: true,  //是否跳转
//     //     inline: true  //实时刷新
//     // }
// }

// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const webpack = require("webpack");
// const path = require("path");

// const config = {
//     devtool: "source-map", //最原始的source-map生成
//     entry: {
//         main: __dirname + "/public/js/main.js",  //entry入口
//     },
//     output: {
//         path: path.resolve(__dirname, "dist"),  //输出路径
//         filename: "[name].bundle.js"  //输出文件名,使用占位符
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.txt$/,
//                 use: "raw-loader"
//             }
//         ]
//     },
//     plugins: [
//         new webpack.optimize.UglifyJsPlugin(),
//         new HtmlWebpackPlugin({templatte: "./public/html/index.html"})
//     ]
// };



module.exports = {
    entry: __dirname + "/public/js/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                },
                exclude: /node_modules/
            }
        ]
    }
};