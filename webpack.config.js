//webpack配置文件,涉及:生成sourceMap,入口,输出.
module.exports = {
    devtool: "source-map", //最原始的source-map生成
    entry: __dirname + "/public/js/main.js", //entry 入口文件
    output: {
        path: __dirname + "/dist", //输出路径
        filename: "[name].bundle.js"  //输出文件名,使用占位符
    }
}