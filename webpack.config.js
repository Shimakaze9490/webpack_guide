module.exports = {
    devtool: "eval-source-map",
    entry: __dirname + "/app/main.js", //entry 入口文件
    output: {
        path: __dirname + "/public", //输出路径
        filename: "bundle.js"  //输出文件名
    }
}