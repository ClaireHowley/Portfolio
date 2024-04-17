import React from "react";

export default function ProjectItem({ title, image }) {
	return (
		<div className="w-32 h-32 border-4 border-indigo-600 shadow-2xl transform transition-transform hover:scale-110 md:w-48 md:h-48">
			{title}
			<img src={image} alt={title} className="w-full h-full object-cover" />
		</div>
	);
}
