import { forwardRef } from "react";

const Projects = forwardRef((props, ref) => {
	return (
		<div
			ref={ref}
			id="projects"
			className="h-screen flex flex-col justify-center items-center">
			<h1 className="text-3xl font-bold mb-8 text-white">Projects</h1>
			<div className="flex justify-between space-x-8 md:space-x-16">
				<div className="w-32 h-32 border-4 border-indigo-600 shadow-2xl transform transition-transform hover:scale-110 md:w-48 md:h-48">
					Project 1
				</div>
				<div className="w-32 h-32 border-4 border-indigo-600 shadow-2xl transform transition-transform hover:scale-110 md:w-48 md:h-48">
					Project 2
				</div>
				<div className="w-32 h-32 border-4 border-indigo-600 shadow-2xl transform transition-transform hover:scale-110 md:w-48 md:h-48">
					Project 3
				</div>
			</div>
		</div>
	);
});

Projects.displayName = "Projects";
export default Projects;
