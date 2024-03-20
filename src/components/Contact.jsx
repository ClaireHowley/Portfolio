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
			className="bg-newPink h-screen flex flex-col items-center justify-center">
			<h1 className="text-3xl font-bold mb-8 text-white">Contact</h1>
			<form className="max-w-screen-md mx-auto px-4">
				<div className="grid grid-cols-1 gap-4 md:justify-self-start">
					<TextField variant="outlined" label="Full Name" name="name" />
					<TextField variant="outlined" label="Email" name="email" />
					<TextField
						variant="outlined"
						label="Message"
						name="message"
						multiline
						rows={6}
					/>
					<Button
						variant="contained"
						// className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md mt-4"
						type="submit">
						Submit
					</Button>
				</div>
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
