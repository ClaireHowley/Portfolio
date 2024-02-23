import Claire from "../images/Claire.jpg";

export default function AboutMe({ dataAos }) {
	return (
		<div
			className="bg-white h-lvh flex items-stretch relative rounded-full m-10"
			data-aos={dataAos}>
			{/* Content Half */}
			<div className="w-1/2 flex items-center">
				<div className="w-full text-center p-4 md:p-10">
					<h2 className="font-extrabold">About Me</h2>
					<p>
						AD LOREM IPSUM GENERATOR Lorem ipsum dolor sit amet, consectetur
						adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit
						esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
						cupidatat non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum
					</p>
				</div>
			</div>
			{/* Background Image Half */}
			<div className="w-1/2 relative">
				<div
					className="absolute inset-0 bg-cover bg-center bg-opacity-75 bg-blur"
					style={{ backgroundImage: `url(${Claire})`, opacity: 0.6 }}></div>
			</div>
		</div>
	);
}
