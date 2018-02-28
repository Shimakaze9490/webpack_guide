const greeter = require("./Greeter"); //此处main.js 依赖 Greeter.js
document.querySelector("#root").appendChild(greeter());
//querySelector选中元素,在子元素尾部添加节点~.(greeter()的返回值)