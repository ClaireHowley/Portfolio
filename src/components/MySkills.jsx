import React from "react";

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
	];
	return (
		<div>
			<h1 className="p-10 text-3xl font-bold mb-8 text-metal text-center">
				My Skills
			</h1>

			<div className="grid grid-cols-3 gap-4">
				{skills.map((mySkill, index) => (
					<div
						key={index}
						className="text-metal border border-indigo-600 rounded-sm shadow-2xl p-5 text-center">
						{mySkill.skill}
					</div>
				))}
			</div>
		</div>
	);
}
