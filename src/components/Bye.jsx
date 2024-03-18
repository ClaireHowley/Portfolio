import { useRef, useEffect, forwardRef, useState } from "react";

const Bye = forwardRef((props, ref) => {
	const generateTSpans = () => {
		return props.word.split("").map((letter, index) => (
			<tspan
				key={index}
				className="animate-pulse"
				style={{ animationDelay: `${index * 0.4}s` }}
				dy="0"
				fill="blue">
				{letter}
			</tspan>
		));
	};

	return (
		<div ref={ref}>
			<svg className="text-6xl md:text-8xl pt-10 md:pt-20 w-full realtive">
				<text textAnchor="middle" x="60%" y="50%">
					{generateTSpans()}
				</text>
			</svg>
		</div>
	);
});

Bye.displayName = "Bye"; // Adding display name

export default Bye;
