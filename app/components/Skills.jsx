'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Skills() {
	const skills = {
		languages: [
			{ name: "C", icon: "/C.png" },
			{ name: "Python", icon: "/Python.png" },
			{ name: "Java", icon: "/Java.png" },
			{ name: "HTML5", icon: "/HTML5.png" },
			{ name: "CSS3", icon: "/CSS3.png" },
			{ name: "JavaScript", icon: "/JavaScript.png" },
		],
		frameworks: [
			{ name: "MongoDB", icon: "/MongoDB.png" },
			{ name: "Express.js", icon: "/Express.png" },
			{ name: "React.js", icon: "/React.png" },
			{ name: "Node.js", icon: "/Node.js.png" },
			{ name: "Bootstrap", icon: "/Bootstrap.png" },
			{ name: "Tailwind CSS", icon: "/Tailwind CSS.png" },
		],
		libraries: [
			{ name: "Pandas", icon: "/Pandas.png" },
			{ name: "NumPy", icon: "/NumPy.png" },
			{ name: "Matplotlib", icon: "/Matplotlib.png" },
			{ name: "Scikit-learn", icon: "/scikit-learn.png" },
		],
	};

	// Motion variants
	const iconVariants = {
		hidden: { opacity: 0, y: 30, scale: 0.8 },
		visible: (i) => ({
			opacity: 1,
			y: 0,
			scale: 1,
			transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
		}),
		hover: { scale: 1.2, rotate: 5 },
		tap: { scale: 0.95 },
	};

	return (
		<section
			id="skills"
			className="relative py-12 px-6 flex flex-col items-center bg-white overflow-hidden"
		>
			<div className="relative z-10 w-full max-w-6xl space-y-12">
				{/* Languages Section */}
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 place-items-center">
					{skills.languages.map((tech, index) => (
						<motion.button
							key={index}
							variants={iconVariants}
							initial="hidden"
							whileInView="visible"
							whileHover="hover"
							whileTap="tap"
							custom={index}
							viewport={{ once: true }}
							className="group relative flex justify-center items-center w-16 h-16 
								rounded-xl bg-[#111827] shadow-md transition-all duration-500
								hover:rounded-[50%] hover:bg-blue-300"
						>
							<Image
								src={tech.icon}
								alt={tech.name}
								width={28}
								height={28}
								className="transition-transform duration-500 group-hover:scale-110"
							/>
							<span
								className="absolute opacity-0 group-hover:opacity-100 
									group-hover:-translate-y-8 group-hover:text-xs 
									duration-500 font-semibold transform transition-all ease-in-out text-[#111827]"
							>
								{tech.name}
							</span>
						</motion.button>
					))}
				</div>

				{/* Frameworks & Tools Section */}
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 place-items-center">
					{skills.frameworks.map((tech, index) => (
						<motion.button
							key={index}
							variants={iconVariants}
							initial="hidden"
							whileInView="visible"
							whileHover="hover"
							whileTap="tap"
							custom={index}
							viewport={{ once: true }}
							className="group relative flex justify-center items-center w-16 h-16 
								rounded-xl bg-[#111827] shadow-md transition-all duration-500
								hover:rounded-[50%] hover:bg-blue-300"
						>
							<Image
								src={tech.icon}
								alt={tech.name}
								width={28}
								height={28}
								className="transition-transform duration-500 group-hover:scale-110"
							/>
							<span
								className="absolute opacity-0 group-hover:opacity-100 
									group-hover:-translate-y-8 group-hover:text-xs 
									duration-500 font-semibold transform transition-all ease-in-out text-[#111827]"
							>
								{tech.name}
							</span>
						</motion.button>
					))}
				</div>

				{/* Libraries Section */}
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 place-items-center">
					{skills.libraries.map((tech, index) => (
						<motion.button
							key={index}
							variants={iconVariants}
							initial="hidden"
							whileInView="visible"
							whileHover="hover"
							whileTap="tap"
							custom={index}
							viewport={{ once: true }}
							className="group relative flex justify-center items-center w-16 h-16 
								rounded-xl bg-[#111827] shadow-md transition-all duration-500
								hover:rounded-[50%] hover:bg-blue-300"
						>
							<Image
								src={tech.icon}
								alt={tech.name}
								width={28}
								height={28}
								className="transition-transform duration-500 group-hover:scale-110"
							/>
							<span
								className="absolute opacity-0 group-hover:opacity-100 
									group-hover:-translate-y-8 group-hover:text-xs 
									duration-500 font-semibold transform transition-all ease-in-out text-[#111827]"
							>
								{tech.name}
							</span>
						</motion.button>
					))}
				</div>
			</div>
		</section>
	);
}
