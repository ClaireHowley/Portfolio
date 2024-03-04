import { useRef, useEffect, forwardRef } from "react";
import p5 from "p5";
import Typewriter from "typewriter-effect";

const Hello = forwardRef((props, ref) => {
	const sketchRef = useRef();

	useEffect(() => {
		const sketch = new p5((p) => {
			p.setup = () => {
				p.createCanvas(80, 80);
			};

			p.draw = () => {
				p.background(220);
				p.ellipse(p.mouseX, p.mouseY, 50, 50);
			};
		}, sketchRef.current);

		return () => {
			sketch.remove();
		};
	}, []);

	return (
		<div className="h-lvh" ref={ref}>
			<svg className="text-9xl pt-40 pl-10 md:pt-15 md:pl-20">
				<text textAnchor="middle" x="50%" y="55%">
					<tspan
						className="animate-pulse"
						style={{ animationDelay: "0s" }}
						dy="0"
						fill="blue">
						H
					</tspan>
					<tspan
						className="animate-pulse"
						style={{ animationDelay: "0.4s" }}
						dy="0"
						fill="blue">
						e
					</tspan>
					<tspan
						className="animate-pulse"
						style={{ animationDelay: "0.8s" }}
						dy="0"
						fill="blue">
						l
					</tspan>
					<tspan
						className="animate-pulse"
						style={{ animationDelay: "1.2s" }}
						dy="0"
						fill="blue">
						l
					</tspan>
					<tspan
						className="animate-pulse"
						style={{ animationDelay: "1.6s" }}
						dy="0"
						fill="blue">
						o
					</tspan>
				</text>
			</svg>
			<Typewriter
				options={{
					strings: ["Hello"], // Define the strings directly here
					autoStart: true, // Start typing immediately
					wrapperClassName: "text-blue-600", // Apply Tailwind CSS class here
				}}
			/>

			<div ref={sketchRef}></div>
		</div>
	);
});

Hello.displayName = "Hello"; // Adding display name

export default Hello;
