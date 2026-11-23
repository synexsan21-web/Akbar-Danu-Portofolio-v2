
"use client";

import Hr from "@/components/Hr";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const experiences = [
	{
		id: 1,
		startDate: "Jun 2025",
		endDate: "Present",
		company: "Badan Gizi Nasional",
		position: "Personal Assistant",
		type: "Freelance",
		location: "East Java, Indonesia · Hybrid",
		description:
			"Support administrative and operational activities for the Free Nutritious Meals (MBG) program, including schedule coordination, documentation, operational reporting, and team communication.",
		skills: [
			"Administrative Support",
			"Time Management",
			"Problem Solving",
			"Team Coordination",
		],
	},
	{
		id: 2,
		startDate: "Dec 2023",
		endDate: "Present",
		company: "PT. NVIDIA PRATAMA KHATULISTIWA",
		position: "Distributor / Sales – Non-Subsidized Fertilizer",
		type: "Freelance",
		location: "Bojonegoro, East Java, Indonesia · Remote",
		description:
			"Handle sales and distribution activities for non-subsidized fertilizer products, supported by product knowledge, customer communication, sales negotiation, and coordination of distribution needs.",
		skills: [
			"Sales & Marketing",
			"Sales Negotiation",
			"Product Knowledge",
			"Agricultural Products",
		],
	},
	{
		id: 3,
		startDate: "Nov 2024",
		endDate: "Feb 2025",
		company: "PT Emados Kebab Indonesia",
		position: "Waiter",
		type: "Part-time",
		location: "Bojonegoro, East Java, Indonesia · On-site",
		description:
			"Supported daily food and beverage operations at the outlet, including food preparation, customer service, and maintaining smooth service activities.",
		skills: [
			"Food & Beverage Operations",
			"Food Preparation",
			"Customer Service",
			"Teamwork",
		],
	},
	{
		id: 4,
		startDate: "Apr 2023",
		endDate: "Sep 2023",
		company: "Cafe Bell Polda Jatim",
		position: "Cook Helper / Service Crew",
		type: "Full-time",
		location: "Gayungan, Surabaya, East Java, Indonesia · On-site",
		description:
			"Assisted kitchen and customer service operations, including food preparation, food service sanitation, and teamwork during daily activities.",
		skills: [
			"Food Service Sanitation",
			"Customer Service",
			"Food Preparation",
			"Teamwork",
		],
	},
	{
		id: 5,
		startDate: "Sep 2022",
		endDate: "Feb 2023",
		company: "Pabrik Skincare Gresik",
		position: "Factory Worker",
		type: "Full-time",
		location: "Kedamean, Gresik, East Java, Indonesia · On-site",
		description:
			"Supported skincare manufacturing and product packaging activities while maintaining workplace discipline, accuracy, and coordination with team members.",
		skills: [
			"Manufacturing Operations",
			"Product Packaging",
			"Workplace Teamwork",
			"Work Discipline",
			"Attention to Detail",
		],
	},
];

function Title() {
	return (
		<div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
			<div className="flex justify-center items-center flex-col my-5 self-start">
				<Hr variant="long" />
				<motion.h1
					className="text-3xl font-bold mt-3 text-white"
					initial={{ opacity: 0, x: -200 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.7, type: "spring" }}
				>
					Professional Experience
				</motion.h1>
			</div>
		</div>
	);
}

function TimelineCard({ experience, index, isEven }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: -20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ delay: index * 0.15, duration: 0.5 }}
			className={`flex ps-10 md:ps-0 ${
				isEven
					? "md:justify-center md:translate-x-68"
					: "md:justify-center md:-translate-x-68"
			} justify-center mb-4`}
		>
			<div className="bg-gradient-to-r from-purple-950 to-purple-800 text-white px-12 py-3 rounded-xl shadow-lg border border-purple-400/40 min-w-max">
				<div className="flex items-center justify-center gap-6">
					<div className="text-center">
						<div className="text-sm font-bold">
							{experience.startDate}
						</div>
						<div className="text-xs text-purple-200">Start</div>
					</div>

					<div className="w-px h-8 bg-purple-400/50"></div>

					<div className="text-center">
						<div className="text-sm font-bold">
							{experience.endDate}
						</div>
						<div className="text-xs text-purple-200">End</div>
					</div>

					<div className="w-px h-8 bg-purple-400/50"></div>

					<div className="text-center">
						<div className="text-sm font-medium text-purple-200">
							{experience.location}
						</div>
						<div className="text-xs text-purple-200">Location</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

function ExperienceCard({ experience, index, isEven }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ delay: index * 0.2, duration: 0.6 }}
			className={`relative group ${
				isEven ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12"
			} md:w-1/2`}
		>
			<div className="bg-purple-950/60 backdrop-blur-sm border border-purple-400/20 rounded-2xl p-6 shadow-lg hover:shadow-purple-900/40 hover:bg-purple-900/70 hover:border-purple-400/40 transition-all duration-300 ml-12 md:ml-0">
				<div className="mb-4">
					<h3 className="font-bold text-xl text-white mb-1">
						{experience.company}
					</h3>

					<h4 className="font-medium text-lg text-purple-200">
						{experience.position}
						<span className="text-sm font-normal text-purple-300/70 ml-2">
							• {experience.type}
						</span>
					</h4>
				</div>

				<p className="text-gray-300 text-justify leading-relaxed mb-4">
					{experience.description}
				</p>

				<div className="flex flex-wrap gap-2">
					{experience.skills.map((skill, idx) => (
						<span
							key={idx}
							className="bg-purple-800/50 hover:bg-purple-700/70 border border-purple-400/30 text-purple-100 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm hover:scale-105"
						>
							{skill}
						</span>
					))}
				</div>
			</div>
		</motion.div>
	);
}

function Wrapper({ children }) {
	return (
		<div className="mx-auto container px-6 py-10">
			<div className="flex justify-center items-center flex-col">
				{children}
			</div>
		</div>
	);
}

export default function Experience() {
	const [showAll, setShowAll] = useState(false);
	const displayedExperiences = showAll
		? experiences
		: experiences.slice(0, 3);

	return (
		<>
			<Title />

			<Wrapper>
				<div className="relative w-full max-w-6xl mx-auto">
					<div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-600 via-purple-400 to-transparent h-full"></div>

					<div className="md:hidden absolute left-0 w-1 bg-gradient-to-b from-purple-600 via-purple-400 to-transparent h-full"></div>

					<div className="space-y-12 md:space-y-16 relative">
						<AnimatePresence>
							{displayedExperiences.map((experience, index) => (
								<div key={experience.id} className="relative">
									<TimelineCard
										experience={experience}
										index={index}
										isEven={index % 2 === 1}
									/>

									<div
										className={`absolute w-6 h-6 bg-purple-500 rounded-full border-4 border-purple-950 shadow-lg shadow-purple-500/30 z-30
										md:left-1/2 md:-translate-x-1/2 md:top-4
										left-0 -translate-x-1/2 top-5`}
									/>

									<ExperienceCard
										experience={experience}
										index={index}
										isEven={index % 2 === 1}
									/>
								</div>
							))}
						</AnimatePresence>
					</div>

					{experiences.length > 3 && (
						<motion.div
							className="flex justify-center mt-12"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.5 }}
						>
							<button
								onClick={() => setShowAll(!showAll)}
								className="bg-purple-700/50 hover:bg-purple-600/70 border border-purple-400/40 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-900/30 flex items-center gap-2"
							>
								{showAll ? (
									<>
										Show Less
										<svg
											className="w-4 h-4 transform rotate-180"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M19 9l-7 7-7-7"
											/>
										</svg>
									</>
								) : (
									<>
										View More Experience
										<svg
											className="w-4 h-4"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M19 9l-7 7-7-7"
											/>
										</svg>
									</>
								)}
							</button>
						</motion.div>
					)}

					{!showAll && (
						<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-950 to-transparent pointer-events-none"></div>
					)}
				</div>
			</Wrapper>
		</>
	);
}
