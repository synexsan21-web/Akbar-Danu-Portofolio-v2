
import { motion } from "framer-motion";
import PropTypes from "prop-types";

export default function Hr({ variant }) {
	return (
		<>
			{variant === "long" ? (
				<>
					<motion.div
						className="bg-gradient-to-r from-purple-400 to-purple-700 w-28 h-1 rounded-full mb-3 self-start shadow-sm shadow-purple-500/40"
						initial={{
							opacity: 0,
							x: -100,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						transition={{
							delay: 0.3,
							type: "spring",
						}}></motion.div>

					<motion.div
						className="bg-gradient-to-r from-purple-400 to-purple-700 w-28 h-1 rounded-full shadow-sm shadow-purple-500/40"
						initial={{
							opacity: 0,
							x: 200,
						}}
						whileInView={{
							opacity: 1,
							x: -50,
						}}
						transition={{
							delay: 0.4,
							type: "spring",
						}}></motion.div>
				</>
			) : (
				<div className="flex justify-center items-center flex-col my-5">
					<motion.div
						className="bg-gradient-to-r from-purple-400 to-purple-700 w-20 h-1 rounded-full mb-2 shadow-sm shadow-purple-500/40"
						initial={{
							opacity: 0,
							x: -45,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						transition={{
							delay: 0.2,
							type: "spring",
						}}></motion.div>

					<motion.div
						className="bg-gradient-to-r from-purple-400 to-purple-700 w-20 h-1 rounded-full shadow-sm shadow-purple-500/40"
						initial={{
							opacity: 0,
							x: 150,
						}}
						whileInView={{
							opacity: 1,
							x: 40,
						}}
						transition={{
							delay: 0.3,
							type: "spring",
						}}></motion.div>
				</div>
			)}
		</>
	);
}

Hr.propTypes = {
	variant: PropTypes.oneOf(["short", "long"]),
};

Hr.defaultProps = {
	variant: "short",
};
