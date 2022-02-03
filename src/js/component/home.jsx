import React, { useState } from "react";

//create your first component
export const Home = () => {
	const [color, setColor] = useState("green");
	const changeColor = (c) => {
		if (c == "green") {
			setColor("yellow");
		} else if (c == "yellow") {
			setColor("red");
		} else {
			setColor("green");
		}
	};
	return (
		<>
			<div className="traffic-light">
				<div
					className={
						color == "red" ? "red glow circle" : "red circle"
					}
					onClick={() => setColor("red")}></div>
				<div
					className={
						color == "yellow"
							? "glow yellow circle"
							: "yellow circle"
					}
					onClick={() => setColor("yellow")}></div>
				<div
					className={
						color == "green" ? "glow green circle" : "green circle"
					}
					onClick={() => setColor("green")}></div>
			</div>
			<button onClick={() => changeColor(color)}>Click Me </button>
		</>
	);
};
