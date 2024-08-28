import React from "react";
import { animate, motion, useAnimation } from "framer-motion";

export default function MySkills() {
	const skills = [
		{ id: 1, skill: "React" },
		{ id: 2, skill: "Javascript" },
		{ id: 3, skill: "Typescript" },
		{ id: 4, skill: "Three.js" },
		{ id: 5, skill: "Git" },
		{ id: 6, skill: "MySQL" },
		{ id: 7, skill: "Sequelize" },
		{ id: 8, skill: "Next.js" },
		{ id: 9, skill: "Node.js" },
		{id: 10, skill: "Dart"},
		{id: 11, skill: "Flutter"},
		{id: 12, skill: "Go"}


	];

	const mySkillVariants = {
		initial: {
			opacity: 0,
			y: 100,
		},
		animate: ({ index }) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.05 * index,
			},
		}),
	};

	const skillHeadingAnimationVariants = {
		initial: {
			opacity: 0,
			x: -100,
		},
		animate: {
			opacity: 1,
			x: 0,
			transition: {
				delay: 1,
			},
		},
	};

	return (
		<div>
			<motion.h1
				className="p-10 text-3xl font-bold text-metal text-center"
				variants={skillHeadingAnimationVariants}
				initial="initial"
				whileInView="animate"
				viewport={{ once: true }}>
				My Skills
			</motion.h1>

			<div className="grid grid-cols-3 gap-4">
				{skills.map((mySkill, index) => (
					<motion.ul
						key={index}
						className="text-metal border border-indigo-600 rounded-sm shadow-2xl p-5 text-center"
						variants={mySkillVariants}
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						custom={index}>
						{mySkill.skill}
					</motion.ul>
				))}
			</div>
		</div>
	);
}
