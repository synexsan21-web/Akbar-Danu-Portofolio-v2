const Button = ({ children, variation, ...props }) => (
	<button
		{...props}
		className={`title mr-3 rounded-2xl px-8 py-2 shadow-md backdrop-blur-md transition duration-300 ease-in-out ${
			variation === "primary"
				? "bg-purple-600/30 hover:bg-purple-600/50 border-purple-400/40 hover:border-purple-300 border-2 text-white hover:text-white box-border"
				: "bg-purple-600/10 border-2 border-purple-400/40 text-purple-100 hover:bg-purple-600/40 hover:text-white hover:border-purple-300 box-border"
		}`}>
		{children}
	</button>
);

export default Button;
