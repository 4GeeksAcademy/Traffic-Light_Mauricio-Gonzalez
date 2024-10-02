//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import TrafficLight from "./component/TrafficLight";
import "../styles/index.css";

ReactDOM.render(<TrafficLight />, document.querySelector("#app"));

// include your styles into the webpack bundle


//import your own components
import Home from "./component/home.jsx";

//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<Home/>);



<button onClick={() => {
    const nextColor = color === "red" ? "green" : color === "green" ? "yellow" : "red";
    setColor(nextColor);
}}>Next Color</button>

