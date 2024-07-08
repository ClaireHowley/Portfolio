import { forwardRef, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Button, TextField } from "@mui/material";

const Contact = forwardRef((props, ref) => {
	
	return (
		<div
			ref={ref}
			id="contact"
			className="bg-newPink h-screen flex flex-col items-center justify-center lg:items-start lg:px-16">
			<h1 className="text-3xl font-bold mb-8 text-white">Let's chat!</h1>
			<form>
				<div className="grid grid-cols-1 gap-8 items center "> 
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
			
		</div>
	);
});

Contact.displayName = "Contact"; // Adding display name

export default Contact;
