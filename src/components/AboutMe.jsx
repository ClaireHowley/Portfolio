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


	const aboutMeParagraphVariants = {
		initial: {
			opacity: 0,
			x: -100,
		},
		animate: {
			opacity: 1,
			x: 0,
			
		},
	};

	return (
		<div id="about" ref={ref} className="bg-white min-h-screen p-5">
			<motion.div
				ref={inViewRef}
				className="text-metal md:text-3xl text-2xl pl-10 md:pl-10"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}>
				{isTyping && (
					<Typewriter
						words={["My name is Claire, I am a Software Engineer"]}
						loop={1}
						cursor
						cursorStyle="|"
						typeSpeed={30}
					/>
				)}
			</motion.div>
			<motion.div
			variants={aboutMeParagraphVariants}
			initial="initial"
			whileInView="animate"
			viewport={{ once: true }}>
			Irish gal residing in Barcelona, recently discovered a love for tech. Eager to fuse my diverse experience in healthcare, tourism and education with the tech world.
			</motion.div>
		
		</div>
	);
});

AboutMe.displayName = "AboutMe";

export default AboutMe;
