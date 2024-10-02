import React, { useState } from "react";

// Traffic Light Component
const TrafficLight = () => {
    const [color, setColor] = useState("red");

    // Function to toggle between colors
    const toggleColor = () => {
        if (color === "red") setColor("yellow");
        else if (color === "yellow") setColor("green");
        else setColor("red");
    };

    // Function to set purple color
    const setPurple = () => setColor("purple");

    return (
        <div className="text-center mt-5">
            <div className="traffic-light">
                <div
                    className={"light red" + (color === "red" ? " glow" : "")}
                ></div>
                <div
                    className={
                        "light yellow" + (color === "yellow" ? " glow" : "")
                    }
                ></div>
                <div
                    className={
                        "light green" + (color === "green" ? " glow" : "")
                    }
                ></div>
                <div
                    className={
                        "light purple" + (color === "purple" ? " glow" : "")
                    }
                ></div>
            </div>
            <button className="btn btn-primary mt-3" onClick={toggleColor}>
                Toggle Colors
            </button>
            <button className="btn btn-secondary mt-3" onClick={setPurple}>
                Set Purple
            </button>
        </div>
    );
};

export default TrafficLight;