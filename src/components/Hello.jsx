import { useRef, useEffect, forwardRef, useState } from "react";
// import p5 from "p5";
import { Typewriter } from "react-simple-typewriter";

const Hello = forwardRef((props, ref) => {
	// const [isTypingComplete, setIsTypingComplete] = useState(false);

	// const sketchRef = useRef();

	// useEffect(() => {
	//  const sketch = new p5((p) => {
	//   p.setup = () => {
	//    p.createCanvas(80, 80);
	//   };

	//   p.draw = () => {
	//    p.background(220);
	//    p.ellipse(p.mouseX, p.mouseY, 50, 50);
	//   };
	//  }, sketchRef.current);

	//  return () => {
	//   sketch.remove();
	//  };
	// }, []);

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

	// const handleDone = () => {
	// 	setIsTypingComplete(true);
	// };

	return (
		<div className="h-lvh" ref={ref}>
			<svg className="text-6xl md:text-8xl pt-10 md:pt-20 w-full">
				<text textAnchor="middle" x="30%" y="55%">
					{generateTSpans()}
				</text>
			</svg>

			<div className="text-blue-600">
				{" "}
				{/*style comes from parent element*/}
				<Typewriter
					words={["My name is Claire, I am a frontend developer"]}
					loop={1}
					cursor
					cursorStyle="|"
					typeSpeed={70}
					// deleteSpeed={50}
					// delaySpeed={1000}
					// onLoopDone={handleDone}
				/>
				{/* {isTypingComplete && (
					<span className="text-blue-600">
						My name is Claire, I am a frontend developer
					</span>
				)} */}
			</div>
		</div>
	);
});

Hello.displayName = "Hello"; // Adding display name

export default Hello;
