import { forwardRef, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Button, TextField } from "@mui/material";

const Contact = forwardRef((props, ref) => {
	// function Sphere({ position, size, color }) {
	// 	const sphereRef = useRef();
	// 	useFrame((state, delta) => {
	// 		sphereRef.current.rotation.x += delta;
	// 		// sphereRef.current.rotation.y += delta;
	// 	});

	// 	return (
	// 		<mesh ref={sphereRef} position={position}>
	// 			<sphereGeometry args={size} />
	// 			<meshStandardMaterial color={color} />
	// 		</mesh>
	// 	);
	// }

	return (
		<div
			ref={ref}
			id="contact"
			className="bg-newPink h-screen flex flex-col justify-center items-center">
			<h1 className="text-3xl font-bold mb-8 text-white">Contact</h1>
			<form action="/contact" name="contact">
				<input type="hidden" name="form-name" value="contact" />
				<TextField varient="outlined" label="Full Name" name="ame" />{" "}
				<TextField varient="outlined" label="Email" name="email" />{" "}
				<TextField
					varient="outlined"
					label="Message"
					name="message"
					multiline
					rows={10}
				/>
				<Button>Submit</Button>
			</form>
			{/* <Canvas shadowMap>
				<directionalLight position={[0, 0, 2]} intensity={0.5} />
				<ambientLight intensity={0.1} />
				<OrbitControls />
				<Sphere position={[0, 0, 0]} size={[2, 34, 34]} color={"blue"} />
			</Canvas> */}
		</div>
	);
});

Contact.displayName = "Contact"; // Adding display name

export default Contact;
