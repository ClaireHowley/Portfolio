// import React from "react";
import "./Hello.css";

export default function Hello() {
	return (
		<div className="site-container h-lvh text-9xl">
			<svg className="blinking-chars text-blue-300">
				<text
					textAnchor="middle"
					x="50%"
					y="50%"
					className="blinking-chars-group">
					<tspan className="char" dy="0">
						H
					</tspan>
					<tspan className="char" dy="0">
						e
					</tspan>
					<tspan className="char" dy="0">
						l
					</tspan>
					<tspan className="char" dy="0"></tspan>
					<tspan className="char" dy="0">
						o
					</tspan>
				</text>
			</svg>
		</div>
	);
}
