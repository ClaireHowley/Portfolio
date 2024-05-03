import { motion } from "framer-motion";
import { forwardRef, useEffect } from "react";
import ProjectItem from "./ProjectItem";
import QuickGreek from "../images/QuickGreek.png";

const projectsData = [
	{ id: 1, title: "Quick Greek", image: QuickGreek },
	{ id: 2, title: "Feature Extension" },
	{ id: 3, title: "Social Ripple" },
	{ id: 4, title: "Community Board" },
];

const Projects = forwardRef((props, ref) => {
	return (
		<motion.div
			ref={ref}
			id="projects"
			className="h-screen flex flex-col justify-center items-center">
			<h1 className="text-3xl font-bold mb-8 text-white">Projects</h1>
			<div className="flex justify-between space-x-8 md:space-x-16">
				{projectsData.map((project) => (
					<ProjectItem
						key={project.id}
						title={project.title}
						image={project.image}
					/>
				))}
			</div>
		</motion.div>
	);
});

Projects.displayName = "Projects";
export default Projects;
