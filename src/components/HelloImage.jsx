import { React, useRef } from "react";
import topImage from "../images/HelloImage.jpg";
import bottomImage from "../images/HelloImageBottom.png";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HelloImage() {
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"], // defines how the animation work
	});

	const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
	const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

	return (
		<div className="w-full h-screen overflow-hidden relative grid place-items-center">
			<motion.h1
				style={{ textY }}
				className="font-bold text-white text 7-xl relative z-10">
				TEST
			</motion.h1>
			<motion.div
				className="absolute inset-0 z-0"
				style={{
					backgroundImage: `url(${topImage})`,
					backgroundPosition: "bottom",
					backgroundSize: "cover",
					y: backgroundY,
				}}></motion.div>
			<div
				className="absolute inset-0 z-20"
				style={{
					backgroundImage: `url(${bottomImage})`,
					backgroundPosition: "bottom",
					backgroundSize: "cover",
				}}></div>
		</div>
	);
}
