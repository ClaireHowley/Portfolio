// NavBar.js
import { useState } from "react";
import {
	BookOpenIcon,
	Bars3BottomRightIcon,
	XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link, useLocation } from "react-router-dom";

export default function NavBar({ scrollToRef }) {
	let Links = [
		{ name: "ABOUT", path: "/about", sectionId: "about" },
		{ name: "PROJECTS", path: "/projects", sectionId: "projects" },
		{ name: "CONTACT", path: "/contact", sectionId: "contact" },
	];

	let [open, setOpen] = useState(false);
	const location = useLocation();

	const handleClick = (link) => {
		// Scroll to the corresponding section
		scrollToRef(link.sectionId);
		// Close the menu
		setOpen(false);
	};

	return (
		<div className="shadow-md w-full fixed top-0 left-0 z-40">
			<div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
				{/* logo section */}
				<div className="font-bold text-2xl cursor-pointer flex items-center gap-1 h-7">
					{/* <BookOpenIcon className="w-7 h-7 text-blue-600" />
					<span>Claire</span> */}
				</div>
				{/* Menu icon */}
				<div
					onClick={() => setOpen(!open)}
					className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7">
					{open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
				</div>
				{/* link items */}
				<ul
					className={`md:flex md:items-center md:pb-0 pb-4 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
						open ? "<top-12" : "top-[-490px]"
					}`}>
					{Links.map((link, index) => (
						<li className="md:ml-8 md:my-0 my-7 font-semibold" key={index}>
							<Link
								to={link.path}
								className={`text-metal hover:text-newPink duration-500 cursor-pointer ${
									location.hash === `#${link.sectionId}` ? "text-red-500" : ""
								}`}
								onClick={() => handleClick(link)}>
								{link.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
