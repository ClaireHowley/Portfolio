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
		<div id="about" ref={ref} className="bg-white h-fit p-5">
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
		</div>
	);
});

AboutMe.displayName = "AboutMe";

export default AboutMe;
