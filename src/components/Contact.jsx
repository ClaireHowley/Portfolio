import { forwardRef, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Contact = forwardRef((props, ref) => {
	function Sphere({ position, size, color }) {
		const sphereRef = useRef();
		useFrame((state, delta) => {
			sphereRef.current.rotation.x += delta;
			// sphereRef.current.rotation.y += delta;
		});

		return (
			<mesh ref={sphereRef} position={position}>
				<sphereGeometry args={size} />
				<meshStandardMaterial color={color} />
			</mesh>
		);
	}

	return (
		<div ref={ref} id="contact" className="bg-newPink">
			Contact
			<Canvas shadowMap>
				<directionalLight position={[0, 0, 2]} intensity={0.5} />
				<ambientLight intensity={0.1} />
				<OrbitControls />
				<Sphere position={[0, 0, 0]} size={[2, 34, 34]} color={"blue"} />
			</Canvas>
		</div>
	);
});

Contact.displayName = "Contact"; // Adding display name

export default Contact;
