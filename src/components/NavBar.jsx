import { useState } from "react";
import {
	BookOpenIcon,
	Bars3BottomRightIcon,
	XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function NavBar() {
	let Links = [
		// { name: "HOME", link: "/" },
		{ name: "ABOUT", link: "about" },
		{ name: "PROJECTS", link: "projects" },
		{ name: "CONTACT", link: "contact" },
	];
	let [open, setOpen] = useState(false);

	return (
		<div className="shadow-md w-full fixed top-0 left-0 z-20">
			<div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
				{/* logo section */}
				<div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
					<BookOpenIcon className="w-7 h-7 text-blue-600" />
					<span>Claire</span>
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
						open ? "top-12" : "top-[-490px]"
					}`}>
					{Links.map((link, index) => (
						<li className="md:ml-8 md:my-0 my-7 font-semibold" key={index}>
							<Link
								to={`#${link.link}`}
								className="text-gray-800 hover:text-blue-400 duration-500">
								{link.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
