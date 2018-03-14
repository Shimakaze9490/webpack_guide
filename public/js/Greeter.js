// let config = require("./config.json"); //webpack2,3自带处理json的模块

// //使用CommonJS规范,导出模块
// module.exports = function() {
//     var greet = document.createElement("div");
//     greet.textContent = config.greetText;
//     return greet;
// };

// import { Component } from "react";
// import config from "./config.json";

// class Greeter extends Component {
//     render() {
//         return (
//             <div>
//                 {config.greetText}
//             </div>
//         )
//     }
// }

// export default Greeter;


//Greeter,js
import React, {Component} from 'react'
import config from './config.json';

class Greeter extends Component{
  render() {
    return (
      <div>
        {config.greetText}
      </div>
    );
  }
}

export default Greeter