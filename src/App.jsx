import { useEffect, useRef } from "react";
import "./index.css";
import Bye from "./components/Bye";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import HelloImage from "./components/HelloImage";

function App() {
	const aboutRef = useRef(null);
	const projectsRef = useRef(null);
	const contactRef = useRef(null);

	function scrollToRef(sectionId) {
		const refs = {
			about: aboutRef,
			projects: projectsRef,
			contact: contactRef,
		};

		if (refs[sectionId] && refs[sectionId].current) {
			window.scrollTo({
				top: refs[sectionId].current.offsetTop,
				behavior: "smooth",
			});
		}
	}

	return (
		<div className="bg-yellow-200 font-sans">
			<NavBar scrollToRef={scrollToRef} />
			<HelloImage />
			<AboutMe id="about" ref={aboutRef} />
			{/** dataAos="zoom-in" **/}
			<Projects id="projects" ref={projectsRef} />
			<Contact id="contact" ref={contactRef} />
			<Bye className="pt-20" word="Come back soon" />
		</div>
	);
}

export default App;
