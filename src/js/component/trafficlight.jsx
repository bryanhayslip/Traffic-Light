// import React from "react";
import React, { useState } from "react";

const TrafficLight = () => {
	const [color, setColor] = React.useState();

	return (
		<div className="container">
			<div
				className={"light red" + (color === "red" ? " glow" : "")}
				onClick={() => setColor("red")}></div>
			<div
				className={"light yellow" + (color === "yellow" ? " glow" : "")}
				onClick={() => setColor("yellow")}></div>
			<div
				className={"light green" + (color === "green" ? " glow" : "")}
				onClick={() => setColor("green")}></div>
		</div>
	);
};
export default TrafficLight;
// div className = yellow light selected, red light selected, green light selected

// onClick={() => setColor('red')}
// onClick={() => setColor('yellow')}
// onClick={() => setColor('green')}
