
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
	CodepenIcon,
	WebhookIcon,
	ActivityIcon,
	MobileIcon,
} from "./icons";

const skillCategories = {
	manufacturing: {
		title: "Manufacturing & Production",
		icon: CodepenIcon,
		description: "Production processes, packaging, and workplace operations",
		primaryTitle: "Operational Skills",
		secondaryTitle: "Workplace Competencies",
		skills: [
			"Production Operations",
			"Product Packaging",
			"Manufacturing Processes",
		],
		competencies: [
			"Teamwork",
			"Work Discipline",
			"Attention to Detail",
		],
	},
	food: {
		title: "Food & Beverage Service",
		icon: WebhookIcon,
		description: "Food preparation, service operations, and customer experience",
		primaryTitle: "Service Operations",
		secondaryTitle: "Service Competencies",
		skills: [
			"Food Preparation",
			"Food & Beverage Operations",
			"Food Service Sanitation",
		],
		competencies: [
			"Customer Service",
			"Teamwork",
			"Interpersonal Communication",
		],
	},
	sales: {
		title: "Sales & Commercial",
		icon: ActivityIcon,
		description: "Sales activities, product knowledge, and business communication",
		primaryTitle: "Sales Competencies",
		secondaryTitle: "Commercial Competencies",
		skills: [
			"Sales & Marketing",
			"Sales Operations",
			"Product Knowledge",
			"Agricultural Product Knowledge",
		],
		competencies: [
			"Sales Negotiation",
			"Interpersonal Communication",
			"Customer Relations",
		],
	},
	administration: {
		title: "Administration & Creative",
		icon: MobileIcon,
		description: "Administrative assistance and creative visual development",
		primaryTitle: "Administrative Competencies",
		secondaryTitle: "Creative Competencies",
		skills: [
			"Personal Assistance",
			"Administrative Support",
			"Time Management",
			"Problem Solving",
		],
		competencies: [
			"Graphic Design",
			"Editing",
			"Typography",
		],
	},
};

function SkillCard({ skill, isSelected, onClick }) {
	const Icon = skill.icon;

	return (
		<motion.div
			onClick={onClick}
			className={`relative cursor-pointer group p-6 rounded-2xl border transition-all duration-300 ${
				isSelected
					? "bg-purple-600/25 border-purple-400/70 border-2 shadow-lg shadow-purple-950/40"
					: "bg-purple-950/50 border-purple-400/20 hover:bg-purple-900/60 hover:border-purple-400/50"
			}`}
			whileHover={{ scale: 1.03 }}
			whileTap={{ scale: 0.97 }}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3 }}
		>
			{!isSelected && (
				<div className="absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-50 bg-gradient-to-r from-purple-500/20 to-purple-800/20 blur-xl" />
			)}

			<div className="relative z-10 flex flex-col items-center text-center space-y-4">
				<div
					className={`p-4 rounded-xl transition-all duration-300 ${
						isSelected
							? "bg-purple-500/40"
							: "bg-purple-500/15 group-hover:bg-purple-500/30"
					}`}
				>
					<Icon className="w-8 h-8 text-white" />
				</div>

				<div>
					<h3 className="font-semibold text-white text-lg mb-2">
						{skill.title}
					</h3>
					<p className="text-gray-300 text-sm leading-relaxed">
						{skill.description}
					</p>
				</div>
			</div>
		</motion.div>
	);
}

const tagVariants = {
	hidden: { opacity: 0, scale: 0.8 },
	show: { opacity: 1, scale: 1 },
};

function SkillDetails({ selectedSkill }) {
	if (!selectedSkill) return null;

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -20 }}
			transition={{ duration: 0.5 }}
			className="mt-12 space-y-8"
		>
			{/* First Skills Panel */}
			<motion.div
				className="bg-purple-950/60 border border-purple-400/30 rounded-2xl p-8 shadow-sm"
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.2 }}
			>
				<h3 className="text-2xl font-semibold text-white mb-6 text-center">
					{selectedSkill.primaryTitle}
				</h3>

				<motion.div
					key={selectedSkill.title}
					className="flex flex-wrap justify-center gap-3"
					variants={{
						hidden: {},
						show: {
							transition: {
								staggerChildren: 0.04,
								delayChildren: 0.1,
							},
						},
					}}
					initial="hidden"
					animate="show"
				>
					{selectedSkill.skills.map((skill) => (
						<motion.span
							key={skill}
							variants={tagVariants}
							className="px-4 py-2 rounded-full text-sm font-medium bg-purple-600/50 text-white shadow-md border border-purple-400/50"
						>
							{skill}
						</motion.span>
					))}
				</motion.div>
			</motion.div>

			{/* Second Skills Panel */}
			<motion.div
				className="bg-purple-950/50 border border-purple-400/20 rounded-2xl p-8"
				initial={{ opacity: 0, x: 50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.4 }}
			>
				<h3 className="text-xl font-medium text-purple-200 mb-6 text-center uppercase tracking-wider">
					{selectedSkill.secondaryTitle}
				</h3>

				<motion.div
					key={selectedSkill.title + "-competencies"}
					className="flex flex-wrap justify-center gap-3"
					variants={{
						hidden: {},
						show: {
							transition: {
								staggerChildren: 0.04,
								delayChildren: 0.1,
							},
						},
					}}
					initial="hidden"
					animate="show"
				>
					{selectedSkill.competencies.map((item) => (
						<motion.span
							key={item}
							variants={tagVariants}
							className="px-4 py-1.5 bg-purple-900/60 border border-purple-400/20 rounded-lg text-gray-200 text-xs font-medium"
						>
							{item}
						</motion.span>
					))}
				</motion.div>
			</motion.div>
		</motion.div>
	);
}

export default function Skills() {
	const [selectedCategory, setSelectedCategory] = useState("manufacturing");

	return (
		<div className="relative">
			<div className="mx-auto container px-6 py-20">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center space-y-4 mb-16"
				>
					<h2 className="text-5xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
						Skills & Expertise
					</h2>

					<p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
						Explore my professional skills and competencies across different
						fields. Select a category to discover my areas of expertise.
					</p>
				</motion.div>

				{/* Skill Categories Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
					{Object.entries(skillCategories).map(([key, skill], index) => (
						<motion.div
							key={key}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}
						>
							<SkillCard
								skill={skill}
								isSelected={selectedCategory === key}
								onClick={() => setSelectedCategory(key)}
							/>
						</motion.div>
					))}
				</div>

				{/* Dynamic Skill Details */}
				<AnimatePresence mode="wait">
					<SkillDetails
						key={selectedCategory}
						selectedSkill={skillCategories[selectedCategory]}
					/>
				</AnimatePresence>
			</div>
		</div>
	);
}
