import { animate, motion, useAnimation } from "framer-motion";
import { forwardRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ProjectItem from "./ProjectItem";
import QuickGreek from "../images/QuickGreek.png";
import MySkills from "./MySkills";

const projectsData = [
	{ id: 1, title: "Quick Greek", image: QuickGreek },
	{ id: 2, title: "Feature Extension" },
	{ id: 3, title: "Social Ripple" },
	{ id: 4, title: "Community Board" },
];

const Projects = forwardRef((props, ref) => {
	const fadeInAnimationVariants = {
		initial: {
			opacity: 0,
			y: 100,
		},
		animate: () => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.05,
			},
		}),
	};

	return (
		<div
			ref={ref}
			id="projects"
			className="h-screen flex flex-col justify-center items-center">
			<h1 className="text-3xl font-bold mb-8 text-metal">Projects</h1>

			<motion.div
				className="flex justify-between space-x-8 md:space-x-16"
				variants={fadeInAnimationVariants}
				initial="initial"
				whileInView="animate"
				viewport={{ once: true }}>
				{projectsData.map((project) => (
					<ProjectItem
						key={project.id}
						title={project.title}
						image={project.image}
					/>
				))}
			</motion.div>

			<MySkills />
		</div>
	);
});

Projects.displayName = "Projects";
export default Projects;
