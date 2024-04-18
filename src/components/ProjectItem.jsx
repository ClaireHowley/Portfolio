import React from "react";

export default function ProjectItem({ title, image }) {
	return (
		<div className="relative w-32 h-32 border-4 border-indigo-600 shadow-2xl overflow-hidden transform transition-transform hover:scale-110 md:w-48 md:h-48">
			<img src={image} alt={title} className="w-full h-full object-cover" />
			{/*overlay div*/}
			<div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity flex items-center justify-center text-white">
				<span className="text-lg">{title}</span>
			</div>
		</div>
	);
}
