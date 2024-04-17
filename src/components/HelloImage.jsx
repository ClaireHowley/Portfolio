import React, { useRef, useEffect } from "react";
import {
	useMotionValue,
	useMotionTemplate,
	motion,
	useScroll,
	useTransform,
	animate,
} from "framer-motion";
// import topImage from "../images/HelloImage.jpg";
// import bottomImage from "../images/HelloImageBottom.png";

export default function HelloImage() {
	const helloImageRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: helloImageRef,
		offset: ["start start", "end start"], // defines how the animation work
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
			ease: "easeInOut",
			duration: 5,
			repeat: Infinity,
			repeatType: "mirror",
		});
	}, []);

	return (
		<motion.div
			style={{
				backgroundImage,
			}}
			ref={helloImageRef}
			className="w-full h-screen overflow-hidden relative grid place-items-center">
			<motion.h1
				style={{
					y: textY,
				}}
				className="font-bold text-white text-9xl  md:text-12xl relative z-30">
				HELLO
			</motion.h1>
		</motion.div>
	);
}

{
	/* 
moving images on scroll
<motion.div
				className="absolute inset-0 z-0"
				style={{
					backgroundImage: `url(${topImage})`,
					backgroundPosition: "top",
					backgroundSize: "cover",
					y: backgroundY,
				}}></motion.div>
			<motion.div
				className="absolute inset-0 z-20"
				style={{
					backgroundImage: `url(${bottomImage})`,
					backgroundPosition: "top",
					backgroundSize: "cover",
				}}></motion.div> */
}
