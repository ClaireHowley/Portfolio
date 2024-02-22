import { useEffect } from "react";
import "./index.css";
import Hello from "./components/Hello";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
	useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);

	return (
		<div className="bg-yellow-200 font-sans">
			<NavBar />
			<Hello className="pt-20" />
			<AboutMe dataAos="zoom-in" />
			<Projects />
		</div>
	);
}

export default App;
