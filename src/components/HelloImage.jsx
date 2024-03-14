import React from "react";

export default function HelloImage() {
	return (
		<div className="w-full h-screen overflow-hidden relative grid place-items-center">
			<h1>TEST</h1>
			<div
				className="absolute inset-0 z-0"
				style={{
					backgroundImage: `url(../images/HelloImage.jpg)`,
					backgroundPosition: "bottom",
					backgroundSize: "cover",
				}}></div>
			<div
				className="absolute inset-0 z-20"
				style={{
					backgroundImage: `url(../images/HelloImageBottom.png)`,
					backgroundPosition: "bottom",
					backgroundSize: "cover",
				}}></div>
		</div>
	);
}
