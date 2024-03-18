import { forwardRef } from "react";
import { Typewriter } from "react-simple-typewriter";

const AboutMe = forwardRef((props, ref) => {
	return (
		<div
			id="about"
			ref={ref} // Corrected assignment of ref
			className="bg-white h-60">
			<div className="text-blue-600 md:text-3xl text-2xl pl-10 pt-10 md:pl-20 md:pl-20">
				{" "}
				{/*style comes from parent element*/}
				<Typewriter
					words={["My name is Claire, I am a frontend developer"]}
					loop={1}
					cursor
					cursorStyle="|"
					typeSpeed={50}
				/>
			</div>
		</div>
	);
});

AboutMe.displayName = "AboutMe"; // Adding display name

export default AboutMe;
