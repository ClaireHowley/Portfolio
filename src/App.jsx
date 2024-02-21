// import { useState } from "react";
import "./index.css";
import Hello from "./components/Hello";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

function App() {
	return (
		<div className="bg-yellow-200 font-sans">
			<NavBar />
			<Hello />
			<AboutMe />
			<Projects />
		</div>
	);
}

export default App;
