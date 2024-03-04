import { useEffect, useRef } from "react";
import "./index.css";
import Hello from "./components/Hello";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter } from "react-router-dom";

function App() {
	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);

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
		<BrowserRouter>
			<div className="bg-yellow-200 font-sans">
				<NavBar scrollToRef={scrollToRef} />
				<Hello className="pt-20" />
				<AboutMe id="about" ref={aboutRef} dataAos="zoom-in" />
				<Projects id="projects" ref={projectsRef} />
				<Contact id="contact" ref={contactRef} />
			</div>
		</BrowserRouter>
	);
}

export default App;
