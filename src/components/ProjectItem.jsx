import React from "react";

export default function ProjectItem({
	title,
	image,
	description,
	isSelected,
	onClick,
}) {
	return (
		<>
			<div
				className={`relative border border-indigo-600 shadow-2xl overflow-hidden transform transition-transform hover:scale-110 cursor-pointer ${
					isSelected
						? "w-64 h-64 md:w-96 md:h-96"
						: "w-32 h-32 md:w-48 md:h-48"
				}`}
				onClick={onClick}>
				<img
					src={image}
					alt={title}
					className="w-full h-full object-cover"
					style={{ transition: "transform 0.5s" }}
				/>
				{isSelected && (
					  <div className="absolute inset-0 bg-black opacity-75 flex items-center justify-center text-white">
					  <div className="p-4 text-center">
						<h3 className="text-lg font-bold mb-2">{title}</h3>
						<p className="text-sm">{description}</p>
					  </div>
					</div>
				)}
			</div>
		</>
	);
}
