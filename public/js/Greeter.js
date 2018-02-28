//使用CommonJS规范,导出模块
module.exports = function() {
    var greet = document.createElement("div");
    greet.textContent = "Here is Greeter.js!";
    return greet;
};