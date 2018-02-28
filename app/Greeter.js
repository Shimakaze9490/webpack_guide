//一句CommonJS规范,导出模块
module.exports = function() {
    var greet = document.createElement("div");
    greet.textContent = "Hi there and greeting !";
    return greet;
};