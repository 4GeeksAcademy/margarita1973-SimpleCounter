//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

import Digits from "./component/digits.js";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import SecondCounter from "./component/secondcounter.js";


let seconds =0;
setInterval (() =>{

    let second = Math.floor(seconds) % 10;
    let tens = Math.floor(seconds / 10) % 10;
    let hundreds = Math.floor(seconds / 100) % 10;
    let thousands = Math.floor(seconds / 1000) % 10;
    let tenthousands = Math.floor(seconds / 10000) % 10;
    let hundredthousands = Math.floor(seconds / 100000) % 10;

    
    ReactDOM.createRoot(document.getElementById('app')).render(<SecondCounter digone={hundredthousands} digtwo={tenthousands} 
        digthree ={thousands} digfour ={hundreds} digfive={tens} digsix={second} />);
    seconds ++;
},1000)


