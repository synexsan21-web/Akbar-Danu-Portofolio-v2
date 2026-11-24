
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMedal,
	faGraduationCap,
	faAward,
	faChevronDown,
	faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Me4 from "@/public/image/me4.jpeg";
import Me5 from "@/public/image/me5.jpg";
import Me6 from "@/public/image/me6.jpg";

function Wrapper({ children }) {
	return (
		<div className="mx-auto container gap-10 p-10 grid grid-cols-1 my-10">
			<motion.div
				className="flex justify-center items-start flex-col mb-5"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.3,
					duration: 0.8,
					type: "spring",
					stiffness: 100,
				}}
			>
				{children}
			</motion.div>
		</div>
	);
}

export default function Education() {
	const [isExpanded, setIsExpanded] = useState(false);

	const certificationsByYear = {
		2026: [
			{
				icon: faGraduationCap,
				title: "Capital Market School",
				subtitle: "Sekolah Pasar Modal",
				organizer: "Organizer: PT Bursa Efek Indonesia",
				details: "Activity: Sekolah Pasar Modal",
				date: "25 June 2026",
				location: "Surabaya, Indonesia",
				color: "from-blue-500 to-purple-600",
			},
		],
		2025: [
			{
				icon: faMedal,
				title: "Second Place",
				subtitle: "Retail Department Video Competition",
				organizer:
					"Organizer: Himpunan Mahasiswa Manajemen Ritel, Universitas Bojonegoro",
				details:
					"Event: Manajemen Ritel Connect Vol. 1",
				achievement: "Achievement: 2nd Place in Department Video Competition",
				date: "10 July 2025",
				color: "from-yellow-400 to-orange-500",
			},
			{
				icon: faAward,
				title: "Public Speaking Training",
				subtitle: "Student Advance Program",
				organizer: "Organizer: Universitas Bojonegoro",
				details: "Program: Student Advance Program",
				period: "Even Semester 2024/2025",
				assessment: "Assessment: Satisfactory",
				date: "Certificate issued: 29 August 2025",
				color: "from-blue-500 to-purple-600",
			},
			{
				icon: faAward,
				title: "Active Participant",
				subtitle: "Manajemen Ritel Connect Vol. 1",
				organizer:
					"Organizer: Himpunan Mahasiswa Manajemen Ritel, Universitas Bojonegoro",
				details:
					"Activity: Retail Management Study Program Orientation 2024/2025",
				date: "4–6 January 2025",
				location: "Bojonegoro, Indonesia",
				color: "from-amber-500 to-yellow-600",
			},
			{
				icon: faGraduationCap,
				title: "Faculty Orientation Participant",
				subtitle: "Orientasi Studi Fakultas Ekonomi II",
				organizer:
					"Organizer: Badan Eksekutif Mahasiswa Fakultas Ekonomi, Universitas Bojonegoro",
				details:
					"Activity: Faculty of Economics Orientation II",
				period: "Event period: 5–6 October 2024",
				date: "Certificate issued: 28 June 2025",
				color: "from-purple-500 to-indigo-600",
			},
		],
	};

	const allCertifications = Object.entries(certificationsByYear)
		.sort(([a], [b]) => parseInt(b) - parseInt(a))
		.flatMap(([year, certifications]) =>
			certifications.map((certification) => ({
				...certification,
				year,
			}))
		);

	const visibleCertifications = isExpanded
		? allCertifications
		: allCertifications.slice(0, 3);

	const hasMoreCertifications = allCertifications.length > 3;

	return (
		<Wrapper>
			<section className="grid gap-8 md:gap-12">
				{/* Header */}
				<motion.div
					className="text-center space-y-2"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">
						Education
					</h1>
					<p className="text-gray-300 max-w-[800px] mx-auto">
						Get to know more about my educational background and professional development.
					</p>
				</motion.div>

				{/* Main Content */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* Education Section */}
					<motion.div
						className="px-5"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<div className="font-medium text-lg mb-4 text-purple-300">
							2024 - Present
						</div>

						<div>
							<h2 className="font-semibold text-xl text-white">
								Universitas Bojonegoro
							</h2>

							<h3 className="text-md font-normal mb-3 text-purple-200">
								S1 Manajemen Ritel | Fakultas Ekonomi dan Bisnis
							</h3>

							<div className="gap-4 mb-4 flex items-stretch md:h-[300px] xl:h-[400px]">
								<div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
									<Image
										src={Me5}
										width={400}
										height={225}
										alt="University"
										className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
									/>
								</div>

								<div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
									<Image
										src={Me4}
										width={400}
										height={225}
										alt="University"
										className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
									/>
								</div>

								<div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
									<Image
										src={Me6}
										width={400}
										height={225}
										alt="University"
										className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
									/>
								</div>
							</div>

							<div className="flex items-center gap-2">
								<p className="text-gray-300 text-justify title text-lg">
									I am currently pursuing my Bachelor's
									degree in{" "}
									<span className="text-purple-200 font-medium">
										Retail Management at Universitas
										Bojonegoro
									</span>
									. My academic journey focuses on
									understanding business operations, retail
									management, marketing strategies, and
									consumer behavior.
									<br />
									<br />
									Throughout my studies, I have developed
									knowledge in{" "}
									<span className="text-purple-200 font-medium">
										retail operations, inventory management,
										supply chain, sales, and digital
										marketing
									</span>
									. These subjects have helped me understand
									how businesses operate, adapt to market
									needs, and create value for customers.
									<br />
									<br />
									I aim to apply the knowledge and skills
									gained during my education to real-world
									business environments while continuing to
									grow professionally.
								</p>
							</div>

							<div className="flex flex-wrap gap-2 mt-4 text-sm">
								<div className="bg-purple-700/40 border border-purple-400/30 text-purple-100 px-3 py-1 rounded-2xl">
									Retail Management
								</div>
								<div className="bg-purple-700/40 border border-purple-400/30 text-purple-100 px-3 py-1 rounded-2xl">
									Business Management
								</div>
							</div>
						</div>
					</motion.div>

					{/* Certifications Section */}
					<motion.div
						className="flex flex-col justify-start px-5 md:px-0"
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
						<h2 className="font-semibold text-xl mt-7 text-white">
							Certifications
						</h2>

						<p className="text-md font-normal mb-3 md:mb-6 text-gray-300">
							Certificates, training programs, and academic achievements.
						</p>

						{/* Certifications Container */}
						<div className="relative">
							<div className="space-y-4">
								<AnimatePresence>
									{visibleCertifications.map(
										(certification, index) => (
											<motion.div
												key={`${certification.year}-${index}`}
												className="group"
												initial={{
													opacity: 0,
													y: 20,
												}}
												animate={{
													opacity: 1,
													y: 0,
												}}
												exit={{
													opacity: 0,
													y: -20,
												}}
												transition={{
													duration: 0.5,
													delay: index * 0.05,
												}}
											>
												{/* Year Indicator */}
												{index === 0 ||
												visibleCertifications[index - 1]
													?.year !==
													certification.year ? (
													<div className="flex items-center gap-3 mb-3 mt-2">
														<div className="w-8 h-8 rounded-full bg-purple-800/70 border border-purple-400/30 flex items-center justify-center">
															<span className="text-xs font-bold text-purple-100">
																{
																	certification.year
																}
															</span>
														</div>

														<div className="flex-1 h-px bg-gradient-to-r from-purple-400/50 to-transparent"></div>
													</div>
												) : null}

												{/* Certification Card */}
												<div className="bg-purple-950/60 backdrop-blur-md border border-purple-400/20 rounded-2xl p-4 shadow-lg hover:bg-purple-900/70 hover:border-purple-400/40 transition-all duration-300 hover:shadow-purple-900/40 grayscale hover:grayscale-0">
													<div className="flex items-start gap-4">
														<div
															className={`aspect-square w-10 shrink-0 rounded-full bg-gradient-to-r ${certification.color} flex items-center justify-center text-white transition-all duration-300`}
														>
															<FontAwesomeIcon
																icon={
																	certification.icon
																}
																className="text-white h-5 w-5"
															/>
														</div>

														<div className="min-w-0">
															<h3 className="font-medium text-white">
																{
																	certification.title
																}
															</h3>

															<p className="text-sm text-gray-300">
																{
																	certification.subtitle
																}
															</p>

															<p className="text-xs text-gray-400 mt-2">
																{
																	certification.organizer
																}
															</p>

															<p className="text-xs text-purple-200 mt-1">
																{
																	certification.details
																}
															</p>

															{certification.achievement && (
																<p className="text-xs text-purple-200 mt-1">
																	{certification.achievement}
																</p>
															)}

															{certification.period && (
																<p className="text-xs text-purple-200 mt-1">
																	{certification.period}
																</p>
															)}

															{certification.assessment && (
																<p className="text-xs text-purple-200 mt-1">
																	{certification.assessment}
																</p>
															)}

															<div className="text-xs text-purple-300 mt-2">
																{certification.date}
															</div>

															{certification.location && (
																<div className="text-xs text-gray-400 mt-1">
																	{certification.location}
																</div>
															)}
														</div>
													</div>
												</div>
											</motion.div>
										)
									)}
								</AnimatePresence>
							</div>

							{/* Bottom Overlay */}
							{!isExpanded && hasMoreCertifications && (
								<div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-purple-950 via-purple-950/70 to-transparent pointer-events-none"></div>
							)}

							{/* Expand / Collapse Button */}
							{hasMoreCertifications && (
								<motion.div
									className="flex justify-center mt-6"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.5 }}
								>
									<button
										onClick={() =>
											setIsExpanded(!isExpanded)
										}
										className="flex items-center gap-2 px-6 py-3 bg-purple-700/40 backdrop-blur-md border border-purple-400/40 rounded-full hover:bg-purple-600/60 transition-all duration-300 text-sm font-medium text-white shadow-lg hover:shadow-purple-900/40"
									>
										<span>
											{isExpanded
												? "Show Less"
												: `Show ${allCertifications.length - 3} More`}
										</span>

										<FontAwesomeIcon
											icon={
												isExpanded
													? faChevronUp
													: faChevronDown
											}
											className="h-3 w-3 transition-transform duration-300"
										/>
									</button>
								</motion.div>
							)}
						</div>
					</motion.div>
				</div>
			</section>
		</Wrapper>
	);
}
