
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import BlurImage from "@/public/image/placeholder/blur.jpg";

export default function ProjectCard({ project, index, activeCategory }) {
	return (
		<>
			{project.category.includes(parseInt(activeCategory)) && (
				<Link href={"projects/" + project.slug} key={index}>
					<motion.div
						className="z-10 relative flex justify-center items-start flex-col mb-5 md:px-10 w-full h-auto bg-purple-950/70 border border-purple-500/30 group/tes py-20 px-5 md:py-2 aspect-video backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-purple-300/70 hover:shadow-lg hover:shadow-purple-950/40"
						initial={{
							opacity: 0,
							x: -200,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						transition={{
							type: "spring",
						}}>
						<Image
							src={project.thumbnail}
							alt="Alvalens"
							fill
							placeholder="blur"
							className="bg-slate-950 opacity-20 group-hover/tes:opacity-100 transition-all ease duration-500 object-cover"
							blurDataURL={BlurImage.src}
						/>

						<div className="absolute top-0 left-0 bg-purple-700/80 border-b border-r border-purple-400/30 px-4 py-2 backdrop-blur-md">
							<h4 className="text-white">{project.year}</h4>
						</div>

						<div className="transition-all ease duration-500 opacity-100 content text-center group-hover/tes:opacity-0 z-10">
							<h1 className="text-3xl font-bold mb-3 text-white">
								{project.title}
							</h1>

							<p className="text-gray-200">
								{project.desc[0].length > 125
									? `${project.desc[0].slice(0, 125)}...`
									: project.desc[0]}
							</p>

							<div className="flex justify-center items-center flex-row mt-5 flex-wrap">
								{project.tech.map((t, index) => (
									<span
										key={index}
										className="m-1 px-4 py-2 bg-purple-800/70 border border-purple-400/20 text-purple-50 backdrop-blur-sm">
										{t}
									</span>
								))}
							</div>
						</div>
					</motion.div>
				</Link>
			)}
		</>
	);
}

ProjectCard.propTypes = {
	project: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
	activeCategory: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
		.isRequired,
};
