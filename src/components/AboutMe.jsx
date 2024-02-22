// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

export default function AboutMe({ dataAos }) {
	// useEffect(() => {
	// 	AOS.init({ duration: 2000 });
	// }, []);

	return (
		<div className="bg-white h-lvh" data-aos={dataAos}>
			<div className="font-extrabold text-center">About Me</div>
			<p>
				AD LOREM IPSUM GENERATOR Lorem ipsum dolor sit amet, consectetur
				adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
				in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
				pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
				qui officia deserunt mollit anim id est laborum
			</p>
		</div>
	);
}
