import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

// Semaforo component
const TrafficLight = () => {
    const [color, setColor] = useState(null);

    return (
        <div className="traffic-light">
            <div 
                onClick={() => setColor("red")}
                className={`light red ${color === "red" ? "glow" : ""}`}
            ></div>
            <div 
                onClick={() => setColor("yellow")}
                className={`light yellow ${color === "yellow" ? "glow" : ""}`}
            ></div>
            <div 
                onClick={() => setColor("green")}
                className={`light green ${color === "green" ? "glow" : ""}`}
            ></div>
        </div>
    );
};

//create your first component
const Home = () => {
    return (
        <div className="text-center">
            <h1 className="text-center mt-5">Hello Rigo!</h1>
            <p>
                <img src={rigoImage} alt="Rigo Image" />
            </p>
            <a href="#" className="btn btn-success">
                If you see this green button... bootstrap is working...
            </a>
            <p>
                Made by{" "}
                <a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with love!
            </p>
            
            {/* Semaforo component */}
            <TrafficLight />
        </div>
    );
};

export default Home;