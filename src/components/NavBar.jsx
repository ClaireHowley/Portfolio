import { useState } from "react";
import {
	BeakerIcon,
	Bars3BottomRightIcon,
	XMarkIcon,
} from "@heroicons/react/24/solid";

// import Hello from "./Hello";

export default function NavBar() {
	let Links = [
		{ name: "HOME", link: "/" },
		{ name: "PROJECTS", link: "/" },
		{ name: "ABOUT", link: "/" },
		{ name: "CONTACT", link: "/" },
	];

	let [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="shadow-md w-full">
			<div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
				{/* logo here */}
				<div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
					<BeakerIcon className="w-7 h-7 text-blue-600" />
					<span className="font-bold">Claire</span>
				</div>

				{/* menu icon */}
				<div
					onClick={() => setIsOpen(!isOpen)}
					className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden">
					{isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />}
				</div>

				{/* nav links here */}
				<ul
					className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
						isOpen ? "top-12" : "top-[-490px]"
					}`}>
					{Links.map((link, index) => (
						<li className="font-semibold my-7 md:my-0 md:mx-4 " key={index}>
							<a href="/">{link.name}</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}
