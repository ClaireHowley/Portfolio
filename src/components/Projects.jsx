import { animate, motion, useAnimation } from "framer-motion";
import { forwardRef, useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";
import QuickGreek from "../images/QuickGreek.png";
import MySkills from "./MySkills";

const projectsData = [
	{
		id: 1,
		title: "Quick Greek",
		image: QuickGreek,
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis urna arcu. Mauris leo sapien, ultricies in iaculis in, volutpat in urna. Sed pharetra sem magna, quis feugiat dui viverra a. Pellentesque ante justo, placerat vel est eget, suscipit dictum mauris.",
	},
	{
		id: 2,
		title: "Feature Extension",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis urna arcu. Mauris leo sapien, ultricies in iaculis in, volutpat in urna. Sed pharetra sem magna, quis feugiat dui viverra a. Pellentesque ante justo, placerat vel est eget, suscipit dictum mauris.",
	},
	{
		id: 3,
		title: "Social Ripple",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis urna arcu. Mauris leo sapien, ultricies in iaculis in, volutpat in urna. Sed pharetra sem magna, quis feugiat dui viverra a. Pellentesque ante justo, placerat vel est eget, suscipit dictum mauris.",
	},
	{
		id: 4,
		title: "Community Board",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis urna arcu. Mauris leo sapien, ultricies in iaculis in, volutpat in urna. Sed pharetra sem magna, quis feugiat dui viverra a. Pellentesque ante justo, placerat vel est eget, suscipit dictum mauris.",
	},
];

const Projects = forwardRef((props, ref) => {
	//handling the state of which project is clicked
	const [selectedProject, setSelectedProject] = useState(null);

	const handleClick = (projectId) => {
		setSelectedProject(projectId === selectedProject ? null : projectId);
		console.log(`selected + ${projectId}`)
	};

	const fadeInAnimationVariants = {
		initial: {
			opacity: 0,
			y: 100,
		},
		animate: () => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.5,
			},
		}),
	};

	const projectHeadingAnimationVariants = {
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
		<div
			ref={ref}
			id="projects"
			className={`min-h-screen flex flex-col justify-center items-center ${selectedProject ? 'h-[120vh]' : 'h-screen'}`}>
			<motion.h1
				className="text-3xl font-bold mb-8 text-metal"
				variants={projectHeadingAnimationVariants}
				initial="initial"
				whileInView="animate"
				viewport={{ once: true }}>
			</motion.h1>

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
						description={project.description}
						isSelected={selectedProject === project.id}
						onClick={() => handleClick(project.id)}
					/>
				))}
			</motion.div>

			<MySkills/>
		</div>
	);
});

Projects.displayName = "Projects";
export default Projects;
