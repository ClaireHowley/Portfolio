import React, { useRef, useEffect } from "react";
import {
	useMotionValue,
	useMotionTemplate,
	motion,
	useScroll,
	useTransform,
	animate,
} from "framer-motion";
import AboutMe from "./AboutMe";

export default function HelloImage() {
	const helloImageRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: helloImageRef,
		offset: ["start start", "end start"], 
	});

	// const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
	const textY = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);

	const colors = ["#5c0067", "#2e003d", "#0084aa", "#00d4ff"];

	const color = useMotionValue(colors[0]);
	const backgroundImage = useMotionTemplate`
		radial-gradient(125% 100% at 50% 0%, #5c0067 50%, ${color})
	`;

	useEffect(() => {
		const animation = animate(color, colors, {
			ease: "easeOut",
			duration: 3.5,
			repeat: Infinity,
			repeatType: "mirror",
			immediate: true,
		});
	}, []);

	return (
		
			<motion.div
				style={{
					backgroundImage,
				}}
				ref={helloImageRef}
				className="h-screen overflow-hidden relative grid place-items-center">
				<motion.h1
					style={{
						y: textY,
					}}
					className="font-bold text-white text-10xl  md:text-12xl relative z-30">
					HELLO
				</motion.h1>
			</motion.div>
	);
}



