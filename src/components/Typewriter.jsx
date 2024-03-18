import React from "react";

export default function Typewriter() {
	return (
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
	);
}
