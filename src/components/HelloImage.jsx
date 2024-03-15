import { React, useRef } from "react";
import topImage from "../images/HelloImage.jpg";
import bottomImage from "../images/HelloImageBottom.png";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HelloImage() {
	const helloImageRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: helloImageRef,
		offset: ["start start", "end start"], // defines how the animation work
	});

	const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);
	const textY = useTransform(scrollYProgress, [0, 1], ["0%", "800%"]);

	return (
		<div className="w-full h-screen overflow-hidden relative grid place-items-center">
			<motion.h1
				style={{ y: textY }}
				className="font-bold text-white text-9xl md:text-12xl relative z-30">
				HELLO
			</motion.h1>
			<motion.div
				className="absolute inset-0 z-0"
				style={{
					backgroundImage: `url(${topImage})`,
					backgroundPosition: "bottom",
					backgroundSize: "cover",
					y: backgroundY,
				}}></motion.div>
			<motion.div
				className="absolute inset-0 z-20"
				style={{
					backgroundImage: `url(${bottomImage})`,
					backgroundPosition: "bottom",
					backgroundSize: "cover",
				}}></motion.div>
		</div>
	);
}
