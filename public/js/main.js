// // main.js 依赖 Greeter.js
// const greeter = require("./Greeter"); 
// document.querySelector("#box").appendChild(greeter());

// import React from "react";
// import {ReactDom} from "react-dom";
// import Greeter from "./Greeter";
// ReactDom.render(<Greeter />,document.getElementById("root"));

// main.js
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

render(<Greeter />, document.getElementById('root'));