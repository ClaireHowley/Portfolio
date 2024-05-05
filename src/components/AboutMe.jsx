import { forwardRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";

const AboutMe = forwardRef((props, ref) => {
	const [isTyping, setIsTyping] = useState(false);
	const { ref: inViewRef, inView } = useInView({
		threshold: 0.8, // Adjust threshold as needed
	});

	useEffect(() => {
		if (inView) {
			setIsTyping(true);
		}
	}, [inView]);

	return (
		<div id="about" ref={ref} className="bg-white h-1/6 p-5">
			<motion.div
				ref={inViewRef}
				className="text-metal md:text-3xl text-2xl pl-10 md:pl-10"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}>
				{isTyping && (
					<Typewriter
						words={["My name is Claire, I am a frontend developer"]}
						loop={1}
						cursor
						cursorStyle="|"
						typeSpeed={30}
					/>
				)}
			</motion.div>
			{/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum
			venenatis tellus, quis volutpat quam posuere quis. Vestibulum quis quam a
			tortor finibus eleifend. Ut sollicitudin maximus orci, vitae varius est
			lacinia quis. Duis risus odio, elementum sed consequat ut, ultrices in
			massa. Morbi interdum placerat nisl sit amet varius. Sed eget tortor nibh.
			Nunc pulvinar dolor nec ante lacinia, at condimentum magna aliquet. Ut sed
			consectetur dolor. Phasellus interdum purus magna, id commodo risus auctor
			at. Integer eleifend mi at aliquam feugiat. Morbi blandit quam massa, eget
			ornare massa ullamcorper eget. Aliquam ac egestas justo. Suspendisse sed
			ex hendrerit, convallis odio in, semper felis. Integer cursus posuere
			urna, id consequat justo fermentum ut. */}
		</div>
	);
});

AboutMe.displayName = "AboutMe";

export default AboutMe;
